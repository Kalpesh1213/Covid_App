import ContainerSummary from "./ContainerSummary/ContainerSummary";
import { LineChartByDoses } from "./Charts/LineChartByDoses";
import BarChart from "./Charts/BarChart";
import { LineChartByAge } from "./Charts/LineChartByAge";
import { LineChartAefiData } from "./Charts/LineChartAefiData";
import { LineChartTrend } from "./Charts/LineChartTrend";
import { LineChartRegTrends } from "./Charts/LineChartRegTrends";
import { useSelector } from "react-redux";
import PieChart from "./Charts/PieChart";

function MainPage() {
  const btn = useSelector((state) => state.buttonClicked);
  return (
    <div className='App'>
      <ContainerSummary />
      {btn ? <LineChartByDoses /> : <LineChartByAge />}

      <div
        className='container'
        style={{
          display: "flex",
          justifyContent: "space-around",
          backgroundColor: "white",
        }}>
        <div>
          <p>AEFI Reported</p>
          <LineChartAefiData />
        </div>
        <div>
          <p>Rural Vs Urban Trend</p>
          <LineChartTrend />
        </div>
      </div>

      <LineChartRegTrends />
      <BarChart />
      {/* <PieChart /> */}
    </div>
  );
}
export default MainPage;
