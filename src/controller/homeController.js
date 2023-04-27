import connection from '../config/connectDB';

let getHomepage = (req, res) => {
    // logic here
    let data = [];
    connection.query(
        'SELECT * FROM users',
        function (err, results, fields) {
            results.map((row) => {
                data.push({
                    id: row.id,
                    firstName: row.first_name,
                    LastName: row.last_name,
                    email: row.email,
                    address: row.address,
                })
            });
            console.log('>>> data inside: ', data)
            return res.render('./index.ejs', { dataUser: JSON.stringify(data) })
        })

}

module.exports = {
    getHomepage
}
