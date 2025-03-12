// Send a message to the background script
chrome.runtime.sendMessage({ command: "auth" });

// Load values from localStorage and set them in the form fields
document.getElementById("note_name").value =
  localStorage.getItem("note_name") || "";
document.getElementById("note_description").value =
  localStorage.getItem("note_description") || "";
document.getElementById("note_url").value =
  localStorage.getItem("note_url") || "";

// Function to check checkboxes from localStorage
function restoreCheckboxState(name) {
  let storedData = localStorage.getItem(name);
  if (storedData && storedData.length !== 0 && storedData !== "[]") {
    let items = JSON.parse(storedData);
    items.forEach((item) => {
      let checkbox = document.querySelector(
        `input[type="checkbox"][value="${item}"]`
      );
      if (checkbox) checkbox.checked = true;
    });
  }
}

restoreCheckboxState("tag");
restoreCheckboxState("category");

// Save inputs to localStorage when changed
document.getElementById("note_name").addEventListener("keyup", (e) => {
  localStorage.setItem("note_name", e.target.value);
});

document.getElementById("note_description").addEventListener("keyup", (e) => {
  localStorage.setItem("note_description", e.target.value);
});

document.getElementById("note_url").addEventListener("keyup", (e) => {
  localStorage.setItem("note_url", e.target.value);
});

// Save selected checkboxes to localStorage
function handleCheckboxChange(name) {
  let selectedItems = Array.from(
    document.querySelectorAll(`input[type="checkbox"][name="${name}"]:checked`)
  ).map((checkbox) => checkbox.value);
  localStorage.setItem(name, JSON.stringify(selectedItems));
}

document
  .querySelectorAll('input[type="checkbox"][name="tag"]')
  .forEach((checkbox) => {
    checkbox.addEventListener("change", () => handleCheckboxChange("tag"));
  });

document
  .querySelectorAll('input[type="checkbox"][name="category"]')
  .forEach((checkbox) => {
    checkbox.addEventListener("change", () => handleCheckboxChange("category"));
  });

// Handle form submission
document.getElementById("submit_note").addEventListener("submit", (e) => {
  e.preventDefault();

  let tag = Array.from(
    document.querySelectorAll('input[type="checkbox"][name="tag"]:checked')
  ).map((checkbox) => checkbox.value);

  let category = Array.from(
    document.querySelectorAll('input[type="checkbox"][name="category"]:checked')
  ).map((checkbox) => checkbox.value);

  let note_name = document.getElementById("note_name").value;
  let note_description = document.getElementById("note_description").value;
  let note_url = document.getElementById("note_url").value;

  const data = {
    name: note_name || "",
    description: note_description || "",
    tag: tag,
    category: category,
    url: note_url || "",
    createdAt: Date.now(),
  };

  chrome.runtime.sendMessage({
    command: "add",
    collection: "Notes",
    data: data,
  });
});

// Handle reset button
document.getElementById("reset").addEventListener("click", () => {
  document.getElementById("note_name").value = "";
  document.getElementById("note_description").value = "";
  document.getElementById("note_url").value = "";

  document
    .querySelectorAll('input[type="checkbox"][name="tag"]:checked')
    .forEach((checkbox) => {
      checkbox.checked = false;
    });

  document
    .querySelectorAll('input[type="checkbox"][name="category"]:checked')
    .forEach((checkbox) => {
      checkbox.checked = false;
    });

  localStorage.removeItem("note_name");
  localStorage.removeItem("note_description");
  localStorage.removeItem("note_url");
  localStorage.removeItem("tag");
  localStorage.removeItem("category");
});
