import "./App.css";
import Header from "./components/Header/Header";
import LineChart from "./components/LineChart/LineChart";
import {
  HOME_FOOTER_CREDITS,
  HOME_INFO,
  HOME_SUBTITLE,
  HOME_TITLE,
} from "./constants/strings";
import { facemaskData } from "./data/mockData";
import useWindowDimensions from "./hooks/useDimensions";
import styled from "styled-components";
import Footer from "./components/Footer/Footer";
import Info from "./components/Info/Info";

const Container = styled.div`
  min-height: 100vh;
  background-color: #282c34;
  padding: 1em;
`;

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
      <Container>
        <Header title={HOME_TITLE} subtitle={HOME_SUBTITLE} />
        <LineChart
          dimensions={{ width: width * 0.8, height: height / 2 }}
          data={[facemaskData]}
          margins={margins}
        />
        <Info text={HOME_INFO} />
        <Footer credits={HOME_FOOTER_CREDITS} />
      </Container>
    </div>
  );
}

export default App;
