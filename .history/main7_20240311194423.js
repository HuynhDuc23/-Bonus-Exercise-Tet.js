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

// function getThis() {
//   return this;
// }
// const obj1 = {
//   name: "obj1",
// };
// const obj2 = {
//   name: "obj2",
// };
// obj1.getThis = getThis;
// obj2.getThis = getThis;
// // add key - value in obj1 và obj2 ;
// console.log(obj1.getThis());
// console.log(obj2.getThis());

// const obj3 = {
//   __proto__: obj1,
//   name: "obj3",
// };

// console.log(obj3.getThis()); // { name: 'obj3' }

// prototype
// Create new Object , Object literal
// var mouse = {
//   weight: 43,
//   getWeight: function () {
//     return this.weight;
//   },
// };
// // constructor function
// function Mouse(color, weight) {
//   this.type = "mouse";
//   this.color = color;
//   this.weight = weight;
// }

// var mickey = new Mouse("white", 20);
// console.log(mickey.color);
// console.log(mickey.weight);

// function -> thực chất cũng là một obj trong nó điều có thuôc tính prototype

// prototype có tính năng chia sẽ với các obj được tạo ra từ khóa new

// obj literal : là một obj bình thường

console.log(this);

// function myFunc() {
//   return this;
// }
// console.log(myFunc()); window

// constructor function
function Mouse(color, weight) {
  this.color = color;
  this.weight = weight;
}
Mouse.prototype.sleep = function () {
  return "Eat";
};
var mouse1 = new Mouse("red", 0.2);
var mouse2 = new Mouse("green", 0.8);
const result = mouse1.sleep() === mouse2.sleep();
console.log(result);
// vì 2 đối tượng này truy cập cùng một thuộc phương thức sleep()
