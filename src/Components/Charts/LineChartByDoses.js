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

export function LineChartByDoses() {
  var dataFromStore = useSelector((state) => state);

  const data = {
    labels: dataFromStore.vacine30Days.map(
      (item) =>
        new Date(item.vaccine_date).getDate() +
        " " +
        months[new Date(item.vaccine_date).getMonth()]
    ),
    datasets: [
      {
        label: "Total Dose",
        data: dataFromStore.vacine30Days.map((item) => item.total),
        borderColor: ["rgb(251,167,20)"],
        backgroundColor: ["rgb(253, 247, 228)"],
        pointBackgroundColor: "rgb(185,118,0)",
        pointBorderColor: "rgb(185,118,0)",
      },
      {
        label: "Dose One",
        data: dataFromStore.vacine30Days.map((item) => item.dose_1),
        borderColor: ["rgba(54, 162, 235, 0.2)"],
        backgroundColor: ["rgba(54, 162, 235, 0.2)"],
        pointBackgroundColor: "rgb(79,95,125)",
        pointBorderColor: "rgba(54, 162, 235, 0.2)",
      },
      {
        label: "Dose 2",
        data: dataFromStore.vacine30Days.map((item) => item.dose_2),
        borderColor: ["rgba(54, 162, 235, 0.2)"],
        backgroundColor: ["rgba(54, 162, 235, 0.2)"],
        pointBackgroundColor: "rgba(54, 162, 235, 0.2)",
        pointBorderColor: "rgba(54, 162, 235, 0.2)",
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
            max: 10000000,
            stepSize: 50000,
          },
        },
      ],
    },
  };

  return (
    <Line
      data={data}
      options={options}
      height={100}
      style={{
        boxShadow: " 0 3px 10px rgb(0 0 0 / 0.2)",
        backgroundColor: "white",
        padding: "10px",
        margin: "10px",
      }}
    />
  );
}

// export LineChart;
