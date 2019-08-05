// Code your solution here


function findMatching(arr, string){
  let m = arr.filter(str => {
    return  str.toLowerCase() === string.toLowerCase();
  })
  return m
}

function fuzzyMatch(arr, string){
  let m = arr.filter(str => {
    return str.substring(0, string.length) === string
  })
    return m 
}

function matchName(arr, string){
  let m = arr.filter(str => {
    return str.name === string
  })
  return m
}