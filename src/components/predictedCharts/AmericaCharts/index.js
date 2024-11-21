import { useEffect, useState } from "react";
import { Column } from '@ant-design/plots';
import "./america.scss";

function AmericaCharts() {
  const [predictedAsia, setPredictedAsia] = useState([]);

  useEffect(() => {
    fetch("https://be-ttcs-1.onrender.com/api/predicted?Continents=America")
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
      <div className="container-sa">
        <div className="container-sa__text-america">
          <h3>Dự đoán nền kinh tế số Châu Mỹ</h3>
          <div className="container-sa__text--content">
            Mỹ sẽ tiếp tục dẫn đầu trong lĩnh vực công nghệ với nhiều công ty hàng đầu và hệ sinh thái khởi nghiệp mạnh mẽ. Sự đổi mới sáng tạo sẽ là động lực chính, đặc biệt trong các lĩnh vực như trí tuệ nhân tạo và công nghệ xanh. Tuy nhiên, cạnh tranh quốc tế và các quy định pháp lý ngày càng chặt chẽ có thể ảnh hưởng đến sự phát triển của các công ty công nghệ . Thêm vào đó, việc phát triển các công nghệ mới như blockchain và Internet of Things (IoT) sẽ mở ra nhiều cơ hội mới cho nền kinh tế số của Mỹ.
          </div>
        </div>
        <div className="chartsame-predicted">
          <Column {...config} className="chartsame" />
          <div className="chartsame-name">
            Biểu đồ dự đoán nền kinh tế số Châu Mỹ
          </div>
        </div>
      </div>
    </>
  )
}
export default AmericaCharts;