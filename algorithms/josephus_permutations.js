// https://www.codewars.com/kata/5550d638a99ddb113e0000a2/train/javascript

function josephus(items,k){
    let result = []
    
    let safetyInt = 0
    
    let i = k-1;
    
    while (items.length && safetyInt < 100) {
      const indexArray = i % items.length; // make sure the i stays in array bounds (modulo)
      
      const item = items[indexArray];
      result.push(item)
      items.splice(indexArray, 1)
      
      i--;
      i += k;
      
      safetyInt++;
    }
    
    console.log(result, items.length);
    
    return result;
  }

  const res = josephus([1,2,3,4,5,6,7,8,9], 1);

  console.log('result: ', res);