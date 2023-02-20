import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { useState } from "react";
import "./App.css";
import { TabsContent } from "./components/TabsContentComponent/TabsContent";
import { VsAccordionFolder } from "./components/VsAccordionFolder/VsAccordionFolder";

function App() {
  const [isTabData,setIsTabData] = useState([])

  let tabData = isTabData;

  const UserNameToTab = (username) => {
    let data = [...tabData]
    data.push(username)
    // tabData.push(username);
    setIsTabData(data)
    console.log("tabdata,", isTabData);
  };

  const WebsiteToTab = (website) => {
    console.log('website',website)
    let data = [...tabData]
    data.push(website)
    setIsTabData(data)
    console.log('todoData',isTabData)
  }

  console.log('taaaab',isTabData)

  return (
    <div className="app">
      <Layout>
        <Sider>
          <VsAccordionFolder UserNameToTab={UserNameToTab} WebsiteToTab = {WebsiteToTab} />
        </Sider>
        <Layout>
          <Content>
            <TabsContent TabData = {tabData} setIsTabData = {setIsTabData}/>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
