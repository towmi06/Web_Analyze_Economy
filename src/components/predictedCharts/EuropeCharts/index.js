import { useEffect, useState } from "react";
import { Column } from '@ant-design/plots';
import "./EuropeCharts.scss";

function EuropeCharts() {
  const [predictedAsia, setPredictedAsia] = useState([]);

  useEffect(() => {
    fetch("https://be-ttcs-1.onrender.com/api/predicted?Continents=Europe")
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
    width: 950,
    height: 350,

  };
  return (
    <>
      <div className="container-eu">
        <div className="chartseu-predicted">
          <Column {...config} className="charteu" />
          <div className="charteu-name">
            Biểu đồ dự đoán nền kinh tế số Châu Âu
          </div>
        </div>
        <div className="container-eu__text-europe">
          <h3>Dự đoán nền kinh tế số Châu Âu</h3>
          <div className="container-eu__text--content">
            Châu Âu sẽ tập trung vào phát triển các công nghệ bền vững và xanh, với sự hỗ trợ mạnh mẽ từ chính phủ và các tổ chức liên minh châu Âu. Thị trường chung châu Âu sẽ tạo điều kiện thuận lợi cho việc kinh doanh và phát triển công nghệ. Tuy nhiên, tốc độ tăng trưởng kinh tế chậm và chi phí lao động cao vẫn là những thách thức lớn . Ngoài ra, châu Âu cũng sẽ chú trọng vào việc phát triển các giải pháp an ninh mạng và bảo vệ dữ liệu cá nhân để đảm bảo sự an toàn trong môi trường số.
          </div>
        </div>
      </div>
    </>
  )
}

export default EuropeCharts;