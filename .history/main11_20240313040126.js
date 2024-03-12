// const me = {
//   lastName: "Trần",
//   firstName: "Đức",
// };
// const teacher = {
//   lastName: "Minh",
//   firstName: "Thu",
//   getFullName: function (data1, data2) {
//     console.log(data1, data2);
//     return this.firstName + this.lastName;
//   },
// };
// // Trả về một hàm mới meNew === getFullName() -> this-> Trần -> Đức
// // bind có nhiệm vụ kiểm soát để từ khóa this trỏ về đúng vị trí mình mong muốn
// const meNew = teacher.getFullName.bind(me);
// console.log(meNew("dataNew", "dataNew2"));

// call
const student = {
  lastName: "Student",
  firstName: "Đức",
};
const meStudent = {
  lastName: "Huỳnh",
  firstName: "Đức2",
  getFullName: function () {
    return this.lastName + this.firstName;
  },
};
console.log(meStudent.getFullName.apply(student));
