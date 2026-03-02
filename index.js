const express = require('express')
const app = express()

const root = { root: __dirname }

app.get('/', (req, res) => res.status(200).sendFile('./pages/index.html', root))
app.get('/about', (req, res) =>
    res.status(200).sendFile('./pages/about.html', root)
)
app.get('/contact-me', (req, res) =>
    res.status(200).sendFile('./pages/contact-me.html', root)
)
app.use((req, res) => res.status(404).sendFile('./pages/404.html', root))

const PORT = 3000
app.listen(PORT, (error) => {
    if (error) {
        throw error
    }
    console.log('Refactored server code with Express!')
})
