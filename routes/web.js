const express = require('express')

const router = express.Router()

const webPages = ['css', 'html', 'jsnode']
console.log(webPages.includes('html'))

router.get('/', (req, res) => {
    res.render('web/index')
})

router.get('/:category', (req, res) => {
    if (webPages.includes(req.params.category)) {
        res.render(`web/${req.params.category}`)
    } else {
        res.render(`main/error`)
    }
})

module.exports = router