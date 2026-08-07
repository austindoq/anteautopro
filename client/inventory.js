document.addEventListener("DOMContentLoaded", async () => {
  const els = {
    inventoryCardArea: document.getElementById("inventoryCardArea"),
    dropMenuButton: document.getElementById("dropMenuButton"),
    dropMenu: document.getElementById("dropMenu"),
  };

  //GET ENDPOINTS
  const getEndPoints = {
    brandNewListings: "/api/getAllBrandNewListings",
    tradeInListings: "/api/getAllTradeInListings",
  };

  //LOAD CONTENT BASED ON PARAMS
  const getContentPageLoad = async () => {
    const params = new URLSearchParams(window.location.search);
    const contentType = params.get("type");

    if (contentType === "brandNewListings") {
      try {
        const brandNewListings = await fetch(`${getEndPoints[contentType]}`);
        const brandNewListingsData = await brandNewListings.json();

        els.inventoryCardArea.innerHTML = "";

        for (const brandNewListing of brandNewListingsData) {
          const postingCard = `<article
              id="${brandNewListing._id}"
              data-type="brandNewItem"
              class="w-full relative bg-[#f1f3f5] text-[#343a40] rounded-xl shadow-xl"
            >
              <img
                src="${brandNewListing.imageUrl}"
                class="md:h-100 w-full object-cover rounded-tl-xl rounded-tr-xl"
              />
              <div id="vehicle-card-text" class="p-8 flex flex-col">
                <div
                  id="vehicle-year-and-make"
                  class="flex flex-col md:flex-row text-md font-bold text-[#343a40] tracking-wide w-fit text-center md:text-start rounded-lg"
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
                  class="italic tracking-wide text-lg pt-2"
                >
                  ${brandNewListing.description}
                </p>
              </div>
            </article>`;
          els.inventoryCardArea.insertAdjacentHTML("beforeend", postingCard);
        }
      } catch (error) {
        console.log(`Error while getting listings: ${error}`);
      }
    } else if (contentType === "tradeInListings") {
      try {
        const tradeInListings = await fetch(`${getEndPoints[contentType]}`);
        const tradeInListingsData = await tradeInListings.json();

        els.inventoryCardArea.innerHTML = "";

        for (const tradeInListing of tradeInListingsData) {
          const postingCard = `<article
              id="${tradeInListing._id}"
              data-type="tradeInItem"
              class="w-full relative bg-[#f1f3f5] text-[#343a40] rounded-xl shadow-xl"
            >
              <img
                src="${tradeInListing.imageUrl}"
                class="md:h-100 w-full object-cover rounded-tl-xl rounded-tr-xl"
              />
              <div id="vehicle-card-text" class="p-8 flex flex-col gap-2">
                <div
                  id="vehicle-year-and-make"
                  class="flex flex-col md:flex-row text-md font-bold text-[#343a40] tracking-wide w-fit text-center md:text-start rounded-lg"
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
                <h2 id="vehicle-vin">VIN ${tradeInListing.vin}</h2>
                <div
                  id="vehicle-stats"
                  class="flex flex-col md:flex-row text-md"
                >
                  <p>
                    ${tradeInListing.drive}
                    <span class="hidden md:inline-block">|</span>
                    ${tradeInListing.transmission}
                    <span class="hidden md:inline-block">|</span>
                    ${tradeInListing.odometer}
                  </p>
                </div>
                <p
                  id="vehicle-description"
                  class="italic tracking-wide text-lg pt-2"
                >
                  ${tradeInListing.description}
                </p>
              </div>
            </article>`;
          els.inventoryCardArea.insertAdjacentHTML("beforeend", postingCard);
        }
      } catch (error) {
        console.log(`Error while getting listings: ${error}`);
      }
    }
  };

  //USER EVENTS
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

  await getContentPageLoad();
});
