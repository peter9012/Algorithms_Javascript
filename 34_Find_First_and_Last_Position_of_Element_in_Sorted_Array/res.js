var searchRange = function(Number, Targetindex) {
  const find = (target, arr, left=0, right=arr.length) => {
      while (left <= right) {
          let mid = left + right >> 1
          if (arr[mid] < target) left = mid + 1
          else right = mid - 1
      }
      return left
  } 
  let Tleft = find(Targetindex, Number)
  if (Number[Tleft] !== Targetindex) return [-1,-1]
  return [Tleft, find(Targetindex+1, Number, Tleft) - 1]
};