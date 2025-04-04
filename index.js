document.addEventListener("DOMContentLoaded", function() {
  const submitButton = document.getElementById("submit");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const ageInput = document.getElementById("age");
  const displayContainer = document.querySelector(".display-container .submissions-list");

  submitButton.addEventListener("click", function(event) {
    event.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const age = ageInput.value.trim();

    if (name && email && age>0) {
      const submittedInfo = document.createElement("div");
      submittedInfo.classList.add("submission-item");

      submittedInfo.innerHTML = `
        <div class="submission-details">
          <div class="detail-row">
            <p class="detail-label">Name:</p>
            <p class="detail-value">${name}</p>
          </div>
          <div class="detail-row">
            <p class="detail-label">Email:</p>
            <p class="detail-value">${email}</p>
          </div>
          <div class="detail-row">
            <p class="detail-label">Age:</p>
            <p class="detail-value">${age}</p>
          </div>
        </div>
      `;

      displayContainer.appendChild(submittedInfo);

  
      nameInput.value = "";
      emailInput.value = "";
      ageInput.value = "";
    }else{
        alert("something went wrong");
    } 
  });
});
