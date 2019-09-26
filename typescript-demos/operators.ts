var x=20
var y=5

console.log("Arithmatic Operators\n")

console.log("Addition "+(x+y))
console.log("Subtraction "+(x-y))
console.log("Multiplication "+(x*y))
console.log("Division "+(x/y))
console.log("Modulus "+(x%y))
console.log("Increament "+(x++))
console.log("Decreament "+(x--))

console.log("\nRelational Operators\n")

var res=x>y
console.log("x is greater than y: "+res)
res=x<y
console.log("x is lesser than y: "+res)
res=x>=y
console.log("x is greater than equal to y: "+res)
res=x<=y
console.log("x is lesser than equal to y: "+res)
res=x==y
console.log("x is equal to y: "+res)
res=x!=y
console.log("x is not equal y: "+res)

console.log("\nLogical Operators \n")

console.log("x>y&&x<y : "+(x>y&&x<y))
console.log("x>y||x<y : "+(x>y||x<y))
console.log("!(x>y) "+(!(x>y)))


console.log("\nBitwise Operator\n")
var l=2
var m=3
console.log("here variable l=2 and variavle m=3")
console.log("bitwise and-& : "+(l&m))
console.log("bitwise or-| : "+(l|m))
console.log("bitwise xor-^ : "+(l^m))
console.log("bitwise not-~ : "+(~l))
console.log("bitwise left shift-<< : "+(l<<1))
console.log("bitwise right shift->> : "+(l>>1))
console.log("bitwise right shift with zero->>> : "+(l>>1))

console.log("\nAssignment Operator\n")
var a=30
var c=6
var r
console.log("simple assignment: "+(r=a+c))
console.log("Add and assignment: "+(a+=c))
console.log("substract and assignment: "+(a-=c))
console.log("multiply and assignment: "+(a*=c))
console.log("divide and assignment: "+(a/=c))

console.log("\nMiscellanous operator\n")
var k=7
var i=-k
console.log("value of k "+k)
console.log("value of i "+i)


console.log("\nString oprators :\nConcatenation operator(+)\n")
//var str:string="Hi"
//var str1:string="world"
var msg:string="Hi "+"World"
console.log(msg)


console.log("\nCnditional Opertor\n")
var m=-8
var result=m>0?"Positive":"Negative"
console.log(result)


console.log("\ntype operator:\ntypeof operator\n")
var j=8
console.log("type of j is "+(typeof(j)))

