class subTitle extends BaseElement {
    constructor (parent, text) {
        super(parent, "p");
        this.domElement.textContent = text;
    }
}