import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Button, Form, Input, DatePicker, Checkbox } from "antd";
import "../styles/GIEduExp.css";
import { EMPTY_CV } from "../util/exampleCVs";

export default function Education({
  education,
  setEducation,
  totalEdu,
  setTotalEdu,
}) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [check, setCheck] = useState(false);

  const onFinish = values => {
    let { school, degree, startDate, endDate, location } = values;
    endDate = check ? "present" : endDate.year();
    values = { ...values, endDate };
    setEducation(prevEdu => {
      return {
        ...prevEdu,
        school,
        degree,
        startDate: startDate.year(),
        endDate,
        location,
      };
    });
    saveEntry(values);
  };

  const saveEntry = values => {
    if (!education.id) {
      const uid = uuidv4();
      const copyEdu = { ...values };
      copyEdu.id = uid;
      setEducation(copyEdu);
      const copyTotal = [...totalEdu];
      copyTotal.push(copyEdu);
      setTotalEdu(copyTotal);
    } else {
      const copyTotal = [...totalEdu];
      const copyEdu = copyTotal.find(edu => edu.id === education.id);
      const index = copyTotal.indexOf(copyEdu);
      copyTotal[index] = { ...values, id: education.id };
      setTotalEdu(copyTotal);
    }
    setIsEditMode(false);
    setEducation(EMPTY_CV.totalEdu[0]);
  };

  const deleteEntry = () => {
    const copyTotal = [...totalEdu];
    const deleteEdu = copyTotal.find(edu => edu.id === education.id);
    const index = copyTotal.indexOf(deleteEdu);
    copyTotal.splice(index, 1);
    setTotalEdu(copyTotal);
    setIsEditMode(false);
    setEducation(EMPTY_CV.totalEdu[0]);
  };

  const cancelEntry = () => setIsEditMode(false);
  const handleEdit = id => {
    const editEdu = totalEdu.find(edu => edu.id === id);
    setEducation(editEdu);
    setIsEditMode(true);
  };

  const checkCurrent = e =>
    e.target.checked ? setCheck(true) : setCheck(false);

  return (
    <section className="education">
      <div className="entry-header">
        <span className="material-symbols-outlined">school</span>
        <h2>Education</h2>
      </div>
      {isEditMode ? (
        <Form
          name="edu-form"
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
            label="School"
            name="school"
            rules={[
              {
                required: true,
                message: "Please input your school!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Degree"
            name="degree"
            rules={[
              {
                required: true,
                message: "Please input your degree!",
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
          {totalEdu.length > 0 &&
            totalEdu.map(edu => {
              return (
                <div key={edu.id} className="edu-entries-title">
                  <div className="school-name">&#x2022; {edu.school}</div>
                  <Button
                    className="antbtn"
                    type="primary"
                    shape="circle"
                    onClick={() => handleEdit(edu.id)}
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
