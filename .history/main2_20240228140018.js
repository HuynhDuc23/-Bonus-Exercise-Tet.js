isCheck = value =>(value % 2 ===0? "Chan": "Le");
const result = isCheck(3);
// console.log(result);


// set default values 
// 28/2/2024
// tacgia , tieu de , nam xuat bang , trang thai
var books = [
    {
        tacGia : 'TranVuHuynhDuc',
        tieuDe : 'Books1',
        namXuatBan :'2020',
        trangThai : true
    },
    {
        tacGia : 'TranVuHuynhDuc',
        tieuDe : 'Books1',
        namXuatBan :'2020',
        trangThai : true
    }
]
// books.forEach((item)=>{
//    console.log(`tacGia : ${item.tacGia} tieuDe : ${item.tieuDe}  namXuatBan : ${item.namXuatBan} TrangThai : ${item.trangThai}`)
// })
// function 28/2/2024
const arr = [1,4,5,2];
 maxMin =  (arr)=>  arr.sort();
const arrNew = [];
arrNew.push(arr[arr.length-1]);
arrNew.push(arr[0]);
arrNew.forEach((item)=>{
     console.log(item);
})
// tach tu
let str = "Học JavaScript hay11111111111111111111 Web?";

let substrings = str.split(" ");

var lengthMax =  substrings[0].length;
var arrNew2 = [];
substrings.forEach((item=>{
    if(lengthMax <= item.length){
        lengthMax =  item.length ;  
        arrNew2.push(item); 
    }  
}));
console.log(arrNew2[arrNew2.length-1]);


// viet 1 ham nhap vao 1 chuoi 
//









