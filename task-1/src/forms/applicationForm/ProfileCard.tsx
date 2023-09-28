import { Divider } from "antd";
import QuestionCard from "../../components/QuestionCard";
import { ApplicationFormCardProps } from "./ApplicationFrom";

const ProfileCard = ({applicationData, updateApplicationData}: ApplicationFormCardProps) => {
    const profile = applicationData?.attributes?.profile;
    const updateProfile = (key: string, type: 'mandatory' | 'show', value: boolean) => {
        const newApplicationData = {...applicationData};
        newApplicationData.attributes.profile[key][type] = value;
        updateApplicationData(newApplicationData);
    };;
    return <QuestionCard title="Profile">
        <QuestionCard.DefaultQuestion 
            show={!!profile?.education?.show}
            mandatory={!!profile?.education?.mandatory} 
            onShowChange={() => updateProfile('education', 'show', !profile?.education?.show)} 
            onCheckboxChange={() => updateProfile('education', 'mandatory', !profile?.education?.mandatory)}>
                Education
        </QuestionCard.DefaultQuestion>
        <Divider />
        <QuestionCard.DefaultQuestion 
            show={!!profile?.experience?.show}
            mandatory={!!profile?.experience?.mandatory} 
            onShowChange={() => updateProfile('experience', 'show', !profile?.experience?.show)} 
            onCheckboxChange={() => updateProfile('experience', 'mandatory', !profile?.experience?.mandatory)}>
                Experience
        </QuestionCard.DefaultQuestion>
        <Divider />
        <QuestionCard.DefaultQuestion 
            show={!!profile?.resume?.show}
            mandatory={!!profile?.resume?.mandatory} 
            onShowChange={() => updateProfile('resume', 'show', !profile?.resume?.show)} 
            onCheckboxChange={() => updateProfile('resume', 'mandatory', !profile?.resume?.mandatory)}>
                Resume
        </QuestionCard.DefaultQuestion>
        <Divider className="hidden-divider" />
        <QuestionCard.AddQuestionButton />
    </QuestionCard>;
}

export default ProfileCard;