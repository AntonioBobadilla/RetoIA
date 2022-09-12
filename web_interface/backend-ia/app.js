const express = require("express");
const spawn = require("child_process");
const CsvUpload = require("express-fileupload");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(CsvUpload());

const pythonProgram = async (file) => {
  const spawn = require("child_process").spawn;
  return new Promise((resolve, reject) => {
    const ls = spawn("python", ["dummy-model.py", file]);

    let result;

    ls.stdout.on("data", (data) => {
      result += data;
      console.log(`stdout: ${data}`);
    });

    ls.stderr.on("data", (data) => {
      console.log(`stderr: ${data}`);
    });

    ls.on("close", (code) => {
      if (code !== 0) {
        return reject(`died with ${code}`);
      }
      resolve(result);
    });
  });
};

app.post("/", async (req, res) => {
  // console.log(req.files);

  const result = await pythonProgram(req.files.csvfile.data);

  console.log("result", result);
  res.status(200);
  res.send({ result: result });
});

app.get('/api-imgs/:img_id', function (req, res) {
     console.log(req.img_id)
     res.sendFile(__dirname +'/api-imgs/'+ req.params.img_id);
});


app.listen(3000, (error) => {
  if (!error) {
    console.log(
      "Server is Successfully Running, and App is listening on port 3000"
    );
  } else {
    console.log("Error occurred, server can't start", error);
  }
});
