// Code your solution here


function findMatching(arr, string){
  let x = arr.filter(str.downcase => {
    return  str === string.downcase
  })
  return x
}