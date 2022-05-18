import "./App.css";
import Header from "./components/Header/Header";
import LineChart from "./components/LineChart/LineChart";
import { facemaskData, portfolioData } from "./data/mockData";
import useWindowDimensions from "./hooks/useDimensions";

function App() {
  const { width, height } = useWindowDimensions();

  const margins = {
    top: 30,
    right: 30,
    bottom: 30,
    left: 60,
  };

  return (
    <div className="App">
      <div className="container">
        <Header />
        <LineChart
          dimensions={{ width: width * 0.8, height: height / 2 }}
          data={[facemaskData]}
          margins={margins}
        />
      </div>
    </div>
  );
}

export default App;
