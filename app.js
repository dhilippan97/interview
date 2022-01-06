const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();
let post, y, z = 0;
let colAfirst = []
let colAmiddle = []
let colAlast = []
let colBfirst = []
let colBmiddle1 = []
let colBmiddle2 = []
let colBlast = []
let colCfirst = []
let colCmiddle = []
let colClast = []
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));
app.get("/", function(req, res) {
  res.render("index", {
    colAf: colAfirst,
    colAm: colAmiddle,
    colAl: colAlast,
    colBf: colBfirst,
    colBm1: colBmiddle1,
    colBm2: colBmiddle2,
    colBl: colBlast,
    colCf: colCfirst,
    colCm: colCmiddle,
    colCl: colClast
  })
})
const colAf = [5, 15, 25, 35, 45, 55, 65, 75, 85, 95, 105, 115, 125, 135, 145, 155, 165, 175, 185, 195]
const colAm = [1, 11, 21, 31, 41, 51, 61, 71, 81, 91, 101, 111, 121, 131, 141, 151, 161, 171, 181, 191]
const colAl = [7, 17, 27, 37, 47, 57, 67, 77, 87, 97, 107, 117, 127, 137, 147, 157, 167, 177, 187, 197]

const colBf = [8, 18, 28, 38, 48, 58, 68, 78, 88, 98, 108, 118, 128, 138, 148, 158, 168, 178, 188, 198]
const colBm1 = [2, 12, 22, 32, 42, 52, 62, 72, 82, 92, 102, 112, 122, 132, 142, 152, 162, 172, 182, 192]
const colBm2 = [3, 13, 23, 33, 43, 53, 63, 73, 83, 93, 103, 113, 123, 133, 143, 153, 163, 173, 183, 193]
const colBl = [9, 19, 29, 39, 49, 59, 69, 79, 89, 99, 109, 119, 129, 139, 149, 159, 169, 179, 189, 199]

const colCf = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200]
const colCm = [4, 14, 24, 34, 44, 54, 64, 74, 84, 94, 104, 114, 124, 134, 144, 145, 154, 164, 174, 184, 194]
const colCl = [6, 16, 26, 36, 46, 56, 66, 76, 86, 96, 106, 116, 126, 136, 146, 156, 166, 176, 186, 196]

app.post("/", function(req, res) {
  const i = req.body.fname
  const j = Math.floor(i / 10);
  const l = (i % 10) + 1;
  for (y = 0; y < j; y++) {
    colAfirst.push(colAf[y])
    colAmiddle.push(colAm[y])
    colAlast.push(colAl[y])
    colBfirst.push(colBf[y])
    colBmiddle1.push(colBm1[y])
    colBmiddle2.push(colBm2[y])
    colBlast.push(colBl[y])
    colCfirst.push(colCf[y])
    colCmiddle.push(colCm[y])
    colClast.push(colCl[y])
  }
  for (z = 0; z < l; z++) {
    switch (z) {
      case 1:
        colAmiddle.push(colAm[y])
        break;
      case 2:
        colBmiddle1.push(colBm1[y])
        break;
      case 3:
        colBmiddle2.push(colBm2[y])
        break;
      case 4:
        colCmiddle.push(colCm[y])
        break;
      case 5:
        colAfirst.push(colAf[y])
        break;
      case 6:
        colClast.push(colCl[y])
        break;
      case 7:
        colAlast.push(colAl[y])
        break;
      case 8:
        colBfirst.push(colBf[y])
        break;
      case 9:
        colBlast.push(colBl[y])
    }
  }
  res.redirect("/")
});
app.listen(process.env.PORT||3000, function() {
  console.log("Server started on port 3000");
});
