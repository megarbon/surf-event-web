function openTab(tabId) {
    var tabs = document.querySelectorAll(".tab-pane");
    tabs.forEach(function (tab) {
      if (tab.id === tabId) {
        tab.classList.add("active");
      } else {
        tab.classList.remove("active");
      }
    });
  }

  //seccion about

  const faqItems = Array.from(document.querySelectorAll(".cs-faq-item"));
  for (const item of faqItems) {
    const onClick = () => {
      item.classList.toggle("active");
    };
    item.addEventListener("click", onClick);
  }

  //Js para el navbar

  // add classes for mobile navigation toggling
  var CSbody = document.querySelector("body");
  const CSnavbarMenu = document.querySelector("#cs-navigation");
  const CShamburgerMenu = document.querySelector(
    "#cs-navigation .cs-toggle"
  );

  CShamburgerMenu.addEventListener("click", function () {
    CShamburgerMenu.classList.toggle("cs-active");
    CSnavbarMenu.classList.toggle("cs-active");
    CSbody.classList.toggle("cs-open");
    // run the function to check the aria-expanded value
    ariaExpanded();
  });

  // This script adds a class to the body after scrolling 100px
  // and we used these body.scroll styles to create some on scroll
  // animations with the navbar

  document.addEventListener("scroll", (e) => {
    const scroll = document.documentElement.scrollTop;
    if (scroll >= 100) {
      document.querySelector("body").classList.add("scroll");
    } else {
      document.querySelector("body").classList.remove("scroll");
    }
  });

  // mobile nav toggle code
  const dropDowns = Array.from(
    document.querySelectorAll("#cs-navigation .cs-dropdown")
  );
  for (const item of dropDowns) {
    const onClick = () => {
      item.classList.toggle("cs-active");
    };
    item.addEventListener("click", onClick);
  }

  // contact form

  const faqItems2 = Array.from(document.querySelectorAll(".cs-faq-item"));
  for (const item of faqItems) {
    const onClick = () => {
      item.classList.toggle("active");
    };
    item.addEventListener("click", onClick);
  }
  const disapearSection = () => {
    const section = document.querySelector(".cookies-section");
    section.style.display = "none";
  };