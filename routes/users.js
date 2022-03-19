const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('users/index')
})
router.get('/new', (req, res) => {
    res.render('users/new')
})
router.get('/add', (req, res) => {
    res.render('users/add')
}) 
/*
router.post('/', (req, res) => {
    res.send('create User')
})
*/

router
    .route('/:id')
    .get((req, res) => {
        console.log(req.user)
        res.send(`User: ${req.user.name}`)
    })
    .put((req, res) => {
    res.send(`Update User With Id: ${req.params.id}`)
    })
    .delete((req, res) => {
    res.send(`Delete User With Id: ${req.params.id}`)
    })

const users = [{ name: 'Alex' }, {name:'Sanja'}]

router.param('id', (req, res, next, id) => {
    if (users[id]) {
        req.user = users[id]
    } else {
        res.send("Can't find user with id: " + req.params.id)
    }
    
    next()
})

module.exports = router

/*
router.get('/:id', (req, res) => {
    res.render('users/user', { userId: req.params.id})
})
router.put('/:id', (req, res) => {
    res.send(`Update User With Id: ${req.params.id}`)
})
router.delite('/:id', (req, res) => {
    res.send(`Delete User With Id: ${req.params.id}`)
})
*/







