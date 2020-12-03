class Button extends BaseElement {
  constructor(parent, text, callback) {
    super(parent, "button");
    this.domElement.innerHTML = text;
    this.domElement.onclick = callback;
    this.domElement.style.margin = "10px 0";
  }
}
