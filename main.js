// const DISPLAY_COUNT = 10;

const DATES_COUNT = 100;
const TRANSITION_VALUES_COUNT = 50;

const CHART_UPDATE_DELAY = 2000;
const COLOR_ANIMATION_DURATION = CHART_UPDATE_DELAY / 2;
const Y_SCALE_ANIMATION_DURATION = CHART_UPDATE_DELAY;
const X_SCALE_ANIMATION_DURATION = CHART_UPDATE_DELAY;

const IMAGE_URL =
  "https://img.freepik.com/free-icon/soccer-player_318-174100.jpg";

const IS_TOUCH_DEVICE = "ontouchstart" in window;

let canApplyTransitionsOfXAxis = false;

setTimeout(() => (canApplyTransitionsOfXAxis = true), 500);

const RANDOM_NAMES = [
  "Silas Wagner",
  "Jarred Walters",
  "Cleo Watts",
  "Josefa Costa",
  "Kasey Robertson",
  "Max Skinner",
  "Edgar Bright",
  "Shannon Roberts",
  "Jerald Carson",
  "Al Kline",
  "Lesley Peters",
  "Dallas Hill",
  "Jewel Flynn",
  "Margo Harrell",
  "Silvia Alvarado",
  "Eve Burch",
  "Christoper Wong",
  "Emma Farrell",
  "Tomas Newman",
  "Raymundo Barnett",
  "Rocco Kim",
  "Jayson Barber",
  "Lessie Lowery",
  "Stacie Stafford",
  "Garth Vasquez",
  "Nickolas Matthews",
  "Rosario Gilmore",
  "Jillian Hicks",
  "Gail Santana",
  "Omar Boyd",
  "Veronica Riddle",
  "Tabitha Weaver",
  "Mattie Spence",
  "Nelson Ballard",
  "Josephine Mccarty",
  "Bert Calderon",
  "Rowena Patterson",
  "Francisca Wilkerson",
  "Marva Baldwin",
  "Myra Espinoza",
  "Heriberto Padilla",
  "Felton Bass",
  "Effie Combs",
  "Leonor Campos",
  "Irma Middleton",
  "Clark Wall",
  "Dorothy Harrison",
  "Palmer Jarvis",
  "Antwan Ball",
  "Ervin Aguirre",
  "Otto Robles",
  "Trent Moreno",
  "Francisco Carney",
  "Delores Abbott",
  "Wayne Turner",
  "Hillary Powell",
  "Vicki Crawford",
  "Vance Avery",
  "Darell Gibson",
  "Shauna Rodriguez",
  "Melissa Thornton",
  "Ronda Bowers",
  "Tobias Lloyd",
  "Jane Villanueva",
  "Joel Parks",
  "Jolene Jackson",
  "Marcellus Berry",
  "Foster Buck",
  "Brandie Hawkins",
  "Darrell Erickson",
  "Millicent Ho",
  "Thaddeus Simmons",
  "Carson Dalton",
  "Christian Flores",
  "Bert Mooney",
  "Micheal House",
  "Lindsey Novak",
  "Murray Pope",
  "Wilbert Rojas",
  "Helen Stein",
  "Josefina Chambers",
  "Kari Decker",
  "Estelle Ewing",
  "Cliff Pugh",
  "Korey Mcfarland",
  "Elsie York",
  "Alice Cooper",
  "Mattie Hobbs",
  "Lilian Zuniga",
  "Amos Duffy",
  "Ronny Munoz",
  "Leo Oconnor",
  "Curt Rowe",
  "Sharron Cruz",
  "Thurman Harrington",
  "Cary Richmond",
  "Jerry Stephenson",
  "Margery Hunt",
  "Rebekah Rivas",
  "Beverley Austin",
  "Silas Wagner",
  "Jarred Walters",
  "Cleo Watts",
  "Josefa Costa",
  "Kasey Robertson",
  "Max Skinner",
  "Edgar Bright",
  "Shannon Roberts",
  "Jerald Carson",
  "Al Kline",
  "Lesley Peters",
  "Dallas Hill",
  "Jewel Flynn",
  "Margo Harrell",
  "Silvia Alvarado",
  "Eve Burch",
  "Christoper Wong",
  "Emma Farrell",
  "Tomas Newman",
  "Raymundo Barnett",
  "Rocco Kim",
  "Jayson Barber",
  "Lessie Lowery",
  "Stacie Stafford",
  "Garth Vasquez",
  "Nickolas Matthews",
  "Rosario Gilmore",
  "Jillian Hicks",
  "Gail Santana",
  "Omar Boyd",
  "Veronica Riddle",
  "Tabitha Weaver",
  "Mattie Spence",
  "Nelson Ballard",
  "Josephine Mccarty",
  "Bert Calderon",
  "Rowena Patterson",
  "Francisca Wilkerson",
  "Marva Baldwin",
  "Myra Espinoza",
  "Heriberto Padilla",
  "Felton Bass",
  "Effie Combs",
  "Leonor Campos",
  "Irma Middleton",
  "Clark Wall",
  "Dorothy Harrison",
  "Palmer Jarvis",
  "Antwan Ball",
  "Ervin Aguirre",
  // "Otto Robles",
  // "Trent Moreno",
  // "Francisco Carney",
  // "Delores Abbott",
  // "Wayne Turner",
  // "Hillary Powell",
  // "Vicki Crawford",
  // "Vance Avery",
  // "Darell Gibson",
  // "Shauna Rodriguez",
  // "Melissa Thornton",
  // "Ronda Bowers",
  // "Tobias Lloyd",
  // "Jane Villanueva",
  // "Joel Parks",
  // "Jolene Jackson",
  // "Marcellus Berry",
  // "Foster Buck",
  // "Brandie Hawkins",
  // "Darrell Erickson",
  // "Millicent Ho",
  // "Thaddeus Simmons",
  // "Carson Dalton",
  // "Christian Flores",
  // "Bert Mooney",
  // "Micheal House",
  // "Lindsey Novak",
  // "Murray Pope",
  // "Wilbert Rojas",
  // "Helen Stein",
  // "Josefina Chambers",
  // "Kari Decker",
  // "Estelle Ewing",
  // "Cliff Pugh",
  // "Korey Mcfarland",
  // "Elsie York",
  // "Alice Cooper",
  // "Mattie Hobbs",
  // "Lilian Zuniga",
  // "Amos Duffy",
  // "Ronny Munoz",
  // "Leo Oconnor",
  // "Curt Rowe",
  // "Sharron Cruz",
  // "Thurman Harrington",
  // "Cary Richmond",
  // "Jerry Stephenson",
  // "Margery Hunt",
  // "Rebekah Rivas",
  // "Beverley Austin",
  // "Silas Wagner",
  // "Jarred Walters",
  // "Cleo Watts",
  // "Josefa Costa",
  // "Kasey Robertson",
  // "Max Skinner",
  // "Edgar Bright",
  // "Shannon Roberts",
  // "Jerald Carson",
  // "Al Kline",
  // "Lesley Peters",
  // "Dallas Hill",
  // "Jewel Flynn",
  // "Margo Harrell",
  // "Silvia Alvarado",
  // "Eve Burch",
  // "Christoper Wong",
  // "Emma Farrell",
  // "Tomas Newman",
  // "Raymundo Barnett",
  // "Rocco Kim",
  // "Jayson Barber",
  // "Lessie Lowery",
  // "Stacie Stafford",
  // "Garth Vasquez",
  // "Nickolas Matthews",
  // "Rosario Gilmore",
  // "Jillian Hicks",
  // "Gail Santana",
  // "Omar Boyd",
  // "Veronica Riddle",
  // "Tabitha Weaver",
  // "Mattie Spence",
  // "Nelson Ballard",
  // "Josephine Mccarty",
  // "Bert Calderon",
  // "Rowena Patterson",
  // "Francisca Wilkerson",
  // "Marva Baldwin",
  // "Myra Espinoza",
  // "Heriberto Padilla",
  // "Felton Bass",
  // "Effie Combs",
  // "Leonor Campos",
  // "Irma Middleton",
  // "Clark Wall",
  // "Dorothy Harrison",
  // "Palmer Jarvis",
  // "Antwan Ball",
  // "Ervin Aguirre",
  // "Otto Robles",
  // "Trent Moreno",
  // "Francisco Carney",
  // "Delores Abbott",
  // "Wayne Turner",
  // "Hillary Powell",
  // "Vicki Crawford",
  // "Vance Avery",
  // "Darell Gibson",
  // "Shauna Rodriguez",
  // "Melissa Thornton",
  // "Ronda Bowers",
  // "Tobias Lloyd",
  // "Jane Villanueva",
  // "Joel Parks",
  // "Jolene Jackson",
  // "Marcellus Berry",
  // "Foster Buck",
  // "Brandie Hawkins",
  // "Darrell Erickson",
  // "Millicent Ho",
  // "Thaddeus Simmons",
  // "Carson Dalton",
  // "Christian Flores",
  // "Bert Mooney",
  // "Micheal House",
  // "Lindsey Novak",
  // "Murray Pope",
  // "Wilbert Rojas",
  // "Helen Stein",
  // "Josefina Chambers",
  // "Kari Decker",
  // "Estelle Ewing",
  // "Cliff Pugh",
  // "Korey Mcfarland",
  // "Elsie York",
  // "Alice Cooper",
  // "Mattie Hobbs",
  // "Lilian Zuniga",
  // "Amos Duffy",
  // "Ronny Munoz",
  // "Leo Oconnor",
  // "Curt Rowe",
  // "Sharron Cruz",
  // "Thurman Harrington",
  // "Cary Richmond",
  // "Jerry Stephenson",
  // "Margery Hunt",
  // "Rebekah Rivas",
  // "Beverley Austin",
].map((name, i) => `${name} ${i}`);

