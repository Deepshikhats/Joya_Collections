import { AdminPanelLayout } from "@common";
import { AddStock } from "@components";
import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const AdminPanel: React.FC = () => {
  return (
    <AdminPanelLayout>
      <Tabs
        defaultActiveKey="profile"
        id="justify-tab-example"
        className="ad_navTabs mb-3"
        justify
      >
        <Tab eventKey="Dashboard" title="Dashboard">
          Tab content for Loooonger Tab
        </Tab>

        <Tab eventKey="home" title="Home">
          Tab content for Home
        </Tab>

        <Tab eventKey="NewProduct" title="Add Stock">
          <AddStock />
        </Tab>

        <Tab eventKey="profile" title="Profile">
          Tab content for Profile
        </Tab>
      </Tabs>
    </AdminPanelLayout>
  );
};

export default AdminPanel;
