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

const DISPLAY_COUNT = 50;
const DATES_COUNT = 100;
const CHART_UPDATE_DELAY = 5000;
const COLOR_ANIMATION_DURATION = CHART_UPDATE_DELAY / 2;
const Y_SCALE_ANIMATION_DURATION = CHART_UPDATE_DELAY;
const X_SCALE_ANIMATION_DURATION = CHART_UPDATE_DELAY;
const IMAGE_URL =
  "https://img.freepik.com/free-icon/soccer-player_318-174100.jpg";

const dates = Array.from({ length: DATES_COUNT }, (_, i) => {
  const date = new Date();
  date.setDate(date.getDate() - i);
  return date;
}).sort((a, b) => a - b);

const datasets = dates.map((date) => {
  // Random between 1 and 100
  const average = Math.floor(Math.random() * 100) + 1;

  const averages = [];

  for (let i = 0; i < RANDOM_NAMES.length; i++) {
    // Random between 0 and 1
    const random = Math.random() - 0.5;
    const newAverage = average + random;
    averages.push({ rank: i + 1, average: Math.round(newAverage * 100) / 100 });
  }

  const sortedAverages = averages
    .sort((a, b) => b.average - a.average)
    .map((a, i) => ({ ...a, rank: i + 1 }));

  const allNamesIndexes = Array.from(
    { length: RANDOM_NAMES.length },
    (_, i) => i
  );
  allNamesIndexes.sort(() => Math.random() - 0.5);

  const datapoints = sortedAverages.map((a, i) => {
    const name = RANDOM_NAMES[allNamesIndexes[i]];
    const normalizedName = name.replace(/\s/g, "-").toLowerCase();
    return {
      id: `${normalizedName}-${i}`,
      x: a.average,
      y: name,
      rank: a.rank,
      average: a.average,
      name: name,
      normalizedName: normalizedName,
      date: date.toISOString(),
    };
  });

  return {
    label: date.toISOString(),
    data: datapoints,
    backgroundColor: `rgba(255, 255, 255, 0.1)`,
    borderColor: `rgba(255, 255, 255, 0.1)`,
  };
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
      aspectRatio: 1,
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
          duration: X_SCALE_ANIMATION_DURATION,
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
            color: "rgba(255, 255, 255, 0.00)",
            borderColor: "rgba(255, 255, 255, 0.1)",
          },
          ticks: {
            color: "rgba(255, 255, 255, 0.5)",
          },
          // max: 10,
          grace: "1",
        },
        y: {
          display: true,
          beginAtZero: true,
          position: "left",
          grid: {
            color: "rgba(255, 255, 255, 0.00)",
            borderColor: "rgba(255, 255, 255, 0.1)",
          },
          min: 0,
          max: DISPLAY_COUNT - 1,
          ticks: {
            color: function (context) {
              return "rgba(255,255,255,0.75)";
            },
            font: function (context) {
              return { weight: "400", size: 12 };
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
};

initializeChart();

const setOverlayElements = (chart, datasetIndex) => {
  const { ctx, scales } = chart;
  const chartDomRect = ctx.canvas.getBoundingClientRect();
  const yTicks = scales.y.ticks;
  let pixelForValue = 0;
  let tickHeight = 0;
  const chartContainer = document.querySelector(".chart-container");
  datasets[datasetIndex].data.forEach((dataPoint, index) => {
    // if (index >= DISPLAY_COUNT) return;
    const cssId = `${chartId}-custom-element-${dataPoint.normalizedName}`;
    let customElement = document.querySelector(`#${cssId}`);
    if (!customElement) {
      customElement = document.createElement("div");
      customElement.id = cssId;
      customElement.dataset.dataPoint = JSON.stringify(dataPoint);
      chartContainer.appendChild(customElement);
    }
    const pixelForValue = scales.y.getPixelForValue(index);
    if (index == 0) {
      tickHeight = scales.y.getPixelForValue(index + 1) - pixelForValue;
    }
    // else {
    //   pixelForValue += tickHeight;
    // }
    const datapoint = datasets[datasetIndex].data[index];
    // const top = pixelForValue + chartDomRect.top;
    const top = pixelForValue;
    // const left = chartDomRect.left + scales.x.left;
    const left = scales.x.left;
    const pixelForValueXLeft = scales.x.getPixelForValue(0);
    const pixelForValueXRight = scales.x.getPixelForValue(datapoint.x);
    const width = pixelForValueXRight - pixelForValueXLeft;
    customElement.style.transition = `all ${Y_SCALE_ANIMATION_DURATION}ms linear`;
    customElement.style.position = "absolute";
    customElement.style.top = `${top}px`;
    customElement.style.left = `${left}px`;
    customElement.style.width = `${width}px`;
    // customElement.style.background = "rgba(255,100,100,0.1)";
    // customElement.style.border = "1px solid rgba(255,255,255,0.1)";
    customElement.style.transform = `translateY(-${tickHeight / 2}px)`;
    customElement.style.zIndex = "2";
    customElement.style.height = `${tickHeight - 4}px`;
    customElement.style.margin = "2px";
    customElement.style.pointerEvents = "none";
    customElement.style.display = "flex";
    customElement.style.alignItems = "center";
    customElement.style.justifyContent = "flex-end";
    // Set textcontent of custom element
    const text = document.createElement("div");
    // text.style.position = "absolute";
    // text.style.top = "50%";
    // text.style.left = "50%";
    // text.style.transform = "translate(-50%, -50%)";
    text.style.color = "rgba(255,255,255,0.75)";
    text.style.fontWeight = "400";
    text.style.fontSize = "8px";
    text.style.pointerEvents = "none";
    text.style.textAlign = "right";
    text.style.width = "100%";
    text.style.whiteSpace = "nowrap";
    text.style.overflow = "hidden";
    text.style.textOverflow = "ellipsis";
    text.style.paddingRight = "4px";
    text.style.fontWeight = "600";
    text.style.fontStyle = "italic";
    text.style.font = "'Roboto', sans-serif";

    if (dataPoint.rank > DISPLAY_COUNT) {
      customElement.style.opacity = "0";
    } else {
      customElement.style.opacity = "1";
    }

    text.textContent = `${datapoint.name} (${datapoint.x})`;
    customElement.innerHTML = "";
    customElement.appendChild(text);
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
  // if (currentDatasetIndex == 0) {
  //   console.log(newLabels);
  // }
  chart.config.data.datasets[0].borderColor = newBorderColor;
  chart.config.data.datasets[0].backgroundColor = newBackgroundColor;
  chart.config.data.labels = newLabels;
  // chart.config.options.scales.x.max = 10;

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
