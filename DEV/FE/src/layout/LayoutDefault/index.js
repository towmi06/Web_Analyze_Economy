import { Layout, Dropdown, Space, Button } from "antd";
import "./LayoutDefault.scss";
import logo from "../../image/background_N4.png";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { CiFilter, CiGrid41, CiLogin, CiLogout } from "react-icons/ci";
import { GoDatabase } from "react-icons/go";
import { IoBarChartOutline } from "react-icons/io5";
import { getCookie } from "../../helpers/cookie";
import { useSelector } from "react-redux";
import { createContext } from "react";
import SearchCountry from "../../components/SearchCountry";
export const DataContext = createContext();

const { Content } = Layout;

function LayoutDefault() {
  const token = getCookie("token");
  const admin = getCookie("admin");

  useSelector(state => state.loginReducer);

  //Khởi tạo biến chứa giá trị nhận được khi chọn vào các mục của select
  const [changeYear, setChangeYear] = useState(2023);
  const [changeContinents, setChangeContinents] = useState("Southeast Asia");
  const [changeCountry, setChangeCountry] = useState("VietNam");

  //Khởi tạo biến chứa dữ liệu để select
  const [dataSelect, setdataSelect] = useState([]);
  const [selectYear, setSelectYear] = useState([]);

  //Bộ lọc và tìm kiếm
  const handleChangeContinents = (values) => {
    setChangeContinents(values);
  }
  const handleChangeYears = (values) => {
    setChangeYear(values);
  }
  const handleChangeCountry = (values) => {
    setChangeCountry(values);
  }
  //Lấy dữ liệu làm bộ lọc
  useEffect(() => {
    fetch("https://be-ttcs-1.onrender.com/api/data/selectCountry?Year=2024")
      .then(res => res.json())
      .then(data => {
        setdataSelect(data);
      })
  }, [])

  useEffect(() => {
    fetch("https://be-ttcs-1.onrender.com/api/data/selectYear?Country=VietNam")
      .then(res => res.json())
      .then(data => {
        setSelectYear(data);
      })
  }, [])

  //Tạo mảng các nước
  const selectCountry = dataSelect.map(item => ({
    Country: item.Country
  }));
  //Tạo mảng các châu lục
  const dataContinents = dataSelect.map(item => ({
    Continents: item.Continents
  }))

  //Xử lý các châu lục bị lặp
  const selectContinents = Array.from(
    new Map(dataContinents.map((item) => [item.Continents, item])).values()
  );
  //Lấy ra mảng châu lục cho phần tìm kiếm
  const arrContinents = selectContinents.map(item => item.Continents);
  //Hiển thị dữ liệu để lọc
  const items = [
    {
      key: '1',
      label: 'Châu lục',
      children: [
        {
          type: 'group',
          style: { height: '200px', overflowY: 'auto' },
          children:
            selectContinents.map((items, index) => ({
              key: `1-${index + 1}`,
              label: items.Continents,
              onClick: () => handleChangeContinents(items.Continents)
            }))
        }
      ]
    },
    {
      key: '2',
      label: 'Quốc gia',
      children: [
        {
          type: 'group',
          style: { height: '200px', overflowY: 'auto' },
          children:
            selectCountry.map((items, index) => ({
              key: `2-${index + 1}`,
              label: items.Country,
              onClick: () => handleChangeCountry(items.Country)
            }))
        }
      ]

    },
    {
      key: '3',
      label: 'Năm',
      children: [
        {
          type: 'group',
          style: { height: '200px', overflowY: 'auto' },
          children:
            selectYear.map((items, index) => ({
              key: `3-${index + 1}`,
              label: items.Year,
              onClick: () => handleChangeYears(items.Year)
            }))
        }
      ]
    },
  ];
  //Cuộn trang 
  const divRef1 = useRef(null);
  const divRef2 = useRef(null);
  const divRefAsia = useRef(null);
  const divRefAmerica = useRef(null);
  const divRefEurope = useRef(null);
  const divRefAfrica = useRef(null);

  const scrollToDiv = (divRef) => {
    if (divRef.current) {
      const offsetTop = divRef.current.getBoundingClientRect().top + window.pageYOffset - 72; // Điều chỉnh cuộn lên 72px
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth' // Cuộn mượt mà
      });
    }
  };

  const itemScroll = [
    {
      key: '1',
      label: (
        <a href="#2" onClick={(e) => {
          e.preventDefault();
          navigate("/", { state: { scrollTo: "divRef2" } });
          scrollToDiv(divRef2);
        }}>
          Southeast Asia
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a href="#asia" onClick={(e) => {
          e.preventDefault();
          navigate("/", { state: { scrollTo: "divRefAsia" } });
          scrollToDiv(divRefAsia)
        }}>
          Asia
        </a>
      ),
    },
    {
      key: '3',
      label: (
        <a href="#america" onClick={(e) => {
          e.preventDefault();
          navigate("/", { state: { scrollTo: "divRefAmerica" } });
          scrollToDiv(divRefAmerica);
        }}>
          America
        </a>
      ),
    },
    {
      key: '4',
      label: (
        <a href="#europe" onClick={(e) => {
          e.preventDefault();
          navigate("/", { state: { scrollTo: "divRefEurope" } });
          scrollToDiv(divRefEurope);
        }}>
          Europe
        </a>
      ),
    },
    {
      key: '5',
      label: (
        <a href="#africa" onClick={(e) => {
          e.preventDefault();
          navigate("/", { state: { scrollTo: "divRefAfrica" } });
          scrollToDiv(divRefAfrica);
        }}>
          Africa
        </a>
      ),
    },
  ];
  const navigate = useNavigate();
  return (
    <>
      <div className="border-around">
        <Layout>
          <header className="header">
            <div className="header__nav">
              <div className="header__nav--logo">
                <img src={logo} alt="Logo" />
              </div>
              <div className="header_link">
                <Button onClick={(e) => {
                  e.preventDefault();
                  navigate("/", { state: { scrollTo: "divRef1" } });
                  scrollToDiv(divRef1);
                }}>CHART</Button>
                <Dropdown
                  menu={{
                    items: itemScroll,
                  }}
                  placement="bottomLeft"
                >
                  <Space>
                    <Button>PREDICT</Button>
                  </Space>
                </Dropdown>
              </div>
              <div className="header__nav--title">
                <ul>
                  <li >
                    <NavLink to={"/"}>
                      <CiGrid41 />
                      <div className="name-icon">HOME</div>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/visitors"}>
                      <IoBarChartOutline />
                      <div className="name-icon">ANALYZE</div>
                    </NavLink>
                  </li>
                  {admin === "true" &&
                    <li>
                      <NavLink to={"/dataupdate"}>
                        <GoDatabase />
                        <div className="name-icon">DATA</div>
                      </NavLink>
                    </li>
                  }
                  <div className="filter">
                    <Dropdown
                      zIndex={1000}
                      menu={{ items }}
                    >
                      <Space>
                        <CiFilter />
                        <div className="name-icon">FILTER</div>
                      </Space>
                    </Dropdown>
                  </div>
                </ul>
              </div>
              <div className="header__nav--search">
                <div className="search--child">
                  {selectCountry && arrContinents &&
                    <DataContext.Provider value={{ selectCountry, arrContinents, handleChangeCountry, handleChangeContinents }}>
                      <SearchCountry />
                    </DataContext.Provider>
                  }
                </div>
                <ul>
                  <li>
                    {token ? (<div className="childr" >
                      <NavLink to={"/logout"}>
                        <CiLogout />
                        <div className="name-icon">LogOut</div>
                      </NavLink>
                    </div>) : (<div className="childr">
                      <NavLink to={"/login"}>
                        <CiLogin />
                        <div className="name-icon">Login</div>
                      </NavLink>
                    </div>)}
                  </li>
                </ul>
              </div>
            </div>
          </header>
          <Layout className="layout">
            <Content className="content">
              <DataContext.Provider value={{ changeYear, changeContinents, changeCountry, divRef1, divRef2, divRefAsia, divRefAmerica, divRefEurope, divRefAfrica, scrollToDiv }}>
                <Outlet />
              </DataContext.Provider>
            </Content>
          </Layout>
        </Layout>
      </div>

    </>
  )
}
export default LayoutDefault;