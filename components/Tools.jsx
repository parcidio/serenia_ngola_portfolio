import toolsStyle from "../styles/Tools.module.css";
import Line from "./Line";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import tabsStyle from "../styles/Tabs.module.css";
import Tool from "./Tool";

const Tools = () => {
  return (
    <div className={toolsStyle.tools}>
      <h1>Tools</h1>
      <div className={toolsStyle.tools_container}>
        <Tabs defaultIndex={0} focusTabOnClick={false}>
          <TabList className={tabsStyle.tabList}>
            <Tab
              className={tabsStyle.tabList__tab}
              selectedClassName={tabsStyle.tabList__tab__active}
            >
              Programming
            </Tab>
            <Tab
              className={tabsStyle.tabList__tab}
              selectedClassName={tabsStyle.tabList__tab__active}
            >
              Design
            </Tab>
            <Tab
              className={tabsStyle.tabList__tabs}
              selectedClassName={tabsStyle.tabList__tab__active}
            >
              Organisation
            </Tab>
          </TabList>
          <TabPanel>
            <div className={toolsStyle.tools__tabPanel}>
              <Tool
                image="/tool-react.png"
                styles={toolsStyle}
                tooltipText="React"
              />
              <Tool
                image="/tool-nodejs.png"
                styles={toolsStyle}
                tooltipText="Nodejs"
              />
              <Tool
                image="/tool-django.png"
                styles={toolsStyle}
                tooltipText="Django"
              />
              <Tool
                image="/tool-unity.png"
                styles={toolsStyle}
                tooltipText="Unity"
              />
            </div>
            <p>...My programming arsenal...</p>
          </TabPanel>
          <TabPanel>
            <div className={toolsStyle.tools__tabPanel}>
              <Tool
                image="/tool-figma.png"
                styles={toolsStyle}
                tooltipText="Figma"
              />
              <Tool
                image="/tool-lucidspark.png"
                styles={toolsStyle}
                tooltipText="Lucidspark"
              />
            </div>
            <p>...A collection of apps I normally use in idea design flow...</p>
          </TabPanel>
          <TabPanel>
            <div className={toolsStyle.tools__tabPanel}>
              <Tool
                image="/tool-github.png"
                styles={toolsStyle}
                tooltipText="Github"
              />
              <Tool
                image="/tool-notion.png"
                styles={toolsStyle}
                tooltipText="Notion"
              />
            </div>
            <p>...A collection of apps I normally use to organise my work...</p>
          </TabPanel>
        </Tabs>
      </div>
      <Line />
    </div>
  );
};

export default Tools;
