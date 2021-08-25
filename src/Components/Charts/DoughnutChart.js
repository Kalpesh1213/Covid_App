import React from "react";
import { DougPhnut } from "react-chartjs-2";
import { useSelector } from "react-redux";

let arr = [];
function DoughnutChart() {
  var dataFromStore = useSelector((state) => state);
  arr = [...arr, dataFromStore.vaccByAge];
  console.log(dataFromStore.vaccByAge);
  const data = {
    labels: ["18-45", "45-60", "Above 60"],

    datasets: [
      {
        label: "Vaccination by Age",
        // data: [3, 2, 2, 6, 4],
        data: arr.filter((item) => {
          return item.vac_18_45, item.vac_45_60, item.above_60;
        }),
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(255, 205, 86, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(153, 102, 255, 1)",
        ],
      },
    ],
  };

  const options = {
    title: {
      display: true,
      text: "Doughnut Chart",
    },
  };

  return <Doughnut data={data} options={options} />;
}

export default DoughnutChart;
