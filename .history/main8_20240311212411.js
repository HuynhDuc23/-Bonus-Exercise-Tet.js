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
// case 2
const getTeacherName = teacher.getFullName;
// tham chiếu vùng nhớ đến getTeacherName
// case2
console.log(getTeacherName());
