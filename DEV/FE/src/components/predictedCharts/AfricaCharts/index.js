import { useEffect, useState } from "react";
import { Column } from '@ant-design/plots';
import "./africa.scss";

function AfricaCharts() {
  const [predictedAfica, setPredictedAsia] = useState([]);

  useEffect(() => {
    fetch("https://be-ttcs-1.onrender.com/api/predicted?Continents=Africa")
      .then(res => res.json())
      .then(data => {
        setPredictedAsia(data);
      })
  }, [predictedAfica])

  const dataActual = predictedAfica.map(items => ({
    Name: "Actual",
    Country: items.Country,
    Values: items["Actual"]
  }));

  const dataPredicted = predictedAfica.map(items => ({
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
    height: 420,

  };
  return (
    <>
      <div className="container-af">
        <div className="container-af__text">
          <h3>Dự đoán nền kinh tế số Châu Phi</h3>
          <div className="container-af__text--content">
            Châu Phi đang đứng trước cơ hội bùng nổ lớn trong lĩnh vực kinh tế số. Với dân số trẻ, am hiểu công nghệ và lực lượng lao động có khả năng thích ứng, châu Phi có tiềm năng trở thành một trung tâm quan trọng trong chuỗi cung ứng toàn cầu cho các lĩnh vực công nghệ cao như ô tô, điện thoại di động, năng lượng tái tạo và chăm sóc sức khỏe. Tuy nhiên, châu lục này vẫn đối mặt với nhiều thách thức như hạ tầng công nghệ chưa phát triển đồng đều và sự bất ổn chính trị tại một số khu vực. Trong tương lai, châu Phi có thể tận dụng cơ hội từ sự gia tăng đầu tư nước ngoài và hợp tác kinh tế với các cường quốc như Trung Quốc, Nga và Mỹ để thúc đẩy nền kinh tế số . Sự phát triển của các dịch vụ tài chính số và thương mại điện tử cũng sẽ đóng vai trò quan trọng trong việc thúc đẩy nền kinh tế số của châu lục này.
          </div>
          <div className="container-af__text--content">
            Nhìn chung, nền kinh tế số toàn cầu sẽ tiếp tục phát triển mạnh mẽ với sự gia tăng đầu tư vào công nghệ và đổi mới sáng tạo. Tuy nhiên, các thách thức về hạ tầng, quy định pháp lý và cạnh tranh quốc tế sẽ cần được giải quyết để đảm bảo sự phát triển bền vững.
          </div>
        </div>
        <div className="chartsaf-predicted">
          <Column {...config} className="chartaf" />
          <div className="chartaf-name">
            Biểu đồ dự đoán nền kinh tế số Châu Phi
          </div>
        </div>
      </div>
    </>
  )
}

export default AfricaCharts;