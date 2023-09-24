import React from "react";
import { Select,Form} from "antd";
import PropTypes from "prop-types";

export function DropDown(props) {
  return (
    <div>
      <Form.Item label={props.label}name={props.name}>
      <Select key={props.mode}
        mode={props.mode}
        placeholder={props.placeholder}
        value={props.selectedValue}
        onChange={(values) => props.setSelectedValue(values)}
        options={props.data?.map((item) => ({
          value: item.value,
          label: item.label,
        }))}
      />
      </Form.Item>
    </div>
  );
}

DropDown.propTypes = {
  /**
   *
   */
  mode: PropTypes.string,
  /**
   *
   */
  placeholder: PropTypes.string,
  /**
   *
   */
  options: PropTypes.array,
  /**
   *
   */
  selectedValue: PropTypes.any,
  /**
   *
   */
  setSelectedValue: PropTypes.any,
  /**
   *
   */
  data: PropTypes.array,
  /**
   * 
   */
  
};
