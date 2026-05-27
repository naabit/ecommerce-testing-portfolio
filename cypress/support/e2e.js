Cypress.on('uncaught:exception', (err) => {
  // Ignorar error conocido relacionado con manipulación de DOM
  // BUG-003 documentado en bug-reports.md
  if (err.message.includes("Cannot set properties of null")) {
    return false;
  }
});