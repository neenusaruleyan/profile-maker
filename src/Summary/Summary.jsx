import React, { useState } from "react";
import { Button, Space, Select, Input, Checkbox, Modal } from "antd";
import "./Summary.css";

const { Option } = Select;
const { TextArea } = Input;

function Summary() {
  const [searchText, setSearchText] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
  const [numberOfResults, setNumberOfResults] = useState(0);
  // State for the modal
  const [summaryName, setSummaryName] = useState("");
  const [description, setDescription] = useState("");
  const [summaryPoints, setSummaryPoints] = useState([]);
  const [modalTags, setModalTags] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleModalSubmit = () => {
    console.log("Summary Name:", summaryName);
    console.log("Description:", description);
    console.log("Summary Points:", summaryPoints);
    console.log("Tags:", modalTags);

    setIsModalVisible(false);
  };
  const handleModalCancel = () => {
    setIsModalVisible(false);
  };
  const handleSearch = () => {
    const results = performSearch(searchText, selectedTags);
    setNumberOfResults(results.length);
    function performSearch(searchText, selectedTags) {
      const data = [
        { text: [`[searchText]`], tags: [`[selectedTags]`] },
        { text: [`[searchText]`], tags: [`[selectedTags]`] },
        { text: [`[searchText]`], tags: [`[selectedTags]`] },
        { text: [`[searchText]`], tags: [`[selectedTags]`] },
      ];
      // Filter data based on searchText and selectedTags
      const filteredData = data.filter((entry) => {
        const text = entry.text ? entry.text.toString() : "";
        const textMatch = text.toLowerCase().includes(searchText.toLowerCase());
        const tagsMatch = selectedTags.length === 0 || selectedTags.every(tag => entry.tags.includes(tag));
        return textMatch && tagsMatch;
      });

      return filteredData;
    }

    setNumberOfResults(results.length);
    console.log(searchText + selectedTags.join(", "));
  };
  return (
    <div className="Summary_field">
      <div className="addSummary">
        <Space wrap>
          <Button type="default" onClick={showModal}>
            ADD SUMMARY
          </Button>
        </Space>
      </div>


      <div className="header">
        <h3>Search Summary</h3>
      </div>
      <div className="search-text">
        <TextArea
          type="text"
          id="searchText"
          name="searchText"
          placeholder="Search with Text..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          autoSize
        />
        <Select
          id="tags"
          mode="multiple"
          style={{ width: "100%" }}
          placeholder="Search with Tags"
          value={selectedTags}
          onChange={(values) => setSelectedTags(values)}
          optionLabelProp="label"
        >
          <Option value="HTML">
            {" "}
            <Checkbox>HTML</Checkbox>
          </Option>
          <Option value="JavaScript">
            <Checkbox>JavaScript</Checkbox>
          </Option>
          <Option value="ReactJS">
            <Checkbox>ReactJS</Checkbox>
          </Option>
          <Option value="Python">
            <Checkbox>Python</Checkbox>
          </Option>
          <Option value="Angular">
            <Checkbox>Angular</Checkbox>
          </Option>
          <Option value="Bootstrap">
            <Checkbox>Bootstrap</Checkbox>
          </Option>
        </Select>
        <Button type="primary" id="searchButton" onClick={handleSearch}>
          SEARCH
        </Button>
      </div>
      <div className="results">
        <p>No of Result: {numberOfResults}</p>

      </div>
      <div className="results">
        <p className="close-btn">HTML<button class="close-icon" type="reset"></button></p>
      </div>

      <Modal
        title="Add Summary"
        visible={isModalVisible}
        onOk={handleModalSubmit}
        onCancel={handleModalCancel}
      >
        <div>
          <label htmlFor="summaryName">Summary Name:</label>
          <Input
            type="text"
            id="summaryName"
            value={summaryName}
            onChange={(e) => setSummaryName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <TextArea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            autoSize
          />
        </div>
        <div>
          <label htmlFor="summaryPoints">Summary Points:</label>
          <TextArea
            id="summaryPoints"
            value={summaryPoints}
            onChange={(e) => setSummaryPoints(e.target.value)}
            autoSize
          />
        </div>
        <div>
          <label htmlFor="modalTags">Tags:</label>
          <Select
            id="modalTags"
            mode="multiple"
            style={{ width: "100%" }}
            placeholder="Select Tags"
            value={modalTags}
            onChange={(values) => setModalTags(values)}
            optionLabelProp="label"
          >
            <Option value="HTML">HTML</Option>
            <Option value="JavaScript">JavaScript</Option>
            <Option value="ReactJS">ReactJS</Option>
            <Option value="Python">Python</Option>
          </Select>
        </div>
      </Modal>

    </div>
  );
}

export default Summary;