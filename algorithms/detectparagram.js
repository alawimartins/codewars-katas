function isPangram(string){
    let newstr= string.split(' ').join('')
    
    let lowStr = newstr.toLowerCase()
    let letters= ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','x','w','y','z']
    console.log(lowStr)
    let answer= 0
    
    for (i=0; i< letters.length; i++) {
      answer =false
      for (j=0; j<lowStr.length; j++) {
        if(letters[i]===lowStr[j]) {
          answer = true
          break;
        }
        } 
      if (!answer) {
        return false 
      }
      }
        return true
  
    }