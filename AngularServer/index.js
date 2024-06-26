const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'angular_shop',
});
app.use(cors());
app.use(express.json());

app.get('/products', (req, res) => {
    db.query('SELECT * FROM products', (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.get('/products/:id', (req, res) => {
    db.query('SELECT * FROM products WHERE id = ?', req.params.id, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.post('/products', (req, res) => {
    db.query('INSERT INTO products (reference, name, description, price, category, stock, sale, image_url) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', [req.body.reference, req.body.name, req.body.description, req.body.price, req.body.category, req.body.stock, req.body.sale, req.body.image_url], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.json({message: 'Product added'});
        }
    });
});

app.put('/products/:id', (req, res) => {
    db.query('UPDATE products SET name = ?, price = ? WHERE id = ?', [req.body.name, req.body.price, req.params.id], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.json({message: 'Product updated'});
        }
    });
});

app.delete('/products/:id', (req, res) => {
    db.query('DELETE FROM products WHERE id = ?', req.params.id, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.json({message: 'Product deleted'});
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});