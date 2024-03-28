// bind() , apply() , call()

// bind() : - Trả về hàm mới với 'this' tham chiếu tới 'thisArg'
// Không thực hiện gọi hàm
// Nếu được bind đính kèm 'arg1 , arg2 , ...' thì các đối số này sẽ được ưu tiên hơn

// Call method
// Thực hiện : binh 'this' với thisArg và thực hiện gọi hàm
// Nhận các đối số cho hàm gốc từ 'arg1, arg2'...

// Apply method
// - Thực hiện bind 'this' với 'thisArg' và thực hiện gọi hàm
// - Nhận các đối số cho hàm gốc bằng đối số thứ 2 dưới dạng mảng []