console.log(RANDOM_NAMES.length);

const DISPLAY_COUNT = 10;
// const DISPLAY_COUNT = RANDOM_NAMES.length;

let aspectRatio = IS_TOUCH_DEVICE
  ? 1 / (DISPLAY_COUNT / 10)
  : 1 / (DISPLAY_COUNT / 15);

function useSmoothRandom(factor, start) {
  let last = start !== undefined ? start : Math.random();
  const halfEnvelope = 1 / factor / 2;
  return function () {
    // clamp output range to [0,1] as Math.random()
    const max = Math.min(1, last + halfEnvelope);
    const min = Math.max(0.5, last - halfEnvelope);
    // return a number within halfRange of the last returned value
    return (last = Math.random() * (max - min) + min);
  };
}

const dates = Array.from({ length: DATES_COUNT }, (_, i) => {
  const date = new Date();
  date.setDate(date.getDate() - i);
  return date;
}).sort((a, b) => a - b);

const valuesByName = {};
for (let i = 0; i < RANDOM_NAMES.length; i++) {
  const name = RANDOM_NAMES[i];
  let smoothRandom = useSmoothRandom(10);
  let values = [];
  while (values.length < DATES_COUNT) {
    values.push({
      value: smoothRandom(),
      name: name,
      date: dates[values.length].toISOString(),
    });
  }
  const parsedValues = values.map((v) => {
    return {
      ...v,
      value: v.value * 100,
      displayValue: (v.value * 100).toFixed(2),
    };
  });
  valuesByName[name] = {
    name: name,
    values: parsedValues,
  };
}

