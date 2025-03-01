import { useState } from "react";
import { Card, Tabs } from "antd";
import DebouncingSearch from "./DebouncingSearch";
import UseState from "./UseState";
import UseMemo from "./UseMemo";
import Calculation from "./Calculation";
import Counter from "./Counter";

const { TabPane } = Tabs;

const Tab = () => {
  const [activeTab, setActiveTab] = useState("1");
  return (
    <div className="max-w-5xl mx-auto p-6">
      <Card className="shadow-sm">
        <Tabs activeKey={activeTab} onChange={setActiveTab}>
          <TabPane tab="Counter" key="1">
            <Counter />
          </TabPane>
          <TabPane tab="UseState" key="2">
            <UseState />
          </TabPane>
          <TabPane tab="UseMemo" key="3">
            <UseMemo />
          </TabPane>
          <TabPane tab="Calculation" key="4">
            <Calculation />
          </TabPane>
          <TabPane tab="DebouncingSearch" key="5">
            <DebouncingSearch />
          </TabPane>
        </Tabs>
      </Card>
    </div>
  );
};

export default Tab;
