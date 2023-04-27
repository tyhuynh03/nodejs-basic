import mysql from 'mysql2/promise'


console.log("Creating connection pool...");

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'nodejs',
})


export default pool;
