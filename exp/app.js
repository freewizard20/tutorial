let express = require("express");
let server = express();
const port = 8080;
// middleware handling, errors, logs
// handle parameters with :, localhost:8080/book/whatever > req.params : {"book":"whatever"}
//server.get('/book/:book',(req,res)=>res.send(req.params))

// static middleware
//server.use('/pic',express.static('img'))
server.use("/pic", express.static("/tmp"));
// basic rest
/*
server.get('/',(req,res)=>res.send('Hello world'))
server.post('/',(req,res)=>res.send('Post'))
server.put('/',(req,res)=>res.send('put'))
server.delete('/',(req,res)=>res.send('delete'))	
*/

/*
server.route('/')
.get((req,res)=>{
	res.send('get')
})
.post((req,res)=>{
	res.send('post')
})
.put((req,res)=>{
	res.send('put')
})
.delete((req,res)=>{
	res.send('delete')
})
*/

server.listen(port, () => console.log("listening"));
