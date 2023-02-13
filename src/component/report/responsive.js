import React, { useState } from "react";
import { Form, Input, Button, Row, Col } from "antd";

const StudentSignUpForm = () => {
  const [form] = Form.useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onFinish = async (values) => {
    setIsSubmitting(true);
    // Handle form submission, for example by sending a request to your API
    console.log("Success:", values);
    setIsSubmitting(false);
  };

  return (
    <Form
      className="forn-container"
      form={form}
      onFinish={onFinish}
      layout="vertical"
      size="large"
      responsive={{
        xs: { span: 24 },
        sm: { span: 12 },
        md: { span: 8 },
        lg: { span: 6 },
        xl: { span: 4 },
      }}
    >
      <Form.Item
        name="name"
        label="Name"
        rules={[{ required: true, message: "Please input your name!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="email"
        label="Email"
        rules={[{ required: true, message: "Please input your email!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item>
        <Row justify="center">
          <Col>
            <Button type="primary" htmlType="submit" loading={isSubmitting}>
              Submit
            </Button>
          </Col>
        </Row>
      </Form.Item>
    </Form>
  );
};

export default StudentSignUpForm;
