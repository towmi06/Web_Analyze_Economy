import { EditOutlined } from "@ant-design/icons";
import { Button, Form, Modal, notification, Spin, Input } from "antd";
import { useContext, useState } from "react";
import { dataContinents } from "./index";
import { updateData } from "../../services/data.Services";
import { getCookie } from "../../helpers/cookie";

function EditData() {
  const admin = getCookie("admin");

  const { record, handleReload } = useContext(dataContinents);
  const [showmodal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  }
  const handleCancel = () => {
    setShowModal(false);
    form.resetFields();
  }
  const [form] = Form.useForm();
  const [notiApi, contextHolder] = notification.useNotification();
  const [spinning, setSpinning] = useState(false);

  const handleSubmit = async (values) => {
    setSpinning(true);
    const response = await updateData(record._id, values);
    setTimeout(() => {
      if (response) {
        notiApi.success({
          message: 'Cập nhật thành công',
          description: `Bạn đã cập nhật thành công dữ liệu nước ${record.Name}`
        });
        setShowModal(false);
        handleReload();
      } else {
        notiApi.error({
          message: 'Cập nhật thất bại',
          description: `Bạn đã cập nhật thất bại dữ liệu nước ${record.Name}`
        });
      }
      setSpinning(false);
    }, 1000);
  };
  return (
    <>
      {contextHolder}
      {admin === "true" ? (<Button type="primary" icon={<EditOutlined />} onClick={handleShowModal} size="small"  />)
        : (<Button type="primary" icon={<EditOutlined />} onClick={handleShowModal} size="small"  disabled={true}/>)
      }
      
      <Modal open={showmodal} onCancel={handleCancel} title={`Chỉnh sửa dữ liệu nước ${record.Name}`} footer={null} >
        <Spin spinning={spinning} tip="Đang cập nhật" >
          <Form layout="vertical" name={`create-data-${record._id}`} onFinish={handleSubmit} form={form} initialValues={record} >
            <Form.Item
              label="Quốc gia"
              name="Name"
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Tỷ lệ người dùng Internet"
              name="RateUserInternet"
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Thiết bị thông minh"
              name="SmartDevice"
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Doanh thu các sàn TMĐT"
              name="RevenueEcomPlat"
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Doanh thu ngành CNTT"
              name="RevenueItIndustry">

              <Input />
            </Form.Item>

            <Form.Item
              label="Tài trợ hạ tầng số"
              name="FundingDigital">
              <Input />
            </Form.Item>

            <Form.Item
              label="Đầu tư nước ngoài"
              name="ForeignInvestment">
              <Input />
            </Form.Item>

            <Form.Item
              label="Tỷ lệ chuyển đổi TD và NH"
              name="CreditBanking">
              <Input />
            </Form.Item>

            <Form.Item
              label="Doanh nghiệp chuyển đổi số"
              name="NumOfEnterprises">
              <Input />
            </Form.Item>

            <Form.Item
              label="Kinh tế giáo dục"
              name="EcoGrowthRate">
              <Input />
            </Form.Item>

            <Form.Item
              label="Khởi nghiệp công nghệ"
              name="NumOfTechnology">
              <Input />
            </Form.Item>

            <Form.Item
              label="Năm"
              name="Year">
              <Input />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Cập nhật
              </Button>
            </Form.Item>
          </Form>
        </Spin>
      </Modal>
    </>
  )
}
export default EditData;