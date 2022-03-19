const express = require('express')
const app = express()



app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))

app.set('view engine', 'ejs')
const basicPages = ['about', 'contact', 'index']

app.get('/', (req, res) => {
    res.render('main/index')
})

const usersRouter = require('./routes/users')
app.use('/users', usersRouter)

const webRouter = require('./routes/web')
app.use("/web", webRouter)


app.get('/:page', (req, res) => {
    if (basicPages.includes(req.params.page)) {
        res.render(`main/${req.params.page}`)
    } else {
        res.render(`main/error`)
    }
})

const port = process.env.PORT || '8080'

app.listen(port, ()=>console.log(`Server start on port: ${port}`))

