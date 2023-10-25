// scripts.js
function addTask() {
  const taskText = document.getElementById("newTask").value;
  if (!taskText.trim()) {
    alert("Eh Sob, kamu lupa isi tugasnya! 😜");
    return;
  }

  const taskList = document.getElementById("taskList");
  const li = document.createElement("li");
  li.innerHTML = `
        ${taskText}
        <button onclick="editTask(this)">Edit</button>
        <button onclick="deleteTask(this)">Hapus</button>
        <input type="checkbox" onchange="checkTask(this)">
    `;

  taskList.appendChild(li);
  document.getElementById("newTask").value = "";
}

function editTask(btn) {
  const newText = prompt(
    "Edit tugas kamu:",
    btn.parentElement.textContent.trim()
  );
  if (newText) {
    btn.parentElement.firstChild.nodeValue = newText;
  }
}

function deleteTask(btn) {
  if (confirm("Yakin mau hapus? Tugasnya udah kelar belum nih? 😁")) {
    btn.parentElement.remove();
  }
}

function checkTask(checkbox) {
  const task = checkbox.parentElement;
  if (checkbox.checked) {
    task.classList.add("checked");
  } else {
    task.classList.remove("checked");
  }
}
