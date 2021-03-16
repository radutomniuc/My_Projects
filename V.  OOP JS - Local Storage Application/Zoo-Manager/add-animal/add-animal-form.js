class AddAnimalForm extends AnimalForm {
  constructor() {
    super("Add Animal");
    this.savebutton = new Button(this.domElement, "Save", () => this.save());
    this.cancelbutton = new Button(this.domElement, "Cancel", () =>
      this.cancel()
    );

    this.animalStorage = new Storage("animals");
  }

  save() {
    if (this.isValid) {
      this.animalStorage.add(
        new Animal(
          this.animalStorage.getNextId(),
          this.categorySelect.value,
          this.typeInput.value,
          this.nameInput.value,
          this.ageInput.value,
          this.riskSelect.value,
          this.imgUrlInput.value
        )
      );
      this.cancel();
      window.location.href = "../animals/animals-display.html";
    }
  }

  cancel() {
    this.categorySelect.value = CATEGORY.CARNIVOR;
    this.typeInput.value = "";
    this.nameInput.value = "";
    this.ageInput.value = "";
    this.riskSelect.value = RISK.LOW;
    this.imgUrlInput.value = "";
  }
  render() {
    super.render();
    this.cancelbutton.render();
    this.savebutton.render();
  }
}

new AddAnimalForm().render();
