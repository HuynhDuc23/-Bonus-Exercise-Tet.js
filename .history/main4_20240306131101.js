function t () {
    var x = "10";
    function y() {
        x ="1";
    }
    y();
    return x ;
}
console.log(t());
