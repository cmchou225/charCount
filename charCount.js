function charCount (string){
  var str = string.replace(/\s/g, '');
  console.log(str);
  var strObject = {}
  for(char of str){
    if(!strObject.hasOwnProperty(char))
      strObject[char] = 0;
    strObject[char] += 1;
  }
  return strObject;
}

console.log(charCount("lighthouse in the house"));