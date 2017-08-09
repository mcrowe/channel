import { pull } from './util'


export interface IListener<T> {
  (val: T): void
}


export default class Channel<T> {

  listeners: IListener<T>[] = []

  subscribe(fn: IListener<T>) {
    this.listeners.push(fn)

    // Return an unsubscribe function.
    return () => {
      pull(this.listeners, fn)
    }
  }

  publish(val: T) {
    this.listeners.forEach(fn => {
      fn(val)
    })
  }

}