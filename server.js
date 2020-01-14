const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
mongoose.connect("mongodb+srv://admin-akshans:doublet3@cluster0-tp7ha.mongodb.net/listingDB", {
  useNewUrlParser: true
});
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

const listingSchema = new mongoose.Schema({
  price: String,
  email: String,
  agent: String
});

const Listing = mongoose.model("Listing", listingSchema);


//IF YOU WANT TO ADD ITEMS INTO THE DATABASE, JUST ADD NEW LISTING OBJECTS.
const list1 = new Listing({
  price: "300000",
  email: "jimmybuffett@gmail.com",
  agent: "jimmy buffett"
});

//Uncomment this out to save your new items. Then comment it back once added.
//list1.save();

const list2 = new Listing({
  price: "100000",
  email: "akshansv@gmail.com",
  agent: "Akshans Verma"
});

//Uncomment this out to save your new items. Then comment it back once added.
//list2.save();
const list3 = new Listing({
  price: "234234",
  email: "jimmycarter@gmail.com",
  agent: "Jimmy Carter"
});

//Uncomment this out to save your new items. Then comment it back once added.
//list3.save();
const list4 = new Listing({
  price: "1000000",
  email: "donaldtrump@gmail.com",
  agent: "Donald Trump"
});

//Uncomment this out to save your new items. Then comment it back once added.
//list4.save();
const list5 = new Listing({
  price: "334534",
  email: "boognish@gmail.com",
  agent: "Gene Ween"
});

//Uncomment this out to save your new items. Then comment it back once added.
//list5.save();
const list6 = new Listing({
  price: "23423423",
  email: "metaworldpeace@gmail.com",
  agent: "Metta World Peace"
});

//Uncomment this out to save your new items. Then comment it back once added.
//list6.save();
const list7 = new Listing({
  price: "2",
  email: "billgates@gmail.com",
  agent: "Bill Gates"
});

//Uncomment this out to save your new items. Then comment it back once added.
//list7.save();


//REST
app.get("/", function(req, res) {
  res.render("index");
});

app.get('/listing', (req, res) => {
  Listing.find({}, function(err, foundItems) {

    res.render('listing', {
      listItems: foundItems
    });
  })


});

app.listen(process.env.PORT, function() {
  console.log("server started");
});
