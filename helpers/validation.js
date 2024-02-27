export function isValidationFormEmail(email){
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(email.match(validRegex)){
        return true ;
    }
    return false ;
}
export function isValidationFormPassword(password){
    return password.length > 6 && password.length <=12 ;
}