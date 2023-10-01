import React from 'react'
import PropTypes from 'prop-types'
import { Checkbox, Select } from 'antd';

function DropdownWIthCheckbox(props) {
    return (
        <Select
            style={{ width: "100%" }}
            optionLabelProp="label"
            mode={props.mode}
            placeholder={props.placeholder}
            value={props.selectedValue}
            onChange={(values) => props.setSelectedValue(values)}>
            {props.data.map((item, index) => (
                <Select.Option key={item.value} value={item.value}>
                    <Checkbox>{item.label}</Checkbox>
                </Select.Option>
            ))}
        </Select>
    )
}

DropdownWIthCheckbox.propTypes = {
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
}

export default DropdownWIthCheckbox
