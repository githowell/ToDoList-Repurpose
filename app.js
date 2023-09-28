const express = require ("express");

const app = express();
let item =["Wake up", "Eat", "Code", "Stay awake"];

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(express.urlencoded ({extended: true}));
app.get("/", function (req, res) {

    let today = new Date();

    let myDate = {  
        weekday: "long",
        day: "numeric",
        month: "long"
    };

let day = today.toLocaleDateString("en-US", myDate)

    res.render("list", {myDay: day, addedItem: item});
});

app.post ("/", function (req, res) {
    const newItem = req.body.addItem;
    item.push(newItem);
    res.redirect("/");

});

app.post("/delete/:index", function (req, res) {
    const index = req.params.index;
    if (index >= 0 && index < item.length) {
        item.splice(index, 1);
    }
    res.redirect("/");
});

app.listen(4000, function () {
    console.log ("Server started on port 4000")
});




// const express = require ("express");
// const app = express();

// app.set('view engine', 'ejs');

// app.get ('/', function(req, res){
//     let today = new Date ();
//     let currentDay = today.getDay ();

//     var day ="";

//     if (currentDay === 6 || currentDay === 0) {
//         day = "Weekend!";

//     } else {
//         day = today;
//     }
//     res.render ("list", {myDay: day});
// });

// app.listen(5000, function () {
//         console.log("Server started on port 5000")
//     });


// const express = require ("express");
// const app = express();

// app.get ('/', (req, res) => {
//     res.send('Hello World')
// });

// app.listen(4000, function () {
//     console.log("Server started on port 4000")
// });
