document.addEventListener("DOMContentLoaded", async () => {
  const els = {
    blogContentArea: document.getElementById("blogContentArea"),
  };

  //GET ALL BLOG CONTENT
  const getAllBlogPosts = async () => {
    const response = await fetch("/api/getAllBlogPosts");
    const responseData = await response.json();
    console.log(responseData);
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
            </article>`;
      els.blogContentArea.insertAdjacentHTML("beforeend", blogContent);
    }
  };

  await getAllBlogPosts();
});
