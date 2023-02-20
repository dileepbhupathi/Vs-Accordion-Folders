import React from "react";
import "./TabsContent.scss";
// import { RxCross2 } from "react-icons/rx";
import { Tabs } from "antd";

export const TabsContent = ({ TabData }) => {
  console.log(".....", TabData);

  // const [isFinalTabData,setIsFinalTabData] = useState([])

  // const removeTab = (each) => {
  //   console.log("each", each);
  //   let index = TabData.findIndex((element) => element === each);
  //   console.log("inex", index);
  //   let splicedData = TabData.splice(index, 1);
  //   console.log("splice", splicedData);
  //   let finalTabData = [...TabData];
  //   setIsTabData(finalTabData);
  //   // console.log('removedData',splicedData)
  // };
  
  let FinalTabsData = []

    TabData.map((each,i) => (
      FinalTabsData.push({key: `${i}`,
      label: `${each}`,
      children: `Content of ${each}`,})
      
    ))


  console.log('finaltabdata',FinalTabsData)
  
  return (
    <div className="tab-container">
      {/* {TabData.map((each, i) => (
        <div className="tab-item-container" key={i}>
          <div className="tab-item">
            <p>{each}</p>
            <div onClick={() => removeTab(each)}>
              <RxCross2 />
            </div>
          </div>
          <div className="content-container">
            {each}
          </div>
        </div>
      ))} */}
      <Tabs defaultActiveKey="1" items={FinalTabsData} type = 'card' />
    </div>
  );
};
