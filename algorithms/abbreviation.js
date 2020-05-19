function abbrevName(name){
    let splitArr = name.split(" ")
    console.log(splitArr)
    let result = []
    for (i=0; i<splitArr.length; i++) {
      console.log(splitArr[i][0])
      result.push(splitArr[i][0].toUpperCase())
  
    }
    return result.join('.')
  }