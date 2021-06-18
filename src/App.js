import React from "react";
import Header from "./components/Header/Header";
import Chart from "./components/Chart"
import Dummy from "./components/Dummy"
import Tab from "./components/Tab"
import { Container} from "@material-ui/core";

export default function App() {
  

  const widget = (
    <>
      <Dummy/>
      <Tab/>
      <Chart/>
    </>
  );

  return (
    <div>
      <Header
        widget={
          <Container
            maxWidth="100%"
            style={{ width: "95%" }}
            children={widget}
          />
        }
      />
    </div>
  );
}
