const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(__dirname +'/public'));

let threads = [
    

]

app.post('/create', (req,resp) => {

threads.push(req.body);
console.log(threads);

})

app.get('/threads', (req,resp) => {
    resp.json(threads);
})

app.put('/comment/title', (req, resp) => {
    singleThread = threads.find((element) => element.title == parseInt(req.params.title));
    
})



app.listen(3000, (req,resp) => {
    console.log('JuDoRks is currenting listening on localHost 3000');
})