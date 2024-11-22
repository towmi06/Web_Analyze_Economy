import { useContext, useEffect, useState } from "react";
import { DualAxes } from "@ant-design/plots";
import "./PerCentCharts.scss";
import { DataContext } from "../../../layout/LayoutDefault";

function PerCentCharts() {
  const {changeYear, changeContinents} = useContext(DataContext);
  const [dataCall, setDataCharts] = useState([]);

  useEffect(() => {
    fetch(`https://be-ttcs-1.onrender.com/api/data/rateSmartCre?Year=${changeYear}&Continents=${changeContinents}`)
      .then(res => res.json())
      .then(data => {
        setDataCharts(data);
      })
  }, [changeYear, changeContinents]);

  const ReOfUsersInData = dataCall.map(item => ({
    Country: item.Country,
    namef: "Rate of users Internet (%)",
    valuef: item["RateUserInternet"],
  }));

  const MoDeUsaData = dataCall.map(item => ({
    Country: item.Country,
    names: "Smart Device (%)",
    values: item["SmartDevice"]
  }));

  const CreBanTranData = dataCall.map(item => ({
    Country: item.Country,
    names: "CREDIT and BANKING digital transformation ratio(%)",
    values: item["CreditBanking"]
  }));

  const lineCharts = [...MoDeUsaData, ...CreBanTranData];

  const config = {
    data: [ReOfUsersInData, lineCharts],
    xField: "Country",
    yField: ["valuef", "values"],
    geometryOptions: [
      {
        geometry: 'column',
        isStack: true,
        seriesField: 'namef',
        columnWidthRatio: 0.4,
      },
      {
        geometry: 'line',
        seriesField: 'names',
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
      <div className="percent-charts">
        <div className="title">Biểu đồ {changeContinents} năm {changeYear}</div>
        <div>
          <DualAxes {...config} />
        </div>
      </div>
    </>
  )
}
export default PerCentCharts;