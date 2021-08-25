import React from "react";
import { Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";

function BarChart() {
  var dataFromStore = useSelector((state) => state);
  // console.log(dataFromStore.states);

  const data = {
    labels: dataFromStore.states
      .sort((a, b) => b.partial_vaccinated - a.partial_vaccinated)
      .map((item) => item.state_name),

    datasets: [
      {
        label: "Dose 1",
        data: dataFromStore.states
          .sort((a, b) => b.partial_vaccinated - a.partial_vaccinated)
          .map((item) => item.partial_vaccinated),
        borderColor: [
          "rgb(242, 9, 250)",
          "rgb(242, 9, 250)",
          "rgb(242, 9, 250)",
          "rgb(242, 9, 250)",
          "rgb(242, 9, 250)",
        ],
        backgroundColor: [
          "rgb(242, 9, 250)",
          "rgb(242, 9, 250)",
          "rgb(242, 9, 250)",
          "rgb(242, 9, 250)",
          "rgb(242, 9, 250)",
        ],
      },
      {
        label: "SDose 2",
        data: dataFromStore.states
          .sort((a, b) => b.partial_vaccinated - a.partial_vaccinated)
          .map((item) => item.totally_vaccinated),
        borderColor: [
          "rgb(19, 232, 247)",
          "rgb(19, 232, 247)",
          "rgb(19, 232, 247)",
          "rgb(19, 232, 247)",
          "rgb(19, 232, 247)",
        ],
        backgroundColor: [
          "rgb(19, 232, 247)",
          "rgb(19, 232, 247)",
          "rgb(19, 232, 247)",
          "rgb(19, 232, 247)",
          "rgb(19, 232, 247)",
        ],
      },
    ],
  };

  const options = {
    title: {
      display: true,
      text: "Bar Chart",
    },
    scales: {
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 1000000,
            stepSize: 100000,
          },
        },
      ],
    },
  };
  return (
    <Bar
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

export default BarChart;
