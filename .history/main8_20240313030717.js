// // // sử dụng phương thức bind() trong function của javascript : ràng buộc
// // this.firstName = "Minh";
// // this.lastName = "Thao";
// // const teacher = {
// //   firstName: "Minh",
// //   lastName: "Thu",
// //   getFullName(data1, data2) {
// //     console.log(data1, data2);
// //     return `${this.firstName}${this.lastName}`;
// //   },
// // };
// // // case1
// // console.log(teacher.getFullName());
// // // case 2
// // const getTeacherName = teacher.getFullName.bind(teacher);
// // console.log(getTeacherName());
// // // tham chiếu vùng nhớ đến getTeacherName
// // // case2
// // console.log(getTeacherName());

// // // bind có nhiệm vụ kiểm soát để từ khóa this trỏ về đúng vị trí mình mong muốn
// // // bảng chất function cũng là obj

// // const obj1 = {
// //   hi: "ok",
// //   firstName: "Join1",
// //   lastName: "Ok",
// // };

// // const get = teacher.getFullName.bind(obj1);
// // console.log(get("Hello", "Hi"));

// // call in function
// // là phương thức trong prototype của Function constructor . Phương thức này được dùng để
// // gọi hàm và cũng có thể bind this cho hàm

// // Gọi hàm với call method
// // Gọi hàm và bind this , lưu ý trong strict mode vẫn có this nếu được bind

// // call
// const teacher = {
//   firstName: "Minh",
//   lastName: "Thu",
// };
// const me = {
//   firstName: "Trần Vũ Huỳnh Đức",
//   lastName: "TT",
//   getFullName() {
//     return `${this.firstName}${this.lastName}`;
//   },
// };
// // kĩ thuật mượn hàm từ một hàm khác : call() có luôn bind this
// console.log(me.getFullName.call(teacher));
