function findEvenIndex(arr)
{
  for (let i=1; i<arr.length; i++) {
  
    let sumLeft = 0
    let sumRight =0
 
    for(let j=0; j<i; j++) {
      
      sumLeft += arr[j]
    }
    
    for (let k=i+1; k<arr.length; k++) {
    sumRight += arr[k]
    }
    
        if(sumLeft === sumRight ) {
        return i
      }
 
  }