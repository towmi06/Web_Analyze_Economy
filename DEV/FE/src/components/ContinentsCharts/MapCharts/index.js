import * as am5map from "@amcharts/amcharts5/map";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";
import * as am5 from "@amcharts/amcharts5";
import { useContext, useEffect, useLayoutEffect, useState } from "react";
import { DataContext } from "../../../layout/LayoutDefault";

function MapCharts() {
  const { changeYear } = useContext(DataContext);
  const [dataMap, setDataMap] = useState([]);

  useEffect(() => {
    fetch(`https://be-ttcs-1.onrender.com/api/data/dataCountry?Year=${changeYear}`)
      .then(res => res.json())
      .then(data => {
        setDataMap(data);
      })
  },[changeYear])

  useLayoutEffect(() => {
    let root = am5.Root.new("chartdiv");

    let chart = root.container.children.push(
      am5map.MapChart.new(root, {
        panX: "rotateX",
        projection: am5map.geoEquirectangular()
      })
    );

    // Dữ liệu với tên quốc gia
    const data = dataMap.map(items => ({
      MS: items.Code,
      name: items.Name,
      RateUserInternet: items.RateUserInternet,
      SmartDevice: items.SmartDevice,
      RevenueEcomPlat: items.RevenueEcomPlat
    }))
      // {
      //   MS: "US",
      //   name: "Hoa Kỳ",
      //   RateUserInternet: 47,
      //   SmartDevice: 68,
      //   RevenueEcomPlat: 0.5,
      // }
      // Thêm dữ liệu cho các quốc gia khác nếu cần

    // Hàm hỗ trợ để lấy dữ liệu theo mã quốc gia
    const getDataById = (id) => data.find(item => item.MS === id);

    // Tạo series đa giác
    let polygonSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_worldLow,
        exclude: ["AQ"]
      })
    );

    // Thiết lập tooltip hiển thị dữ liệu có điều kiện
    polygonSeries.mapPolygons.template.setAll({
      tooltipHTML: `
        <div style="font-weight: bold; font-size:12px;">{title}</div>
      `,
      interactive: true,
      tooltipText: ""
    });

    // Thiết lập nội dung tooltip dựa trên dữ liệu
    polygonSeries.mapPolygons.template.adapters.add("tooltipHTML", function (tooltip, target) {
      const countryData = getDataById(target.dataItem.get("id"));

      if (countryData) {
        // Hiển thị thêm dân số và GDP nếu có dữ liệu
        return `
          <div>
            <div style="font-weight: bold; font-size:12px;">${countryData.name}</div>
            <div style="font-size: 12px;">Người dùng Internet: <span>${countryData.RateUserInternet}%</span></div>
            <div style="font-size: 12px;">Thiết bị thông minh: <span>${countryData.SmartDevice}%</span></div>
            <div style="font-size: 12px;">Doanh thu các sàn TMĐT: <span>${countryData.RevenueEcomPlat} tỷ USD</span></div>
          </div>
        `;
      }
      // Chỉ hiển thị tên nếu không có dữ liệu
      return `
        <div style="font-weight: bold; font-size:12px;">{name}</div>
      `;
    });

    polygonSeries.mapPolygons.template.states.create("hover", {
      fill: am5.color(0x67788)
    });

    // Thêm legend
    let legend = chart.children.push(am5.Legend.new(root, {}));
    legend.data.setAll(chart.series.values);

    return () => {
      root.dispose();
    };
  }, [dataMap]);

  return (
    <>
      <div id="chartdiv" className="mapcharts" style={{ width: "720px", height: "445px" }}></div>
    </>
  );
}

export default MapCharts;
