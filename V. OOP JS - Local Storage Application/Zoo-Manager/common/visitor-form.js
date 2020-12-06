class VisitorForm extends BaseElement {
  constructor(title) {
    super(document.body, "div");

    this.formTitle = new Title(this.domElement, title);
    this.categoryLabel = new Label(this.domElement, "Category", "category");
    this.categorySelect = new Select(this.domElement, Object.entries(CATEGORY));
    this.nameLabel = new Label(this.domElement, "Name", "name");
    this.nameInput = new InputText(this.domElement);
    this.ageLabel = new Label(this.domElement, "Age", "age");
    this.ageInput = new InputNumber(this.domElement);
    
    this.discountLabel = new Label(this.domElement, "Discount", "discount");
    this.discountSelect = new Select(this.domElement, Object.entries(DISCOUNT));

    this.subscriptionLabel = new Label(this.domElement,"Subscription","subscription");
    this.subscriptionSelect = new Select(this.domElement,Object.entries(SUBSCRIPTION));

  }

  get isValid() {
    return (
      this.categorySelect.value &&
      this.nameInput.value &&
      this.ageInput.value &&
      this.discountSelect.value &&
      this.subscriptionSelect.value 
    );
  }

  render() {
    super.render();
    this.formTitle.render();
    this.categoryLabel.render();
    this.categorySelect.render();
    this.nameLabel.render();
    this.nameInput.render();
    this.ageLabel.render();
    this.ageInput.render();
    this.discountLabel.render();
    this.discountSelect.render();
    this.subscriptionLabel.render();
    this.subscriptionSelect.render();
  }
}
