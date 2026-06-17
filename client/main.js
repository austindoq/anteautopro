document.addEventListener("DOMContentLoaded", async () => {
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
    blogContainer: document.getElementById("blogContainer"),
  };

  //POPULATE MOST RECENT BLOG POST
  async function getMostRecentBlog() {
    const response = await fetch("/api/mostRecentBlogPost");
    const responseData = await response.json();
    const mostRecentBlogPost = `<article
              id="most-recent-post"
              class="w-full text-[#f1f3f5] bg-[#343a40] rounded-xl"
            >
              <img
                src="${responseData.mostRecentBlogPost.imageURL}"
                class="h-48 md:h-64 w-full object-cover rounded-tl-xl rounded-tr-xl mr-8"
              />
              <div id="post-text" class="p-8 flex flex-col gap-2">
                <h1
                  id="post-title"
                  class="text-2xl font-bold text-[#e3173e] tracking-wide bg-[#f1f3f5] w-fit text-center md:text-start rounded-lg py-2 px-1"
                >
                ${responseData.mostRecentBlogPost.title}
                </h1>
                <p id="post-body" class="italic tracking-wide text-xl py-2">
                  ${responseData.mostRecentBlogPost.body}
                </p>
              </div>
            </article>`;

    els.blogContainer.innerHTML = mostRecentBlogPost;
  }

  await getMostRecentBlog();

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
    event.preventDefault();

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
    event.preventDefault();

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
