import Card from "../Components/UI/Card";
import deleteIcon from "../images/delete.png";
import "./viewPost.css";

function ViewPost(props) {
  return (
    <div>
      <Card>
        <div className="containerHead">
          <div className="blog">Blog: {props.id}</div>
          <br></br>
          <button className="button">
            <img
              alt="delete"
              src={deleteIcon}
              onClick={() => props.handleDelete(props.id)}
              className="delete"
            ></img>
          </button>
        </div>
        <p className="title">{props.title}</p>
        <br></br>
        <p className="description">{props.body}</p>
      </Card>
    </div>
  );
}

export default ViewPost;
