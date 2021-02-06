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
resp.send(threads);
console.log(threads);

})
//send completes array of threads as data response
app.get('/threads', (req,resp) => {
    resp.json(threads);
   
})


app.put('/:id', (req, resp) => {
    console.log(req.body);
    var foundThread = threads.find((element) => element.id == parseInt(req.params.id));
    foundThread.thread.commentKey = req.body;
    resp.json(foundThread);
    
})



app.listen(3000, (req,resp) => {
    console.log('JuDoRks is currenting listening on localHost 3000');
})