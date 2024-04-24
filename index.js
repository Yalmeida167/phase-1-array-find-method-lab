// code your solution here
function superbowlWin(record) {
  let superbowlYear = record.find(function(obj) {
    if(obj["result"] === "W") {
      let winningYear = obj["year"]
      return winningYear
    }
//     return obj["result"] === "W"
  })
  if(superbowlYear === undefined) {
    return undefined
  }
  else if(superbowlYear !== undefined) {
    return superbowlYear["year"]
  }
}
// const array1 = [ers, erf, erg]
// function abc(array) {
//   return array[0] === true
// }
// const foundItem = array1.find(abc) 