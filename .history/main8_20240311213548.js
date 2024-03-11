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
const getTeacherName = teacher.getFullName.bind(teacher);
console.log(getTeacherName());
// tham chiếu vùng nhớ đến getTeacherName
// case2
console.log(getTeacherName());

// bind có nhiệm vụ kiểm soát để từ khóa this trỏ về đúng vị trí mình mong muốn
// bảng chất function cũng là obj

const obj1 = {
  firstName: "Join1",
  lastName1: "Ok",
};

const get = teacher.getFullName.bind(obj1);
console.log(get());
