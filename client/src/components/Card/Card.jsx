import "./card.css";

const Card = (props) => {
  return (
    <div className="card">
      <div className="card-cover">
        <img src={props.image} alt="" />
      </div>
      <h2>{props.name}</h2>
      <div className="card-footer">
        <p>--- {props.continent} ---</p>
      </div>
    </div>
  );
};

export default Card;
