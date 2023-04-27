import pool from '../config/connectDB';

let getHomepage = async (req, res) => {
    // logic here
    const [rows, fields] = await pool.execute('SELECT * FROM users');
    return res.render('./index.ejs', { dataUser: rows })
}
let getDetailPage = async (req, res) => {
    let id = req.params.id;
    let [user] = await pool.execute('SELECT * FROM users WHERE  id = ?', [id])
    return res.send(user)
}
module.exports = {
    getHomepage, getDetailPage
}
