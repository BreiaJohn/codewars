function fakeBin(x){
    // covert string to an array
    let arr = x.split('')
    console.log('original string',x)
    console.log(arr)
    
    let something = arr.map((num) => {
    //   if (num < 5 ){
    //     return '0'
    //   } else {
    //     return '1'
    //   }
      return num < 5 ? '0':'1'
    })
     console.log("mapp arr",something)
    
    
    // convert the array to a string 
    
    return something.join('')
    }