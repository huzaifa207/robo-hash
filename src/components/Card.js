import "./styles/Card.css";

let Card = ({ robot }) => {
  return (
    <div className="card">
      <div className="img-box">
        <img
          src={`https://robohash.org/${robot.username}?size=200x200`}
          alt="robot-pics"
        />
      </div>
      <div className="text-box">
        <h2>{robot.name}</h2>
        <p>{robot.email}</p>
      </div>
    </div>
  );
};

export default Card;
