import Card from "../UI/Card";
import image2 from "../Images/dots.png"
import styles from "../UI/Card.module.css"

//{props}
//module css import
const Profile = (props) => {
  return (
    <div>
      <Card className={""}>
      <img src={image2} className={styles.dots}></img>
        <div className={styles.card_profile}>
          <img src={props.image} className={styles.img}></img>
        </div>

        <div className={styles.card_info}>
          <div className={styles.card_title}>{props.Name}</div>
          <div className={styles.card_role}>{props.Role}</div>
        </div>
        <div className={styles.card_stats}>
          <div className={styles.stat}>
            <h3 className={styles.stat_num}>{props.WorkOrders}</h3>
            <p className={styles.stat_title}> Work Orders </p>
          </div>

          <div className={styles.stat}>
            <h3 className={styles.stat_num}>{props.Tasks}</h3>
            <p className={styles.stat_title}> Tasks </p>
          </div>

          <div className={styles.stat}>
            <h3 className={styles.stat_num}>{props.Roles}</h3>
            <p className={styles.stat_title}> Roles </p>
          </div>
        </div>
        <button className={styles.button}>View Profile</button>
      </Card>
    </div>
  );
};

export default Profile;
