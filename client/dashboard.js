document.addEventListener("DOMContentLoaded", () => {
  const els = {
    createPostForm: document.getElementById("createPostForm"),
    imageURL: document.getElementById("imageURL"),
    title: document.getElementById("title"),
    body: document.getElementById("body"),
    postButton: document.getElementById("postButton"),
    blogContentArea: document.getElementById("blogContentArea"),
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

  getAllBlogPosts();
});

const getAllBlogPosts = async () => {
  const response = await fetch("/api/getAllBlogPosts");
  const responseData = await response.json();

  for (blog of responseData) {
    blogContent = ` <article
              id="${blog._id}"
              class="w-full text-[#f1f3f5] bg-[#343a40] rounded-xl shadow-xl"
            >
              <img
                src="${blog.imageURL}"
                class="h-48 md:h-64 w-full object-cover rounded-tl-xl rounded-tr-xl mr-8"
              />
              <div id="post-text" class="p-8 flex flex-col gap-2">
                <h1
                  id="post-title"
                  class="text-2xl font-bold text-[#e3173e] tracking-wide bg-[#f1f3f5] w-fit text-center md:text-start rounded-lg p-2"
                >
                  ${blog.title}
                </h1>
                <p id="post-body" class="italic tracking-wide text-xl py-2">
                  ${blog.body}
                </p>
              </div>
            </article>`;
    blogContentArea.insertAdjacentHTML("beforeend", blogContent);
  }
};
