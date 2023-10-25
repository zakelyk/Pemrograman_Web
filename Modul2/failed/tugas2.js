document.addEventListener("DOMContentLoaded", () => {
  const addButton = document.querySelector(".add_input button");
  const inputField = document.querySelector(".add_input input");
  const listContainer = document.querySelector(".items .body");

  addButton.addEventListener("click", function () {
    if (inputField.value.trim() !== "") {
      addToList(inputField.value.trim());
      inputField.value = "";
    } else {
      alert("Oalah, inputnya kosong! Isi dulu dong, Bro.");
    }
  });

  function addToList(activity) {
    const listItem = document.createElement("div");
    listItem.className = "border-list";

    const listContent = `
            <p class="list">
                <input type="text" style="padding-left: 15px;" value="${activity}" readonly>
                <a style="padding-right: 15px;">
                    <button class="check"><i class="small material-icons">check</i></button>
                    <button class="delete"><i class="small material-icons">delete_forever</i></button>
                </a>
            </p>`;

    listItem.innerHTML = listContent;

    // Add event listeners for check and delete buttons
    listItem.querySelector(".check").addEventListener("click", function () {
      listItem.querySelector("input").style.textDecoration = "line-through";
    });

    listItem.querySelector(".delete").addEventListener("click", function () {
      listContainer.removeChild(listItem);
    });

    listContainer.appendChild(listItem);
  }
});
