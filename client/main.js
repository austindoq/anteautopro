document.addEventListener("DOMContentLoaded", () => {
  const els = {
    "1on1Button": document.getElementById("1on1Button"),
    appraisalButton: document.getElementById("appraisalButton"),
    "1on1Modal": document.getElementById("1on1Modal"),
    appraisalModal: document.getElementById("appraisalModal"),
    closeButton: document.getElementById("closeButton"),
    datePickerInputs: document.querySelectorAll(".datePickerInput"),
    closeButtons: document.querySelectorAll(".closeButton"),
  };

  els["1on1Button"].addEventListener("click", (event) => {
    els["1on1Modal"].classList.remove("hidden");
  });

  els.appraisalButton.addEventListener("click", (event) => {
    els.appraisalModal.classList.remove("hidden");
  });

  els.datePickerInputs.forEach((datePickerInput) => {
    datePickerInput.addEventListener("click", (event) => {
      datePickerInput.showPicker();
    });
  });

  els.closeButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      closeModals();
    });
  });

  function closeModals() {
    els["1on1Modal"].classList.add("hidden");
    els.appraisalModal.classList.add("hidden");
  }
});
