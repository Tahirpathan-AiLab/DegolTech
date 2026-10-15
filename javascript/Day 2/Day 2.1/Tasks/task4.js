function createUser() {
  const username = "tahir123";

  return function () {
    return username;
  };
}

const getUsername = createUser();
console.log(getUsername());
