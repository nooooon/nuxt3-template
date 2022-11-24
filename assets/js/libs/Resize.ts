export class Resize {

  private _size: {width: number, height: number}
  private _oldSize: {width: number, height: number}
  private _updateList: Function[]

  get Size() {
    return this._size
  }

  get OldSize() {
    return this._oldSize
  }

  constructor() {
    this._size = {
      width: 0,
      height: 0
    }
    this._oldSize = {
      width: 0,
      height: 0
    }

    this._updateList = []

    window.addEventListener('resize', (e) => this._resize())
    this._resize()
  }

  /* 
    * リサイズ後に実行する関数を追加
    * @param fn {Function} - 実行する関数
  */
  add(fn: Function) {
      this._updateList.push(fn)
  }

  /* 
    * リサイズ後に実行する関数を削除
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

  /* 
    * リサイズイベントを実行
  */
  update() {
    this._resize()
  }

  _resize() {
    this._oldSize.width = this._size.width
    this._oldSize.height = this._size.height

    this._size.width = window.innerWidth
    this._size.height = window.innerHeight
    
    // this._size.width = document.documentElement.clientWidth
    // this._size.height = document.documentElement.clientHeight

    for(let val in this._updateList) {
        this._updateList[val]()
    }
  }
  
}