const datasets = dates.map((date) => {
  const datapoints = Object.values(valuesByName).map((v, i) => {
    const value = v.values.find((v) => v.date === date.toISOString());
    const name = v.name;
    const normalizedName = name.replace(/\s/g, "-").toLowerCase();
    const displayName = name.split(" ").slice(0, 2).join(" ");
    return {
      id: `${normalizedName}-${i}`,
      x: value.value,
      nextDatapoint: null,
      previousDatapoint: null,
      transitionValues: [],
      y: name,
      rank: null,
      value: value.value,
      displayValue: value.displayValue,
      name: name,
      displayName: displayName,
      normalizedName: normalizedName,
      date: date.toISOString(),
    };
  });

  return {
    label: date.toISOString(),
    data: datapoints,
    // backgroundColor: `rgba(255, 255, 255, 0.1)`,
    // borderColor: `rgba(255, 255, 255, 0.1)`,
    backgroundColor: `transparent`,
    borderColor: `transparent`,
  };
});

datasets.forEach((dataset, datasetIndex) => {
  dataset.data
    .sort((a, b) => b.x - a.x)
    .forEach((datapoint, i) => {
      datapoint.rank = i + 1;
    });
  const { data } = dataset;
  let previousDataset = datasetIndex > 0 ? datasets[datasetIndex - 1] : null;
  let nextDataset =
    datasetIndex < datasets.length - 1 ? datasets[datasetIndex + 1] : null;
  data.forEach((datapoint) => {
    if (previousDataset) {
      const previousDatapoint = previousDataset.data.find(
        (d) => d.normalizedName == datapoint.normalizedName
      );
      datapoint.previousDatapoint = previousDatapoint;
      const min = Math.min(datapoint.value, previousDatapoint.value);
      const max = Math.max(datapoint.value, previousDatapoint.value);
      let transitionValues = Array.from(
        { length: TRANSITION_VALUES_COUNT },
        (_, i) => {
          if (i == 0) return datapoint.value;
          if (i == TRANSITION_VALUES_COUNT - 1) return previousDatapoint.value;
          const newValue =
            min + (max - min) * (i / (TRANSITION_VALUES_COUNT - 1));
          // If it's 1.4, it should display as 1.40, not 1.4
          const parsedValue = Math.round(newValue * 100) / 100;
          return parsedValue;
        }
      ).sort((a, b) => {
        if (datapoint.value > previousDatapoint.value) {
          return a - b;
        } else {
          return b - a;
        }
      });
      datapoint.transitionValues = transitionValues;
      if (datapoint.value < previousDatapoint.value) {
        console.assert(
          transitionValues[0] > transitionValues[transitionValues.length - 1],
          "The first transition value should be greater than the last one."
        );
      } else if (datapoint.value > previousDatapoint.value) {
        console.assert(
          transitionValues[0] < transitionValues[transitionValues.length - 1],
          "The first transition value should be less than the last one."
        );
      } else {
        console.assert(
          transitionValues[0] == transitionValues[transitionValues.length - 1],
          "The first transition value should be equal to the last one."
        );
      }
    }
    if (nextDataset) {
      const nextDatapoint = nextDataset.data.find(
        (d) => d.normalizedName == datapoint.normalizedName
      );
      datapoint.nextDatapoint = nextDatapoint;
    }
  });
});

