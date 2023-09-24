import React, { useState } from "react";
import { Input, Form, Button,Select, message } from "antd";
import "./Bio.css";
import { PRIMARY_TECH, ROLE_DATA, SECONDARY_TECH } from "./Bio.constants";
import DropDown from "../CommonComponents/DropDown";

function Bio() {
  const { Option } = Select;

  const nameRules = [
    {
      required: true,
      message: "Please enter your name",
    },
  ];
  const experienceRules = [
    {
      required: true,
      message: "Please enter your experience",
    },
  ];
  const collegeRules = [
    {
      required: true,
      message: "Please enter your college",
    },
  ];
  const roleRules = [
    {
      required: true,
      message: "Please enter your role",
    },
    { type: 'array', message: 'xxxx' },
  ];
  const courseRules = [
    {
      required: true,
      message: "Please enter your course",
    },
  ];
  const primaryTechRules = [
    {
      type: 'array',
      required: true,
      message: 'Please select your habitual residence!',
    },
  ]
  const secondaryTechRules = [
    {
      type: 'array',
      required: true,
      message: 'Please select your habitual residence!',
    },
  ]
  const [formData, setFormData] = useState({
    name: "",
    experience: "",
    college: "",
    role: [],
    course: "",
    primaryTech: [],
    secondaryTech: [],
  });

  const handleSubmit =  () => {
    console.log(formData)
    // try {
    //   // const values = await Form.validateFields();

    //   setFormData({ ...formData, primaryTech: selectedItems });
    //   console.log(
    //     formData,
    //     selectedCourses,
    //     { role: selectedRoles },
    //     { secondaryTech: selectedCourses }
    //   );
    // } catch (errorInfo) {
    //   message.error("Please fill in all required fields.");
    // }
  };
  
  const roleSelected=(value)=>{
    
    setFormData({ ...formData, role:[value]})
  }

  const primaryTechSelected=(value)=>{
    
    setFormData({ ...formData, primaryTech:value})
  }
  const secondaryTechSelected=(value)=>{
    
    setFormData({ ...formData, secondaryTech:value})
  }

 

  return (
    <div>
      <Form  onFinish={handleSubmit}>
        <Form.Item label="Name" className="input" name="name" rules={nameRules}>
          <Input
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </Form.Item>
        <Form.Item
          label="Experience(Years)"
          className="input"
          name="experience"
          rules={experienceRules}
        >
          <Input
            placeholder="Experience"
            value={formData.experience}
            onChange={(e) =>
              setFormData({ ...formData, experience: e.target.value })
            }
          />
        </Form.Item>
        <Form.Item
          label="College"
          className="input"
          name="college"
          rules={collegeRules}
        >
          <Input
            placeholder="College"
            value={formData.college}
            onChange={(e) =>
              setFormData({ ...formData, college: e.target.value })
            }
          />
        </Form.Item>
        <Form.Item
          label="Course"
          className="input"
          name="course"
          rules={courseRules}
        >
          <Input
            placeholder="Course"
            value={formData.course}
            onChange={(e) =>
              setFormData({ ...formData, course: e.target.value })
            }
          />
        </Form.Item>

        <Form.Item label="Role" className="input" name="role" rules={roleRules}>
          <DropDown
            mode={"single"}
            data={ROLE_DATA}
            selectedValue={formData.role}
            setSelectedValue={roleSelected}
          />
        </Form.Item>

        <Form.Item
          label="Primary Tech Stack"
          className="input"
          name="primaryTechStack"
          rules={primaryTechRules}
        >
          <DropDown
            mode={"multiple"}
            data={PRIMARY_TECH}
            selectedValue={formData.primaryTech}
            setSelectedValue={primaryTechSelected}
          />
        </Form.Item>

        <Form.Item
          label="Secondary Tech Stack"
          className="input"
          name="secondaryTech"
          rules={secondaryTechRules}
        >
          <DropDown
            mode={"multiple"}
            data={SECONDARY_TECH}
            selectedValue={formData.secondaryTech}
            setSelectedValue={secondaryTechSelected}
          />
        </Form.Item>

        <Button htmlType="submit" onClick={handleSubmit}>
          SUBMIT
        </Button>
      </Form>
    </div>
  );
}

export default Bio;
