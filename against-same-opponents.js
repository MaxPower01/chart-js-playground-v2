const opponentColors = [
  "#0000FF25",
  "#FF00FF25",
  "#00FF0025",
  "#FFFF0025",
  "#00FFFF25",
];

const chartId2 = "chart-2";
const canvas2 = document.getElementById(chartId2);
const ctx2 = canvas2.getContext("2d");
const chart2 = new Chart(ctx2, {
  type: "bar",
  data: {
    datasets: [
      {
        label: "Opponent #1",
        data: [
          { x: 53, y: "VS #3", name: "Opponent #1" },
          { x: 75, y: "VS #4", name: "Opponent #1" },
          { x: 65, y: "VS #5", name: "Opponent #1" },
          { x: 55, y: "VS #6", name: "Opponent #1" },
          { x: 45, y: "VS #7", name: "Opponent #1" },
        ],
        backgroundColor: "#FF0000",
      },
      {
        label: "Opponent #2",
        data: [
          { x: 41, y: "VS #3", name: "Opponent #2" },
          { x: 65, y: "VS #4", name: "Opponent #2" },
          { x: 55, y: "VS #5", name: "Opponent #2" },
          { x: 45, y: "VS #6", name: "Opponent #2" },
          { x: 35, y: "VS #7", name: "Opponent #2" },
        ],
        backgroundColor: "#00FF00",
      },
      // {
      //   label: "Opponent #3",
      //   data: [
      //     { x: 100 - 53, y: "#1 VS #3", name: "Opponent #3" },
      //     { x: 100 - 41, y: "#2 VS #3", name: "Opponent #3" },
      //   ],
      //   backgroundColor: "#0000FF50",
      // },
      // {
      //   label: "Opponent #4",
      //   data: [
      //     { x: 100 - 75, y: "#1 VS #4", name: "Opponent #4" },
      //     { x: 100 - 65, y: "#2 VS #4", name: "Opponent #4" },
      //   ],
      //   backgroundColor: "#FF00FF50",
      // },
      // {
      //   label: "Opponent #5",
      //   data: [
      //     { x: 100 - 65, y: "#1 VS #5", name: "Opponent #5" },
      //     { x: 100 - 55, y: "#2 VS #5", name: "Opponent #5" },
      //   ],
      //   backgroundColor: "#00FFFF50",
      // },
      // {
      //   label: "Opponent #6",
      //   data: [
      //     { x: 100 - 55, y: "#1 VS #6", name: "Opponent #6" },
      //     { x: 100 - 45, y: "#2 VS #6", name: "Opponent #6" },
      //   ],
      //   backgroundColor: "#FFFF0050",
      // },
      // {
      //   label: "Opponent #7",
      //   data: [
      //     { x: 100 - 45, y: "#1 VS #7", name: "Opponent #7" },
      //     { x: 100 - 35, y: "#2 VS #7", name: "Opponent #7" },
      //   ],
      //   backgroundColor: "#FFA50050",
      // },
    ],
    // labels: [
    //   "#1 VS #3",
    //   "#2 VS #3",
    //   "#1 VS #4",
    //   "#2 VS #4",
    //   "#1 VS #5",
    //   "#2 VS #5",
    //   "#1 VS #6",
    //   "#2 VS #6",
    //   "#1 VS #7",
    //   "#2 VS #7",
    // ],
    labels: ["VS #3", "VS #4", "VS #5", "VS #6", "VS #7"],
  },
  plugins: [
    {
      beforeDatasetsDraw: function (chart, args, options) {
        const {
          ctx,
          chartArea: { top, bottom, left, right, width, height },
          scales: { x, y },
        } = chart;
        // Increment the opacity of the background color for each y-axis label
        const numberOfTicks = y.ticks.length;
        const tickHeight = y.getPixelForTick(1) - y.getPixelForTick(0);

        for (let i = 0; i < numberOfTicks; i++) {
          const drawTop = top + i * tickHeight;
          ctx.fillStyle = opponentColors[i];
          ctx.fillRect(left, drawTop, width, tickHeight);
        }
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
    responsive: true,
    plugins: {
      legend: {
        // display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        display: true,
        // stacked: true,
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
        // stacked: true,
        beginAtZero: true,
        position: "left",
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
        border: {
          color: "rgba(255, 255, 255, 0.25)",
        },
        // min: 0,
        // max: DISPLAY_COUNT - 1,
        ticks: {
          color: function (context) {
            return "white";
          },
          font: function (context) {
            return { size: 14, style: "normal", weight: "bold" };
          },
          // callback: function (val, index) {
          //   const datapoint = datasets[0].data[index];
          //   return `#${datapoint.rank}`;
          // },
        },
      },
    },
  },
});
