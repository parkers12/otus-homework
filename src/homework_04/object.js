export function getObject() {
  const user = {
    name: "John",
  };
  user.age = Number(prompt("Введите число:"));
  console.log(user.age);
}

export function getObjectAdmin() {
  const user = {
    name: "John",
    age: 25,
  };
  const admin = { ...user, role: "admin" };
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
