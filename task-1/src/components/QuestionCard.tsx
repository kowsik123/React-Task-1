import { CaretDownOutlined, DownOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Card, Checkbox, Divider, Dropdown, Form, Input, Layout, Space, Switch, Typography } from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import { SwitchChangeEventHandler } from "antd/es/switch";
import { ReactNode, useState } from "react";
import Question from "./Question";

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

export const QuestionText = ({children}: ChildrenProp) => {
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