import "./App.css";
import { globalStore } from "./Components/Store/Store";
import { Provider } from "react-redux";
import MainPage from "./Components/MainPage";
import CowinBar from "./Components/CowinBar";
import TopBar from "./Components/TopBar";

function App() {
  return (
    <Provider store={globalStore}>
      <div className='App'>
        <TopBar />
        <CowinBar />
        <MainPage />
      </div>
    </Provider>
  );
}
export default App;
