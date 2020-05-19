function findNextSquare(sq) {
    // Return the next square if sq is a perfect square, -1 otherwise
    let result
    let square = Math.sqrt(sq) 
    if (Number.isInteger(square)) {
    result = square+1
    return result*result 
    
    }
    
    return -1;
  }