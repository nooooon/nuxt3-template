export class AnimationFrame {
  private _updateList: any
  private _id: number

  constructor() {
    this._updateList = []
    this._id = window.requestAnimationFrame(() => this._update())
  }

  /* 
    * 実行する関数を追加
    * @param fn {Function} - 実行する関数
  */
  add(fn: Function) {
    this._updateList.push(fn)
  }

  /* 
    * 実行する関数を削除
    * @param fn {Function} - 削除する関数
  */
  remove(fn: Function) {
    let list = []
    for(let val in this._updateList) {
      if(this._updateList[val] != fn) {
        list.push(this._updateList[val])
      }
    }
    this._updateList = list
  }

  _update() {
    for(let [val, i] of this._updateList) {
      this._updateList[val]()
    }
    
    window.requestAnimationFrame(() => {this._update()})
  }
}