const chartId = "chart";
let chart, canvas, ctx;
let afterDatasetsUpdateCalled = false;

const initializeChart = () => {
  canvas = document.getElementById(chartId);
  ctx = canvas.getContext("2d");
  chart = new Chart(ctx, {
    type: "bar",
    data: {
      datasets: [datasets[0]],
      labels: datasets[0].data.map((d) => d.y),
    },
    plugins: [
      {
        afterDatasetsDraw(chart, args, pluginOptions) {
          if (!afterDatasetsUpdateCalled) {
            return;
          }
          afterDatasetsUpdateCalled = false;
          setOverlayElements(chart, currentDatasetIndex);
        },
        afterDatasetsUpdate(chart, args, pluginOptions) {
          afterDatasetsUpdateCalled = true;
        },
      },
    ],
    options: {
      responsive: true,
      aspectRatio: aspectRatio,
      maintainAspectRatio: true,
      indexAxis: "y",
      elements: {
        bar: {
          borderWidth: 2,
        },
      },
      animations: {
        colors: {
          duration: COLOR_ANIMATION_DURATION,
        },
        y: {
          duration: Y_SCALE_ANIMATION_DURATION,
          easing: "linear",
        },
        x: {
          duration: 0,
          easing: "linear",
        },
      },
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          enabled: false,
        },
      },
      scales: {
        x: {
          display: true,
          grid: {
            color: "rgba(255, 255, 255, 0.05)",
          },
          ticks: {
            color: function (context) {
              return "white";
            },
            font: function (context) {
              return { size: 12, style: "normal" };
            },
          },
          border: {
            color: "rgba(255, 255, 255, 0.25)",
          },
          min: 0,
          max: 100,
          // grace: 10,
        },
        y: {
          display: true,
          beginAtZero: true,
          position: "left",
          grid: {
            color: "rgba(255, 255, 255, 0.1)",
          },
          border: {
            color: "rgba(255, 255, 255, 0.25)",
          },
          min: 0,
          max: DISPLAY_COUNT - 1,
          ticks: {
            color: function (context) {
              return "white";
            },
            font: function (context) {
              return { size: 14, style: "normal", weight: "bold" };
            },
            callback: function (val, index) {
              const datapoint = datasets[0].data[index];
              return `#${datapoint.rank}`;
            },
          },
        },
      },
    },
  });

  setTimeout(() => {
    chart.options.animations.x.duration = X_SCALE_ANIMATION_DURATION;
  }, 250);
};

