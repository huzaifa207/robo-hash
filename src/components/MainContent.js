import Card from "./Card";

import "./styles/MainContent.css";

let MainContent = ({ robots }) => {
  let Cards = robots.map((robot) => <Card robot={robot} key={robot.id} />);
  return <div className="main-content">{Cards}</div>;
};

export default MainContent;
