var a:number=50
var b="hellooo"
var c:number
c=89.45
var sum
sum=a+c
console.log(a)
console.log(b)
console.log(c)
console.log(sum)
console.log("name "+b)


//type assertion

var d='1'
var e:number=<number> <any> d
console.log(e)


//Inferred type in typescript

var num=12
console.log("The num is"+num)
num=45
console.log(num)
