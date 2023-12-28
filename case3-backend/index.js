const express = require('express')
const fs = require('fs/promises')
const cors = require('cors')
const app = express()


app.use(express.json())
app.use(cors())
const PORT = 3200
const PRODUCTS_PATH = './products.json'
let products = []

async function loadProductFromFile() {
    try {
        const data = await fs.readFile(PRODUCTS_PATH, 'utf8')
        products = JSON.parse(data)
    }
    catch(err) {
        console.log(err)
    }
}

async function saveProductToFile() {
    try {
        await fs.writeFile(PRODUCTS_PATH, JSON.stringify(products, null, 2))
    } 
    catch(err) {
        console.log(err)
    }
}

loadProductFromFile()

app.get('/products/:id', (req, res) => {
    try {
        const productID = parseInt(req.params.id)
        const searchedProduct = products.find((product) => product.id === productID)

        return res.status(200).json({
            message: "Product successfully retrieved",
            data: searchedProduct
        })
    }
    catch(err) {
        return res.status(500).json({
            message: err
        })
    }
})

app.get('/products', (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1
        const limit = parseInt(req.query.limit) || 10

        const startIndex = (page - 1) * limit
        const endIndex = startIndex + limit
        
        const paginatedProducts = products.slice(startIndex, endIndex)

        return res.status(200).json({
            message: "Products successfully retrieved",
            data: paginatedProducts,
            pageInfo: {
                limit: limit,
                prevPage:  `http://localhost:3200/api/products?limit=${limit}&page=${page-1}`,
                currentPage: `http://localhost:3200/api/products?limit=${limit}&page=${page}`,
                nextPage: `http://localhost:3200/api/products?limit=${limit}&page=${page+1}`
            }
        })
    }
    catch(err) {
        return res.status(500).json({
            message: err
        })
    }
})

app.post('/products', (req, res) => {
    try {
        const { name, description, benefits } = req.body
    
        if(!name || !description) {
            return res.status(400).json({
                message: "Field should not be empty"
            })
        }
    
        const newProduct = { id: products.length+1, name, description, benefits}
        products.push(newProduct)
        saveProductToFile()
        return res.status(200).json({
            message: "Product successfully added"
        })
    }
    catch(err) {
        return res.status(500).json({
            message: err
        })
    }
})

app.put('/products/:id', (req, res) => {
    try {
        const taskID = parseInt(req.params.id)
        const targetProduct = products.find((task) => task.id === taskID)

        if(!targetProduct) {
            return res.status(404).json({
                message: "Product not found"
            })
        }

        const {title, desc} = req.body
        targetProduct.title = title || targetProduct.title
        targetProduct.desc = desc || targetProduct.desc

        return res.status(200).json({
            message: "Product successfully updated",
            data: targetProduct
        })
    }
    catch(err) {
        return res.status(500).json({
            message: err
        })
    }
})

app.delete('/products/:id', (req, res) => {
    try {   
        const taskID = parseInt(req.params.id)
        products = products.filter((task) => task.id !== taskID)
        saveProductToFile()
        return res.status(200).json({
            message: "Product deleted successfully"
        })
    }
    catch(err) {
        return res.status(500).json({
            message: err
        })
    }
})

app.listen(PORT, () => {
    console.log(`App is listening on http://localhost:${PORT}`)
})