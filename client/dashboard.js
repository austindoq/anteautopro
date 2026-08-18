//STATIC ELEMENTS
const els = {
  dropMenuButton: document.getElementById("dropMenuButton"),
  dropMenu: document.getElementById("dropMenu"),
  createPostForm: document.getElementById("createPostForm"),
  image: document.getElementById("image"),
  title: document.getElementById("title"),
  body: document.getElementById("body"),
  postBlogButton: document.getElementById("postBlogButton"),
  formContainer: document.getElementById("formContainer"),
  brandNewFormButton: document.getElementById("brandNewFormButton"),
  tradeInFormButton: document.getElementById("tradeInFormButton"),

  dashboardPostedContentArea: document.getElementById(
    "dashboardPostedContentArea",
  ),
  postedBrandNewButton: document.getElementById("postedBrandNewButton"),
  postedTradeInButton: document.getElementById("postedTradeInButton"),
  postedBlogsButton: document.getElementById("postedBlogsButton"),
};

//DELETION ENDPOINTS
const deleteEndPoints = {
  blogPost: "/admin/deleteBlog",
  brandNewItem: "/admin/deleteBrandNew",
  tradeInItem: "/admin/deleteTradeIn",
};

//GET ENDPOINTS
const getEndPoints = {
  blogPostings: "/api/getAllBlogPosts",
  brandNewListings: "/api/getAllBrandNewListings",
  tradeInListings: "/api/getAllTradeInListings",
};

