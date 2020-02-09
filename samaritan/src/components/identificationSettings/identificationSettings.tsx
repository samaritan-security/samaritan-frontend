import React from "react";
import { Input } from "antd";
import { Typography } from "antd";
import { Upload, message, Button, Icon } from "antd";
import { Row, Col } from "antd";
import { Form } from "antd";
import "./identificationSettings.css";

const { Title } = Typography;
const { Dragger } = Upload;

const props = {
  name: "file",
  multiple: true,
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  }
};

class IdentificationSettings extends React.Component {
  render() {
    return (
      <>
        <Title className="title"> Identification Settings </Title>

        <Dragger {...props}>
          <p className="ant-upload-drag-icon">
            <Icon type="inbox" />
          </p>
          <p className="ant-upload-text">
            Click or drag file to this area to upload
          </p>
          <p className="ant-upload-hint">
            Support for a single or bulk upload. Strictly prohibit from
            uploading company data or other band files
          </p>
        </Dragger>
        
        <div className="submit">
          <Input placeholder="Name" style={{ marginBottom: 10 }} />
          <Input placeholder="ID" style={{ marginBottom: 10 }} />
          <Button type="primary" block>
            Submit
          </Button>
        </div>
      </>
    );
  }
}

export default IdentificationSettings;
