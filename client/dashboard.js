//STATIC ELEMENTS
const els = {
  createPostForm: document.getElementById("createPostForm"),
  image: document.getElementById("image"),
  title: document.getElementById("title"),
  body: document.getElementById("body"),
  postButton: document.getElementById("postButton"),
  blogContentArea: document.getElementById("blogContentArea"),
  formContainer: document.getElementById("formContainer"),
  brandNewFormButton: document.getElementById("brandNewFormButton"),
  tradeInFormButton: document.getElementById("tradeInFormButton"),
};

document.addEventListener("DOMContentLoaded", async () => {
  //INVENTORY FUNCTIONS
  //BRAND NEW/TRADE IN FORM SWAPPING AND SUBMIT LOGIC
  els.brandNewFormButton.addEventListener("click", (clickEvent) => {
    formContainer.innerHTML = `<h1
            class="font-bold text-center text-2xl w-full border-b-2 border-b-[#1985b4]"
          >
            Create A <span class="text-[#1985b4] text-3xl">Brand New</span> Item
          </h1>
          <form id="createBrandNewForm" class="p-2">
            <!-- IMAGE -->
            <div class="flex flex-col">
              <label for="image" class="font-bold px-2 pt-2"
                >Upload Vehicle Image</label
              >
              <input
                id="image"
                type="file"
                name="image"
                accept="image/*"
                
                class="rounded-lg p-2 border-1 border-[#343a40]"
              />
            </div>
            <!-- MAKE -->
            <div class="flex flex-col">
              <label class="font-bold px-2 pt-2">Make</label
              ><input
                id="make"
                type="text"
                name="make"
                placeholder="Make"
                minlength="3"
                maxlength="75"
                required 
                class="rounded-lg p-2 border-1 border-[#343a40]"
              />
            </div>
            <!-- MODEL -->
            <div class="flex flex-col">
              <label class="font-bold px-2 pt-2">Model</label
              ><input
                id="model"
                type="text"
                name="model"
                placeholder="Model"
                minlength="3"
                maxlength="75"
                required 
                class="rounded-lg p-2 border-1 border-[#343a40]"
              />
            </div>
            <!-- YEAR -->
            <div class="flex flex-col">
              <label class="font-bold px-2 pt-2">Year</label
              ><input
                id="year"
                type="number"
                name="year"
                placeholder="Year"
                minlength="2"
                maxlength="4"
                required 
                class="rounded-lg p-2 border-1 border-[#343a40]"
              />
            </div>
            <!-- VIN -->
            <div class="flex flex-col">
              <label class="font-bold px-2 pt-2">VIN</label
              ><input
                id="vin"
                type="text"
                name="vin"
                placeholder="VIN"
                minlength="3"
                maxlength="75"
                required 
                class="rounded-lg p-2 border-1 border-[#343a40]"
              />
            </div>
            <div>
              <label class="font-bold px-2 pt-2">Body</label
              ><textarea
                id="description"
                required
                name="description"
                minlength="5"
                maxlength="1000"
                placeholder="Write about this vehicle here..."
                class="w-full h-48 resize-none border-1 border-[#343a40] rounded-lg p-2"
              ></textarea>
            </div>
            <input id="newStatus" name="newStatus" type="hidden" value="true" />
            <button
              id="createButton"
              type="submit"
              class="relative overflow-hidden bg-[#1985b4] w-full tracking-widest p-2 rounded-lg font-bold text-[#f1f3f5] active:bg-[#26b5ee] hover:cursor-pointer hover:bg-[#1985b4] hover:scale-103 ease-in-out duration-150 before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-b before:from-[#f1f3f5]/35 before:via-transparent before:to-transparent"
            >
              CREATE
            </button>
          </form>`;
    const createBrandNewForm = document.getElementById("createBrandNewForm");
    createBrandNewForm.addEventListener("submit", async (submitEvent) => {
      //SUBMIT LOGIC
      submitEvent.preventDefault();
      const formData = new FormData(createBrandNewForm);
      try {
        const response = await fetch("/admin/createBrandNew", {
          method: "POST",
          body: formData,
        });

        const responseData = await response.json();

        alert(responseData.message);
      } catch (error) {
        console.log(`There's been an error creating this item: ${error}`);
      }
    });
  });

  els.tradeInFormButton.addEventListener("click", (click) => {
    formContainer.innerHTML = `<h1
            class="font-bold text-center text-2xl w-full border-b-2 border-b-[#e3173e]"
          >
            Create A <span class="text-[#e3173e] text-3xl">Trade In</span> Item
          </h1>
          <form id="create-inventory-item-form" class="p-2">
            <!-- IMAGE -->
            <div class="flex flex-col">
              <label for="image" class="font-bold px-2 pt-2"
                >Upload Vehicle Image</label
              >
              <input
                id="image"
                type="file"
                name="image"
                accept="image/*"
                required
                class="rounded-lg p-2 border-1 border-[#343a40]"
              />
            </div>
            <!-- MAKE -->
            <div class="flex flex-col">
              <label class="font-bold px-2 pt-2">Make</label
              ><input
                id="make"
                type="text"
                name="make"
                placeholder="Make"
                minlength="3"
                maxlength="75"
                required
                class="rounded-lg p-2 border-1 border-[#343a40]"
              />
            </div>
            <!-- MODEL -->
            <div class="flex flex-col">
              <label class="font-bold px-2 pt-2">Model</label
              ><input
                id="model"
                type="text"
                name="model"
                placeholder="Model"
                minlength="3"
                maxlength="75"
                required
                class="rounded-lg p-2 border-1 border-[#343a40]"
              />
            </div>
            <!-- YEAR -->
            <div class="flex flex-col">
              <label class="font-bold px-2 pt-2">Year</label
              ><input
                id="year"
                type="number"
                name="year"
                placeholder="Year"
                minlength="2"
                maxlength="4"
                required
                class="rounded-lg p-2 border-1 border-[#343a40]"
              />
            </div>
            <!-- VIN -->
            <div class="flex flex-col">
              <label class="font-bold px-2 pt-2">VIN</label
              ><input
                id="vin"
                type="text"
                name="vin"
                placeholder="VIN"
                minlength="3"
                maxlength="75"
                required
                class="rounded-lg p-2 border-1 border-[#343a40]"
              />
            </div>
            <div>
              <label class="font-bold px-2 pt-2">Body</label
              ><textarea
                id="body"
                required
                name="body"
                minlength="5"
                maxlength="1000"
                placeholder="Write about this vehicle here..."
                class="w-full h-48 resize-none border-1 border-[#343a40] rounded-lg p-2"
              ></textarea>
            </div>
            <button
              id="createButton"
              type="submit"
              class="relative overflow-hidden bg-[#e3173e] w-full tracking-widest p-2 rounded-lg font-bold text-[#f1f3f5] active:bg-[#ff2d4f] hover:cursor-pointer hover:bg-[#e3173e] hover:scale-103 ease-in-out duration-150 before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-b before:from-[#f1f3f5]/35 before:via-transparent before:to-transparent"
            >
              CREATE
            </button>
          </form>`;
  });

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

    const formData = new FormData(els.createPostForm);

    try {
      const response = await fetch("/admin/createBlog", {
        method: "POST",
        body: formData, //Sending as FormData object because of image upload
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
