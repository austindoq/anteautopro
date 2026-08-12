document.addEventListener("DOMContentLoaded", async () => {
  const els = {
    inventoryCardArea: document.getElementById("inventoryCardArea"),
    dropMenuButton: document.getElementById("dropMenuButton"),
    dropMenu: document.getElementById("dropMenu"),
    searchBar: document.getElementById("search-bar"),
    searchButton: document.getElementById("search-button"),
    currentSearchTerm: document.getElementById("currentSearchTerm"),
    currentSearchResultTotal: document.getElementById(
      "currentSearchResultTotal",
    ),
  };

  //GET ENDPOINTS
  const getEndPoints = {
    brandNewListings: "/api/getAllBrandNewListings",
    tradeInListings: "/api/getAllTradeInListings",
    getSearchListings: "/api/getSearchListings",
  };

  //LOAD DEFAULT PAGE CONTENT BASED ON PARAMS
  const getContentPageLoad = async () => {
    const params = new URLSearchParams(window.location.search);
    const contentType = params.get("type");

    if (contentType === "brandNewListings") {
      try {
        const brandNewListings = await fetch(`${getEndPoints[contentType]}`);
        const brandNewListingsData = await brandNewListings.json();
        const totalListings = brandNewListingsData.length;

        els.currentSearchTerm.innerHTML = "Brand New";
        els.currentSearchResultTotal.innerHTML = totalListings;
        els.inventoryCardArea.innerHTML = "";

        for (const brandNewListing of brandNewListingsData) {
          const vehicleCard = `<article
              id="${brandNewListing._id}"
              data-type="brandNewItem"
              class="w-full relative bg-[#f1f3f5] text-[#343a40] rounded-xl shadow-xl"
            >
              <img
                src="${brandNewListing.imageUrl}"
                class="md:h-100 w-full object-cover rounded-tl-xl rounded-tr-xl"
              />
              <div id="vehicle-card-text" class="p-4 flex flex-col gap-2 border-y-2 border-y-[#1985b4] border-x-2 border-x-[#1985b4] rounded-b-xl">
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
                    <span>|</span>
                    ${brandNewListing.transmission[0].toUpperCase() + brandNewListing.transmission.slice(1)}
                  </p>
                </div>
                <p
                  id="vehicle-description"
                  class="italic tracking-wide text-lg"
                >
                  ${brandNewListing.description}
                </p>
                <div
          id="partition"
          class="w-full h-[1px] mx-auto bg-[#343a40] "
                ></div>
                <div id="vehicle-pricing-area" class="w-full flex justify-between">
                    <p class="text-xl">Selling price:</p>
                    <p id="vehiclePrice" class=" text-[#1985b4] text-2xl">$1300</p>
                </div>
              </div>
            </article>`;
          els.inventoryCardArea.insertAdjacentHTML("beforeend", vehicleCard);
        }
      } catch (error) {
        console.log(`Error while getting listings: ${error}`);
      }
    } else if (contentType === "tradeInListings") {
      try {
        const tradeInListings = await fetch(`${getEndPoints[contentType]}`);
        const tradeInListingsData = await tradeInListings.json();
        const totalListings = tradeInListingsData.length;

        els.currentSearchTerm.innerHTML = "Trade-Ins";
        els.currentSearchResultTotal.innerHTML = totalListings;
        els.inventoryCardArea.innerHTML = "";

        for (const tradeInListing of tradeInListingsData) {
          const vehicleCard = `<article
              id="${tradeInListing._id}"
              data-type="tradeInItem"
              class="w-full relative bg-[#f1f3f5] text-[#343a40] rounded-xl shadow-xl"
            >
              <img
                src="${tradeInListing.imageUrl}"
                class="md:h-100 w-full object-cover rounded-tl-xl rounded-tr-xl"
              />
              <div id="vehicle-card-text" class="p-4 flex flex-col gap-2 border-y-2 border-y-[#1985b4] border-x-2 border-x-[#1985b4] rounded-b-xl">
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
                    <span>|</span>
                    ${tradeInListing.transmission[0].toUpperCase() + tradeInListing.transmission.slice(1)}
                    <span>|</span>
                    ${tradeInListing.odometer} Kms 
                  </p>
                </div>
                <p
                  id="vehicle-description"
                  class="italic tracking-wide text-lg"
                >
                  ${tradeInListing.description}
                </p>
                <div
          id="partition"
          class="w-full h-[1px] mx-auto bg-[#343a40] "
                ></div>
                <div id="vehicle-pricing-area" class="w-full flex justify-between">
                    <p class="text-xl">Selling price:</p>
                    <p id="vehiclePrice" class=" text-[#1985b4] text-2xl">$1300</p>
                </div>
              </div>
            </article>`;
          els.inventoryCardArea.insertAdjacentHTML("beforeend", vehicleCard);
        }
      } catch (error) {
        console.log(`Error while getting listings: ${error}`);
      }
    }
  };

  // ==============================================
  //USER EVENTS
  // ==============================================

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

  // ==============================================
  //SEARCH FUNCTIONS
  // ==============================================

  //GET USER SEARCH RESULTS
  const getUserSearchResults = async (query, contentType) => {
    try {
      const searchResponse = await fetch(
        `/api/getSearchListings/${contentType}?search=${query}`,
      );
      const searchData = await searchResponse.json();

      els.currentSearchTerm.innerHTML = query;
      els.currentSearchResultTotal.innerHTML = searchData.length;
      els.inventoryCardArea.innerHTML = "";

      if (searchData.length === 0) {
        els.inventoryCardArea.innerHTML = `<div class="w-full flex justify-center"><p>There are no vehicles that match your search.</p></div>`;
      } else {
        for (const vehicle of searchData) {
          const vehicleCard = `<article
              id="${vehicle._id}"
              class="w-full bg-[#f1f3f5] text-[#343a40] rounded-xl shadow-xl"
            >
              <img
                src="${vehicle.imageUrl}"
                class="md:h-100 w-full object-cover rounded-tl-xl rounded-tr-xl"
              />
              <div id="vehicle-card-text" class="p-4 flex flex-col gap-2 border-y-2 border-y-[#1985b4] border-x-2 border-x-[#1985b4] rounded-b-xl">
                <div
                  id="vehicle-year-and-make"
                  class="flex text-md font-bold text-[#343a40] tracking-wide w-full text-center md:text-start rounded-lg"
                >
                  <h1>${vehicle.year}&nbsp;</h1>
                  <h1>${vehicle.make}</h1>
                </div>
                <h1
                  id="vehicle-model"
                  class="flex text-xl font-bold text-[#343a40] tracking-wide w-fit text-center md:text-start rounded-lg"
                >
                  ${vehicle.model}
                </h1>
                <h2 id="vehicle-vin"><span class="font-semibold">VIN:</span> ${vehicle.vin}</h2>
                <div
                  id="vehicle-stats"
                  class="flex flex-col md:flex-row text-md"
                >
                  <p>
                    ${vehicle.drive.toUpperCase()}
                    <span>|</span>
                    ${vehicle.transmission[0].toUpperCase() + vehicle.transmission.slice(1)}
                  </p>
                </div>
                <p
                  id="vehicle-description"
                  class="italic tracking-wide text-lg"
                >
                  ${vehicle.description}
                </p>
                <div
          id="partition"
          class="w-full h-[1px] mx-auto bg-[#343a40] "
                ></div>
                <div id="vehicle-pricing-area" class="w-full flex justify-between">
                    <p class="text-xl">Selling price:</p>
                    <p id="vehiclePrice" class=" text-[#1985b4] text-2xl">$1300</p>
                </div>
              </div>
            </article>`;
          els.inventoryCardArea.insertAdjacentHTML("beforeend", vehicleCard);
        }
      }
    } catch (error) {
      console.log(
        `There has been an error retrieving search results: ${error}`,
      );
    }
  };

  //SEARCH BAR LISTENER
  els.searchButton.addEventListener("click", async (clickEvent) => {
    const query = els.searchBar.value;
    const params = new URLSearchParams(window.location.search);
    const contentType = params.get("type");

    if (query === "") {
      return;
    } else {
      await getUserSearchResults(query, contentType);
    }
  });

  await getContentPageLoad();
});
