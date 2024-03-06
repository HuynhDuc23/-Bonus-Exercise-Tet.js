function myFunction(a,n){
    for(var i = 1 ; i <= a.length ;i++){
         if(i==n){
            return a[i];
         }
    }
}
console,log(myFunction('abcd',1))