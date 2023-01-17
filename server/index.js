require('dotenv').config()

const express = require('express')
const cors = require('cors')
const {sequelize} = require('./util/database')
const {PORT} = process.env
const {User} = require('./models/user')
const {Post} = require('./models/post')
const {getAllPosts, getCurrentUserPosts, addPost, editPost, deletePost} = require('./controllers/posts')
const {register, login} = require('./controllers/auth')
const {isAuthenticated} = require('./middleware/isAuthenticated')

const app = express()

app.use(express.json())
app.use(cors())

User.hasMany(Post)
Post.belongsTo(User)

//AUTH CODE
app.post('/register', register)
app.post('/login', login)

//GET POSTS - NO NEED FOR AUTH
app.get('/posts', getAllPosts)

//CRUDE POSTS - AUTH NEEDED
app.get('/userposts/:userId', getCurrentUserPosts)
app.post('/posts', isAuthenticated, addPost)
app.put('/posts/:id', isAuthenticated, editPost)
app.delete('/posts/:id', isAuthenticated, deletePost)

//the force true is for develment -- DROPS TABLES
sequelize.sync({force:true})
.then(() => {
    app.listen(PORT, ()=> console.log(`SUCCESSFUL AND RUNNING ON PORT ${PORT}`))
})
.catch(err => console.log(err))
