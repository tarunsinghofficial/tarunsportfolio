import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import experience from "../static/experience";



const ExpComponent = ({
  title,
  company,
  dateComp,
  description1,
  description2,
  description3,
}) => {
  return (
    <div className="flex flex-col">
      <div>
        <h2 className="text-white text-3xl text-semibold">{title}</h2>
      </div>
      <div className="flex justify-between">
        <p className="text-primary-blue">{company}</p>
        <p className="text-primary-blue">{dateComp}</p>
      </div>
      <div className="mt-3">
        <p className="list-disc">&#8227; {description1}</p>
        <p className="list-disc">&#8227; {description2}</p>
        { description3 && <p className="list-disc">&#8227; {description3}</p> }
      </div>
    </div>
  );
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <p>{children}</p>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ flexGrow: 1, display: "flex" }}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        sx={{ borderRight: 1, borderColor: "divider" }}
        className="text-white"
      >
        {experience.map((exp, index) => (
          <Tab
            fontFamily="body"
            key={index}
            label={exp.title}
            {...a11yProps(index)}
            style={{ color: value === index ? "#1FB6FF" : "white" }}
          />
        ))}
      </Tabs>
      {experience.map((exp, index) => (
        <TabPanel value={value} index={index} key={index} className="w-[100%] h-auto">
          <ExpComponent
            title={exp.title}
            company={exp.company}
            dateComp={exp.dateCom}
            description1={exp.description1}
            description2={exp.description2}
            description3={exp.description3}
          />
        </TabPanel>
      ))}
    </Box>
  );
}
