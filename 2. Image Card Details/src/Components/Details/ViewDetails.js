import Card from "../UI/Card";
import ViewImages from "./ViewImages";

const ViewDetails = (props) => {
  return (
    <div>
      <Card>
        <ViewImages image={props.image} className="img" />
        <div className="padding">
          <h3 className="text">{props.title}</h3>
          <p className="text">{props.description}</p>
          <button className="button"> {props.button}</button>
        </div>
      </Card>
    </div>
  );
};

export default ViewDetails;
