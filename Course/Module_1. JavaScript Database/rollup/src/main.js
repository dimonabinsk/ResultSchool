import "../styles/styles.css";
import JS_IMAGE from '../images/js.jpg';

console.log("hello world");

const jsImageHTML = document.createElement("img");
jsImageHTML.className = "js-image";
jsImageHTML.src = JS_IMAGE;

document.body.append(jsImageHTML);
