import "./Skills.css";

function Skills() {
  return (
    <div id='skills' className="skill container">
      <h1>Skills</h1>
      <div className="skill__cards">
        <div className="my__skills">
          <h1>Frontend Developer</h1>
          <br />
          <h2>HTML --- 100%</h2>
          <h2>CSS --- 100%</h2>
          <h2>JS --- 75%</h2>
          <h2>REACT --- 30%</h2>
        </div>
        <div className="my__skills">
          <h1>Backend Developer</h1>
          <br />
          <h1>NO.</h1>
        </div>
      </div>
    </div>
  );
}

export default Skills;
