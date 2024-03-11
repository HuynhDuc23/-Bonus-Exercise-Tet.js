// Từ Khóa This

// Từ Khóa This trong javascript đề cập đến đối tượng mà nó thuộc về

// 1 Trong một phương thức . this tham chiếu tới đối tượng truy cập phương thức (đối tượng trước dấu chấm).
// Đứng ngoài phương thức this tham chiếu đế đối tượng global

// lưu ý : this trong hàm tạo là đại diện cho đối tượng sẽ được tạo
// this trong một hàm là undefiend khi ở strict mode cơ chế code nghiêm ngặt
// Các phương thức bind() , call()  apply() ,có thể tham chiếu đến đối tượng khác

// arow function không có this , nên khi 1 hàm có this dạng arow function thì nó sẽ đi ra bên
// ngoài để tìm conext gần nhất
// const test = {
//   prop: 42,
//   func: function () {
//     return this;
//   },
// };
// console.log(test.func());

function getThis() {
  return this;
}
const obj1 = {
  name: "obj1",
};
const obj2 = {
  name: "obj2",
};
obj1.getThis = getThis;
obj2.getThis = getThis;
// add key - value in obj1 và obj2 ;
console.log(obj1.getThis());
console.log(obj2.getThis());
