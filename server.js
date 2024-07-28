const express = require('express');

const app = express()

app.use('/', (req, res) => {
    res.status(200).json({
        message: 'Teste... ola'
    })
})

app.listen(5555, () => console.log('Listen a port 5555'))