import { EditOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Card, Checkbox, Layout, Space, Switch } from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import { SwitchChangeEventHandler } from "antd/es/switch";
import { ReactNode, useState } from "react";
import { QuestionType } from "../forms/applicationForm/ApplicationFrom";
import EditSVG from "./EditSVG";

type ChildrenProp = {
    children?: ReactNode;
}

type QuestionCardProps = ChildrenProp & {
    title?: string,
}

type DefaultQuestionPropType = ChildrenProp & {
    addOption?: boolean,
    show?: boolean,
    mandatory?: boolean,
    internalUse?: boolean,
    onShowChange?: SwitchChangeEventHandler,
    onCheckboxChange?: (e: CheckboxChangeEvent) => void,
}

const QuestionText = ({children}: ChildrenProp) => {
    return <div className="question-text">{children}</div>
}

const AddQuestionButton = ({onClick}: {onClick?: React.MouseEventHandler<HTMLElement>}) => {
    return <Button type="text" icon={<PlusOutlined className="icon-bold" />} className="add-question-button" onClick={onClick}>Add a question</Button>;
}

const DefaultQuestion = ({children, mandatory, internalUse, show, onShowChange, onCheckboxChange}: DefaultQuestionPropType) => {
    return <Layout className="question-layout">
        <QuestionText>{children}</QuestionText>
        {show!==undefined && <Space className="add-option">
            {internalUse!==undefined && <Checkbox checked={internalUse} onChange={onCheckboxChange}>internal</Checkbox>}
            {mandatory!==undefined && <Checkbox checked={mandatory} onChange={onCheckboxChange}>mandatory</Checkbox>}
            <Switch size="small" checked={show} onChange={onShowChange}/><span className="show-or-hide">{ show? 'show':'hide'}</span>
        </Space>}
    </Layout>
};

const Question = ({questionData}: {questionData: QuestionType}) => {
    const [editing, setEditing] = useState();
    return <>
        {questionData!==undefined && <div>{questionData.type}</div>}
        <Layout className="question-layout">
            <QuestionText>{questionData?.question}</QuestionText>
            <Button shape="circle" className="edit-button" type="text" icon={<EditSVG />} />
        </Layout>
    </>;
};

const QuestionCard = ({title, children}: QuestionCardProps) => {
    return (
        <Card className={"question-card"+(title?"":" no-pad")} title={title} bordered={false}>
            {children}
        </Card>
    )
}

QuestionCard.DefaultQuestion = DefaultQuestion;
QuestionCard.AddQuestionButton = AddQuestionButton;
QuestionCard.Question = Question;

export default QuestionCard;