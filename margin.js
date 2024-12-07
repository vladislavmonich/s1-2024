function closeCompare(a, b, margin){
    if (!margin) margin=0
    if (Math.abs(a-b)<=margin) return 0
    if (a-b<margin) return -1
    if (a-b>margin) return 1
  }
  console.log(closeCompare(4, 5))