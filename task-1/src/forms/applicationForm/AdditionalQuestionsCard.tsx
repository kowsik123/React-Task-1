import { Divider } from "antd";
import QuestionCard from "../../components/QuestionCard";
import { ApplicationFormCardProps, QuestionType } from "./ApplicationFrom";

const AdditionalQuestionsCard = ({applicationData, updateApplicationData}: ApplicationFormCardProps) => {
    const customizedQuestions = applicationData?.attributes?.customisedQuestions;
    console.log(customizedQuestions);
    const updateCustomisedQuestions = (key: string, type: 'mandatory' | 'show', value: boolean) => {
        const newApplicationData = {...applicationData};
        // newApplicationData.attributes.customisedQuestions;
        updateApplicationData(newApplicationData);
    };;
    return <QuestionCard title="Additional Questions">
        {customizedQuestions.map((questionData: QuestionType)=><QuestionCard.Question questionData={questionData} />)}
        {customizedQuestions.length !== 0 && <Divider className="hidden-divider" />}
        <QuestionCard.AddQuestionButton />
    </QuestionCard>;
}

export default AdditionalQuestionsCard;