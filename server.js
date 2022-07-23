const express = require('express')
const serveStatic = require('serve-static')
const cors = require('cors')
const router = express.Router()

const path = require('path')



const token = '11675b99d01e0be9ecfb60d0f00a5a19e68606216ddaea3b14f3ec529595b81f'

//running express
const app = express()

//using cors
app.use(cors())


//configuring body parser middle ware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const request = require('request');

var blogs=[];

const options = {
  method: 'GET',
  url: 'https://api.webflow.com/collections/62d71e6d98f17d9e418535ec/items',
  headers: {Authorization:`Bearer ${token}`}
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  //console.log(body);
  blogs=body
});



app.get('/posts', (req, res) => {
    //listing blogs
    console.log(blogs)
    res.send(blogs);

});


app.get('/post/:blogId', (req, res)=>{
  console.log(req.params.blogId)
  var blogid = req.params.blogId 
  useblog = JSON.parse(blogs)

const index = useblog.items.findIndex(car => car.slug == blogid)
console.log(index)

  const isFound = useblog.items.some((element) => {
    if (element.slug === blogid) {
      return true;
    } else
    return false;
  });


if (!isFound) {
  res.send("Article not found");
}
 else {
 res.send(useblog.items[index])
}

})


//this.course = this.$route.params.id;



//updating a client
// app.put('/client/updateclient/:id', (req, res) => {

//     const found = data.findIndex(obj => obj.id === req.params.id)
//     data[found].Name.firstName = req.body.firstName;
//     data[found].Name.lastName = req.body.lastName;
//     data[found].email= req.body.email;
//     data[found].active= req.body.active;
//     data[found].role = req.body.role;
//     data[found].department = req.body.department;
//     if(req.body.active == true){data[found].status = ("Active")}else {data[found].status=("Inactive")};
//     res.send(data);

// })


app.use('/', serveStatic(path.join(__dirname, 'dist')))



const port = process.env.PORT || 3001;

app.listen(port, ()=> {
    console.log(`App is running on ${port}`);
})