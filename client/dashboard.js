//STATIC ELEMENTS
const els = {
  createPostForm: document.getElementById("createPostForm"),
  imageURL: document.getElementById("imageURL"),
  title: document.getElementById("title"),
  body: document.getElementById("body"),
  postButton: document.getElementById("postButton"),
  blogContentArea: document.getElementById("blogContentArea"),
};

document.addEventListener("DOMContentLoaded", async () => {
  //BLOG FUNCTIONS
  //GET ALL BLOG CONTENT
  const getAllBlogPosts = async () => {
    const response = await fetch("/api/getAllBlogPosts");
    const responseData = await response.json();

    for (const blog of responseData) {
      const blogContent = ` <article
              id="${blog._id}"
              class="w-full relative text-[#f1f3f5] bg-[#343a40] rounded-xl shadow-xl"
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
                <p id="post-body" class="italic tracking-wide text-xl pt-2">
                  ${blog.body}
                </p>
              </div>
              <div
          class="deleteButton bg-radial border border-[#343a40] from-[#f1f3f5] from-30% to-slate-300 px-2 py-1 text-[#e3173e] rounded-full text-2xl md:text-3xl font-bold absolute top-2 md:top-4 md:right-4 right-4 hover:cursor-pointer"
        >
          X
        </div>
            </article>`;
      els.blogContentArea.insertAdjacentHTML("beforeend", blogContent);
    }
  };

  //REFRESH BLOG CONTENT
  const resetBlogContent = async () => {
    els.blogContentArea.innerHTML = "";
    await getAllBlogPosts();
    //Requery for array of new delete buttons after blog content refresh
    const deleteButtons = document.querySelectorAll(".deleteButton");
    setDeleteButtonEvents(deleteButtons);
  };

  //DELETE BUTTON EVENT LISTENERS
  const setDeleteButtonEvents = (deleteButtons) => {
    deleteButtons.forEach((button) => {
      const blogId = button.closest("article").id;

      button.addEventListener("click", async (clickEvent) => {
        //Confirm user's choice
        const confirmed = confirm(
          "Are you sure you want to remove this blog post?",
        );
        if (!confirmed) return;

        try {
          const response = await fetch(`/admin/deleteBlog/${blogId}`, {
            method: "delete",
          });

          const responseData = await response.json();

          alert(responseData.message);

          await resetBlogContent();
        } catch (error) {
          console.log(error);
        }
      });
    });
  };

  await getAllBlogPosts();

  //Grab delete buttons after rendering blog posts
  const dynamicEls = {
    deleteButtons: document.querySelectorAll(".deleteButton"),
  };

  setDeleteButtonEvents(dynamicEls.deleteButtons);

  //CREATE A BLOG POST
  els.createPostForm.addEventListener("submit", async (submitEvent) => {
    submitEvent.preventDefault();

    const formValues = Object.fromEntries(new FormData(els.createPostForm));

    try {
      const response = await fetch("/admin/createBlog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formValues),
      });

      const responseData = await response.json();

      alert(responseData.message);

      els.createPostForm.reset();

      await resetBlogContent(els.blogContentArea);
    } catch (error) {
      console.log(error);
    }
  });
});
