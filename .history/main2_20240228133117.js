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

function maxMin (arr) {
    return arr.sort();
};
const arr = [1,4,5,2];
console.log(maxMin(arr));
const arrNew = [];
arrNew.push(arr[arr.length-1]);
arrNew.push(arr[0]);
arrNew.forEach((item)=>{
    console.log(item);
})

