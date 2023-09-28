import { Button, Upload, notification } from "antd";
import QuestionCard from "../../components/QuestionCard";
import { ApplicationFormCardProps } from "./ApplicationFrom";
import { CloseOutlined } from "@ant-design/icons";
import { RcFile } from "antd/es/upload";
import ImageUpload from "../../components/ImageUpload";
import { showServerError } from "../../App";

const CoverImageCard = ({updateApplicationData, applicationData}: ApplicationFormCardProps) => {
  const coverImageUrl = applicationData?.attributes?.coverImage;
  const updateCoverImageUrl = (url: string | undefined) => {
    const newApplicationData = {...applicationData};
    if(newApplicationData?.attributes) newApplicationData.attributes.coverImage = url;
    updateApplicationData(newApplicationData);
  };
  const showImageLoadError = ()=>{
    notification.error({
      message: "Error Loading Cover Image",
      description:
        <>
          {'Got error while loading cover image for the application form.'}
          <br />
          {'check your image url: '}<a href={coverImageUrl}>{coverImageUrl}</a>
        </>,
      duration: null
    });
  }
  return (<QuestionCard title={coverImageUrl?"":"Upload cover image"}>
    {!coverImageUrl && <ImageUpload onUpload={(e)=>{
        if( e.file.url ) {
            updateCoverImageUrl(e.file.url);
        }
        else {
          new Promise((resolve) => {
            const reader = new FileReader();
            reader.readAsDataURL(e.file.originFileObj as RcFile);
            reader.onload = () => resolve(reader.result as string);
          }).then((res: any)=> {
            updateCoverImageUrl( res );
          });
        }
    }} />}
    {coverImageUrl && <>
        <img className="cover-image" src={coverImageUrl} onError={showImageLoadError} />
        <Button danger type="text" icon={<CloseOutlined className="icon-bold" />} className="cover-image-delete" onClick={()=>updateCoverImageUrl(undefined)}>Delete & re-upload</Button>
    </>}
</QuestionCard>)
}

export default CoverImageCard;