function array(string) {
  const arr=string.split(",")
    return arr.length>2? arr.slice(1,-1).join(" "): null
  }
  console.log(array('A1,B2,C3,D4,E5'))