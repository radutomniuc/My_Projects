new Title(document.body, "Visitors").render();

new Button(document.body, "Add", () => {
  window.location.href = "../add-visitor/add-visitor.html";
}).render();

new VisitorsTable(document.body).render();
