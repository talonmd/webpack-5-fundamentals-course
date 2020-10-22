import _ from "lodash"
import "../main.scss"

console.log(_.join(["Index", "module", "loaded!"], " "))

const paragraph = document.createElement("p")
paragraph.textContent = "I am injected from the JavaScript file."

document.querySelector("body").appendChild(paragraph)
