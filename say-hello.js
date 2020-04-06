const sayHello = (name) => {
  return `hello ${name}`;
};

const MAX_NUM_STUDENTS = 10;
const anotherFn = () => {};

// module.exports = sayHello;
module.exports = {
  sayHello,
  anotherFn,
  MAX_NUM_STUDENTS
};
