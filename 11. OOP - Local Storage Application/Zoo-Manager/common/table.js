class Table extends BaseElement {
  constructor(parent, header) {
    super(parent, "table");
    this.domElement.style.borderCollapse = "collapse";
    this.domElement.style.textAlign = "center";
    this.tableHead = new TableHead(this.domElement, header);
    this.tableBody = new TableBody(this.domElement);
  }

  render() {
    super.render();
    this.tableHead.render();
    this.tableBody.render();
  }
}
