import { observable, decorate, action, computed, autorun, flow } from 'mobx'

class MobxStore {
  // states
  count = 0
  price = 5

  // states-compute
  get Total () {
    return this.count * this.price
  }

  // actions
  increment (val) {
    this.count += val
  }

  // effects
  fetchSomeThing = flow(function* () {
    const count = yield new Promise(resolve => setTimeout(() => { resolve(10) }, 2000))
    this.increment(count)
  })
}


decorate(MobxStore, {
  count: observable,
  Total: computed,
  increment: action.bound,
  fetchSomeThing: action.bound
})

const NewMobxStore = new MobxStore()

autorun(() => {
  console.log(NewMobxStore.Total)
})

export default NewMobxStore
