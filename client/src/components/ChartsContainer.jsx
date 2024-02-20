import React, { useState } from "react";
import BarChartBlock from "./BarChart";
import AreaChartBlock from "./AreaChart";
import Wrapper from "../assets/wrappers/ChartsContainer";

const ChartsContainer = ({ data }) => {
  const [barChart, setBarChart] = useState(false);
  return (
    <Wrapper>
      <h4>Monthly Application</h4>
      <button type="button" onClick={() => setBarChart(!barChart)}>
        {barChart ? "Area Chart" : "Bar Chart"}
      </button>
      {barChart ? (
        <BarChartBlock data={data} />
      ) : (
        <AreaChartBlock data={data} />
      )}
    </Wrapper>
  );
};

export default ChartsContainer;
