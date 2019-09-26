var greeting = /** @class */ (function () {
    function greeting() {
    }
    greeting.prototype.greet = function () {
        console.log("hello welcome");
    };
    return greeting;
}());
var obj = new greeting();
obj.greet();
