import { Col, Row } from "antd";
import TextSwot from "../../components/TextSwot/TextSwot";
import DataNumCharts from "../../components/CountryCharts/DataNumCharts";
import PerCentCountry from "../../components/CountryCharts/PerCentCountry";
import PieCountry from "../../components/CountryCharts/PieCountry";
import ReffCountry from "../../components/CountryCharts/ReffCountry";

function Visitors() {
  return (
    <>
      <Row gutter={[20, 20]}>
        <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
          <div className="boxtext">
            <TextSwot />
          </div>
        </Col>
        <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
          <Row gutter={[20, 20]}>
            <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
              <div className="boxc">
                < DataNumCharts />
              </div>
            </Col>
            <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
              <div className="boxc">
                <PieCountry />
              </div>
            </Col>
            <Col xxl={24} xl={24} lg={24} md={24} sm={24} xs={24}>
              <div className="boxc">
                <PerCentCountry />
              </div>
            </Col>
            <Col xxl={24} xl={24} lg={24} md={24} sm={24} xs={24}>
              <div className="boxc">
                <ReffCountry />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  )
}
export default Visitors;