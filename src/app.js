/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
window.onload = () => {
  let excuseElement = document.querySelector("#the-excuse");

  let excuse = generateExcuse();
  excuseElement.innerHTML = excuse;

  console.log("Hello Rigo from the console!");
};

let generateExcuse = () => {
  let pronoun = ["un", "el"];
  let subject = ["atleta", " racon ", " conductor", " comediante"];

  let action = [" tomo ", "tiro", " me grito ", " me robo"];
  let possetion = [" tarea", "dedo del pie", " coche", "zapato"];
  let where = ["en la calle", "en mi casa", "en clase"];

  let pronounIndex = Math.floor(Math.random() * pronoun.length);
  let subjectIndex = Math.floor(Math.random() * subject.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let possetionIndex = Math.floor(Math.random() * possetion.length);
  let whereIndex = Math.floor(Math.random() * where.length);

  let excuse =
    pronoun[pronounIndex] +
    " " +
    subject[subjectIndex] +
    "  " +
    action[actionIndex] +
    " " +
    possetion[possetionIndex] +
    " " +
    where[whereIndex];
  return excuse;
};
