import React from 'react';
import { Chart } from "react-google-charts";
import './App.css';

export const data = [
  ["اسم المرشح", "عدد الاصوات"],
  ["ماهر صلاح", 4],
  ["محمود جبارين - تكتك", 4],
  ["حسن اغبارية", 3],
  ["محمد جلال اغبارية", 2],
  ["محمد تيسير اغبارية", 2],
];

export const options = {
  // title: "استطلاع رأي للانتخابات المحلية",
  pieHole: 0.4,
  is3D: true,
  // backgroundColor: '#f1f3f4',
  titleTextStyle: {
    fontSize: 47,
    bold: true,
  }
};

function App() {
  return (
    <div className="App">
      <div className="chart-header">
        استطلاع رأي (סקר) لانتخابات المجلس المحلي طلعة عارة
      </div>
          <Chart
              chartType="PieChart"
              width="100%"
              height="500px"
              data={data}
              options={options}
          />

    </div>
  );
}

export default App;
