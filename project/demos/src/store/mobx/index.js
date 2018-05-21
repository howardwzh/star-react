import { observable, decorate, action } from 'mobx'

class MobxStore {
  count = 0

  increment (val) {
    this.count += val
  }
}

decorate(MobxStore, {
  count: observable,
  increment: action.bound
})

export default new MobxStore()
