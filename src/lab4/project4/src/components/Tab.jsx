import { useState } from "react";
import { Card, Tabs } from "antd";
import Ex1 from "./Ex1";
import Ex2 from "./Ex2";
import Ex3 from "./Ex3";
import Ex4 from "./Ex4";
import Ex5 from "./Ex5";

const { TabPane } = Tabs;

const Tab = () => {
  const [activeTab, setActiveTab] = useState("1");
  return (
    <div className="max-w-5xl mx-auto p-6">
      <Card className="shadow-sm">
        <Tabs activeKey={activeTab} onChange={setActiveTab}>
          <TabPane tab="Ex1" key="1">
            <Ex1 />
          </TabPane>
          <TabPane tab="Ex2" key="2">
            <Ex2 />
          </TabPane>
          <TabPane tab="Ex3" key="3">
            <Ex3 />
          </TabPane>
          <TabPane tab="Ex4" key="4">
            <Ex4 />
          </TabPane>
          <TabPane tab="Ex5" key="5">
            <Ex5 />
          </TabPane>
        </Tabs>
      </Card>
    </div>
  );
};

export default Tab;
