import { useEffect, useState } from "react";
import { Column } from '@ant-design/plots';
import "./asia.scss";
function AsiaCharts() {
  const [predictedAsia, setPredictedAsia] = useState([]);

  useEffect(() => {
    fetch("https://be-ttcs-1.onrender.com/api/predicted?Continents=Asia")
      .then(res => res.json())
      .then(data => {
        setPredictedAsia(data);
      })
  }, [predictedAsia])

  const dataActual = predictedAsia.map(items => ({
    Name: "Actual",
    Country: items.Country,
    Values: items["Actual"]
  }));

  const dataPredicted = predictedAsia.map(items => ({
    Name: "Predicted",
    Country: items.Country,
    Values: items["Predicted"]
  }));

  const data = [...dataActual, ...dataPredicted];
  const config = {
    data: data,
    isGroup: true,
    xField: 'Country',
    yField: 'Values',
    seriesField: 'Name',
    smooth: true,
    slider: {
      start: 0,
      end: 1
    },
    legend: {
      position: 'top'
    },
    isStack: false,
    connectedArea: true,
    autoFit: false,
    width: 750,
    height: 350,

  };
  return (
    <>
      <div className="container-as">
        <div className="chartssa-predicted">
          <Column {...config} className="chartsa" />
          <div className="chartsa-name">
            Biểu đồ dự đoán nền kinh tế số Châu Á
          </div>
        </div>
        <div className="container-as__text-asia">
          <h3>Dự đoán nền kinh tế số Châu Á</h3>
          <div className="container-as__text--content">
            Châu Á, đặc biệt là Trung Quốc và Ấn Độ, sẽ tiếp tục tăng trưởng nhanh chóng trong lĩnh vực kinh tế số nhờ vào dân số lớn và thị trường tiêu dùng rộng. Sự đầu tư vào công nghệ và khởi nghiệp sẽ gia tăng, nhưng sự chênh lệch về mức độ phát triển kinh tế và hạ tầng giữa các quốc gia vẫn là vấn đề cần giải quyết . Hơn nữa, châu Á sẽ chứng kiến sự phát triển mạnh mẽ của các nền tảng thương mại điện tử và dịch vụ tài chính số, góp phần thúc đẩy nền kinh tế số của khu vực.
          </div>
        </div>
      </div>
    </>
  )
}

export default AsiaCharts;