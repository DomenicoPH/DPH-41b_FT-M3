"use strict";

let fs = require("fs");
let chalk = require("chalk");

let utils = {};

utils.readFile = function (filename, callback) {
  let randExtraTime = Math.random() * 200;
  setTimeout(function () {
    fs.readFile(filename, function (err, buffer) {
      if (err) callback(err);
      else callback(null, buffer.toString());
    });
  }, randExtraTime);
};

utils.promisifiedReadFile = function (filename) {
  return new Promise(function (resolve, reject) {
    let readFileSync = fs.readFileSync(filename);
    if (!readFileSync) return reject("File not found");
    resolve(readFileSync.toString());
  });
};

utils.blue = function (text) {
  if (text !== undefined && text !== null) console.log(chalk.blue(text));
};

utils.magenta = function (text) {
  console.error(chalk.magenta(text));
};

module.exports = utils;
