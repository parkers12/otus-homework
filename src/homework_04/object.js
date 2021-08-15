export function getObject() {
  const user = {
    name: "John",
  };
  user.age = +prompt("Введите число:");
  console.log(user.age);
}

export function getObjectAdmin() {
  const user = {
    name: "John",
    age: 25,
  };
  const admin = {};
  /*
    for (let key in user) {
        admin[key] = user[key];
    }
    */
  // const admin = Object.assign({}, ...user);
  const keys = Object.keys(user);
  for (let i = 0; i < keys.length; i += 1) {
    admin[i] = user[i];
  }
  admin.role = "admin";
  console.log(admin.role);
}

export function getVariables() {
  const admin = {
    name: "John",
    age: 25,
    role: "admin",
  };
  const { name, age, role } = admin;
  console.log(`${name}, ${age}, ${role}`);
}
