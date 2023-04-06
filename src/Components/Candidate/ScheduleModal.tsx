import {
  Modal,
  Form,
  Select,
  DatePicker,
  TimePicker,
  Button,
  message,
} from "antd";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const ScheduleModal = (props: any) => {
  const [form] = Form.useForm();

  const handleSave = () => {
    form.validateFields().then((values) => {
      message.success("Interview Scheduled Successfully!");
      console.log(values);
      form.resetFields();
      props.setOpen((prev: boolean) => !prev);
    });
  };

  return (
    <Modal
      centered
      title="Schedule Interview"
      closable={false}
      open={props.visible}
      width="400px"
      onOk={handleSave}
      footer={
        <>
          <Button
            onClick={() => {
              props.setOpen((prev: boolean) => !prev);
            }}
          >
            Cancel
          </Button>
          <Button onClick={handleSave} type="primary">
            Schedule
          </Button>
        </>
      }
    >
      <br />
      <Form labelAlign={"left"} {...layout} form={form}>
        <Form.Item
          name="roundDetail"
          label="Round Detail"
          rules={[{ required: true, message: "Please Select Round" }]}
        >
          <Select placeholder="Select Round">
            <Select.Option value="round1">Round Number 1</Select.Option>
            <Select.Option value="round2">Round Number 2</Select.Option>
            <Select.Option value="round3">Round Number 3</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="offerType"
          label="Offer Type"
          rules={[{ required: true, message: "Please Select Offer Type" }]}
        >
          <Select placeholder="Select Offer Type">
            <Select.Option value="Full Time only">Full Time only</Select.Option>
            <Select.Option value="6 Months (Contract)">
              6 Months (Contract)
            </Select.Option>
            <Select.Option value="2 Months Internship">
              2 Months Internship
            </Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="date"
          label="Date"
          rules={[{ required: true, message: "Please Enter Interview Date" }]}
        >
          <DatePicker
            placeholder="Interview Date (yyyy:mm:dd)"
            format="YYYY-MM-DD"
            style={{ width: "100%" }}
          />
        </Form.Item>
        <Form.Item
          name="time"
          label="Time"
          rules={[{ required: true, message: "Please Enter Interview Time" }]}
        >
          <TimePicker
            placeholder="Interview Time (hh:mm)"
            format="HH:mm"
            style={{ width: "100%" }}
          />
        </Form.Item>
        <br />
      </Form>
    </Modal>
  );
};

export default ScheduleModal;
