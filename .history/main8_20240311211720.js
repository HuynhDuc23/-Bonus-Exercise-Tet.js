// sử dụng phương thức bind() trong function của javascript : ràng buộc
this.firstName = "Minh";
this.lastName = "Thao";
const teacher = {
  firstName: "Minh",
  lastName: "Thu",
  getFullName() {
    return `${this.firstName}${this.lastName}`;
  },
};
// case1
console.log(teacher.getFullName());
const getTeacherName = teacher.getFullName;
console.log(getTeacherName());
