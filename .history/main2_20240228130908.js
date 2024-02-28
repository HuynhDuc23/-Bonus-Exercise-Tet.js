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
books.forEach((item)=>{
   console.log(item)
})