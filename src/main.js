import "./style.css";
import ProgressBar from "./Progress";
const temp = document.querySelector("#progress_template");

const progressClone = temp.content.cloneNode(true);
const progress = new ProgressBar(progressClone);
const barEl = progress.generateBar();
document.querySelector("#app").appendChild(barEl);
