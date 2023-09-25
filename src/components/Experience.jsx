import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Button, Form, Input, DatePicker, Checkbox } from "antd";
import "../styles/GIEduExp.css";
import { EMPTY_CV } from "../util/exampleCVs";

export default function Experience({
  experience,
  setExperience,
  totalExp,
  setTotalExp,
}) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [check, setCheck] = useState(false);

  const onFinish = values => {
    let { company, title, startDate, endDate, location, description } = values;
    endDate = check ? "present" : endDate.year();
    values = { ...values, endDate };
    setExperience(prevEdu => {
      return {
        ...prevEdu,
        company,
        title,
        startDate: startDate.year(),
        endDate,
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
    setExperience(EMPTY_CV.totalExp[0]);
  };

  const deleteEntry = () => {
    const copyTotal = [...totalExp];
    const deleteExp = copyTotal.find(exp => exp.id === experience.id);
    const index = copyTotal.indexOf(deleteExp);
    copyTotal.splice(index, 1);
    setTotalExp(copyTotal);
    setIsEditMode(false);
    setExperience(EMPTY_CV.totalExp[0]);
  };

  const cancelEntry = () => setIsEditMode(false);

  const handleEdit = id => {
    let editExp = totalExp.find(exp => exp.id === id);
    setExperience(editExp);
    setIsEditMode(true);
  };

  const checkCurrent = e =>
    e.target.checked ? setCheck(true) : setCheck(false);

  return (
    <section className="experience">
      <div className="entry-header">
        <span className="material-symbols-outlined">work</span>
        <h2>Experience</h2>
      </div>
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
                required: !check,
                message: "Please input your end date of education!",
              },
            ]}
          >
            <DatePicker picker="year" disabled={check} />
          </Form.Item>

          <Form.Item label="Present" name="check">
            <Checkbox onChange={checkCurrent}></Checkbox>
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
          <div className="edit-mode-btns">
            <Form.Item>
              <Button className="antbtn" type="primary" htmlType="submit">
                SAVE
              </Button>
            </Form.Item>
            <Form.Item>
              <Button className="antbtn" type="primary" onClick={cancelEntry}>
                CANCEL
              </Button>
            </Form.Item>
            <Form.Item>
              <Button
                className="antbtn"
                type="primary"
                danger
                onClick={deleteEntry}
              >
                DELETE
              </Button>
            </Form.Item>
          </div>
        </Form>
      ) : (
        <>
          {totalExp.length > 0 &&
            totalExp.map(exp => {
              return (
                <div key={exp.id} className="exp-entries-title">
                  <div className="company-name">&#x2022; {exp.company}</div>
                  <Button
                    className="antbtn"
                    type="primary"
                    shape="circle"
                    onClick={() => handleEdit(exp.id)}
                  >
                    <span className="material-symbols-outlined">edit</span>
                  </Button>
                </div>
              );
            })}
          <Button
            className="antbtn"
            type="primary"
            onClick={() => setIsEditMode(!isEditMode)}
          >
            ADD
          </Button>
        </>
      )}
    </section>
  );
}
