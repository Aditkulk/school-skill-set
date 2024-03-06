const SkillCard = (props) => {
  const { skillsData, handleDragStart, skillValue } = props;

  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <div className="skill-list skill-items skill-card">
      <div className="section-side-header">
        {capitalize(skillValue)} <span className="level-text">(level 0)</span>
      </div>
      <div className={`${skillValue}-skill`}>
        {skillsData.map((skill) => (
          <span
            key={skill.name}
            className="skill"
            draggable
            onDragStart={(event) => handleDragStart(event, skill)}
          >
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
