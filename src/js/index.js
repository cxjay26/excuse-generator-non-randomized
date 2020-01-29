/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  // Define data arrays
  const who = ["the dog", "my granma", "his turtle", "my bird"];
  const what = ["eat", "pissed", "crushed", "broked"];
  const when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  // Define what a sentence looks like
  let sentence =
    who[Math.floor(Math.random() * 4)] +
    " " +
    what[Math.floor(Math.random() * 4)] +
    " " +
    when[Math.floor(Math.random() * 5)];

  // Query the span by ID
  let excuseSpan = document.querySelector("#excuse");

  // Set the span's innerHTML to the sentance
  excuseSpan.innerHTML = sentence;
};
