import { Button, Divider, Dropdown, Form, Input, Layout } from "antd";
import { QuestionText } from "./QuestionCard";
import { QuestionType } from "../forms/applicationForm/ApplicationFrom";
import { useState } from "react";
import EditSVG from "./EditSVG";
import { CaretDownOutlined } from "@ant-design/icons";
import { FieldNamesType } from "antd/es/cascader";

const QUESTION_TYPE_LIST = [
    {
        key: '1',
        label: 'Paragraph',
    },
    {
        key: '2',
        label: 'Short answer',
    },
    {
        key: '3',
        label: 'Yes/No',
    },
    {
        key: '4',
        label: 'Dropdown',
    },
    {
        key: '5',
        label: 'Multiple choice',
    },
    {
        key: '6',
        label: 'Date',
    },
    {
        key: '7',
        label: 'Number',
    },
    {
        key: '8',
        label: 'File Upload',
    },
    {
        key: '9',
        label: 'Video question',
    }
];

type QuestionPropType = {
    questionData: QuestionType, 
    updateQuestionData?: (data: QuestionType)=>void,
    deleteQuestion?: (data: QuestionType)=>void
}

const Question = ({questionData, updateQuestionData, deleteQuestion}: QuestionPropType) => {
    const [editing, setEditing] = useState<boolean>(questionData.type===undefined);
    const [selectedTypeIndex, setSelectedTypeIndex] = useState(0);
    const [questionValue, setQuestionValue] = useState("");
    const onSave = () => {
        const newQuestionData = {...questionData};
        newQuestionData.question = questionValue;
        updateQuestionData?.(newQuestionData);
        setEditing(false);
    };
    return <Form onFinish={onSave}>
        {!editing && <div>{questionData.type}</div>}
        {questionData.type && <Layout className="question-layout">
            <QuestionText>{questionData?.question}</QuestionText>
            <Button onClick={()=>{
                setEditing(true);
            }} shape="circle" className="edit-button" type="text" icon={<EditSVG />} />
        </Layout>}
        {editing && <>
            {questionData.type===undefined && <>
                <QuestionText>Type</QuestionText>
                <Dropdown
                    trigger={["click"]}
                    menu={{
                        items: QUESTION_TYPE_LIST,
                        selectable: true,
                        selectedKeys: [QUESTION_TYPE_LIST[selectedTypeIndex].key],
                        onClick: (e)=>{setSelectedTypeIndex(parseInt(e.key)-1)},
                    }}
                >
                    <Form.Item<FieldNamesType> rules={[{ required: true, message: 'Please input your username!' }]}>
                        <Input value={QUESTION_TYPE_LIST[selectedTypeIndex].label} readOnly className="dropdown-input input" placeholder="Type here"  suffix={<CaretDownOutlined />} />
                    </Form.Item>
                </Dropdown>
                <Divider className="hidden-divider small" />
            </>}
            <QuestionText>Question</QuestionText>
            <Input className="input" placeholder="Type here" required value={questionValue} onInput={(e)=>{setQuestionValue(e.currentTarget.value)}} />
            <Divider className="hidden-divider small" />
            <Layout className="question-layout">
                <Button danger type="text">Delete Question</Button>
                <Form.Item>
                    <Button className="success-button" type="primary" htmlType="submit">Save</Button>
                </Form.Item>
            </Layout>
        </>}
    </Form>;
};

export default Question;