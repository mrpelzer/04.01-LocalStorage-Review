var key = "";


// SAVE
document.querySelector(".save").onclick = function() {

};


// LOAD
document.querySelector(".load").onclick = function() {

};

// DELETE
document.querySelector(".delete").onclick = function() {

};





// SAVE
function saveData() {
  const key = document.getElementById("saveKey").value.trim();
  const value = document.getElementById("saveValue").value.trim();

  if (!key || !value) {
    alert("Key and value required");
    return;
  }

  localStorage.setItem(key, value);
  alert("Data saved");

  document.getElementById("saveKey").value = "";
  document.getElementById("saveValue").value = "";
}

// LOAD
function loadData() {
  const key = document.getElementById("loadKey").value.trim();

  if (!key) {
    alert("Enter key");
    return;
  }

  const value = localStorage.getItem(key);
  document.getElementById("loadValue").value =
    value !== null ? value : "No data found";
}

// UPDATE
function updateData() {
  const key = document.getElementById("updateKey").value.trim();
  const value = document.getElementById("updateValue").value.trim();

  if (!key || !value) {
    alert("Key and value required");
    return;
  }

  if (!localStorage.getItem(key)) {
    alert("Key does not exist");
    return;
  }

  localStorage.setItem(key, value);
  alert("Data updated");

  document.getElementById("updateKey").value = "";
  document.getElementById("updateValue").value = "";
}

// DELETE
function deleteData() {
  const key = document.getElementById("deleteKey").value.trim();

  if (!key) {
    alert("Enter key");
    return;
  }

  localStorage.removeItem(key);
  alert("Data deleted");

  document.getElementById("deleteKey").value = "";
}
