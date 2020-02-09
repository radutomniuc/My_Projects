class Visitor {
  constructor(id, category, name, age, discount, subscription) {
    this.id = id;
    this.category = category;
    this.name = name;
    this.age = age;
    this.discount = discount;
    this.subscription = subscription;
  }
}

var CATEGORY = {
  M: "Masculine",
  F: "Feminine"
};

var DISCOUNT = {
  NODISCOUNT: "0% Discount",
  STUDENT: '50% Discount'
};

var SUBSCRIPTION = {
  NOSUBSCRIPTION: "No Subscription",
  MONTHLY: "One Month",
  YEARLY: "One Year"
};