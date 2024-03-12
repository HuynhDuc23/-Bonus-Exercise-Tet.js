const me = {
  lastName: "Trần",
  firstName: "Đức",
};
const teacher = {
  lastName: "Minh",
  firstName: "Thu",
  getFullName: function () {
    return this.firstName + this.lastName;
  },
};
const meNew = teacher.getFullName.bind(me);
console.log(meNew.getFullName());
