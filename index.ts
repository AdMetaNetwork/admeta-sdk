import axios from 'axios'
import { randomApi, admetaNetwork } from './utils/config'

export default class AdmetaSdk {
  account: string;

  constructor(account: string) {
    this.account = account
  }

  init() {
    this.getRandom()
  }

  // get random number
  private getRandom() {
    axios.get(randomApi).then((e) => {
      window.open(`${admetaNetwork}?rd=${e.data.v}`)
    })
  }
}