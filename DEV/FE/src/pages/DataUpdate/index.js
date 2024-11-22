import { createContext, useContext, useEffect, useState } from "react";
import { Table } from "antd";
import "./dataupdate.scss";
import EditData from "./EditData";
import { DataContext } from "../../layout/LayoutDefault";
export const dataContinents = createContext();

function DataUpdate() {
  const { changeYear, changeContinents } = useContext(DataContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://be-ttcs-1.onrender.com/api/data?Year=${changeYear}&Continents=${changeContinents}`)
      .then(res => res.json())
      .then(data => {
        setData(data);
      })
  }, [changeYear, changeContinents]);

  const handleReload = () => {
    fetch(`https://be-ttcs-1.onrender.com/api/data?Year=${changeYear}&Continents=${changeContinents}`)
      .then(res => res.json())
      .then(data => {
        setData(data);
      });
  }

  const columns = [
    {
      title: 'Quốc gia',
      dataIndex: 'Name',
      key: `name`
    },
    {
      title: 'Tỷ lệ người dùng Internet',
      dataIndex: 'RateUserInternet',
      key: `RateUserInternet`
    },
    {
      title: 'Thiết bị thông minh',
      dataIndex: 'SmartDevice',
      key: `SmartDevice`
    },
    {
      title: 'Doanh thu các sàn TMĐT',
      dataIndex: 'RevenueEcomPlat',
      key: 'RevenueEcomPlat',
    },
    {
      title: 'Doanh thu ngành CNTT',
      dataIndex: 'RevenueItIndustry',
      key: 'RevenueItIndustry',
    },
    {
      title: 'Tài trợ hạ tầng số',
      dataIndex: 'FundingDigital',
      key: 'FundingDigital',
    },
    {
      title: 'Đầu tư nước ngoài',
      dataIndex: 'ForeignInvestment',
      key: 'ForeignInvestment',
    },
    {
      title: 'Tỷ lệ chuyển đổi TD và NH',
      dataIndex: 'CreditBanking',
      key: 'CreditBanking',
    },
    {
      title: 'Doanh nghiệp chuyển đổi số',
      dataIndex: 'NumOfEnterprises',
      key: 'NumOfEnterprises',
    },
    {
      title: 'Kinh tế giáo dục',
      dataIndex: 'EcoGrowthRate',
      key: 'EcoGrowthRate',
    },
    {
      title: 'Khởi nghiệp công nghệ',
      dataIndex: 'NumOfTechnology',
      key: 'NumOfTechnology',
    },
    {
      title: 'Năm',
      dataIndex: 'Year',
      key: 'Year',
    },
    {
      title: 'Chỉnh sửa',
      key: 'actions',
      render: (_, record) => {
        return <>
          <dataContinents.Provider value={{ record, handleReload }}>
            <EditData />
          </dataContinents.Provider>
        </>
      },
    },
  ];
  return (
    <>
      <h1>Dữ liệu của các nước</h1>
      {data && <Table dataSource={data} columns={columns} rowKey="_id" />}
    </>
  );
}
export default DataUpdate;