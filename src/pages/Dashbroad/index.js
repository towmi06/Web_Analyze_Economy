import { Col, Row } from "antd";
import DataNumberOf from "../../components/ContinentsCharts/DataNumberOf";
import ReffCharts from "../../components/ContinentsCharts/ReffCharts";
import PerCentCharts from "../../components/ContinentsCharts/PerCentCharts";
import PieCharts from "../../components/ContinentsCharts/PieCharts";
import MapCharts from "../../components/ContinentsCharts/MapCharts";
import Video from "../../components/video";
import AsiaCharts from "../../components/predictedCharts/AsiaCharts";
import EuropeCharts from "../../components/predictedCharts/EuropeCharts";
import AmericaCharts from "../../components/predictedCharts/AmericaCharts";
import AfricaCharts from "../../components/predictedCharts/AfricaCharts";
import SouAsiaCharts from "../../components/predictedCharts/SouAsiaCharts";
import led from "../../image/bongden.png";
import hands from "../../image/battay.png";
import growth from "../../image/bieudo.png";
import "./dashbroad.scss";
import { useContext, useEffect } from "react";
import { DataContext } from "../../layout/LayoutDefault";
import { useLocation } from "react-router-dom";
import img1 from "../../image/cuong.jpg";
import img2 from "../../image/thom.png";
import img3 from "../../image/hue.jpg";
import img4 from "../../image/nhung.jpg";
import img5 from "../../image/tai.jpg";
import img6 from "../../image/viet.jpg";
import img7 from "../../image/son.jpg";
import img8 from "../../image/tu.jpg";
import img9 from "../../image/hien.jfif";

function Dashbroad() {
  const { divRef1, divRef2, divRefAsia, divRefAmerica, divRefEurope, divRefAfrica, scrollToDiv } = useContext(DataContext);
  const location = useLocation();
  useEffect(() => {
    if (location.state?.scrollTo) {
      const targetRef = {
        divRef1,
        divRef2,
        divRefAsia,
        divRefAmerica,
        divRefEurope,
        divRefAfrica,
      }[location.state.scrollTo];
      if (targetRef) scrollToDiv(targetRef);
    }
  }, [location.state, divRef1, divRef2, divRefAsia, divRefAmerica, divRefEurope, divRefAfrica, scrollToDiv]);
  return (
    <>
      <Row gutter={[20, 20]}>
        <Col xxl={24} xl={24} lg={24} md={24} sm={24} xs={24} style={{ marginTop: '-10px', padding: '0' }}>
          <Video />
        </Col>
        <Col id="1" ref={divRef1} xxl={24} xl={24} lg={24} md={24} sm={24} xs={24}>
          <div className="desc-title-one">Chart of data analysis of continents over the years</div>
        </Col>
        <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
          <div className="boxm">
            <MapCharts />
          </div>
        </Col>
        <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
          <Row gutter={[20, 20]}>
            <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
              <div className="boxc">
                <DataNumberOf />
              </div>
            </Col>
            <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
              <div className="boxc">
                <ReffCharts />
              </div>
            </Col>
            <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
              <div className="boxc">
                <PerCentCharts />
              </div>
            </Col>
            <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
              <div className="boxc">
                <PieCharts />
              </div>
            </Col>
          </Row>
        </Col>
        <Col id="2" ref={divRef2} xxl={24} xl={24} lg={24} md={24} sm={24} xs={24}>
          <div className="desc-title-two">Chart predicting data across continents for the next year</div>
        </Col>
        <Col xxl={24} xl={24} lg={24} md={24} sm={24} xs={24}>
          <Row gutter={[20, 20]}>
            <Col xxl={24} xl={24} lg={24} md={24} sm={24} xs={24}>
              <div className="box">
                <SouAsiaCharts />
              </div>
            </Col>
            <Col id="asia" ref={divRefAsia} xxl={24} xl={24} lg={24} md={24} sm={24} xs={24} >
              <div className="box">
                <AsiaCharts />
              </div>
            </Col>
            <Col id="america" ref={divRefAmerica} xxl={24} xl={24} lg={24} md={24} sm={24} xs={24}>
              <div className="box">
                <AmericaCharts />
              </div>
            </Col>
            <Col id="europe" ref={divRefEurope} xxl={24} xl={24} lg={24} md={24} sm={24} xs={24} >
              <div className="box">
                <EuropeCharts />
              </div>
            </Col>
            <Col id="africa" ref={divRefAfrica} xxl={24} xl={24} lg={24} md={24} sm={24} xs={24} >
              <div className="box">
                <AfricaCharts />
              </div>
            </Col>
          </Row>
        </Col>

        <Col xxl={24} xl={24} lg={24} md={24} sm={24} xs={24}>
          <div className="container-content">
            <div className="title-content">
              Why attend?
            </div>
            <div className="box-content">
              <div className="desc-box-content">
                <img alt="" src={led} />
                <div className="title-desc">Understand</div>
                <div className="content-text">The strategic priorities for keeping up with the pace of change in cyber governance and resilience</div>
              </div>
              <div className="desc-box-content">
                <img alt="" src={hands} />
                <div className="title-desc">Network</div>
                <div className="content-text">With corporate leaders and experts from the sector and share experiences and ideas about tackling security challenges</div>
              </div>
              <div className="desc-box-content">
                <img alt="" src={growth} />
                <div className="title-desc">Benefit</div>
                <div className="content-text">From critical and impartial analysis of cyber attacks and the lessons learnt to protect your data and business</div>
              </div>
            </div>
          </div>
        </Col>

        <Col xxl={24} xl={24} lg={24} md={24} sm={24} xs={24}>
          <div className="footer-theme">
            <div className="title-foot">Representatives</div>
            <div className="content-foot">
              <div className="content-foot-item-group">
                <div className="content-foot-item">
                  <img alt="" src={img1} />
                  <div className="content-foot-item-desc">Do Dinh Cuong</div>
                </div>
                <div className="content-foot-item">
                  <img alt="" src={img2} />
                  <div className="content-foot-item-desc">Tran Thi Quynh Thom</div>
                  <div className="content-foot-item-desc-po">Team Leader</div>
                </div>
                <div className="content-foot-item">
                  <img alt="" src={img3} />
                  <div className="content-foot-item-desc">Vu Thi Hue</div>
                </div>
              </div>
              <div className="content-foot-item-group">
                <div className="content-foot-item">
                  <img alt="" src={img4} />
                  <div className="content-foot-item-desc">Tran Thi Kim Nhung</div>
                </div>
                <div className="content-foot-item">
                  <img alt="" src={img5} />
                  <div className="content-foot-item-desc">Nguyen Nhuan Tai</div>
                </div>
                <div className="content-foot-item">
                  <img alt="" src={img6} />
                  <div className="content-foot-item-desc">Ngo The Viet</div>
                </div>
              </div>
              <div className="content-foot-item-group">
                <div className="content-foot-item">
                  <img alt="" src={img7} />
                  <div className="content-foot-item-desc">Nguyen Viet Son</div>
                </div>
                <div className="content-foot-item">
                  <img alt="" src={img8} />
                  <div className="content-foot-item-desc">Le Dinh Tu</div>
                </div>
                <div className="content-foot-item">
                  <img alt="" src={img9} />
                  <div className="content-foot-item-desc">Nguyen Thi Thu Hien</div>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </>
  )
}
export default Dashbroad;