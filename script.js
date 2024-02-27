import {isValidationFormEmail,isValidationFormPassword } from "./helpers/validation.js"
var listUser = [
    {
        user : "huynhduc23@gmail.com",
        password: "12345678"
    },
    {
        user :"donganh76@gmail.com",
        passsword: "12312312"
    }

]
var email = document.querySelector('#email');
var password = document.querySelector('#password');
const btn = document.querySelector('.btn');
btn.addEventListener('click',function(){
    const errors = [];
     var getEmail = email.value ;
     console.log(getEmail);
     var getPassword = password.value;
     console.log(getPassword);
     if(getEmail && getPassword){
         if(isValidationFormEmail(getEmail)&&isValidationFormPassword(getPassword)){
            console.log("Sucess!")
             for(var i = 0 ; i < listUser.length ;i++){
                console.log(listUser[i].user);
                console.log(listUser[i].password);
                if(listUser[i].user === getEmail && listUser[i].password === getPassword){
                    setTimeout(()=>{
                        const error2 = 'Bạn Đã Đăng Nhập Thành Công'
                        alert(error2);
                    },1000)
                    sessionStorage.setItem('token','23@sahdsjhkadasd89');
                    break;
                }
                else{
                    const error1 = 'Tài Khoản Hoặc Mật Khẩu Không Chính Xác!'
                    errors.push(error1);
                    alert(error1);
                }
             }
         }
         else{
            setTimeout(()=>{
                const error3 = 'Vui Lòng Kiểm Tra Lại Tài Khoản Mật Khẩu!'
                alert(error3);
                errors.push(error3);
            },1000)
         }
     }
     else {
        setTimeout(()=>{
            const error4 = 'Vui Lòng Nhập Đầy Đủ Thông Tin ';
            alert(error4);
            errors.push(error4);
        },1000)
     }    
})
