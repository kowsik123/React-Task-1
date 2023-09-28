import { Avatar, Button, Layout, Steps, notification } from 'antd';
import './App.css';
import Sider from 'antd/es/layout/Sider';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import { HomeOutlined, MenuOutlined, ProfileOutlined } from '@ant-design/icons';
import { useState } from 'react';
import ApplicationForm from './forms/applicationForm/ApplicationFrom';

export const showServerError = (type: 'fetch'|'update')=>{
  if(type==='update') notification.error({
    message: "Server Error While Uploading Data",
    description: "Got error while updating application form data. Server may be not available",
    duration: null
  });
  else notification.error({
    message: "Server Error While Fetching Data",
    description: "Got error while fetching application form data. Server may be not available",
    duration: null
  });
}

function App() {

  const [ siderCollapsed, setSideCollapsed ] = useState(true);
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <Layout id='app-container'>
      <Sider id='side-bar' width='200px' collapsedWidth='72px' collapsed={siderCollapsed}>
        <Layout className='glass-layout'>
          <Button className='side-bar-button' type='text' icon={<MenuOutlined />} id='menu-button' onClick={()=>{setSideCollapsed( prev => !prev )}} />
          <Button className='side-bar-button' type='text' icon={<HomeOutlined />} />
          <Button className='side-bar-button' type='text' icon={<ProfileOutlined />} />
        </Layout>
        <Button className='side-bar-button' shape='circle' size='middle'  type='text' id='profile-button'>
          <Avatar className='profile-avatar'>NT</Avatar>
        </Button>
      </Sider>
      <Layout id='main-content'>
        <Content id='form-content'>
          <Layout id='application-steps'>
            <Steps current={currentStep}
              items={[
                {
                  title: 'Program Details',
                },
                {
                  title: 'Application Form',
                },
                {
                  title: 'Workflow',
                },
                {
                  title: 'Preview',
                },
              ]}
            />
          </Layout>
          {currentStep===1 && <ApplicationForm />}
          {currentStep!==1 && <></>}
          <br/>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
