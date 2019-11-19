//express = require("express")
//app = express()
//app.get("/",(request, response) => {
	//response.writeHead(200,{'Content-Type': 'text/html; charset=UTF-8'})
	//response.end("Hello from Express! Привіт від Експрес!")
//})
//app.get("/hello/",(request, response) => {
	//response.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'})
//response.end("Привіт від Експрес!")
//})
var express = require("express")
var app = express()
app.use(express.static('static'))
app.set("view engine", "ejs")
path = __dirname + "/templates/"
var views = require('./views')
app.get('/', views.main)
app.get('/list/:id', views.listObjects)
// app.get('/obj/:id/', views.arcObject)
app.get('/obj/:id/', views.arcObject)
app.use("*", views.error404)
app.listen(3000, () => {
	console.log("Сервер починає прослуховувати підключення на порт 3000...")
})



