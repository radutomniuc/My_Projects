class EditAnimalForm extends AnimalForm {
  constructor() {
    super("Edit Animal");

    this.updatebutton = new Button(this.domElement, "Update", () =>
      this.update()
    );
    this.cancelbutton = new Button(this.domElement, "Cancel", () =>
      this.cancel()
    );

    this.animalStorage = new Storage("animals");
    var params = new URLSearchParams(window.location.search);
    this.animal = this.animalStorage.getById(Number(params.get("id")));
  }

  update() {
    if (this.isValid) {
      this.animal.category = this.categorySelect.value;
      this.animal.type = this.typeInput.value;
      this.animal.name = this.nameInput.value;
      this.animal.age = this.ageInput.value;
      this.animal.risk = this.riskSelect.value;
      this.animal.imgUrl = this.imgUrlInput.value;
      this.animalStorage.saveToLocalStorage();
      window.location.href = "../animals/animals-display.html";
    }
  }

  cancel() {
    window.location.href = "../animals/animals-display.html";
  }

  render() {
    super.render();
    this.cancelbutton.render();
    this.updatebutton.render();
    this.categorySelect.value = this.animal.category;
    this.typeInput.value = this.animal.type;
    this.nameInput.value = this.animal.name;
    this.ageInput.value = this.animal.age;
    this.riskSelect.value = this.animal.risk;
    this.imgUrlInput.value = this.animal.imgUrl;
  }
}
new EditAnimalForm().render();
