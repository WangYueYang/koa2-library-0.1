import fetch from 'node-fetch'

class Fetch {
  constructor(url, options = {
    methods: 'GET'
  }) {
    this.url = url
    this.options = options
  }

  fetch() {
    let result = {
      code: 0,
      message: "",
      data: []
    }
    return new Promise((resolve, reject) => {
      let fetchObj = fetch('http://localhost:3000' + this.url, this.options)
      fetchObj.then(res => {
        return res.json()
      }).then(res => {
        resolve(res)
      }).catch(err => {
        result.code = -1
        result.message = 'fetch 请求失败'
        result.data = err
        reject(result)
      })
    })
  }
}

export default Fetch