const teacher = {
  firstName: "Trần Vũ Huỳnh Đức",
  lastName: "Bình Sơn",
};

function gethello(message, message2) {
  return `${message}` + this.firstName + this.lastName + `${message2}`;
}
let result = gethello.apply(teacher, ["Em Chào Cô", "Cô Dạy Lớp 2"]);
console.log(result);

// call Giống ally , apply truyền đối số dạng mảng
