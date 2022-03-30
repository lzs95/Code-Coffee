const allCharactersSame = (str) => {
  // YOUR SOLUTION GOES HERE
  let result = true;
  for (let i = 0; i < str.length; i++) {
    let counter = 1;

    if (str[i] !== str[counter]) {
      result = false;
      break;
    }
    counter++;
  }

  return result;
};

//Secret Code: 79879012
