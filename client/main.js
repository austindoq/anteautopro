document.addEventListener("DOMContentLoaded", () => {
  const els = {
    consultationButton: document.getElementById("consultationButton"),
    appraisalButton: document.getElementById("appraisalButton"),
    consultationModal: document.getElementById("consultationModal"),
    appraisalModal: document.getElementById("appraisalModal"),
    consultationForm: document.getElementById("consultationForm"),
    appraisalForm: document.getElementById("appraisalForm"),
    closeButton: document.getElementById("closeButton"),
    datePickerInputs: document.querySelectorAll(".datePickerInput"),
    closeButtons: document.querySelectorAll(".closeButton"),
    consultationSubmitButton: document.getElementById(
      "consultationSubmitButton",
    ),
    appraisalSubmitButton: document.getElementById("appraisalSubmitButton"),
  };

  // USER EVENTS ==============================================

  //SHOW CONSULTATION FORM
  els.consultationButton.addEventListener("click", (event) => {
    els.consultationModal.classList.remove("hidden");
  });

  //SHOW APPRAISAL FORM
  els.appraisalButton.addEventListener("click", (event) => {
    els.appraisalModal.classList.remove("hidden");
  });

  //ACTIVATE DATE SHOWPICKER
  els.datePickerInputs.forEach((datePickerInput) => {
    datePickerInput.addEventListener("click", (event) => {
      datePickerInput.showPicker();
    });
  });

  //CLOSE MODAL
  els.closeButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      closeModals();
    });
  });

  //CONSULTATION SUBMIT FORM
  els.consultationForm.addEventListener("submit", async (event) => {
    const formValues = Object.fromEntries(new FormData(els.consultationForm));

    const response = await fetch("/api/consultation", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formValues),
    });

    const responseData = await response.json();

    alert(responseData.message);
  });

  //APPRAISAL SUBMIT FORM
  els.appraisalForm.addEventListener("submit", async (event) => {
    const formValues = Object.fromEntries(new FormData(els.appraisalForm));

    const response = await fetch("/api/appraisal", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formValues),
    });

    const responseData = await response.json();

    alert(responseData.message);
  });

  //UTILITY FUNCTIONS =======================================
  function closeModals() {
    els.consultationModal.classList.add("hidden");
    els.appraisalModal.classList.add("hidden");
  }
});
