import React, { useState } from "react";
import "./VsAccordionFolder.scss";
import { RiHashtag } from "react-icons/ri";
import { DiJavascript1 } from "react-icons/di";
import { FaAngleRight, FaAngleDown } from "react-icons/fa";
import { TbBrandSass } from "react-icons/tb";
import { VsAccordionFolderData } from "../../Constants/VsAccordionFolderData";
import Axios from "axios";
import { Switch } from "antd";

export const VsAccordionFolder = ({UserNameToTab,WebsiteToTab}) => {
  const [active, setActive] = useState(false);

  const [isActive, setIsActive] = useState(null);

  const [isApiData, setIsApiData] = useState([]);

  const [flipData,setFlipData] = useState(false)

  const switchData = (checked) => {
    if (checked) {
      setFlipData(!flipData)
    }else{
      setFlipData(!flipData)
    }
    console.log(checked)
  }


  // const [isFolderAccordion, setIsFolderAcccordion] = useState(false);
  // const [isSubFolderAccordion, setIsSubFolderAccordion] = useState(false);
  // const [isSupSubFolderAccordion, setIsSupSubFolderAccordion] = useState(false);

  // const [isFolder, setIsFolder] = useState(false);
  // const [isSubFolder, setIsSubFolder] = useState(false);
  // const [isSupSubFolder, setIsSupSubFolder] = useState(false);
  // const [isSubjsFile, setIsSubJsFile] = useState(false);
  // const [isSubCssFile, setIsSubCssFile] = useState(false);
  // const [isSupSubjsFile, setIsSupSubjsFile] = useState(false);
  // const [isSupSubScssFile, setIsSupSubscssFile] = useState(false);

  const AccordionFolder = () => {
    if (flipData){
      DataFromAPI();
    }else {
      setIsApiData(VsAccordionFolderData)
    }
    setActive(!active);
  };

  console.log('data',isApiData)

  const AccordionSubFolder = (i) => {
    if (isActive === i) {
      return setIsActive(null);
    }
    setIsActive(i);
  };

  // const subFolderAccordion = () => {
  //   setIsSubFolderAccordion(!isSubFolderAccordion);
  //   setIsFolder(false);
  //   setIsSubFolder(true);
  //   setIsSupSubFolder(false);
  //   setIsSubJsFile(false);
  //   setIsSubCssFile(false);
  //   setIsSupSubjsFile(false);
  //   setIsSupSubscssFile(false);
  // };
  // const SupSubFolderAccordion = () => {
  //   setIsSupSubFolderAccordion(!isSupSubFolderAccordion);
  //   setIsFolder(false);
  //   setIsSubFolder(false);
  //   setIsSupSubFolder(true);
  //   setIsSubJsFile(false);
  //   setIsSubCssFile(false);
  //   setIsSupSubjsFile(false);
  //   setIsSupSubscssFile(false);
  // };
  // const SubJsFile = () => {
  //   setIsFolder(false);
  //   setIsSubFolder(false);
  //   setIsSupSubFolder(false);
  //   setIsSubJsFile(true);
  //   setIsSubCssFile(false);
  //   setIsSupSubjsFile(false);
  //   setIsSupSubscssFile(false);
  // };
  // const subCssFile = () => {
  //   setIsFolder(false);
  //   setIsSubFolder(false);
  //   setIsSupSubFolder(false);
  //   setIsSubJsFile(false);
  //   setIsSubCssFile(true);
  //   setIsSupSubjsFile(false);
  //   setIsSupSubscssFile(false);
  // };
  // const SupSubJSFile = () => {
  //   setIsFolder(false);
  //   setIsSubFolder(false);
  //   setIsSupSubFolder(false);
  //   setIsSubJsFile(false);
  //   setIsSubCssFile(false);
  //   setIsSupSubjsFile(true);
  //   setIsSupSubscssFile(false);
  // };
  // const SupSubScssFile = () => {
  //   setIsFolder(false);
  //   setIsSubFolder(false);
  //   setIsSupSubFolder(false);
  //   setIsSubJsFile(false);
  //   setIsSubCssFile(false);
  //   setIsSupSubjsFile(false);
  //   setIsSupSubscssFile(true);
  // };

  const DataFromAPI = async () => {
    await Axios.get("https://jsonplaceholder.typicode.com/users")
      .then((result) => {
        setIsApiData(result.data);
        console.log("result", result.data);
      })
      .catch(function (error) {
        console.log("Error occurred at calling API : ", error);
      });
  };

  // console.log('final-result',isApiData)

  return (
    <>
      {/* <div className={isFolder?'accordion-folder-container-with-border':"accordion-folder-container"} onClick={AccordionFolder}>
      {isFolderAccordion ? <FaAngleDown className="angle-icon"/> : <FaAngleRight className="angle-icon"/>}
      <p
        className ='accordion-folder-text'
      >
        src
      </p>
      </div>
      {isFolderAccordion ? (
        <ul>
          <li onClick={subFolderAccordion} className={isSubFolder?'accordion-folder-container-with-border':"accordion-folder-container"}>
            {isSubFolderAccordion ? <FaAngleDown className="angle-icon"/> : <FaAngleRight className="angle-icon"/>}
            <p>components</p>
          </li>
          {isSubFolderAccordion ? (
            <ul>
              <li onClick={SupSubFolderAccordion} className={isSupSubFolder?'accordion-folder-container-with-border':"accordion-folder-container"}>
                {isSupSubFolderAccordion ? <FaAngleDown className="angle-icon"/> : <FaAngleRight className="angle-icon"/>}
                <p>AccodionFolderComponent</p>
              </li>
              {isSupSubFolderAccordion ? (
                <ul>
                  <li className={isSupSubjsFile?'accordion-folder-container-with-border':"accordion-folder-container"} onClick={SupSubJSFile}>
                    < DiJavascript1 className="js-icon"/>
                    <p>AccordionFolder.js</p>
                  </li>
                  <li className={isSupSubScssFile?'accordion-folder-container-with-border':"accordion-folder-container"} onClick={SupSubScssFile}>
                    <TbBrandSass className="scss-icon"/>
                    <p>AccordionFolder.scss</p>
                  </li>
                </ul>
              ) : null}
            </ul>
          ) : null}
          <li className={isSubCssFile?'accordion-folder-container-with-border':"accordion-folder-container"} onClick={subCssFile}>
            <RiHashtag className="hash-icon"/> 
            <p>App.css</p>
          </li>
          <li className={isSubjsFile?'accordion-folder-container-with-border':"accordion-folder-container"} onClick={SubJsFile}>
            <DiJavascript1 className="js-icon"/> <p>App.js</p>
          </li>
        </ul>
      ) : null} */}

      <Switch className="antd-switch" checkedChildren="1" unCheckedChildren="0" onChange={switchData}/>

      <div >
        <div >
          <div className="accordion-folder-container" onClick={AccordionFolder}>
            {active ? (
              <FaAngleDown className="angle-icon" />
            ) : (
              <FaAngleRight className="angle-icon" />
            )}{" "}
            src api
          </div>

          {active ? (
            <ul>
              {isApiData.map((item, i) => (
                <li key={i}>
                  <div
                    onClick={() => AccordionSubFolder(i)}
                    className="accordion-folder-container sub"
                  >
                    {isActive === i ? (
                      <FaAngleDown className="angle-icon" />
                    ) : (
                      <FaAngleRight className="angle-icon" />
                    )}{" "}
                    {item.name}
                  </div>
                  {isActive === i ? (
                  <ul
                  >
                    <li className="accordion-folder-container sub-file-container" onClick={()=> {UserNameToTab(item.username)}}>
                      <DiJavascript1 className="js-icon" />
                      {item.username}
                    </li>
                    <li className="accordion-folder-container sub-file-container" onClick={() => {WebsiteToTab(item.website)}}>
                      <TbBrandSass className="scss-icon" />
                      {item.website}
                    </li>
                  </ul>
                  ) : null}
                </li>
              ))}
              <li className="accordion-folder-container">
                <RiHashtag className="hash-icon" />
                App.css
              </li>
              <li className="accordion-folder-container">
                <DiJavascript1 className="js-icon" /> App.js
              </li>
            </ul>
          ) : null}
        </div>
      </div>
    </>
  );
};