initializeChart();

let intervalCallbackIsSet = false;

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

    const {
      value,
      rank,
      displayValue,
      displayName,
      transitionValues,
      nextDatapoint,
      previousDatapoint,
    } = datapoint;
    const transitionValuesCopy = [...transitionValues];

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

  if (datasetIndex == 0 || intervalCallbackIsSet == true) return;

  intervalCallbackIsSet = true;

  const interval = setInterval(() => {
    datasets[datasetIndex].data.forEach((dataPoint, index) => {
      const cssId = `${chartId}-custom-element-${dataPoint.normalizedName}`;
      let customElement = document.querySelector(`#${cssId}`);
      if (!customElement) return;
      const valueElement = customElement.querySelector(".value");
      const datapoint = datasets[datasetIndex].data[index];
      const {
        value,
        rank,
        displayValue,
        displayName,
        transitionValues,
        nextDatapoint,
        previousDatapoint,
      } = datapoint;

      if (datapoint.rank > DISPLAY_COUNT) return;
      // if (previousDatapoint && previousDatapoint.rank > DISPLAY_COUNT) return;
      // if (nextDatapoint && nextDatapoint.rank > DISPLAY_COUNT) return;

      let totalDelay = 0;

      transitionValues.forEach((transitionValue, transitionValueIndex) => {
        totalDelay += CHART_UPDATE_DELAY / TRANSITION_VALUES_COUNT;
        setTimeout(() => {
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
          clearInterval(interval);
          intervalCallbackIsSet = false;
          return;
        }
      });
    }, CHART_UPDATE_DELAY);
  });
};

let currentDatasetIndex = 0;

setOverlayElements(chart, 0);
window.addEventListener("resize", (chart) => {
  // chart.update("active");
  setOverlayElements(chart, currentDatasetIndex);
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
btnStart.addEventListener("click", () => {
  updateChart();
  currentDatasetIndex++;
  interval = setInterval(() => {
    if (currentDatasetIndex >= datasets.length - 1) {
      clearInterval(interval);
      return;
    }
    updateChart();
    currentDatasetIndex++;
  }, CHART_UPDATE_DELAY);
});

const btnStop = document.getElementById("btn-stop");
btnStop.addEventListener("click", () => {
  clearInterval(interval);
});
