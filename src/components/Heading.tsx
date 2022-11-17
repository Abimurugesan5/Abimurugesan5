import React from "react";
import heading from "./heading.module.css";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input,Select,Radio } from 'antd';
const { Option } = Select;
function handleChange(value:any) {
  console.log(`selected ${value}`);
}

const Heading: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };
  return (
    <div>
    <h1>Login Form</h1>
    <Form
    layout='vertical'
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
      label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
      label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>    
      <Form.Item name="select-multiple"
        label="Select"
        rules={[{ required: true, message: 'Please select your Skillsets!', type: 'array' }]}>
         <Select
        defaultValue="lucy"
        style={{ width: 120 }}
        onChange={handleChange}
      >
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="disabled" disabled>
          Disabled
        </Option>
        <Option value="Yiminghe">yiminghe</Option>
      </Select>
        </Form.Item>
        <Form.Item name="radio-group" label="Gender">
        <Radio.Group>
          <Radio value="a">Female</Radio>
          <Radio value="b">Male</Radio>
          <Radio value="c">Other</Radio>
        </Radio.Group>  
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
      </Form.Item>
    </Form>
    </div>
  );
};
export default Heading;