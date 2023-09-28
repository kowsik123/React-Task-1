import { Divider } from "antd";
import QuestionCard from "../../components/QuestionCard";
import { ApplicationFormCardProps, QuestionType } from "./ApplicationFrom";
import { Fragment, useState } from "react";

const AdditionalQuestionsCard = ({applicationData, updateApplicationData}: ApplicationFormCardProps) => {
    const [customisedQuestions, setCustomisedQuestion] = useState<any>( applicationData?.attributes?.customisedQuestions );
    const updateQuestionData = (questionData: QuestionType) => {
        const newApplicationData = {...applicationData};
        const questionIndex = newApplicationData.attributes.customisedQuestions.findIndex((value)=>value.id === questionData.id)
        newApplicationData.attributes.customisedQuestions[questionIndex] = {...questionData}
        updateApplicationData(newApplicationData);
    };
    const deleteQuestion = (questionData: QuestionType) => {
        const newApplicationData = {...applicationData};
        const questionIndex = newApplicationData.attributes.customisedQuestions.findIndex((value)=>value.id === questionData.id)
        newApplicationData.attributes.customisedQuestions.splice(questionIndex, 1);
        updateApplicationData(newApplicationData);
    };
    return <QuestionCard title="Additional Questions">
        {customisedQuestions.map((questionData: QuestionType, index: number)=><Fragment key={index}><QuestionCard.Question questionData={questionData} updateQuestionData={updateQuestionData} deleteQuestion={deleteQuestion} /><Divider /></Fragment>)}
        <QuestionCard.AddQuestionButton onClick={()=>{
            setCustomisedQuestion( [...customisedQuestions, {type: undefined}] );
        }}/>
    </QuestionCard>;
}

export default AdditionalQuestionsCard;