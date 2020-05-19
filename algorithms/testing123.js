var number=function(array){
    //your awesome code here
    let result=[]
  
    for(let i=0;i<array.length ; i++) {
      result.push(i+1 + ': ' + array[i])
    }
    return result
  }