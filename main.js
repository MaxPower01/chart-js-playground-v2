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

initializeChart();

let intervalCallbackIsSet = false;
let overlayInterval = null;
let animationInterval = null;

const setOverlayElements = (chart, datasetIndex) => {
  const { ctx, scales } = chart;
  // const chartDomRect = ctx.canvas.getBoundingClientRect();
  // const yTicks = scales.y.ticks;
  // let pixelForValue = 0;
  let tickHeight = 0;
  let height = 0;
  const ADJUSTMENT = 4;
  const ADJUSTMENT_2 = 8;
  let imageWidth = 0;
  const chartContainer = document.querySelector(".chart-container");
  datasets[datasetIndex].data.forEach((dataPoint, index) => {
    // if (index >= DISPLAY_COUNT) return;
    const cssId = `${chartId}-custom-element-${dataPoint.normalizedName}`;
    let customElement = document.querySelector(`#${cssId}`);
    if (!customElement) {
      customElement = document.createElement("div");
      customElement.id = cssId;
      customElement.classList.add("custom-element");
      // customElement.dataset.dataPoint = JSON.stringify(dataPoint);
      chartContainer.appendChild(customElement);
    }
    if (!scales) return;
    const pixelForValue = scales.y.getPixelForValue(index);
    if (index == 0) {
      tickHeight = scales.y.getPixelForValue(index + 1) - pixelForValue;
      height = tickHeight;
      imageWidth = height / 1.75;
    }
    const datapoint = datasets[datasetIndex].data[index];
    const top = pixelForValue;
    const left = scales.x.left;
    const pixelForValueXLeft = scales.x.getPixelForValue(0);
    const pixelForValueXRight = scales.x.getPixelForValue(datapoint.x);
    const width = pixelForValueXRight - pixelForValueXLeft;

    customElement.style.transition = `all ${Y_SCALE_ANIMATION_DURATION}ms linear`;
    customElement.style.top = `${top}px`;
    customElement.style.left = `${left}px`;
    customElement.style.transform = `translateY(-${tickHeight / 2}px)`;
    customElement.style.height = `${height}px`;

    const { value, rank, displayValue, displayName, transitionValues } =
      datapoint;

    customElement.dataset.value = displayValue;

    let nextValue = null;
    if (transitionValues?.length > 0) {
      nextValue = transitionValues[transitionValues.length - 1];
      let nextDisplayValue = nextValue.toString();
      if (nextDisplayValue.length == 2) {
        nextDisplayValue = `${nextDisplayValue}.00`;
      } else if (nextDisplayValue.length == 4) {
        nextDisplayValue = `${nextDisplayValue}0`;
      } else if (nextDisplayValue.length > 5) {
        nextDisplayValue = `${nextDisplayValue.slice(0, 5)}`;
      }
      customElement.dataset.nextValue = nextDisplayValue;
    }

    let innerContentElement = customElement.querySelector(".inner-content");
    if (!innerContentElement) {
      const innerHtml = `
      <div class="inner-content">
      <div class="name">
      ${displayName}
      </div>
      <div class="avatar">
      <img src="${IMAGE_URL}" />
      </div>
      <div class="value">
      ${displayValue}
      </div>
      </div>
      `;
      customElement.innerHTML = innerHtml;
      innerContentElement = customElement.querySelector(".inner-content");
    }

    innerContentElement.style.transition = `max-width ${Y_SCALE_ANIMATION_DURATION}ms linear`;
    innerContentElement.style.maxWidth = `${width - 8}px`;
    innerContentElement.style.height = `calc(100% - ${ADJUSTMENT * 2}px)`;
    innerContentElement.style.margin = `${ADJUSTMENT}px ${0}px`;
    innerContentElement.style.padding = `${0}px ${ADJUSTMENT}px`;

    const avatarElement = customElement.querySelector(".avatar");
    avatarElement.style.width = `${imageWidth}px`;
    avatarElement.style.height = `${imageWidth}px`;
    avatarElement.style.marginLeft = `${ADJUSTMENT_2}px`;
    avatarElement.style.flexShrink = "0";

    const valueElement = customElement.querySelector(".value");
    valueElement.style.marginLeft = `${ADJUSTMENT_2}px`;

    if (rank > DISPLAY_COUNT) {
      customElement.style.opacity = "0";
    } else {
      customElement.style.opacity = "1";
    }

    if (datasetIndex == 0 || !transitionValues) return;

    valueElement.textContent = displayValue;
  });

  let endOfIntervalReached = false;

  if (datasetIndex == 0 || intervalCallbackIsSet == true) return;

  // setTimeout(() => {
  //   endOfIntervalReached = true;
  //   clearInterval(interval);
  //   intervalCallbackIsSet = false;
  //   interval = null;
  //   const customElements = document.querySelectorAll(`.custom-element`);
  //   if (customElements) {
  //     customElements.forEach((customElement) => {
  //       const nextValue = customElement.dataset.nextValue;
  //       if (nextValue) {
  //         const valueElement = customElement.querySelector(".value");
  //         valueElement.textContent = nextValue;
  //       }
  //     });
  //   }
  // }, CHART_UPDATE_DELAY);

  intervalCallbackIsSet = true;

  overlayInterval = setInterval(() => {
    datasets[datasetIndex].dataForTransition.forEach((dataPoint, index) => {
      const cssId = `${chartId}-custom-element-${dataPoint.normalizedName}`;
      let customElement = document.querySelector(`#${cssId}`);
      if (!customElement) return;
      const valueElement = customElement.querySelector(".value");
      const datapoint = datasets[datasetIndex].data[index];
      const { transitionValues } = datapoint;

      // if (datapoint.rank > DISPLAY_COUNT) return;
      // if (previousDatapoint && previousDatapoint.rank > DISPLAY_COUNT) return;
      // if (nextDatapoint && nextDatapoint.rank > DISPLAY_COUNT) return;
      let totalDelay = 0;

      if (endOfIntervalReached) return;

      transitionValues.forEach((transitionValue, transitionValueIndex) => {
        totalDelay += CHART_UPDATE_DELAY / TRANSITION_VALUES_COUNT;
        setTimeout(() => {
          if (endOfIntervalReached) return;
          const _value = transitionValue;
          let _displayValue = _value.toString();
          if (_displayValue.length == 2) {
            _displayValue = `${_displayValue}.00`;
          } else if (_displayValue.length == 4) {
            _displayValue = `${_displayValue}0`;
          } else if (_displayValue.length > 5) {
            _displayValue = `${_displayValue.slice(0, 5)}`;
          }
          valueElement.textContent = _displayValue;
        }, totalDelay);
        if (transitionValueIndex == transitionValues.length - 1) {
          if (overlayInterval != null) {
            clearInterval(overlayInterval);
            intervalCallbackIsSet = false;
            return;
          }
        }
      });
    }, CHART_UPDATE_DELAY);
  });
};

let currentDatasetIndex = 0;

setOverlayElements(chart, 0);
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
    setOverlayElements(chart, currentDatasetIndex);
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

const btnStart = document.getElementById("btn-start");
const btnPause = document.getElementById("btn-pause");
const btnReset = document.getElementById("btn-reset");
const btnNext = document.getElementById("btn-next");
const btnPrevious = document.getElementById("btn-previous");

btnStart.addEventListener("click", () => {
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
});

btnPause.addEventListener("click", () => {
  clearInterval(animationInterval);
});
