const form = document.querySelector("form");
const table = document.querySelector("tbody");

const contactName = document.getElementById("contact-name");
const contactTel = document.getElementById("contact-tel");

const numbersArr = [];

let linhas = "";

form.addEventListener("submit", (e) => {
  e.preventDefault();

  addNewContact();
  updateTable();
});

const updateTable = () => {
  table.innerHTML = linhas;

  numbersArr.push(contactTel.value);

  contactName.value = "";
  contactTel.value = "";
};

const addNewContact = () => {
  if (numbersArr.includes(contactTel.value)) {
    alert("Número já cadastrado");
    return;
  }

  let linha = "<tr>";
  linha += `<td>${contactName.value}</td>`;
  linha += `<td>${contactTel.value}</td>`;

  linhas += linha;
};
