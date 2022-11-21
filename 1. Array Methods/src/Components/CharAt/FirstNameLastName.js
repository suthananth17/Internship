const shortName = [
    {
      firstName: "Angelina",
      lastName: "Jolie",
    },
    {
      firstName: "Eric",
      lastName: "Jones",
    },
    {
      firstName: "Paris",
      lastName: "Hilton",
    },
];

shortName.map((data) =>{
  firstLetter = data.firstName.charAt(0);
  lastName = data.lastName;
  console.log(`${firstLetter} ${lastName}`);
});



