import { InboxOutlined, UploadOutlined } from "@ant-design/icons";
import { UploadProps } from "antd";
import { RcFile, UploadChangeParam, UploadFile } from "antd/es/upload";
import Dragger from "antd/es/upload/Dragger";

const props: UploadProps = {
    name: 'file',
    multiple: false,
    // action: 'http://127.0.0.1:4010/api/334.50046206937594/programs/labore/application-form'
  };


function ImageUpload({onUpload}: {onUpload?: (info: UploadChangeParam<UploadFile<any>>) => void}) {
    return (<Dragger {...props} onChange={onUpload}>
        <p><UploadOutlined style={{fontSize: '30px'}} /></p>
        <p className="ant-upload-text">Upload cover image</p>
        <p className="ant-upload-hint">
          16:9 ratio is recommended. Max image size 1mb
        </p>
      </Dragger>)
}

export default ImageUpload;