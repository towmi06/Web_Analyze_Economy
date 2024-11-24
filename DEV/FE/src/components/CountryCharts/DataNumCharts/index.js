import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../../layout/LayoutDefault";
import { Column } from "@ant-design/plots";

function DataNumCharts() {
  const {changeCountry} = useContext(DataContext);
  const [dataCall, setDataCharts] = useState([]);

  useEffect(() => {
    fetch(`https://be-ttcs-1.onrender.com/api/data/numOf?Country=${changeCountry}`)
      .then(res => res.json())
      .then(data => {
        setDataCharts(data);
      })
  }, [changeCountry]);
  
  const NumOfEnterData = dataCall.map(item => ({
    year: item.Year,
    name: "Number of Enterprises Applying Digital Transformation (bussiness)",
    value: item["NumOfEnterprises"],
  }));

  const NumOfTechData = dataCall.map(item => ({
    year: item.Year,
    name: "Number of technology start up businesses",
    value: item["NumOfTechnology"]
  }));

  const dataCharts = [...NumOfEnterData, ...NumOfTechData];

  const config = {
    data: dataCharts,
    xField: "year",
    yField: "value",
    smooth: true,
    slider: {
      start: 0,
      end: 1
    },
    legend: {
      position: 'top'
    },

    seriesField: "name",
    isStack: true,
    connectedArea: true,
    autoFit: false,
    width: 340,
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
      <div className="charts-container">
        <div className="title">Biểu đồ phân tích qua các năm</div>
        <div className="charts">
          <Column {...config} />
        </div>
      </div>
    </>
  )
}
export default DataNumCharts;