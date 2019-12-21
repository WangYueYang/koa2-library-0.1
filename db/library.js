const mysql = require('mysql')
const config = require('../config/default')

const dbBase = config.dbBase
const connection = mysql.createConnection({
  host: dbBase.HOST,
  user: dbBase.USERNAME,
  password: dbBase.PASSWORD,
  database: dbBase.DATABASE // 选中的数据库
})