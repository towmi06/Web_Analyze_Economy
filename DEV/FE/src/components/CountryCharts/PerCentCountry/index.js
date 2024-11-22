import { useContext, useEffect, useState } from "react";
import { DualAxes } from "@ant-design/plots";
import { DataContext } from "../../../layout/LayoutDefault";

function PerCentCountry() {
  const {changeCountry} = useContext(DataContext);
  const [dataCall, setDataCharts] = useState([]);

  useEffect(() => {
    fetch(`https://be-ttcs-1.onrender.com/api/data/rateSmartCre?Country=${changeCountry}`)
      .then(res => res.json())
      .then(data => {
        setDataCharts(data);
      })
  }, [changeCountry]);

  const ReOfUsersInData = dataCall.map(item => ({
    year: item.Year,
    namef: "Rate of users Internet (%)",
    valuef: item["RateUserInternet"],
  }));

  console.log(ReOfUsersInData);
  const MoDeUsaData = dataCall.map(item => ({
    year: item.Year,
    names: "Smart Device (%)",
    values: item["SmartDevice"]
  }));

  const CreBanTranData = dataCall.map(item => ({
    year: item.Year,
    names: "CREDIT and BANKING digital transformation ratio(%)",
    values: item["CreditBanking"]
  }));

  const lineCharts = [...MoDeUsaData, ...CreBanTranData];

  const config = {
    data: [ReOfUsersInData, lineCharts],
    xField: "year",
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
    width: 700,
    height: 185,
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
        <div className="title">Biểu đồ phân tích qua các năm</div>
        <div>
          <DualAxes {...config} />
        </div>
      </div>
    </>
  )
}
export default PerCentCountry;