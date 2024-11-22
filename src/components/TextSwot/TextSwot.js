import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../layout/LayoutDefault";
import "./TextSwot.scss";
import { Card, Col, Collapse, Row } from "antd";

function TextSwot() {
  const { changeCountry } = useContext(DataContext);
  const [swotCountry, setSwotCountry] = useState();

  useEffect(() => {
    fetch(`https://be-ttcs-1.onrender.com/api/swot?Country=${changeCountry}`)
      .then(res => res.json())
      .then(data => {
        setSwotCountry(data);
      })
  }, [changeCountry])
  const items =  swotCountry ? swotCountry[0].GiaiDoan.map((item, indexf) => ({
      key: `${indexf}-gaidoan`,
      label: (
        <div className="giai-doan-label">
          {`${item.Period}`}
        </div>
      ),
      children: item.Nam.map((itemNam, indexs) => (
        <Collapse
          key={`${indexf}-${indexs}-collapse`}
          expandIcon={() => null}
          bordered={false}
          defaultActiveKey={[`${0}-${0}-item`]}
          items={[
            {
              key: `${indexf}-${indexs}-item`,
              label: itemNam.Year ? (
                <div className="collapse-label-year" key={`${indexf}-${indexs}-year`}>
                  {itemNam.Year}
                </div>
              ) : (
                <div className="collapse-label-default" key={`${indexf}-${indexs}-default`}>
                  Đánh giá
                </div>
              ),
              children: (
                <div className="collapse-children" key={`${indexf}-${indexs}-children`}>
                  {itemNam.Strengths.length > 0 && (
                    <div className="strengths-section" key={`${indexf}-${indexs}-strengths`}>
                      <div className="strengths-title">Điểm mạnh</div>
                      <div className="strengths-content">
                        {itemNam.Strengths.map((strength, strengthIndex) => (
                          <div
                            className="strength-item"
                            key={`${indexf}-${indexs}-strength-${strengthIndex}`}
                          >
                            {String.fromCharCode(45)} {strength}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  {itemNam.Weaknesses.length > 0 && (
                    <div className="weaknesses-section" key={`${indexf}-${indexs}-weaknesses`}>
                      <div className="weaknesses-title">Điểm yếu</div>
                      <div className="weaknesses-content">
                        {itemNam.Weaknesses.map((weakness, weaknessIndex) => (
                          <div
                            className="weakness-item"
                            key={`${indexf}-${indexs}-weakness-${weaknessIndex}`}
                          >
                            {String.fromCharCode(45)} {weakness}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  {itemNam.Opportunities.length > 0 && (
                    <div className="opportunities-section" key={`${indexf}-${indexs}-opportunities`}>
                      <div className="opportunities-title">Cơ hội</div>
                      <div className="opportunities-content">
                        {itemNam.Opportunities.map(
                          (opportunity, opportunityIndex) => (
                            <div
                              className="opportunity-item"
                              key={`${indexf}-${indexs}-opportunity-${opportunityIndex}`}
                            >
                              {String.fromCharCode(45)} {opportunity}
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  )}
                  {itemNam.Threats.length > 0 && (
                    <div className="threats-section" key={`${indexf}-${indexs}-threats`}>
                      <div className="threats-title">Thách thức</div>
                      <div className="threats-content">
                        {itemNam.Threats.map((threat, threatIndex) => (
                          <div
                            className="threat-item"
                            key={`${indexf}-${indexs}-threat-${threatIndex}`}
                          >
                            {String.fromCharCode(45)} {threat}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ),
            },
          ]}
        />
      )),
    }))
    : [];

  return (
    <Row gutter={[20, 20]}>
      <Col xxl={24} xl={24} lg={24} md={24} sm={24} xs={24}>
        <Card title={<div className="card-title">{swotCountry ? swotCountry[0].Name : ""}</div>} bordered={false}>
          <Collapse
            expandIcon={() => null}
            items={items}
            bordered={false}
            defaultActiveKey={[`${0}-gaidoan`]}
          />
          
        </Card>
        <div className="footer"></div>
      </Col>
      
    </Row>
  );
}
export default TextSwot;