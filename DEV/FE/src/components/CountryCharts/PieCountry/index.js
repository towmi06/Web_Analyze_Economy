import { useContext, useEffect, useState } from "react";
import { Pie } from "@ant-design/plots";
import { DataContext } from "../../../layout/LayoutDefault";

function PieCountry() {
  const {changeCountry} = useContext(DataContext);
  const [dataCall, setDataCharts] = useState([]);
  
  useEffect(() => {
    fetch(`https://be-ttcs-1.onrender.com/api/data/ecogrow?Country=${changeCountry}`)
      .then(res => res.json())
      .then(data => {
        setDataCharts(data);
      })
  }, [changeCountry]);

  const config = {
    data: dataCall,
    angleField: "EcoGrowthRate",
    colorField: "Year",
    label: {
      type: 'inner',
      offset: '-30%',
      content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
      style: {
        fontSize: 14,
        textAlign: 'center',
        fill: '#000'
      },
    },
    interactions: [
      {
        type: 'element-active',
      },
    ],
    autoFit: false,
    width: 350,
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
      <div className="pie-charts">
        <div className="title">Biểu đồ phân tích qua các năm</div>
        <div>
          <Pie {...config} />
        </div>
      </div>
    </>
  )
}
export default PieCountry;