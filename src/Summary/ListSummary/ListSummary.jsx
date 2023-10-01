import React, { useState } from "react";
import { Radio, Button, Space, Input } from "antd";
import { SUMMARY_LISTS } from '../Summary.constants';
import cn from './ListSummary.module.scss';

function ListSummary(props) {
  const [selectedItem, setSelectedItem] = useState(null);
  const onChange = (e) => {
    const selectedItemId = e.target.value;
    const selectedSummary = SUMMARY_LISTS.find(item => item.id === selectedItemId);
    setSelectedItem(selectedSummary);
    console.log('Selected Title:', selectedSummary.title,
      'Selected Tags:', selectedSummary.tags,
      'Selected Description:', selectedSummary.description,
      'Selected Summary Points:', selectedSummary.summaryPoints);
  };

  return (
    <>
      {SUMMARY_LISTS.map(item => (
        <div key={item.id} className={cn.Listsummary}>
          <div className={cn.summarylist}>
            <Radio.Group onChange={onChange} value={selectedItem ? selectedItem.id : null} className={cn.radiogroup}>
              <Radio value={item.id}><h3>{item.title}</h3></Radio>
            </Radio.Group>
            <div className={cn.vertical}></div>
            <p className={cn.tags_heading}>Tags {item.tags.map(tag => 
              (<button key={tag} className={cn.TAG_BUTTON}>{tag}</button>))}</p>
            <Button className={cn.edit_btn}>EDIT</Button>
          </div>
          <p className={cn.description}>{item.description}</p>
          <div>
            <ul>
              {item.summaryPoints.map(point => (
                <li key={point} className={cn.list_item}>{point}</li>
              ))}
            </ul>
          </div>
        </div>

      ))}
    </>
  );
}

export default ListSummary;
