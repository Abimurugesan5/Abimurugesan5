import React, { Fragment, useState } from "react";
import { Form, Input, Typography, Button } from "antd";

function AntForm() {
	const [complete, setComplete] = useState(false);

	const onFinish = () => {
		setComplete(true);
	}

	if (complete) {
		return (
			<Typography.Title data-testid="complete">Complete</Typography.Title>
		)
	}

	return (
		<Fragment>
			<Typography.Title>Demo Form</Typography.Title>
			<Form name="test" onFinish={onFinish}>
				<Form.Item
					name="username"
					rules={[{ required: true, message: "Username required" }]}>
					 <Input placeholder="Username" label="User name" data-testid="user" type="text"/>
				</Form.Item>
                <Form.Item
      label="Password"
        name="password"
        rules={[{ required: true, message: 'Password! required' }]}
      >
        <Input
          data-testid="password"
          type="password"
          placeholder="Password"
        />
      </Form.Item> 
				<Form.Item>
					<Button type="primary" htmlType="submit">
						Submit
					</Button>
				</Form.Item>
			</Form>
		</Fragment>
	);
}

export default AntForm;