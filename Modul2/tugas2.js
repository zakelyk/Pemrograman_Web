function addTask() {
  const textValue = document.getElementById("input_activity").value;
  if (!textValue.trim()) {
    alert("add value kosong");
    return;
  }

  const tasks = document.getElementById("list");
  const p = document.createElement("p");
  p.innerHTML = `
    <div>
        <input value="${textValue}" class="description" />
        <button class="check-btn" onclick="checkTask(this)"><i class="material-icons">check</i></button>
        <button class="edit-btn" onclick="editTask(this)"><i class="material-icons">create</i></button>
        <button class="delete-btn" onclick="deleteTask(this)"><i class="material-icons">delete</i></button>
    </div>
    `;

  tasks.appendChild(p);
  document.getElementById("input_activity").value = "";
}

function editTask(btn) {
  const inputField = btn.parentElement.querySelector(".description");
  const newText = prompt("Edit tugas kamu:", inputField.value);

  if (newText) {
    inputField.value = newText;
  }
}

function deleteTask(btn) {
  if (confirm("Yakin mau hapus?")) {
    btn.parentElement.remove();
  }
}

function checkTask(btn) {
  const inputField = btn.parentElement.querySelector(".description");
  // Toggle class "checked" untuk memberikan atau menghapus efek coretan
  if (inputField.classList.contains("checked")) {
    inputField.classList.remove("checked");
  } else {
    inputField.classList.add("checked");
  }
}
