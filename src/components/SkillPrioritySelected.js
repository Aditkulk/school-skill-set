const { faClose } = require("@fortawesome/free-solid-svg-icons");
const { FontAwesomeIcon } = require("@fortawesome/react-fontawesome");

const SkillPrioritySelected = (props) => {
  const {
    skills,
    handleDrop,
    handleDragOver,
    handleDragStart,
    cancelSkill,
    skillValue,
  } = props;

  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <div
      className={`${skillValue}-section`}
      onDragOver={(event) => handleDragOver(event)}
      onDrop={(event) => handleDrop(event, skillValue)}
    >
      <div className="section-side-header">
        {capitalize(skillValue)} Priority
      </div>
      <div className="skill-list">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className={`skill ${skill.type}`}
            draggable
            onDragStart={(event) => handleDragStart(event, skill)}
          >
            {skill.name}
            <button onClick={() => cancelSkill(skill, skillValue)}>
              <FontAwesomeIcon icon={faClose} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillPrioritySelected;
