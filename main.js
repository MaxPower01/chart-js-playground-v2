const chartContainer = document.querySelector(".chart-container");

const btnStart = document.getElementById("btn-start");
const btnPause = document.getElementById("btn-pause");
const btnReset = document.getElementById("btn-reset");
const btnNext = document.getElementById("btn-next");
const btnPrevious = document.getElementById("btn-previous");

const progressBarContainer = document.querySelector(".progress-bar-container");
const progressBar = document.querySelector(".progress-bar");
const progressBarFilledPart = document.querySelector(
  ".progress-bar__filled-part"
);
// transition: max-width 0.5s ease-in-out;
progressBarFilledPart.style.transition = `max-width ${CHART_UPDATE_DELAY}ms linear`;

const datasets = getDatasets();

const chartId = "chart";
let chart, canvas, ctx;
let afterDatasetsUpdateCalled = false;

function initializeChart() {
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
    chart.options.animations.x.duration = X_SCALE_ANIMATION_DURATION;
  }, 250);
}

let overlayInterval = null;
let animationInterval = null;

function updateOverlayElements(chart, datasetIndex) {
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
        `#${chartId}-custom-element-${datapoint.normalizedName}`
      );
      if (!customElement) return;

      const valueElement = customElement.querySelector(".value");
      if (!valueElement) return;

      const { transitionValues } = datasets[datasetIndex].data[index];

      // if (datapoint.rank > DISPLAY_COUNT) return;
      // if (previousDatapoint && previousDatapoint.rank > DISPLAY_COUNT) return;
      // if (nextDatapoint && nextDatapoint.rank > DISPLAY_COUNT) return;

      let totalDelay = 0;
      const delayIncrement = CHART_UPDATE_DELAY / TRANSITION_VALUES_COUNT;

      transitionValues.forEach((transitionValue, transitionValueIndex) => {
        totalDelay += delayIncrement;

        setTimeout(() => {
          valueElement.textContent = parseValue(transitionValue);
        }, totalDelay);

        const isLastTransitionValue =
          transitionValueIndex == transitionValues.length - 1;

        if (isLastTransitionValue && overlayInterval != null) {
          clearInterval(overlayInterval);
          overlayInterval = null;
          return;
        }
      });
    }, CHART_UPDATE_DELAY);
  });
}

let currentDatasetIndex = 0;

updateOverlayElements(chart, currentDatasetIndex);
let resizeCallbackIsCalled = false;
window.addEventListener("resize", (chart) => {
  if (resizeCallbackIsCalled) return;
  resizeCallbackIsCalled = true;
  const customElements = document.querySelectorAll(`.custom-element`);
  setTimeout(() => {
    if (customElements) {
      customElements.forEach((customElement) => {
        customElement.classList.add("no-transitions");
        const innerContentElement =
          customElement.querySelector(".inner-content");
        if (innerContentElement) {
          innerContentElement.classList.add("no-transitions");
        }
      });
    }
  }, 100);
  setTimeout(() => {
    updateOverlayElements(chart, currentDatasetIndex);
    if (customElements) {
      customElements.forEach((customElement) => {
        customElement.classList.add("no-transitions");
        const innerContentElement =
          customElement.querySelector(".inner-content");
        if (innerContentElement) {
          innerContentElement.classList.add("no-transitions");
        }
      });
    }
    resizeCallbackIsCalled = false;
  }, 150);
});

const updateChart = () => {
  const chartData = chart.config.data;
  const currentDataset = chartData.datasets[0];
  const nextDataset = datasets[currentDatasetIndex + 1];

  const newLabels = [];
  const newBackgroundColor = [];
  const newBorderColor = [];

  let mergedData = currentDataset.data
    .map((datapoint, i) => {
      const nextDatapoint = nextDataset.data.find(
        (nextDatapoint) => nextDatapoint.name == datapoint.name
      );
      return {
        labels: chartData.labels[i],
        dataPoint: currentDataset.data[i],
        nextDatapoint,
        backgroundColor: currentDataset.backgroundColor[i],
        borderColor: currentDataset.borderColor[i],
      };
    })
    .sort((a, b) => {
      return a.nextDatapoint.rank - b.nextDatapoint.rank;
    });

  for (let i = 0; i < mergedData.length; i++) {
    const { labels, nextDatapoint, backgroundColor, borderColor } =
      mergedData[i];
    newLabels.push(`${nextDatapoint.y}`);
    newBackgroundColor.push(nextDatapoint.backgroundColor);
    newBorderColor.push(nextDatapoint.borderColor);
    const correspondingDataPoint = chart.config.data.datasets[0].data.find(
      (dataPoint) => dataPoint.y == nextDatapoint.y
    );
    correspondingDataPoint.x = nextDatapoint.x;
  }

  chart.config.data.datasets[0].borderColor = newBorderColor;
  chart.config.data.datasets[0].backgroundColor = newBackgroundColor;
  chart.config.data.labels = newLabels;

  chart.update("active");
};

