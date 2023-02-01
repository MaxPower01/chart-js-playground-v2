const chartContainer = document.querySelector(".chart-container");

const btnPlay = document.getElementById("btn-play");
const btnPause = document.getElementById("btn-pause");
const btnReset = document.getElementById("btn-reset");
const btnNext = document.getElementById("btn-next");
const btnPrevious = document.getElementById("btn-previous");
const btnUp = document.getElementById("btn-up");
const btnUpFast = document.getElementById("btn-up-fast");
const btnDown = document.getElementById("btn-down");
const btnDownFast = document.getElementById("btn-down-fast");

const progressBarContainer = document.querySelector(".progress-bar-container");
const progressBar = document.querySelector(".progress-bar");
const progressBarFilledPart = document.querySelector(
  ".progress-bar__filled-part"
);

let chartControlsState = {
  btnPlay: {
    disabled: false,
  },
  btnPause: {
    disabled: false,
  },
  btnReset: {
    disabled: false,
  },
  btnNext: {
    disabled: false,
  },
  btnPrevious: {
    disabled: false,
  },
  inputAnimationSpeed: {
    disabled: false,
  },
};

const inputAnimationSpeed = document.getElementById("animation-speed");

let datasets;

/**
 * Chart state can be: "unready", "ready", "playing", "paused", "finished"
 */
let state = "unready";
let lastDispatchedActions = [];

function getLastDispatchedAction(count = 1) {
  if (!lastDispatchedActions.length) return null;
  if (count == 1)
    return lastDispatchedActions[lastDispatchedActions.length - 1];
  if (count > lastDispatchedActions.length) return null;
  return lastDispatchedActions.slice(-count);
}

const chartId = "chart";
let chart, canvas, ctx;

let afterDatasetsUpdateWasCalled = false;

let overlayInterval = null;
let animationInterval = null;

let currentDatasetIndex = 0;
let resizeCallbackIsCalled = false;

function initializeChart() {
  console.log("Initializing chart...");

  if (inputAnimationSpeed) {
    inputAnimationSpeed.value = DEFAULT_CHART_UPDATE_DELAY / 1000;
  }

  datasets = getDatasets();

  canvas = document.getElementById(chartId);
  ctx = canvas.getContext("2d");
  chart = new Chart(ctx, {
    type: "bar",
    data: {
      datasets: [datasets[0]],
      labels: datasets[0].data.map((d) => d.y),
    },
    plugins,
    options: chartOptions,
  });

  setTimeout(() => {
    setTransitionProperties(chart, progressBarFilledPart);
  }, 250);

  updateOverlayElements(chart, currentDatasetIndex);
  setProgressBar();
}

function resetChart() {
  console.log("Resetting chart...");

  if (!chart) {
    initializeChart();
    return;
  }
  currentDatasetIndex = 0;
  clearInterval(animationInterval);
  animationInterval = null;
  overlayInterval = null;
  afterDatasetsUpdateWasCalled = false;
  if (chart) {
    removeTransitionProperties(chart);
    chart.destroy();
  }
  initializeChart();
}

function updateOverlayElements(chart, datasetIndex) {
  console.log("Updating overlay elements...");

  if (!chart || !chart.scales) return;

  const { scales } = chart;

  const isFirstDataset = datasetIndex == 0;
  const isLastDataset = datasetIndex == datasets.length - 1;

  const margin = 4;

  updateLayoutAndContent(
    datasetIndex,
    scales,
    0,
    0,
    chartContainer,
    margin,
    isFirstDataset,
    isLastDataset
  );

  const widthPercent = (datasetIndex / (datasets.length - 1)) * 100;
  progressBarFilledPart.style.maxWidth = `${widthPercent}%`;

  if (isFirstDataset || overlayInterval != null) return;

  overlayInterval = setInterval(() => {
    datasets[datasetIndex].dataForTransition.forEach((datapoint, index) => {
      const customElement = document.querySelector(
        `#${chartId}-overlay-element-${datapoint.normalizedName}`
      );
      if (!customElement) return;

      const valueElement = customElement.querySelector(".value");
      if (!valueElement) return;

      const { transitionValues } = datasets[datasetIndex].data[index];

      // if (datapoint.rank > DISPLAY_COUNT) return;
      // if (previousDatapoint && previousDatapoint.rank > DISPLAY_COUNT) return;
      // if (nextDatapoint && nextDatapoint.rank > DISPLAY_COUNT) return;

      let totalDelay = 0;
      const delayIncrement = chartUpdateDelay / TRANSITION_VALUES_COUNT;

      const isLastTransitionDataset = index == DISPLAY_COUNT - 1;

      transitionValues.forEach((transitionValue, transitionValueIndex) => {
        totalDelay += delayIncrement;

        const isLastTransitionValue =
          transitionValueIndex == transitionValues.length - 1;

        setTimeout(() => {
          valueElement.textContent = parseValue(transitionValue);

          if (isLastTransitionDataset && isLastTransitionValue) {
            switch (getLastDispatchedAction()) {
              case "play":
                break;
              case "pause":
                dispatchChartAction("pause");
                return;
              case "next":
                break;
              case "previous":
                break;
              case "reset":
                break;
              default:
                break;
            }
          }
        }, totalDelay);

        if (isLastTransitionValue && overlayInterval != null) {
          clearInterval(overlayInterval);
          overlayInterval = null;
          return;
        }
      });
    }, chartUpdateDelay);
  });
}

