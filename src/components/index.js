import React, { useState } from "react";
import "./style.css";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SkillCard from "./SkillCard";
import SkillPrioritySelected from "./SkillPrioritySelected";

function App() {
  const [coreSkills, setCoreSkills] = useState([
    { name: "Finance & Entrepreneurship", type: "core" },
    { name: "Maths", type: "core" },
    { name: "Commerce", type: "core" },
    { name: "Science", type: "core" },
    { name: "Language & communication", type: "core" },
  ]);
  const [specialSkills, setSpecialSkills] = useState([
    { name: "Space Tech", type: "special" },
    { name: "Robotics", type: "special" },
    { name: "Electronics", type: "special" },
  ]);
  const [creativeSkills, setCreativeSkills] = useState([
    { name: "Graphic Novel", type: "creative" },
    { name: "Yoga", type: "creative" },
    { name: "Music", type: "creative" },
    { name: "Dance", type: "creative" },
    { name: "Guitar", type: "creative" },
  ]);

  const [schoolSkills, setSchoolSkills] = useState([]);
  const [homeSkills, setHomeSkills] = useState([]);

  const handleDragStart = (event, skill) => {
    event.dataTransfer.setData("text/plain", JSON.stringify(skill));
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event, section) => {
    event.preventDefault();
    const skill = JSON.parse(event.dataTransfer.getData("text/plain"));
    if (section === "school") {
      setSchoolSkills((prevSkills) =>
        prevSkills.filter((prevSkill) => prevSkill.name !== skill.name)
      );
      setSchoolSkills((prevSkills) => [...prevSkills, skill]);
      setHomeSkills((prevSkills) =>
        prevSkills.filter((prevSkill) => prevSkill.name !== skill.name)
      );
    } else if (section === "home") {
      setHomeSkills((prevSkills) =>
        prevSkills.filter((prevSkill) => prevSkill.name !== skill.name)
      );
      setHomeSkills((prevSkills) => [...prevSkills, skill]);
      setSchoolSkills((prevSkills) =>
        prevSkills.filter((prevSkill) => prevSkill.name !== skill.name)
      );
    }
    setCoreSkills((prevSkills) =>
      prevSkills.filter((prevSkill) => prevSkill.name !== skill.name)
    );
    setSpecialSkills((prevSkills) =>
      prevSkills.filter((prevSkill) => prevSkill.name !== skill.name)
    );
    setCreativeSkills((prevSkills) =>
      prevSkills.filter((prevSkill) => prevSkill.name !== skill.name)
    );
  };

  const cancelSkill = (skill, section) => {
    if (skill.type === "core") {
      setCoreSkills((prevSkills) => [...prevSkills, skill]);
    } else if (skill.type === "special") {
      setSpecialSkills((prevSkills) => [...prevSkills, skill]);
    } else {
      setCreativeSkills((prevSkills) => [...prevSkills, skill]);
    }

    if (section === "school") {
      setSchoolSkills((prevSkills) =>
        prevSkills.filter((prevSkill) => prevSkill.name !== skill.name)
      );
    } else if (section === "home") {
      setHomeSkills((prevSkills) =>
        prevSkills.filter((prevSkill) => prevSkill.name !== skill.name)
      );
    }
  };

  return (
    <div className="App">
      <div className="header-school-container">
        <div className="side-header">School Level</div>
        <div className="school-column">
          <div className="level-select">
            <span>Level 0</span>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>
      </div>
      <div className="header-skill-container">
        <div className="side-header">Skills Selected</div>
        <div className="skills-column">
          <SkillCard
            skillsData={coreSkills}
            handleDragStart={handleDragStart}
            skillValue="core"
          />
          <SkillCard
            skillsData={specialSkills}
            handleDragStart={handleDragStart}
            skillValue="special"
          />
          <SkillCard
            skillsData={creativeSkills}
            handleDragStart={handleDragStart}
            skillValue="creative"
          />
        </div>
      </div>
      <div className="header-priority-container">
        <div className="side-header">Set Skill Priority</div>
        <div className="set-priority-column">
          <SkillPrioritySelected
            skills={schoolSkills}
            handleDrop={handleDrop}
            handleDragOver={handleDragOver}
            handleDragStart={handleDragStart}
            cancelSkill={cancelSkill}
            skillValue="school"
          />
          <SkillPrioritySelected
            skills={homeSkills}
            handleDrop={handleDrop}
            handleDragOver={handleDragOver}
            handleDragStart={handleDragStart}
            cancelSkill={cancelSkill}
            skillValue="home"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
