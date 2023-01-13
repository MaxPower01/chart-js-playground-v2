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
].map((name, i) => `${name} #${i}`);

const DISPLAY_COUNT = 10;
const DATES_COUNT = 10;
const CHART_UPDATE_DELAY = 1000;
const COLOR_ANIMATION_DURATION = CHART_UPDATE_DELAY / 2;
const Y_SCALE_ANIMATION_DURATION = CHART_UPDATE_DELAY;
const X_SCALE_ANIMATION_DURATION = CHART_UPDATE_DELAY;

const dates = Array.from({ length: DATES_COUNT }, (_, i) => {
  const date = new Date();
  date.setDate(date.getDate() - i);
  return date;
}).sort((a, b) => a - b);

const datasets = dates.map((date) => {
  const averages = Array.from({ length: RANDOM_NAMES.length }, () => {
    const average = Math.round(Math.random() * 10 * 100) / 100;
    const rank = 0;
    return { average, rank };
  })
    .sort((a, b) => b.average - a.average)
    .map((a, i) => ({ ...a, rank: i + 1 }));

  const allNamesIndexes = Array.from(
    { length: RANDOM_NAMES.length },
    (_, i) => i
  );
  allNamesIndexes.sort(() => Math.random() - 0.5);

  const datapoints = averages.map((a, i) => {
    const name = RANDOM_NAMES[allNamesIndexes[i]];
    return {
      id: `${name}-${i}`,
      x: a.average,
      y: name,
      rank: a.rank,
      average: a.average,
      name: name,
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

const initializeChart = () => {
  canvas = document.getElementById(chartId);
  ctx = canvas.getContext("2d");
  // const { data, ...rest } = config;
  chart = new Chart(ctx, {
    type: "bar",
    data: {
      datasets: [datasets[0]],
      labels: datasets[0].data.map((d) => d.y),
    },
    plugins: [
      {
        afterDatasetsDraw(chart, args, pluginOptions) {
          setOverlayElements(chart);
        },
      },
    ],
    options: {
      responsive: true,
      aspectRatio: 2,
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
          max: 10,
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

const setOverlayElements = (chart) => {
  const { ctx } = chart;
  const chartDomRect = ctx.canvas.getBoundingClientRect();
  const { scales } = chart;
  const yTicks = scales.y.ticks;
  let pixelForValue = 0;
  let tickHeight = 0;
  datasets[0].data.forEach((dataPoint, index) => {
    if (index >= DISPLAY_COUNT) return;
    let customElement = document.querySelector(
      `.${chartId}-custom-element-${index}`
    );
    if (!customElement) {
      customElement = document.createElement("div");
      customElement.classList.add(`${chartId}-custom-element-${index}`);
      customElement.dataset.dataPoint = JSON.stringify(dataPoint);
      document.body.appendChild(customElement);
    }
    if (index == 0) {
      pixelForValue = scales.y.getPixelForValue(index);
      tickHeight = scales.y.getPixelForValue(index + 1) - pixelForValue;
    } else {
      pixelForValue += tickHeight;
    }
    const datapoint = datasets[0].data[index];
    const top = pixelForValue + chartDomRect.top;
    const left = chartDomRect.left + scales.x.left;
    const pixelForValueXLeft = scales.x.getPixelForValue(0);
    const pixelForValueXRight = scales.x.getPixelForValue(datapoint.x);
    const width = pixelForValueXRight - pixelForValueXLeft;
    customElement.style.position = "absolute";
    customElement.style.top = `${top}px`;
    customElement.style.left = `${left}px`;
    customElement.style.width = `${width}px`;
    customElement.style.background = "rgba(255,255,255,0.1)";
    customElement.style.transform = `translateY(-${tickHeight / 2}px)`;
    customElement.style.zIndex = "2";
    customElement.style.height = `${tickHeight - 4}px`;
    customElement.style.margin = "2px";
    customElement.style.pointerEvents = "none";
    customElement.style.transition = `all ${COLOR_ANIMATION_DURATION}ms ease`;
  });
};

setOverlayElements(chart);
window.addEventListener("resize", (chart) => setOverlayElements(chart));

let currentDatasetIndex = 0;

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
