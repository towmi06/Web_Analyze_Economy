import { useContext, useEffect, useState } from "react";
import { DualAxes } from "@ant-design/plots";
import "./ReffCharts.scss";
import { DataContext } from "../../../layout/LayoutDefault";

function ReffCharts() {
  const {changeYear, changeContinents} = useContext(DataContext);
  const [dataCall, setDataCharts] = useState([]);

  useEffect(() => {
    fetch(`https://be-ttcs-1.onrender.com/api/data/refunfor?Year=${changeYear}&Continents=${changeContinents}`)
      .then(res => res.json())
      .then(data => {
        setDataCharts(data);
      })
  }, [changeYear, changeContinents]);

  const ReOfEPlatData = dataCall.map(item => ({
    Country: item.Country,
    name: "Revenue of e-commerce platforms (billion USD)",
    valuef: item["RevenueEcomPlat"],
  }));

  const ReOfItInData = dataCall.map(item => ({
    Country: item.Country,
    name: "Revenue of IT industry (billion USD)",
    valuef: item["RevenueItIndustry"]
  }));

  const FoInCapData = dataCall.map(item => ({
    Country: item.Country,
    name: "Foreign investment capital (billion USD)",
    valuef: item["ForeignInvestment"]
  }));

  const FunInDig = dataCall.map(item => ({
    Country: item.Country,
    values: item["FundingDigital"]
  }));

  const dataCharts = [...ReOfEPlatData, ...ReOfItInData, ...FoInCapData];

  const config = {
    data: [dataCharts, FunInDig],
    xField: "Country",
    yField: ["valuef", "values"],
    geometryOptions: [
      {
        geometry: 'column',
        isStack: true,
        seriesField: 'name',
        columnWidthRatio: 0.4,
      },
      {
        geometry: 'line',
        smooth: true,
      },
    ],

    slider: {
      start: 0,
      end: 1
    },
    legend: {
      position: 'top',
    },
    seriesField: "name",
    connectedArea: true,
    autoFit: false,
    width: 333,
    height: 165,
    tooltip: {
      customContent: (title, items) => {
        // `title` là giá trị ở trục x
        // `items` là mảng chứa thông tin các thành phần được hover (có thể có nhiều phần tử nếu stacked chart)
        return (
          `<div style="padding: 8px 4px;">
             <div style="margin-bottom:5px;">${title}</div>
             ${items.map(item => `
               <div style="display: flex; align-items: center;">
                 <span style="background-color: ${item.color}; width: 8px; height: 8px; display: inline-block; margin-right: 8px;"></span>
                 <span> <strong>${item.value}</strong></span>
               </div>
             `).join('')}
           </div>`
        );
      },
    },
  };

  return (
    <>
      <div className="reffcharts">
        <div className="title">Biểu đồ {changeContinents} năm {changeYear}</div>
        <div>
          <DualAxes {...config} />
        </div>
      </div>
    </>
  )
}
export default ReffCharts;