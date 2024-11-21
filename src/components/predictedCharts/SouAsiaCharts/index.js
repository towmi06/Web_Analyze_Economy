import { useEffect, useState } from "react";
import { Column } from '@ant-design/plots';
import "./SuuAsiaCharts.scss";

function SouAsiaCharts() {
  const [predictedAsia, setPredictedAsia] = useState([]);

  useEffect(() => {
    fetch("https://be-ttcs-1.onrender.com/api/predicted?Continents=Southeast%20Asia")
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
    width: 700,
    height: 350,

  };
  return (
    <>
      <div className="container-sa">
        <div className="container-sa__text">
          <h3>Dự đoán nền kinh tế số Đông Nam Á</h3>
          <div className="container-sa__text--content">
            Đông Nam Á  Nền kinh tế số của Đông Nam Á dự kiến sẽ tiếp tục tăng trưởng mạnh mẽ nhờ vào dân số trẻ và sự phát triển nhanh chóng của công nghệ. Các quốc gia trong khu vực này sẽ thu hút nhiều đầu tư nước ngoài vào lĩnh vực công nghệ và khởi nghiệp. Tuy nhiên, sự chênh lệch về hạ tầng và mức độ phát triển giữa các quốc gia vẫn là thách thức lớn . Ngoài ra, sự gia tăng của thương mại điện tử và các dịch vụ tài chính số sẽ đóng vai trò quan trọng trong việc thúc đẩy nền kinh tế số của khu vực này.
          </div>
          <div className="container-sa__text--content">
            Theo báo cáo e-Conomy SEA 2024 của Google, Temasek và Bain & Company, trong năm 2024 nền kinh tế số Việt Nam tiếp tục đạt tăng trưởng mạnh mẽ với những bước tiến đáng kể trong lĩnh vực thương mại điện tử, tài chính số, và thanh toán không dùng tiền mặt.Tổng giá trị giao dịch (GMV) của nền kinh tế số Việt Nam dự kiến đạt 36 tỷ USD, tăng trưởng 16% so với năm trước, trong đó thương mại điện tử chiếm tỉ trọng lớn nhất, tăng 18% đạt 22 tỉ USD.Ngành này hiện chiếm tỉ trọng cao nhất trong nền kinh tế số, tạo ra một môi trường cạnh tranh cao giữa các doanh nghiệp trong nước và quốc tế.Trong đó các ngành vận tải và thực phẩm đóng góp 4 tỉ USD, du lịch trực tuyến góp 5 tỉ USD và truyền thông trực tuyến góp 6 tỉ USD.Việt Nam đang tiến nhanh đến một xã hội không dùng tiền mặt, với việc thanh toán qua mã QR và ví điện tử trở nên phổ biến hơn bao giờ hết. Các sáng kiến của Chính phủ, bao gồm tiêu chuẩn hóa hệ thống thanh toán và tăng cường tính tương tác, đã thúc đẩy mạnh mẽ quá trình chuyển đổi này
          </div>
        </div>
        <div className="chartssa-predicted">
          <Column {...config} className="chartsa"/>
          <div className="chartsa-name">
            Biểu đồ dự đoán nền kinh tế số Đông Nam Á
          </div>
        </div>
      </div>
    </>
  )
}

export default SouAsiaCharts;