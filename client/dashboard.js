document.addEventListener("DOMContentLoaded", () => {
  const els = {
    createPostForm: document.getElementById("createPostForm"),
    imageURL: document.getElementById("imageURL"),
    title: document.getElementById("title"),
    body: document.getElementById("body"),
    postButton: document.getElementById("postButton"),
  };

  createPostForm.addEventListener("submit", async (submitEvent) => {
    submitEvent.preventDefault();

    const formValues = Object.fromEntries(new FormData(createPostForm));

    try {
      const response = await fetch("/admin/createBlog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formValues),
      });

      const responseData = await response.json();

      alert(responseData.message);

      createPostForm.reset();
    } catch (error) {
      console.log(error);
    }
  });
});
