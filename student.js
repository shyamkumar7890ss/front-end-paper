const API = "https://team-u2z5.onrender.com/api";

async function fetchFiles() {
  const res = await fetch(`${API}/view/files`);
  const files = await res.json();

  const questionGrid = document.getElementById("questionGrid");
  const notesGrid = document.getElementById("notesGrid");

  questionGrid.innerHTML = "";
  notesGrid.innerHTML = "";

  files.forEach((file) => {
    const card = document.createElement("div");
    card.className = "card bounce";

    card.innerHTML = `
      <h4>${file.filename}</h4>
      <button onclick="viewFile('${file.filename}', '${file.contentType}')">Open</button>
    `;

    if (file.metadata?.category === "note") {
      notesGrid.appendChild(card);
    } else {
      questionGrid.appendChild(card);
    }
  });
}

function viewFile(filename, type) {
  const url = `${API}/view/view/${filename}`;
  if (type === "application/pdf") {
    window.open(url, "_blank", "width=800,height=600");
  } else if (type.startsWith("image/")) {
    window.open(url, "_blank");
  } else {
    alert("Preview not supported.");
  }
}

fetchFiles();