//PAGE LOGIC
document.addEventListener("DOMContentLoaded", async () => {
  // USER EVENTS ==============================================

  //MOBILE NAV BUTTON TOGGLE VISIBILITY
  els.dropMenuButton.addEventListener("click", (clickEvent) => {
    clickEvent.stopPropagation();
    els.dropMenu.classList.toggle("hidden");

    if (!els.dropMenu.classList.contains("hidden")) {
      els.dropMenuButton.classList.add("scale-95", "text-[#e3173e]");
    } else {
      els.dropMenuButton.classList.remove("scale-95", "text-[#e3173e]");
    }
  });

  //MOBILE CLICK OUT OF MENU CLOSE
  document.addEventListener("click", (clickEvent) => {
    if (
      !els.dropMenu.classList.contains("hidden") &&
      !els.dropMenu.contains(clickEvent.target)
    ) {
      els.dropMenu.classList.add("hidden");
    }

    els.dropMenuButton.classList.remove("scale-95", "text-[#e3173e]");
  });

  //-------------------------
  //INVENTORY FUNCTIONS
  //-------------------------

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
            <!-- DRIVE TRAIN -->
            <div class="flex flex-col">
              <label class="font-bold px-2 pt-2">Drive</label>
              <select
                name="drive"
                class="rounded-lg p-2 border-1 border-[#343a40]">
                <option value="Select Drivetrain" disabled selected>- Select Drive -</option>
                <option value="rwd">RWD</option> 
                <option value="fwd">FWD</option>
                <option value="awd">AWD</option>
                <option value="4wd">4WD</option>
              </select>
            </div>
            <!-- TRANSMISSION -->
            <div class="flex flex-col">
              <label class="font-bold px-2 pt-2">Transmission</label>
              <select
                name="transmission"
                class="rounded-lg p-2 border-1 border-[#343a40]">
                <option value="select transmission" disabled selected>- Select Manual or Automatic -</option>
                <option value="manual">Manual</option>
                <option value="automatic">Automatic</option>
              </select>
            </div>
            <!-- VIN -->
            <div class="flex flex-col">
              <label class="font-bold px-2 pt-2">VIN</label
              ><input
                id="vin"
                type="text"
                name="vin"
                placeholder="VIN"
                minlength="1"
                maxlength="17"
                required 
                class="rounded-lg p-2 border-1 border-[#343a40]"
              />
            </div>
            <div class="flex flex-col">
              <label class="font-bold px-2 pt-2">Price $</label>
              <input name="price" type="number" placeholder="23500" required class="rounded-lg p-2 border-1 border-[#343a40]"/>
            </div>
            <div class="mt-2">
              <label class="font-bold px-2 pt-2">Description</label
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
              id="createBrandNewButton"
              type="submit"
              class="relative overflow-hidden bg-[#1985b4] w-full tracking-widest p-2 rounded-lg font-bold text-[#f1f3f5] active:bg-[#26b5ee] hover:cursor-pointer hover:bg-[#1985b4] hover:scale-103 ease-in-out duration-150 before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-b before:from-[#f1f3f5]/35 before:via-transparent before:to-transparent"
            >
              CREATE
            </button>
          </form>`;

    const createBrandNewForm = document.getElementById("createBrandNewForm");
    const createBrandNewButton = document.getElementById(
      "createBrandNewButton",
    );

    createBrandNewForm.addEventListener("submit", async (submitEvent) => {
      //SUBMIT LOGIC
      submitEvent.preventDefault();

      const formData = new FormData(createBrandNewForm);

      createBrandNewButton.disabled = true;
      createBrandNewButton.innerText = "Creating listing...";

      try {
        const response = await fetch("/admin/createBrandNew", {
          method: "POST",
          body: formData,
        });

        const responseData = await response.json();

        alert(responseData.message);
      } catch (error) {
        alert(`There's been an error creating this item: ${error}`);
      }

      window.location.reload();
    });
  });

  els.tradeInFormButton.addEventListener("click", (clickEvent) => {
    formContainer.innerHTML = `<h1
            class="font-bold text-center text-2xl w-full border-b-2 border-b-[#e3173e]"
          >
            Create A <span class="text-[#e3173e] text-3xl">Trade In</span> Item
          </h1>
          <form id="createTradeInForm" class="p-2">
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
            <!-- ODOMETER -->
            <div class="flex flex-col">
              <label class="font-bold px-2 pt-2">Odometer</label
              ><input
                id="odometer"
                type="number"
                name="odometer"
                placeholder="Odometer"
                required 
                class="rounded-lg p-2 border-1 border-[#343a40]"
              />
            </div>
            <!-- DRIVE TRAIN -->
            <div class="flex flex-col">
              <label class="font-bold px-2 pt-2">Drive</label>
              <select
                name="drive"
                class="rounded-lg p-2 border-1 border-[#343a40]">
                <option value="- Select Drivetrain -" disabled selected>- Select Drive -</option>
                <option value="rwd">RWD</option> 
                <option value="fwd">FWD</option>
                <option value="awd">AWD</option>
                <option value="4wd">4WD</option>
              </select>
            </div>
            <!-- TRANSMISSION -->
            <div class="flex flex-col">
              <label class="font-bold px-2 pt-2">Transmission</label>
              <select
                name="transmission"
                class="rounded-lg p-2 border-1 border-[#343a40]">
                <option value="select transmission" disabled selected>- Select Manual or Automatic -</option>
                <option value="manual">Manual</option>
                <option value="automatic">Automatic</option>
              </select>
            </div>
            <!-- VIN -->
            <div class="flex flex-col">
              <label class="font-bold px-2 pt-2">VIN</label
              ><input
                id="vin"
                type="text"
                name="vin"
                placeholder="VIN"
                minlength="1"
                maxlength="17"
                required 
                class="rounded-lg p-2 border-1 border-[#343a40]"
              />
            </div>
            <div class="flex flex-col">
              <label class="font-bold px-2 pt-2">Price $</label>
              <input name="price" type="number" placeholder="23500" required class="rounded-lg p-2 border-1 border-[#343a40]"/>
            </div>
            <div class="mt-2">
              <label class="font-bold px-2 pt-2">Description</label
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
              id="createTradeInButton"
              type="submit"
              class="relative overflow-hidden bg-[#e3173e] w-full tracking-widest p-2 rounded-lg font-bold text-[#f1f3f5] active:bg-[#ff2d4f] hover:cursor-pointer hover:bg-[#e3173e] hover:scale-103 ease-in-out duration-150 before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-b before:from-[#f1f3f5]/35 before:via-transparent before:to-transparent"
            >
              CREATE
            </button>
          </form>`;

    const createTradeInForm = document.getElementById("createTradeInForm");
    const createTradeInButton = document.getElementById("createTradeInButton");

    createTradeInForm.addEventListener("submit", async (submitEvent) => {
      submitEvent.preventDefault();

      const formData = new FormData(createTradeInForm);

      createTradeInButton.disabled = true;
      createTradeInButton.innerText = "Creating listing...";

      try {
        const response = await fetch("/admin/createTradeIn", {
          method: "POST",
          body: formData,
        });

        const responseData = await response.json();

        alert(responseData.message);
      } catch (error) {
        alert(`There has been an error creating this trade in: ${error}`);
      }

      window.location.reload();
    });
  });

  //GET ALL BRAND NEW VEHICLES
  const getAllBrandNewListings = async () => {
    try {
      const brandNewListingsResponse = await fetch(
        `${getEndPoints.brandNewListings}`,
      );
      const brandNewListingsData = await brandNewListingsResponse.json();

      els.dashboardPostedContentArea.innerHTML = "";

      if (brandNewListingsData.length === 0) {
        els.dashboardPostedContentArea.innerHTML = `<div class="mb-15 w-full flex justify-center"><p class="font-bold text-md">No brand new postings to load</p></div>`;
      } else {
        for (const brandNewListing of brandNewListingsData) {
          const postingCard = `<article
              id="${brandNewListing._id}"
              data-type="brandNewItem"
              class="w-full h-full flex flex-col relative bg-[#f1f3f5] text-[#343a40] rounded-xl shadow-xl"
            >
              <img
                src="${brandNewListing.imageUrl}"
                class="md:h-100 w-full object-cover rounded-tl-xl rounded-tr-xl"
              />
              <div id="vehicle-card-text" class="flex-1 p-4 flex flex-col gap-2 border-y-2 border-y-[#1985b4] border-x-2 border-x-[#1985b4] rounded-b-xl">
                <div
                  id="vehicle-year-and-make"
                  class="flex text-md font-bold text-[#343a40] tracking-wide w-full text-center md:text-start rounded-lg"
                >
                  <h1>${brandNewListing.year}&nbsp;</h1>
                  <h1>${brandNewListing.make}</h1>
                </div>
                <h1
                  id="vehicle-model"
                  class="flex text-xl font-bold text-[#343a40] tracking-wide w-fit text-center md:text-start rounded-lg"
                >
                  ${brandNewListing.model}
                </h1>
                <h2 id="vehicle-vin"><span class="font-semibold">VIN:</span> ${brandNewListing.vin}</h2>
                <div
                  id="vehicle-stats"
                  class="flex flex-col md:flex-row text-md"
                >
                  <p>
                    ${brandNewListing.drive.toUpperCase()}
                    <span class="text-[#1985b4]">|</span>
                    ${brandNewListing.transmission[0].toUpperCase() + brandNewListing.transmission.slice(1)}
                  </p>
                </div>
                <p
                  id="vehicle-description"
                  class="text-lg"
                >
                  ${brandNewListing.description}
                </p>
                <div id="vehicle-pricing-area" class="w-full mt-auto flex flex-col justify-between">
                  <div
          id="partition"
          class="w-full h-[1px] mx-auto bg-[#343a40] "
                ></div>
                  <div class="flex justify-between">
                    <p class="text-xl">Selling price:</p>
                    <p id="vehiclePrice" class=" text-[#1985b4] text-2xl">$${brandNewListing.price}</p>
                  </div>
                </div>
              <div
                class="deleteButton bg-radial border border-[#343a40] from-[#f1f3f5] from-30% to-slate-300 px-2 py-1 text-[#e3173e] rounded-full text-2xl md:text-3xl font-bold absolute top-2 md:top-4 md:right-4 right-4 hover:cursor-pointer"
              >
                X
              </div>
            </article>`;
          els.dashboardPostedContentArea.insertAdjacentHTML(
            "beforeend",
            postingCard,
          );
        }
      }
    } catch (error) {
      console.log(`Error retrieving brand new vehicles: ${error}`);
    }
  };

  //GET ALL TRADE IN VEHICLES
  const getAllTradeInListings = async () => {
    try {
      const tradeInListingsResponse = await fetch(
        `${getEndPoints.tradeInListings}`,
      );
      const tradeInListingsData = await tradeInListingsResponse.json();

      els.dashboardPostedContentArea.innerHTML = "";

      if (tradeInListingsData.length === 0) {
        els.dashboardPostedContentArea.innerHTML = `<div class="mb-15 w-full flex justify-center"><p class="font-bold text-md">No trade in postings to load</p></div>`;
      } else {
        for (const tradeInListing of tradeInListingsData) {
          const postingCard = `<article
              id="${tradeInListing._id}"
              data-type="tradeInItem"
              class="w-full h-full flex flex-col relative bg-[#f1f3f5] text-[#343a40] rounded-xl shadow-xl"
            >
              <img
                src="${tradeInListing.imageUrl}"
                class="md:h-100 w-full object-cover rounded-tl-xl rounded-tr-xl"
              />
              <div id="vehicle-card-text" class="flex-1 p-4 flex flex-col gap-2 border-y-2 border-y-[#1985b4] border-x-2 border-x-[#1985b4] rounded-b-xl">
                <div
                  id="vehicle-year-and-make"
                  class="flex text-md font-bold text-[#343a40] tracking-wide w-full text-center md:text-start rounded-lg"
                >
                  <h1>${tradeInListing.year}&nbsp;</h1>
                  <h1>${tradeInListing.make}</h1>
                </div>
                <h1
                  id="vehicle-model"
                  class="flex text-xl font-bold text-[#343a40] tracking-wide w-fit text-center md:text-start rounded-lg"
                >
                  ${tradeInListing.model}
                </h1>
                <h2 id="vehicle-vin"><span class="font-semibold">VIN:</span> ${tradeInListing.vin}</h2>
                <div
                  id="vehicle-stats"
                  class="flex flex-col md:flex-row text-md"
                >
                  <p>
                    ${tradeInListing.drive.toUpperCase()}
                    <span class="text-[#1985b4]">|</span>
                    ${tradeInListing.transmission[0].toUpperCase() + tradeInListing.transmission.slice(1)}
                    <span class="text-[#1985b4]">|</span>
                    ${tradeInListing.odometer} Kms 
                  </p>
                </div>
                <p
                  id="vehicle-description"
                  class="text-lg"
                >
                  ${tradeInListing.description}
                </p>
                <div id="vehicle-pricing-area" class="w-full mt-auto flex flex-col justify-between">
                  <div
          id="partition"
          class="w-full h-[1px] mx-auto bg-[#343a40] "
                ></div>
                  <div class="flex justify-between">
                    <p class="text-xl">Selling price:</p>
                    <p id="vehiclePrice" class=" text-[#1985b4] text-2xl">$${tradeInListing.price}</p>
                  </div>
                </div>
                  <div
                class="deleteButton bg-radial border border-[#343a40] from-[#f1f3f5] from-30% to-slate-300 px-2 py-1 text-[#e3173e] rounded-full text-2xl md:text-3xl font-bold absolute top-2 md:top-4 md:right-4 right-4 hover:cursor-pointer"
              >
                X
              </div>
              </div>
            </article>`;
          els.dashboardPostedContentArea.insertAdjacentHTML(
            "beforeend",
            postingCard,
          );
        }
      }
    } catch (error) {
      alert(`Error getting trade in listings: ${error}`);
    }
  };

  //-------------------------
  //BLOG FUNCTIONS
  //-------------------------

  //GET ALL BLOG CONTENT
  const getAllBlogPosts = async () => {
    try {
      const response = await fetch(`${getEndPoints.blogPostings}`);
      const responseData = await response.json();

      dashboardPostedContentArea.innerHTML = "";

      if (responseData.length === 0) {
        dashboardPostedContentArea.innerHTML = `<div class="mb-15 w-full flex justify-center"><p class="font-bold text-md">No blog posts to load</p></div>`;
      } else {
        for (const blog of responseData) {
          const blogContent = ` <article
                id="${blog._id}"
                data-type="blogPost"
                class="w-full relative text-[#f1f3f5] bg-[#343a40] rounded-xl shadow-xl"
              >
                <img
                  src="${blog.imageURL}"
                  class="md:h-100 w-full object-cover rounded-tl-xl rounded-tr-xl mr-8"
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
          els.dashboardPostedContentArea.insertAdjacentHTML(
            "beforeend",
            blogContent,
          );
        }
      }
    } catch (error) {
      console.log(`Error getting blog posts: ${error}`);
    }
  };

  //CREATE A BLOG POST
  els.createPostForm.addEventListener("submit", async (submitEvent) => {
    submitEvent.preventDefault();

    const formData = new FormData(els.createPostForm);

    postBlogButton.disabled = true;
    postBlogButton.innerText = "POSTING...";

    try {
      const response = await fetch("/admin/createBlog", {
        method: "POST",
        body: formData, //Sending as FormData object because of image upload
      });

      const responseData = await response.json();

      alert(responseData.message);

      els.createPostForm.reset();

      await resetPostContent("blogPost");
    } catch (error) {
      alert(`There was an error creating this blog post: ${error}`);
    }

    postBlogButton.disabled = false;
    postBlogButton.innerText = "POST";
  });

  //REFRESH POST CONTENT
  const resetPostContent = async (postType) => {
    els.dashboardPostedContentArea.innerHTML = "";

    if (postType === "blogPost") {
      await getAllBlogPosts();
    } else if (postType === "brandNewItem") {
      await getAllBrandNewListings();
    } else if (postType === "tradeInItem") {
      await getAllTradeInListings();
    }
    //Requery for array of new delete buttons after blog content refresh
    const deleteButtons = document.querySelectorAll(".deleteButton");
    setDeleteButtonEvents(deleteButtons);
  };

  //DELETE BUTTON EVENT LISTENERS
  const setDeleteButtonEvents = (deleteButtons) => {
    deleteButtons.forEach((button) => {
      const article = button.closest("article");
      const postId = article.id;
      const postType = article.dataset.type;
      button.addEventListener("click", async (clickEvent) => {
        //Confirm user's choice
        const confirmed = confirm("Are you sure you want to remove this post?");
        if (!confirmed) return;

        try {
          const response = await fetch(
            `${deleteEndPoints[postType]}/${postId}`,
            {
              method: "delete",
            },
          );

          const responseData = await response.json();

          alert(responseData.message);
          console.log("Resetting post content");
          await resetPostContent(postType);
        } catch (error) {
          alert(error);
        }
      });
    });
  };

  //-------------------------
  //POSTED CONTENT AREA
  //-------------------------

  //POSTED CONTENT HEADER BUTTONS
  const postedContentHeaderButtons = [
    els.postedBrandNewButton,
    els.postedTradeInButton,
    els.postedBlogsButton,
  ];

  //VISUAL UPDATE ON ACTIVE HEADER BUTTONS
  const setActiveHeaderButtons = (activeButton) => {
    postedContentHeaderButtons.forEach((button) => {
      button.classList.remove("underline", "italic");
    });
    activeButton.classList.add("underline", "italic");
  };

  //POSTED BLOGS HEADER BUTTON LISTENER
  els.postedBlogsButton.addEventListener("click", async (clickEvent) => {
    els.dashboardPostedContentArea.classList.remove(
      "grid-cols-1",
      "grid",
      "md:grid-cols-3",
    );
    els.dashboardPostedContentArea.classList.add("flex", "flex-col");

    setActiveHeaderButtons(els.postedBlogsButton);
    await getAllBlogPosts();
    const deleteButtons = document.querySelectorAll(".deleteButton");
    setDeleteButtonEvents(deleteButtons);
  });

  //POSTED TRADE INS BUTTON LISTENER
  els.postedBrandNewButton.addEventListener("click", async (clickEvent) => {
    els.dashboardPostedContentArea.classList.remove("flex", "flex-col");
    els.dashboardPostedContentArea.classList.add(
      "grid-cols-1",
      "grid",
      "md:grid-cols-3",
    );
    setActiveHeaderButtons(els.postedBrandNewButton);
    await getAllBrandNewListings();
    const deleteButtons = document.querySelectorAll(".deleteButton");
    setDeleteButtonEvents(deleteButtons);
  });

  //POSTED BRAND NEW BUTTON LISTENER
  els.postedTradeInButton.addEventListener("click", async (clickEvent) => {
    els.dashboardPostedContentArea.classList.remove("flex", "flex-col");
    els.dashboardPostedContentArea.classList.add(
      "grid-cols-1",
      "grid",
      "md:grid-cols-3",
    );
    setActiveHeaderButtons(els.postedTradeInButton);
    await getAllTradeInListings();
    const deleteButtons = document.querySelectorAll(".deleteButton");
    setDeleteButtonEvents(deleteButtons);
  });

  //DEFUALT TO POSTED BLOG CONTENT ON PAGE LOAD
  await getAllBlogPosts();
  const onLoadDeleteButtons = document.querySelectorAll(".deleteButton");
  setDeleteButtonEvents(onLoadDeleteButtons);
});
