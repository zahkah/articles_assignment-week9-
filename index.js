const express =require('express');
const app = express();
const PORT =3000;


let articles =[
    {
        id: 1,
        title: 'Technology is booming',
        description: 'Technology lorem lorem lorem lorem lorem lorem ',
        author: 'Prabh'
    },
    {
        id: 2,
        title: 'Science is scary',
        description: 'Science lorem lorem lorem lorem lorem lorem ',
        author: 'Daniel'
    },
    {
        id: 3,
        title: 'Maths is boring',
        description: 'Maths lorem lorem lorem lorem lorem lorem ',
        author: 'Mike'
    },
    {
        id: 4,
        title: 'English is a must to know!',
        description: 'English lorem lorem lorem lorem lorem lorem ',
        author: 'David'
    }
];

// GET API
app.get('/', (req, res) => {
   res.send("welcome to Home page ");
})

 
 app.get('/articles', (req, res) => {
    res.send(articles);
 })

// app.get('/articles/Author',(req, res) => {
//     const Author = articles.filter((articles) => articles.Author = Author)
//     res.send(Author);
// })




// POST API
app.post('/articles/addTitle', (req, res) => {
    const newTitle = req.body;

    articles.push(newTitle);
    res.send(articles);
})


// DELETE API
app.delete('/articles/removeTitle/:id', (req, res) => {
    const articleID = req.params.id;

    console.log(articleID);
    articles = articles.filter((articleObj) => articleObj.id != articleID ? true : false);

    res.send(articles);
})

//listening to server on this port -3000
app.listen(PORT, () =>{
    console.log("server running on port : " +PORT);

})









