class EditVisitorForm extends VisitorForm {
  constructor() {
    super("Edit Visitor");

    this.updatebutton = new Button(this.domElement, "Update", () =>
      this.update()
    );
    this.cancelbutton = new Button(this.domElement, "Cancel", () =>
      this.cancel()
    );

    this.visitorStorage = new Storage("visitors");
    var params = new URLSearchParams(window.location.search);
    this.visitor = this.visitorStorage.getById(Number(params.get("id")));
  }

  update() {
    if (this.isValid) {
      this.visitor.category = this.categorySelect.value;
      this.visitor.name = this.nameInput.value;
      this.visitor.age = this.ageInput.value;
      this.visitor.discount = this.discountSelect.value;
      this.visitor.subscription = this.subscriptionSelect.value;
      this.visitorStorage.saveToLocalStorage();
      window.location.href = "../visitors/visitors-display.html";
    }
  }

  cancel() {
    window.location.href = "../visitors/visitors-display.html";
  }

  render() {
    super.render();
    this.cancelbutton.render();
    this.updatebutton.render();
    this.categorySelect.value = this.visitor.category;
    this.nameInput.value = this.visitor.name;
    this.ageInput.value = this.visitor.age;
    this.discountSelect.value = this.visitor.discount;
    this.subscriptionSelect.value = this.visitor.subscription;
  }
}
new EditVisitorForm().render();