function updateChart() {
  console.log("Updating chart...");

  const chartData = chart.config.data;
  const currentDataset = chartData.datasets[0];
  const nextDataset = datasets[currentDatasetIndex + 1];

  const mergedData = mergeData(currentDataset, nextDataset, chartData);

  const { newLabels, newBorderColor, newBackgroundColor } =
    getNewData(mergedData);

  chart.config.data.datasets[0].borderColor = newBorderColor;
  chart.config.data.datasets[0].backgroundColor = newBackgroundColor;
  chart.config.data.labels = newLabels;

  chart.update("active");
}

btnPlay.addEventListener("click", () => {
  dispatchChartAction("play");
});

btnPause.addEventListener("click", () => {
  dispatchChartAction("pause");
});

btnReset.addEventListener("click", () => {
  dispatchChartAction("reset");
});

btnNext.addEventListener("click", () => {
  dispatchChartAction("next");
});

btnPrevious.addEventListener("click", () => {
  dispatchChartAction("previous");
});

chartContainer.addEventListener("chart-action", (e) => {
  const { action } = e.detail;

  console.log({
    state,
    action,
  });

  switch (action) {
    case "init":
      state = "ready";
      initializeChart();
      break;

    case "play":
      if (state == "playing") break;
      state = "playing";
      updateChart();
      currentDatasetIndex++;
      animationInterval = setInterval(() => {
        if (currentDatasetIndex >= datasets.length - 1) {
          state = "finished";
          clearInterval(animationInterval);
          return;
        }
        updateChart();
        currentDatasetIndex++;
      }, chartUpdateDelay);
      break;

    case "pause":
      if (state == "paused") break;
      const _lastDispatchedActions = getLastDispatchedAction(2);
      if (_lastDispatchedActions[0] == "pause") {
        state = "paused";
      }
      clearInterval(animationInterval);
      break;

    case "reset":
      if (state == "ready" || state == "playing") break;
      state = "ready";
      resetChart();
      break;

    case "next":
      if (state == "playing") break;
      if (currentDatasetIndex >= datasets.length - 1) break;
      state = "playing";
      updateChart();
      currentDatasetIndex++;
      break;

    case "previous":
      if (state == "playing") break;
      state = "playing";
      if (currentDatasetIndex > 0) {
        currentDatasetIndex--;
        updateChart();
      }
      break;

    default:
      break;
  }

  console.log({
    state,
    action,
  });

  const isFirstDataset = currentDatasetIndex == 0;
  const isLastDataset = currentDatasetIndex >= datasets.length - 1;

  switch (state) {
    case "ready":
      chartControlsState.btnPlay.disabled = false;
      chartControlsState.btnPause.disabled = true;
      chartControlsState.btnReset.disabled = true;
      chartControlsState.btnNext.disabled = false;
      chartControlsState.btnPrevious.disabled = true;
      chartControlsState.inputAnimationSpeed.disabled = false;
      break;
    case "playing":
      chartControlsState.btnPlay.disabled = true;
      chartControlsState.btnPause.disabled = false;
      chartControlsState.btnReset.disabled = true;
      chartControlsState.btnNext.disabled = true;
      chartControlsState.btnPrevious.disabled = true;
      chartControlsState.inputAnimationSpeed.disabled = true;
      if (action == "pause") {
        chartControlsState.btnPause.disabled = true;
      }
      break;
    case "paused":
      chartControlsState.btnPlay.disabled = false;
      chartControlsState.btnPause.disabled = true;
      chartControlsState.btnReset.disabled = false;
      chartControlsState.btnNext.disabled = isLastDataset;
      chartControlsState.btnPrevious.disabled = isFirstDataset;
      chartControlsState.inputAnimationSpeed.disabled = false;
      break;
    case "finished":
      chartControlsState.btnPlay.disabled = true;
      chartControlsState.btnPause.disabled = true;
      chartControlsState.btnReset.disabled = false;
      chartControlsState.btnNext.disabled = true;
      chartControlsState.btnPrevious.disabled = isFirstDataset;
      chartControlsState.inputAnimationSpeed.disabled = false;
      break;
    default:
      break;
  }

  updateChartControls();
});

dispatchChartAction("init");

window.addEventListener("resize", (chart) => {
  if (resizeCallbackIsCalled) return;
  resizeCallbackIsCalled = true;
  chartResizedCallback(chart);
});

inputAnimationSpeed.addEventListener("focus", (e) => {
  try {
    e.target.select();
  } catch (error) {
    console.log(error);
  }
  btnPlay.disabled = true;
  btnPause.disabled = true;
  btnReset.disabled = true;
  btnNext.disabled = true;
  btnPrevious.disabled = true;
});

inputAnimationSpeed.addEventListener("keyup", (e) => {
  try {
    if (e.key === "Enter") {
      e.preventDefault();
      inputAnimationSpeed.blur();
    }
  } catch (error) {
    console.log(error);
    inputAnimationSpeed.blur();
  }
});

inputAnimationSpeed.addEventListener("blur", (e) => {
  let { value } = e.target;
  if (!value) {
    e.target.value = 1;
    value = 1;
  }
  if (value > 10) {
    e.target.value = 10;
    value = 10;
  }
  udpateAnimationDuration(chart, value);
  updateChartControls();
});
