const teacher = {
  firstName: "Trần Vũ Huỳnh Đức",
  lastName: "Bình Sơn",
};

function gethello(message, message2) {
  return `${message}` + this.firstName + this.lastName + `${message2}`;
}
let result = gethello.apply(teacher, ["Em Chào Cô", "Cô Dạy Lớp 2"]);
console.log(result);

// call Giống apply , apply truyền đối số dạng mảng
let resutl2 = gethello.call(teacher, "Em Chào Cô", "Cô Dạy Lớp 2");
console.log(resutl2);

// Kĩ thuật mượn hàm trong apply

const teacher2 = {
  firstName: "Minh",
  lastName: "Thu",
  isOnline: false,
  isOffline: function () {
    return this.firstName + this.lastName + " Offline";
  },
  isOnline: function () {
    this.isOnline = true;
    return this.firstName + this.lastName + "Online";
  },
};
const me = {
  firstName: "Trần Vũ Huỳnh Đức",
  lastName: "Bình Sơn",
  isOnline: false,
};
// Mượn hàm
let result2 = teacher2.isOnline.apply(me);
console.log();
