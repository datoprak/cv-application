import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Button, Form, Input, DatePicker } from "antd";

export default function Experience({
  experience,
  setExperience,
  totalExp,
  setTotalExp,
}) {
  const [isEditMode, setIsEditMode] = useState(false);

  const onFinish = values => {
    const { company, title, startDate, endDate, location, description } =
      values;
    console.log(startDate);
    setExperience(prevEdu => {
      return {
        ...prevEdu,
        company,
        title,
        startDate: startDate.year(),
        endDate: endDate.year(),
        location,
        description,
      };
    });
    saveEntry(values);
  };

  const saveEntry = values => {
    if (!experience.id) {
      const uid = uuidv4();
      const copyExp = { ...values };
      copyExp.id = uid;
      setExperience(copyExp);
      const copyTotal = [...totalExp];
      copyTotal.push(copyExp);
      setTotalExp(copyTotal);
    } else {
      const copyTotal = [...totalExp];
      const copyExp = copyTotal.find(exp => exp.id === experience.id);
      const index = copyTotal.indexOf(copyExp);
      copyTotal[index] = { ...values, id: experience.id };
      setTotalExp(copyTotal);
    }
    setIsEditMode(false);
    setExperience({
      id: "",
      company: "",
      title: "",
      startDate: "",
      endDate: "",
      location: "",
      description: "",
    });
  };

  const deleteEntry = () => {
    const copyTotal = [...totalExp];
    const deleteExp = copyTotal.find(exp => exp.id === experience.id);
    const index = copyTotal.indexOf(deleteExp);
    copyTotal.splice(index, 1);
    setTotalExp(copyTotal);
    setIsEditMode(false);
    setExperience({
      id: "",
      company: "",
      title: "",
      startDate: "",
      endDate: "",
      location: "",
      description: "",
    });
  };

  const cancelEntry = () => {
    setIsEditMode(false);
  };

  const handleEdit = id => {
    let editExp = totalExp.find(exp => exp.id === id);
    setExperience(editExp);
    setIsEditMode(true);
  };

  return (
    <section className="experience">
      <h2>Experience</h2>
      {isEditMode ? (
        <Form
          name="exp-form"
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
            label="Company"
            name="company"
            rules={[
              {
                required: true,
                message: "Please input your company!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Title"
            name="title"
            rules={[
              {
                required: true,
                message: "Please input your title!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Start Date"
            name="startDate"
            rules={[
              {
                required: true,
                message: "Please input your start date of education!",
              },
            ]}
          >
            <DatePicker picker="year" />
          </Form.Item>
          <Form.Item
            label="End Date"
            name="endDate"
            rules={[
              {
                required: true,
                message: "Please input your end date of education!",
              },
            ]}
          >
            <DatePicker picker="year" />
          </Form.Item>
          <Form.Item
            label="Location"
            name="location"
            rules={[
              {
                required: true,
                message: "Please input your location of education!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Description"
            name="description"
            rules={[
              {
                required: true,
                message: "Please input your description of your experience!",
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
            <Button type="primary" htmlType="submit">
              SAVE
            </Button>
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" onClick={cancelEntry}>
              CANCEL
            </Button>
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" danger onClick={deleteEntry}>
              DELETE
            </Button>
          </Form.Item>
        </Form>
      ) : (
        <>
          {totalExp.length > 0 &&
            totalExp.map(exp => {
              return (
                <div key={exp.id}>
                  <div className="school-name">
                    {exp.title} at {exp.company}
                  </div>
                  <Button type="primary" onClick={() => handleEdit(exp.id)}>
                    EDIT
                  </Button>
                </div>
              );
            })}
          <Button type="primary" onClick={() => setIsEditMode(!isEditMode)}>
            ADD
          </Button>
        </>
      )}
    </section>
  );
}