import { render } from 'ejs';
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
let createNewUser = async (req, res) => {
    let { firstName, lastName, email, address } = req.body;
    await pool.execute('INSERT INTO users (firstName, lastName, email,address) VALUES (?, ?, ?,?)', [firstName, lastName, email, address]);
    return res.redirect('/')

}
module.exports = {
    getHomepage, getDetailPage, createNewUser
}
