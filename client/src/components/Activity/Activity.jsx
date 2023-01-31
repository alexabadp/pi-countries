import "./activity.css";

const Activity = (props) => {
  return (
    <div className="activity">
      {/* <div className="activity__cover"></div> */}

      <h2>{props.name}</h2>
      <hr />
      <div className="activity__grid">
        <h3>Duration: </h3>
        <p>
          {props.duration}
          <span> Hrs.</span>
        </p>
        <h3>Difficulty: </h3>
        <p>{props.difficulty}</p>
        <h3>Season: </h3>
        <p>{props.season}</p>
      </div>
    </div>
  );
};

export default Activity;
