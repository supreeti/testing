function stringLen(str) {
    if (str.length < 1 || str.length > 16) {
      throw new Error("String must between 1 to 16 characters long");
    } 
  
    return str.length;
  }
  
  module.exports = stringLen;
  
  