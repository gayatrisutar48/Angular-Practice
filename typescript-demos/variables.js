var a = 50;
var b = "hellooo";
var c;
c = 89.45;
var sum;
sum = a + c;
console.log(a);
console.log(b);
console.log(c);
console.log(sum);
console.log("name " + b);
//type assertion
var d = '1';
var e = d;
console.log(e);
//Inferred type in typescript
var num = 12;
console.log("The num is" + num);
num = 45;
console.log(num);
var global_num = 10;
var numbers = /** @class */ (function () {
    function numbers() {
        this.class_num = 20;
    }
    numbers.prototype.vari = function () {
        var local_num = 40;
        console.log("Loacal number " + local_num);
    };
    numbers.num1 = 30;
    return numbers;
}());
console.log("Global number " + global_num);
var obj = new numbers;
obj.vari();
console.log("CLass variable " + obj.class_num);
console.log("Static  variable " + numbers.num1);
