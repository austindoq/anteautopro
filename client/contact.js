document.addEventListener("DOMContentLoaded", () => {
  const els = {
    dropMenuButton: document.getElementById("dropMenuButton"),
    dropMenu: document.getElementById("dropMenu"),
  };

  //MOBILE NAV BUTTON TOGGLE VISIBILITY
  els.dropMenuButton.addEventListener("click", (click) => {
    click.stopPropagation();
    els.dropMenu.classList.toggle("hidden");

    if (!els.dropMenu.classList.contains("hidden")) {
      els.dropMenuButton.classList.add("scale-95", "text-[#e3173e]");
    } else {
      els.dropMenuButton.classList.remove("scale-95", "text-[#e3173e]");
    }
  });

  //MOBILE CLICK OUT OF MENU CLOSE
  document.addEventListener("click", (click) => {
    if (
      !els.dropMenu.classList.contains("hidden") &&
      !els.dropMenu.contains(click.target)
    ) {
      els.dropMenu.classList.add("hidden");
    }

    els.dropMenuButton.classList.remove("scale-95", "text-[#e3173e]");
  });
});
