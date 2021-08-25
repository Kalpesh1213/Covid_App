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

export function LineChartAefiData() {
  var dataFromStore = useSelector((state) => state);

  // dataFromStore.buttonClicked === "By DOse" ? LineChartTwo() :LineChartOne()

  // function LineChartTwo(){
  // console.log(dataFromStore.vacine30Days);
  const data = {
    labels: dataFromStore.aefiData.map(
      (item) =>
        new Date(item.vaccine_date).getDate() +
        " " +
        months[new Date(item.vaccine_date).getMonth()]
    ),
    datasets: [
      {
        label: "Total",
        data: dataFromStore.aefiData.map((item) => item.aefi),
        borderColor: ["rgb(205, 83, 137)"],
        backgroundColor: ["rgb(205, 83, 137)"],
        pointBackgroundColor: "rgb(205, 83, 137)",
        pointBorderColor: "rgb(196, 104, 62)",
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
