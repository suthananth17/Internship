import Profile from "./Components/Profile/Profile";
import image1 from "./Components/Images/1.jpg";
import image2 from "./Components/Images/2.jpg";


function App() {
  const profile = [
    {
      Name: "Venukan K",
      Role: "Associatie Software Engineer",      
      image: image2,
      WorkOrders: 15,
      Tasks: 32,
      Roles: 4
    },

    {
      Name: "Suthananth K",
      Role: "Software Engineer Intern",      
      image: image1,
      WorkOrders: 15,
      Tasks: 32,
      Roles: 4
    }
  ];

  return (
    <div className="card_container">
      {profile.map((data) => {
        return (
      
          <Profile
                
              {...data}            
            // Name={data.Name}
            // Role={data.Role}
            // image={data.Image}
            // WorkOrders={data.WorkOrders} //camelcase
            // Tasks={data.Tasks}
            // Roles={data.Roles}
          /> 

        );
      })}
    </div>
  );
}

export default App;
