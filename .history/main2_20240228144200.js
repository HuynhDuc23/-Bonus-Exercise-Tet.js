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
    //  console.log(item);
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


// length 

// Javascript program for implementation of selection sort 
function swap(arr,xp, yp) 
{ 
    var temp = arr[xp]; 
    arr[xp] = arr[yp]; 
    arr[yp] = temp; 
} 
  
function selectionSort(arr,  n) 
{ 
    var i, j, min_idx; 
  
    // One by one move boundary of unsorted subarray 
    for (i = 0; i < n-1; i++) 
    { 
        // Find the minimum element in unsorted array 
        min_idx = i; 
        for (j = i + 1; j < n; j++) 
        if (arr[j] < arr[min_idx]) 
            min_idx = j; 
  
        // Swap the found minimum element with the first element 
        swap(arr,min_idx, i); 
    } 
} 
  
function printArray( arr,  size) 
{ 
    var i; 
    for (i = 0; i < size; i++) 
        document.write(arr[i] + " "); 
    document.write(" <br>"); 
} 


// selecttion sort
function selectionSort2(arr,n){
    for(let i = 0 ; i <n-1 ;i++){
        var min_index = i ;
        for(let j = i+1 ; j<n;j++){
            if(arr[j]<arr[min_index]){
                min_index =  j
            }
        }
        if(min_index != i){
            swap(arr[min_index],arr[i])
        }
    }
}
var arr5 = [64, 25, 12, 22, 11]; 
    var n = 5; 
    selectionSort2(arr, n);
    arr5.forEach((item)=>{
        console.log(item);
    })

// function total () {
//     var sum = 0 ;
//     for(let i = 0 ; i < arguments.length ;i++){
//        sum += arguments[i];
//     }
//     return sum ;
// }
// const arr4 = [1,2,3]
// console.log(total(1,2,3,44));
  












