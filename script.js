function loadNotes() {
  const notes = JSON.parse(localStorage.getItem("notes")) || [];
  const noteList = document.getElementById("noteList");
  noteList.innerHTML = "";

  notes.forEach((note, index) => {
    const li = document.createElement("li");
    li.textContent = note;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑️ Smazat";
    deleteBtn.onclick = () => deleteNote(index);

    li.appendChild(deleteBtn);
    noteList.appendChild(li);
  });
}

function addNote() {
  const input = document.getElementById("noteInput");
  const note = input.value.trim();
  if (note === "") return;

  const notes = JSON.parse(localStorage.getItem("notes")) || [];
  notes.push(note);
  localStorage.setItem("notes", JSON.stringify(notes));
  input.value = "";
  loadNotes();
}

function deleteNote(index) {
  const notes = JSON.parse(localStorage.getItem("notes")) || [];
  notes.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notes));
  loadNotes();
}

window.onload = loadNotes;
