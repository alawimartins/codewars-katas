function solution(str, ending){
  
 let strArr = str.split('')
 let result = strArr.length-ending.length
  
  let finalres = strArr.slice(result)
  console.log(finalres)
  if (finalres.join('') ===ending){
    return true
  } 
return false

}