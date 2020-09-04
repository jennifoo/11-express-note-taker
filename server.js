var express = require("express");
var path = require("path");
var fs = require("fs");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// DATA
// =============================================================

let tableData = [];
var path_db = path.join(__dirname, "db/db.json");

// Routes
// =============================================================

app.get("/assets/css/styles.css", function(req, res) {
  res.sendFile(path.join(__dirname, "public/assets/css/styles.css"));
});

app.get("/assets/js/index.js", function(req, res) {
  res.sendFile(path.join(__dirname, "public/assets/js/index.js"));
});

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/notes", function(req, res) {
  res.sendFile(path.join(__dirname, "public/notes.html"));
});

app.get("/api/notes", function(req, res) {
  res.sendFile(path.join(__dirname, "db/db.json"));
});

app.get("/api/notes/1", function(req, res) {
  res.sendFile(path.join(__dirname, "db/db.json"));
});

// Listener
// =============================================================

// NOTES POST - BACK END ROUTE PATH
// * Request sent from from end, and now sending response.
app.post("/api/notes/", function(req, res) {

  var noteObj = req.body;
  tableData.push(noteObj);

  // STORE CLIENT REQ (NOTE) AS STRINGED UP OBJECT
  // Stingify fixed issue not being able to save file to db.
  fs.writeFile(path_db, JSON.stringify(tableData, null, "\t"), function(err) {
    if (err) {
      return console.log(err);
    } console.log("File written!");
  });

  res.json(tableData);
})

// DELETE NOTES
app.delete("/api/notes/:id", function(req, res) {
  // let newTableData = [];
  var chosen = req.params.id;
  fs.readFile(path_db, "utf8", function(error, data) {
    if (error) {
      return console.log(error);
    }
    data = JSON.parse(data);
    tableData = [];
    data.forEach( element => tableData.push(element) );
    let index = tableData.findIndex( obj => obj.id === chosen );
    tableData.splice(index, 1);
              fs.writeFile(path_db, JSON.stringify(tableData, null, "\t"), function(err) {
                if (err) {
                  return console.log(err);
                } console.log("DB file rewritten!");
              });
  }); // End of readFile
  res.send('Delete request completed')
})

app.listen(PORT, function(){
  console.log("App listening on PORT " + PORT);
})
