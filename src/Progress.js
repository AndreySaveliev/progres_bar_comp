import { debounce } from "./utils/debounce";
import { numberValidation } from "./utils/numberValidation";

class ProgressBar {
  constructor(nodeClone) {
    this.temp = nodeClone;
    this.intervalId = null;
  }

  _updateProgress(progress, bar) {
    bar.style.background = `radial-gradient(closest-side, white 79%, transparent 80% 100%),
    conic-gradient(hotpink ${progress}%, pink 0)`;
  }

  _debounceUpdateProgress = debounce(this._updateProgress, 750);

  _toggleAnimation(value, bar) {
    let progress = 0;
    if (value === "on") {
      this.intervalId = setInterval(() => {
        progress += 1;
        if (progress > 100) progress = 0;
        this._updateProgress(progress, bar);
      }, 100);
    } else {
      clearInterval(this.intervalId);
    }
  }

  _validateInputValue(value) {
    if (value > 100) {
      console.log("Invalid value: max val 100");
      return 100;
    }
    if (value < 0) {
      console.log("Invalid value: min val 0");
      return 0;
    }
  }

  generateBar() {
    this.bar = this.temp.querySelector(".progress-bar");
    this.hide = this.temp.querySelector(".input_hide");
    this.animate = this.temp.querySelector(".input_animate");
    this.input = this.temp.querySelector(".input_number");
    this.input.addEventListener("input", (e) => {
      e.target.value = numberValidation(e.target.value);
      this._debounceUpdateProgress(e.target.value, this.bar);
      // this.debounceUpdateProgress(e.target.value, this.bar);
    });
    this.animate.addEventListener("change", () => {
      this.animate.checked
        ? this._toggleAnimation("on", this.bar)
        : this._toggleAnimation("off", this.bar);
    });
    this.hide.addEventListener("change", () => {
      this.bar.style.display = this.hide.checked ? "none" : "block";
    });
    this.bar.style.background = `radial-gradient(closest-side, white 79%, transparent 80% 100%),
    conic-gradient(hotpink 25%, pink 0)`;
    return this.temp;
  }
}

export default ProgressBar;
