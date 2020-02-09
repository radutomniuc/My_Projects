class AddVisitorForm extends VisitorForm {
  constructor() {
    super(document.body, "Add Visitor");
    this.savebutton = new Button(this.domElement, "Save", () => this.save());
    this.cancelbutton = new Button(this.domElement, "Cancel", () =>
      this.cancel()
    );

    this.visitorStorage = new Storage("visitors");
  }

  save() {
    if (this.isValid) {
      this.visitorStorage.add(
        new Visitor(
          this.visitorStorage.getNextId(),
          this.categorySelect.value,
          this.nameInput.value,
          this.ageInput.value,
          this.discountSelect.value,
          this.subscriptionSelect.value
          
        )
      );
      this.cancel();
      window.location.href = "../visitors/visitors-display.html";
    }
  }

  cancel() {
    this.categorySelect.value = CATEGORY.M;
    this.nameInput.value = "";
    this.ageInput.value = "";
    this.discountSelect.value = SUBSCRIPTION.NODISCOUNT;
    this.subscriptionSelect.value = SUBSCRIPTION.NOSUBSCRIPTION;
  }
  render() {
    super.render();
    this.cancelbutton.render();
    this.savebutton.render();
  }
}

new AddVisitorForm().render();
