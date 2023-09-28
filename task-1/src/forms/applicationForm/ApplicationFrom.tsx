import { useEffect, useState } from "react";
import CoverImageCard from "./CoverImageCard";
import AdditionalQuestionsCard from "./AdditionalQuestionsCard";
import ProfileCard from "./ProfileCard";
import PersonalInfoCard from "./PersonalInfoCard";
import { showServerError } from "../../App";

export type QuestionType = {
    question?: string;
    choices?: ['string'],
    disqualify?: boolean,
    id?: string,
    maxChoice?: number,
    other?: boolean,
    type: 'Paragraph' | '' | undefined;
};

type VisibilityOptionType = {mandatory: boolean, show: boolean};
type VisibilityOptionTypeTwo = {internalUse: boolean, show: boolean};

type ApplicationFormDataType = {
    attributes: {
        personalInformation: {
            currentResidence: VisibilityOptionTypeTwo,
            dateOfBirth: VisibilityOptionTypeTwo,
            emailId: VisibilityOptionTypeTwo,
            firstName: VisibilityOptionTypeTwo,
            gender: VisibilityOptionTypeTwo,
            idNumber: VisibilityOptionTypeTwo,
            lastName: VisibilityOptionTypeTwo,
            nationality: VisibilityOptionTypeTwo,
            phoneNumber: VisibilityOptionTypeTwo,
            personalQuestions: [QuestionType]
        } | any;
        profile: {
            education: VisibilityOptionType,
            experience: VisibilityOptionType,
            resume: VisibilityOptionType,
            profileQuestions: [QuestionType]
        } | any,
        customisedQuestions: [QuestionType] | [],
        coverImage: string | undefined,
    },
    id: string,
    type: string
}

export type ApplicationFormCardProps = {
    updateApplicationData: (data: ApplicationFormDataType) => void,
    applicationData: ApplicationFormDataType,
}

function ApplicationForm() {
    const [ applicationData, setApplicationData ] = useState<any>();
    useEffect( () => {
        fetch('http://127.0.0.1:4010/api/115.58275403479834/programs/odio/application-form').then(res=>res.json()).then(({data})=>{
            setApplicationData(data);
        }).catch(()=>{
            showServerError('fetch');
        });
    }, []);
    const updateApplicationData = (data: object) => {
        fetch('http://127.0.0.1:4010/api/182.03157250969974/programs/iusto/application-form').then(res=>res.json()).then(data=>console.log(data)).catch( () => 
            showServerError('update')
        );
        setApplicationData(data);
    };
    return applicationData && <>
        <CoverImageCard updateApplicationData={updateApplicationData} applicationData={applicationData} />
        <PersonalInfoCard updateApplicationData={updateApplicationData} applicationData={applicationData} />
        <ProfileCard updateApplicationData={updateApplicationData} applicationData={applicationData} />
        <AdditionalQuestionsCard updateApplicationData={updateApplicationData} applicationData={applicationData} />
    </>
}

export default ApplicationForm;