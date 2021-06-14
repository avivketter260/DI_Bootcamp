'use strict'
// Slice out and swap the first 2 characters of the 2 strings from part 1.
let str1 = "mix"
let str2 = "pod" 
let str3 =   str2+str1
let result= str3.substring(0,2)+ str3.substring(5) + ' ' + str3.substring(3,5)+str3.substring(2,3)
console.log(result)