dates.forEach((date, index) => {
  const markerContainer = document.createElement("div");
  markerContainer.classList.add("dataset-marker-container");
  markerContainer.style.position = "absolute";
  markerContainer.style.left = `${(index / (dates.length - 1)) * 100}%`;
  markerContainer.style.top = "50%";
  markerContainer.style.width = `${progressBar.clientHeight * 4}px`;
  markerContainer.style.height = `${progressBar.clientHeight * 4}px`;
  markerContainer.style.borderRadius = "999px";
  markerContainer.style.backgroundColor = "transparent";
  markerContainer.style.transform = "translate(-50%, -50%)";
  markerContainer.style.display = "flex";
  markerContainer.style.justifyContent = "center";
  markerContainer.style.alignItems = "center";
  markerContainer.style.cursor = "pointer";
  markerContainer.style.zIndex = "1";
  markerContainer.setAttribute("data-datasetindex", index);
  progressBarContainer.appendChild(markerContainer);

  const marker = document.createElement("div");
  marker.classList.add("real-dataset-marker");
  marker.style.height = `${progressBar.clientHeight / 2}px`;
  marker.style.width = `${progressBar.clientHeight / 2}px`;
  marker.style.borderRadius = "999px";
  marker.style.backgroundColor = "rgba(255,255,255,0.75)";
  marker.style.zIndex = "1";
  markerContainer.appendChild(marker);
});

function dispatchChartAction(action) {
  chartContainer.dispatchEvent(
    new CustomEvent("chart-action", {
      detail: {
        action,
      },
    })
  );
}

btnStart.addEventListener("click", () => {
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

let chartState = "ready";

chartContainer.addEventListener("chart-action", (e) => {
  const { action } = e.detail;
  if (action == "init") {
    btnStart.disabled = false;
    btnPause.disabled = true;
    btnReset.disabled = true;
    btnNext.disabled = false;
    btnPrevious.disabled = true;
    initializeChart();
    return;
  }

  if (action == "play") {
    if (chartState == "playing") return;
    chartState = "playing";
    btnStart.disabled = true;
    btnPause.disabled = false;
    btnReset.disabled = true;
    btnNext.disabled = true;
    btnPrevious.disabled = true;
    updateChart();
    currentDatasetIndex++;
    animationInterval = setInterval(() => {
      if (currentDatasetIndex >= datasets.length - 1) {
        clearInterval(animationInterval);
        return;
      }
      updateChart();
      currentDatasetIndex++;
    }, CHART_UPDATE_DELAY);
    return;
  }

  if (action == "pause") {
    if (chartState == "paused") return;
    chartState = "paused";
    btnStart.disabled = false;
    btnPause.disabled = true;
    btnReset.disabled = false;
    btnNext.disabled = false;
    btnPrevious.disabled = false;
    clearInterval(animationInterval);
    return;
  }

  if (action == "reset") {
    if (chartState == "ready" || chartState == "playing") return;
    chartState = "ready";
    clearInterval(animationInterval);
    currentDatasetIndex = 0;
    initializeChart();
    return;
  }

  if (action == "next") {
    if (chartState == "playing") return;
    if (currentDatasetIndex >= datasets.length - 1) {
      return;
    }
    updateChart();
    currentDatasetIndex++;
    if (currentDatasetIndex == datasets.length - 1) {
      chartState = "ready";
      btnStart.disabled = true;
      btnPause.disabled = true;
      btnReset.disabled = true;
      btnNext.disabled = true;
      btnPrevious.disabled = false;
    } else {
      chartState = "ready";
      btnStart.disabled = false;
      btnPause.disabled = true;
      btnReset.disabled = true;
      btnNext.disabled = false;
      btnPrevious.disabled = false;
    }
    return;
  }

  if (action == "previous") {
    if (chartState == "playing") return;
    if (currentDatasetIndex > 0) {
      currentDatasetIndex--;
      updateChart();
    }
    if (currentDatasetIndex <= 0) {
      chartState = "ready";
      btnStart.disabled = false;
      btnPause.disabled = true;
      btnReset.disabled = true;
      btnNext.disabled = false;
      btnPrevious.disabled = true;
    } else {
      chartState = "ready";
      btnStart.disabled = false;
      btnPause.disabled = true;
      btnReset.disabled = true;
      btnNext.disabled = false;
      btnPrevious.disabled = false;
    }
    return;
  }
});

dispatchChartAction("init");
