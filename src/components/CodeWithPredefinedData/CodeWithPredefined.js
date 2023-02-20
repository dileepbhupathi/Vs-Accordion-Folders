<div className="accordian-container">
        <div className="accordion-item">
          <div className="accordion-folder-container" onClick={AccordionFolder}>
            {active ? (
              <FaAngleDown className="angle-icon" />
            ) : (
              <FaAngleRight className="angle-icon" />
            )}{" "}
            src
          </div>

          {active ? (
            <ul>
              {VsAccordionFolderData.map((item, i) => (
                <li>
                  <div
                    onClick={() => AccordionSubFolder(i)}
                    className="accordion-folder-container"
                  >
                    {isActive === i ? (
                      <FaAngleDown className="angle-icon" />
                    ) : (
                      <FaAngleRight className="angle-icon" />
                    )}{" "}
                    {item.subFolder}
                  </div>
                  {/* {isActive === i ? ( */}
                  <ul
                    className={
                      isActive === i
                        ? "accordion-content-open"
                        : "accordion-content-close"
                    }
                  >
                    {item.subFile.map((each) => (
                      <li className="accordion-folder-container">
                        {each.icon}
                        {each.name}
                      </li>
                    ))}
                  </ul>
                  {/* ) : null} */}
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