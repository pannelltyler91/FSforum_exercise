const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(__dirname +'/public'));

let threads = [
    

]

idCount = 0;

//creates a thread and adds it to the array of threads
app.post('/', (req,resp) => {
    console.log(req.body);
    var thread = req.body;
threads.push({id:++idCount, thread});
console.log(threads);
resp.send(threads);

})
//send completes array of threads as data response
app.get('/threads', (req,resp) => {
    resp.redirect('/seeAll');
   
})

app.get('/allThreads', (req,resp) => {
    resp.send(threads);
})

app.post('/addComment:id', (req,resp) => {
    
var threadFound = threads.find((element) => element.id == req.params.id);
threadFound.thread.commentKey = req.params.commentKey;
resp.send(threadFound)
})



app.listen(3000, (req,resp) => {
    console.log('JuDoRks is currenting listening on localHost 3000');
})