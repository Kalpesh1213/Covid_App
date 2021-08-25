import React from "react";
import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";

var months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export function LineChartTrend() {
  var dataFromStore = useSelector((state) => state);

  // dataFromStore.buttonClicked === "By DOse" ? LineChartTwo() :LineChartOne()

  // function LineChartTwo(){
  // console.log(dataFromStore.vacine30Days);
  const data = {
    labels: dataFromStore.vacine30Days.map(
      (item) =>
        new Date(item.vaccine_date).getDate() +
        " " +
        months[new Date(item.vaccine_date).getMonth()]
    ),
    datasets: [
      {
        label: "Rural",
        data: dataFromStore.vacine30Days.map((item) => item.rural),
        borderColor: ["rgb(136, 232, 243)"],
        backgroundColor: ["rgb(136, 232, 243)"],
        pointBackgroundColor: "rgb(1, 157, 180)",
        pointBorderColor: "rgb(1, 157, 180)",
      },
      {
        label: "Urban",
        data: dataFromStore.vacine30Days.map((item) => item.urban),
        borderColor: ["rgb(105, 150, 219)"],
        backgroundColor: ["rgb(105, 150, 219)"],
        pointBackgroundColor: "rgb(78, 100, 144)",
        pointBorderColor: "rgb(78, 100, 144)",
      },
    ],
  };

  const options = {
    title: {
      display: true,
      text: "Line Chart",
    },
    scales: {
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 160,
            stepSize: 20,
          },
        },
      ],
    },
  };

  return (
    <Line
      data={data}
      options={options}
      style={{
        boxShadow: " 0 3px 10px rgb(0 0 0 / 0.2)",
        backgroundColor: "white",
        width: "720px",
        height: "650px",
        padding: "10px",
        margin: "10px",
      }}
    />
  );
}

// export LineChart;
