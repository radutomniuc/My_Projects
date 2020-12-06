class VisitorsTable extends Table {
  constructor(parent) {
    super(parent, ["ID", "CATEGORY", "NAME", "AGE","DISCOUNT", "SUBSCRIPTION", "CONTROLS"]);
    this.visitorStorage = new Storage("visitors");
    this.visitorStorage.get().forEach(visitor => {
      this.addVisitor(visitor);
    });
  }

  addVisitor(visitor) {
    var tableRow = new TableRow(this.tableBody.domElement);

    var idCell = new TableCell(tableRow.domElement);
    idCell.add(new TextItem(idCell.domElement, visitor.id));
    tableRow.addCell(idCell);

    var categoryCell = new TableCell(tableRow.domElement);
    categoryCell.add(new TextItem(categoryCell.domElement, visitor.category));
    tableRow.addCell(categoryCell);

    var nameCell = new TableCell(tableRow.domElement);
    nameCell.add(new TextItem(nameCell.domElement, visitor.name));
    tableRow.addCell(nameCell);

    var ageCell = new TableCell(tableRow.domElement);
    ageCell.add(new TextItem(ageCell.domElement, visitor.age));
    tableRow.addCell(ageCell);

    var discountCell = new TableCell(tableRow.domElement);
    discountCell.add(new TextItem(discountCell.domElement, visitor.discount));
    tableRow.addCell(discountCell);

    var subscriptionCell = new TableCell(tableRow.domElement);
    subscriptionCell.add(new TextItem(subscriptionCell.domElement, visitor.subscription));
    tableRow.addCell(subscriptionCell);

    var controlsCell = new TableCell(tableRow.domElement);
    controlsCell.add(
      new Button(controlsCell.domElement, "Edit", () => {
        window.location.href = `../edit-visitor/edit-visitor.html?id=${visitor.id}`;
      })
    );
    controlsCell.add(
      new Button(controlsCell.domElement, "Delete", () => {
        var message = confirm("Delete this item?");
        if (message) {
          this.visitorStorage.delete(visitor.id);
          this.tableBody.delete(tableRow);
        }
      })
    );
    tableRow.addCell(controlsCell);
    this.tableBody.add(tableRow);
  }
}
