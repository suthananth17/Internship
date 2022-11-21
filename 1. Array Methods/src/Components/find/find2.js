const persons = [
    {
      name: "Suthananth",
      age: 25,
    },
    {
      name: "Abishanth",
      age: 30,
    },
    {
      name: "Nithushan",
      age: 20,
    },
  ];
   
  let result = persons.find(findsuthananthe).age;
   
  function findsuthananthe(person) {
    return person.name === "Suthananth";
  }
  console.log(result);
   
  