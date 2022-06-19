const express = require("express");
const { exec } = require("child_process");
const { stderr, stdout } = require("process");

const PORT = process.env.PORT || 3000;

const app = express();

app.get("/api", (req, res) => {
  res.set('Access-Control-Allow-Origin', 'https://launchpad.stargazersnfts.io');
  console.log("rocketId =", req.query.rocketId);
  console.log("fuelId =", req.query.fuelId);
  console.log("starsAddress =", req.query.starsAddress);
  console.log("pfpMinter =", req.query.pfpMinter);
  const command = "yarn launch " + req.query.rocketId + " " + req.query.fuelId + " " + req.query.starsAddress + " " + req.query.pfpMinter;
  burnNMint(command, function (result){
    console.log('result = ', result);
    res.send(result);
  });
  
});

function burnNMint (command, cb){
  exec(command,
    (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
        }
        console.log(`stdout: ${stdout}`);
        cb(stderr);
    });
}

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});