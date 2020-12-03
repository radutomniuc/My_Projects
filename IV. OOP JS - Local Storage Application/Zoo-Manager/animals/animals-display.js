new Title(document.body, "Animals").render();

new Button(document.body, "Add", () => {
  window.location.href = "../add-animal/add-animal.html";
}).render();

new AnimalsTable(document.body).render();
