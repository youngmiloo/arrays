//exercise 6

let users = [
    { name: "Tom", age: 25 },
    { name: "Mateusz", age: 30 },
    { name: "Robert", age: 22 }
  ];
  
  let namesArray = users.map(function(user) {
    return user.name;
  });
  
  console.log(namesArray);  // Output: ["Tom", "Mateusz", "Robert"]