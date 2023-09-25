import { useState } from "react";
import { Button, Form, Input } from "antd";
import "../styles/GIEduExp.css"

export default function GeneralInfo({ person, setPerson }) {
  const [isEditMode, setIsEditMode] = useState(true);
  const fullName = `${person.firstName} ${person.lastName}`;

  const onFinish = values => {
    setPerson(prevPerson => {
      return { ...prevPerson, ...values };
    });
    setIsEditMode(false);
  };

  return (
    <section className="general-info">
      <div className="entry-header">
        <span className="material-symbols-outlined">person</span>
        <h2>General Info</h2>
      </div>
      {isEditMode ? (
        <>
          <Form
            name="general-info-form"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              maxWidth: 600,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              label="First Name"
              name="firstName"
              rules={[
                {
                  required: true,
                  message: "Please input your first name!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Last Name"
              name="lastName"
              rules={[
                {
                  required: true,
                  message: "Please input your last name!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="E-mail"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your e-mail!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Phone"
              name="phone"
              rules={[
                {
                  required: true,
                  message: "Please input your phone number!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Address"
              name="address"
              rules={[
                {
                  required: true,
                  message: "Please input your address!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button className="antbtn" type="primary" htmlType="submit">
                SAVE
              </Button>
            </Form.Item>
          </Form>
        </>
      ) : (
        <>
          <div className="fullName">{fullName}</div>
          <div className="email">{person.email}</div>
          <div className="phone">{person.phone}</div>
          <div className="address">{person.address}</div>
          <Button
            className="antbtn ginfo-edit"
            type="primary"
            shape="circle"
            onClick={() => setIsEditMode(true)}
          >
            <span className="material-symbols-outlined">edit</span>
          </Button>
        </>
      )}
    </section>
  );
}
