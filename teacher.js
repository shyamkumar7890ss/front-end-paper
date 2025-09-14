const API = "https://team-u2z5.onrender.com";

async function uploadFile() {
  const category = document.getElementById("category").value;
  const fileInput = document.getElementById("fileInput").files[0];

  if (!fileInput) {
    alert("Please select a file!");
    return;
  }

  const formData = new FormData();
  formData.append("file", fileInput);
  formData.append("category", category);

  const res = await fetch(`${API}/files/upload`, {
    method: "POST",
    body: formData
  });

  const data = await res.json();
  document.getElementById("msg").innerText = data.message;
}
