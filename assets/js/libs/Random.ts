/*
  * min~maxの少数ランダム(min,maxは含まない)
*/
export function Random(min: number = 0, max: number = 1) {
  return Math.random() * (max - min) + min
}

/*
  * min~maxのランダム整数(min,maxを含む)
*/
export function RandomInt(min: number = 0, max: number = 1) {
  return Math.floor(Math.random() * (max + 1 - min)) + min
}

