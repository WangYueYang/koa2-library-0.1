const mysql = require('mysql')
const config = require('../config/default')

const dbBase = config.dbBase
const pool = mysql.createPool({
  host: dbBase.HOST,
  user: dbBase.USERNAME,
  password: dbBase.PASSWORD,
  database: dbBase.DATABASE // 选中的数据库
})

let query = function (sql, values) {

  return new Promise((res, rej) => {
    pool.getConnection(function (err, connection) {
      if (err) {
        rej(err)
      } else {
        connection.query(sql, values, (err, rows) => {
          if (err) {
            rej(err)
          } else {
            res(rows)
          }
          // 结束会话
          connection.release()
        })
      }
    })
  })
}

// 建表
const createTable = function (sql) {
  return query(sql, [])
}

let book_list = `create table if not exists book_list(
  id INT NOT NULL AUTO_INCREMENT,  
  bookname VARCHAR(30),
  bookauthor VARCHAR(32) NOT NULL,
  create_time VARCHAR(50) NOT NULL,
  price VARCHAR(15) NOT NULL,
  PRIMARY KEY ( id )
 )ENGINE=InnoDB DEFAULT CHARSET=utf8;`;

createTable(book_list)

// 添加书籍
const addBooks = (values) => {
  // INSERT INTO 插入表
  const _sql = "INSERT INTO book_list set bookname=?, bookauthor=?, create_time=?, price=?"
  return query(_sql, values)
}

const getBookList = () => {
  // SELECT 语句用于从表中选取数据。
  const _sql = "SELECT * FROM book_list"
  return query(_sql)
}

module.exports = {
  addBooks,
  getBookList
}