import mysql from 'mysql'
import mysqlConfig from '../config/mysql.config'
const connection: mysql.Connection = mysql.createConnection(mysqlConfig)
connection.connect
export default connection