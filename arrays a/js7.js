// exercise 7

let users = [
    { name: "Tom", surname: "Fornal", id: 1 },
    { name: "Mateusz", surname: "Frydrych", id: 2 },
    { name: "Robert", surname: "Lewandowski", id: 3 }
  ];
  
  let transformedArray = users.map(function(user) {
    return {
      id: user.id,
      fullName: user.name + " " + user.surname
    };
  });
  
  console.log(transformedArray);