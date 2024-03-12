const me = {
  lastName: "Trần",
  firstName: "Đức",
};
const teacher = {
  lastName: "Minh",
  firstName: "Thu",
  getFullName: function (data1, data2) {
    console.log(data1, data2);
    return this.firstName + this.lastName;
  },
};
// Trả về một hàm mới meNew === getFullName() -> this-> Trần -> Đức
const meNew = teacher.getFullName.bind(me);
console.log(meNew("dataNew", "dataNew2"));
