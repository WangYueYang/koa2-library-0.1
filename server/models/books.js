import Fetch from '../utils/fetch'

class Books {
  constructor() {

  }

  getBookList(options) {
    const fetchObj = new Fetch(options.url)
    return fetchObj.fetch()
  }
}

export default Books