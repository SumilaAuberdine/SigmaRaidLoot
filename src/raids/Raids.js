import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import Raid from "./raid/Raid";
import { useLocation, useHistory } from "react-router-dom";

function Raids() {
  const history = useHistory();
  const query = new URLSearchParams(useLocation().search);
  const raid = query.get("raid");
  return (
    <Tabs
      defaultActiveKey={raid || "AQ40"}
      onSelect={(k) => history.push({ search: `?raid=${k}` })}
    >
      <Tab eventKey="ONIXYA" title="ONIXYA">
        <Raid type="ONIXYA" />
      </Tab>
      <Tab eventKey="MC" title="MC">
        <Raid type="MC" />
      </Tab>
      <Tab eventKey="ZG" title="ZG">
        <Raid type="ZG" />
      </Tab>
      <Tab eventKey="BWL" title="BWL">
        <Raid type="BWL" />
      </Tab>
      <Tab eventKey="AQ20" title="AQ20">
        <Raid type="AQ20" />
      </Tab>
      <Tab eventKey="AQ40" title="AQ40">
        <Raid type="AQ40" />
      </Tab>
      <Tab eventKey="NAXX" title="NAXX">
        <Raid type="NAXX" />
      </Tab>
    </Tabs>
  );
}

export default Raids;
