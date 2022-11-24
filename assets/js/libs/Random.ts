/*
  * min~maxの少数ランダム(min,maxは含まない)
*/
export function Random(min: number = 0, max: number = 1) {
  return Math.random() * (max - min) + min
}

/*
  * min~maxの整数ランダム(min,maxを含む)
*/
export function RandomInt(min: number = 0, max: number = 1) {
  return Math.floor(Math.random() * (max + 1 - min)) + min
}

/*
 * ランダムテキスト
 * @param digit {number} - 桁数
 * @param isNum {boolean} - 数字
 * @param isAlphabet {boolean} - アルファベット
 * @param isUppercase {boolean} - アルファベット大文字
*/
export function RandomText(digit: number = 8, isNum: boolean = true, isAlphabet: boolean = true, isUppercase: boolean = false) {
  let pattern = ''

  if(isNum) {
    pattern += '0123456789'
  }
  if(isAlphabet) {
    pattern += 'abcdefghijklmnopqrstuvwxyz'
  }
  if(isUppercase) {
    pattern += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  }

  let val = ''

  for(let i = 0; i < digit; i++) {
    val += pattern[Math.floor(Math.random() * pattern.length)]
  }
  return val
}

/*
 * ランダムテキスト(文字指定)
 * @param digit {number} - 桁数
 * @param textList {string} - 文字一覧
*/
export function RandomTextInput(digit: number = 8, textList: string) {
  if(typeof textList !== 'string') return null

  textList = textList.replace(/\s+/g, "")
  if(textList.length === 0) return null

  let pattern = textList
  let val = ''

  for(let i = 0; i < digit; i++) {
    val += pattern[Math.floor(Math.random() * pattern.length)]
  }

  return val
}
