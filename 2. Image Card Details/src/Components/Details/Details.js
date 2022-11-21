import ViewDetails from "./ViewDetails";
import image1 from "../Images/1.jpg";
import image2 from "../Images/2.jpg";
import image3 from "../Images/3.jpg";



//Object inside lib of Components
const Details = () => {
  const details = [
    {
      title: "Seamlessly visualize quality",
      description:
        "Collaboratively administrate empowered markets via plug-and-play networks.",
      image: image1,
      button: "Here's Why",
    },

    {
      title: "Completely Synergize",
      description:
        "Dramatically engage seamlessly visualize quality intellectual capital without superior collaboration and idea-sharing. ",
      image: image2,
      button: "Here's How",
    },

    {
      title: "Dynamically Procrastinatera ",
      description:
        "Completely synergize resource taxing relationships via premier niche markets.Read more",
      image: image3,
      button: "Read More",
    },
    {
      title: "Seamlessly visualizez quality",
      description:
        "Collaboratively administrate empowered markets via plug-and-play networks.",
      image: image1,
      button: "Here's Why",
    },

    {
      title: "Completely Synergizea",
      description:
        "Dramatically engage seamlessly visualize quality intellectual capital without superior collaboration and idea-sharing. ",
      image: image2,
      button: "Here's How",
    },

    {
      title: "Dynamically Procrastinate ",
      description:
        "Completely synergize resource taxing relationships via premier niche markets.Read more",
      image: image3,
      button: "Read More",
    },
  ];

  return (
    <div className="container-bg">
      {details.map((data) => {
        return (
          <ViewDetails
            key={data.title}
            title={data.title}
            description={data.description}
            button={data.button}
            image={data.image}
          ></ViewDetails>
        );
      })}
    </div>
  );
};

export default Details;
