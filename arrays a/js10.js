// exercise 10

function getAverageAge(users) {
    if (users.length === 0) {
      return 0; // Return 0 for an empty array to avoid division by zero
    }
  
    let sumOfAges = 0;
  
    for (let i = 0; i < users.length; i++) {
      sumOfAges += users[i].age;
    }
  
    const averageAge = sumOfAges / users.length;
  
    return averageAge;
  }
  