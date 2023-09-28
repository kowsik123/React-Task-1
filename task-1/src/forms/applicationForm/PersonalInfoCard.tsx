import { ApplicationFormCardProps } from "./ApplicationFrom";
import QuestionCard from '../../components/QuestionCard';
import { Divider } from "antd";

const PersonalInfoCard = ({applicationData, updateApplicationData}: ApplicationFormCardProps) => {
    const personalInformation = applicationData?.attributes?.personalInformation;
    const updatePersonalInfo = (key: string, type: 'internalUse' | 'show', value: boolean) => {
        const newApplicationData = {...applicationData};
        newApplicationData.attributes.personalInformation[key][type] = value;
        updateApplicationData(newApplicationData);
    };
    return <QuestionCard title="Personal Information Card">
        <QuestionCard.DefaultQuestion>First Name</QuestionCard.DefaultQuestion>
        <Divider type="horizontal" />
        <QuestionCard.DefaultQuestion>Last Name</QuestionCard.DefaultQuestion>
        <Divider type="horizontal" />
        <QuestionCard.DefaultQuestion>Email</QuestionCard.DefaultQuestion>
        <Divider type="horizontal" />
        <QuestionCard.DefaultQuestion 
            show={!!personalInformation?.phoneNumber?.show}
            internalUse={!!personalInformation?.phoneNumber?.internalUse} 
            onShowChange={() => updatePersonalInfo('phoneNumber', 'show', !personalInformation?.phoneNumber?.show)} 
            onCheckboxChange={() => updatePersonalInfo('phoneNumber', 'internalUse', !personalInformation?.phoneNumber?.internalUse)}>
                Phone
                <span>(without dial code)</span>
        </QuestionCard.DefaultQuestion>
        <Divider type="horizontal" />
        <QuestionCard.DefaultQuestion 
            show={!!personalInformation?.nationality?.show}
            internalUse={!!personalInformation?.nationality?.internalUse} 
            onShowChange={() => updatePersonalInfo('nationality', 'show', !personalInformation?.nationality?.show)} 
            onCheckboxChange={() => updatePersonalInfo('nationality', 'internalUse', !personalInformation?.nationality?.internalUse)}>
                Nationality
        </QuestionCard.DefaultQuestion>
        <Divider type="horizontal" />
        <QuestionCard.DefaultQuestion 
            show={!!personalInformation?.currentResidence?.show}
            internalUse={!!personalInformation?.currentResidence?.internalUse} 
            onShowChange={() => updatePersonalInfo('currentResidence', 'show', !personalInformation?.currentResidence?.show)} 
            onCheckboxChange={() => updatePersonalInfo('currentResidence', 'internalUse', !personalInformation?.currentResidence?.internalUse)}>
                Current Residence 
        </QuestionCard.DefaultQuestion>
        <Divider type="horizontal" />
        <QuestionCard.DefaultQuestion 
            show={!!personalInformation?.idNumber?.show}
            internalUse={!!personalInformation?.idNumber?.internalUse} 
            onShowChange={() => updatePersonalInfo('idNumber', 'show', !personalInformation?.idNumber?.show)} 
            onCheckboxChange={() => updatePersonalInfo('idNumber', 'internalUse', !personalInformation?.idNumber?.internalUse)}>
                Id Number
        </QuestionCard.DefaultQuestion>
        <Divider type="horizontal" />
        <QuestionCard.DefaultQuestion 
            show={!!personalInformation?.dateOfBirth?.show}
            internalUse={!!personalInformation?.dateOfBirth?.internalUse} 
            onShowChange={() => updatePersonalInfo('dateOfBirth', 'show', !personalInformation?.dateOfBirth?.show)} 
            onCheckboxChange={() => updatePersonalInfo('dateOfBirth', 'internalUse', !personalInformation?.dateOfBirth?.internalUse)}>
                Date of Birth
        </QuestionCard.DefaultQuestion>
        <Divider type="horizontal" />
        <QuestionCard.DefaultQuestion 
            show={!!personalInformation?.gender?.show}
            internalUse={!!personalInformation?.gender?.internalUse} 
            onShowChange={() => updatePersonalInfo('gender', 'show', !personalInformation?.gender?.show)} 
            onCheckboxChange={() => updatePersonalInfo('gender', 'internalUse', !personalInformation?.gender?.internalUse)}>
                Gender
        </QuestionCard.DefaultQuestion>
        <Divider className="hidden-divider" />
        <QuestionCard.AddQuestionButton />
    </QuestionCard>;
};

export default PersonalInfoCard;