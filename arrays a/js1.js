// exercise 1

function camelize(str) {
    return str
      .split('-')  // Split the string into an array of words
      .map((word, index) => index === 0 ? word : word[0].toUpperCase() + word.slice(1))
      .join('');   // Connect the words back into a camelCased string
  }