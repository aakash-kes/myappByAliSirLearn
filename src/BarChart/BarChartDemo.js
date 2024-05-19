import React from "react";

import VerticalBarGraph from "@chartiful/react-vertical-bar-graph";

const BarChartDemo = () => {
  return (
    <>
      <div>
        <VerticalBarGraph
          data={[20, 45, 28, 80, 99, 43, 50]}
          labels={["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"]}
          width={500}
          height={300}
          barRadius={5}
          barWidthPercentage={0.65}
          baseConfig={{
            hasXAxisBackgroundLines: false,
            xAxisLabelStyle: {
              position: "right",
              prefix: "$",
            },
          }}
          style={{
            paddingVertical: 10,
          }}
        />


        
      </div>
    </>
  );
};

export default BarChartDemo;
