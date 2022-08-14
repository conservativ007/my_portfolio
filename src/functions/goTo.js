export function goTo(e, selector, isDesktop = true) {
  e.preventDefault();

  if (isDesktop === false) {
    let rootDocument = document.querySelector("#root");
    rootDocument.classList.remove("animate");
    setTimeout(() => rootDocument.classList.remove("modalview"), 400);
    setTimeout(() => getScrollIntoView(selector), 400);
  } else {
    getScrollIntoView(selector);
  }
}

function getScrollIntoView(selector) {
  document.querySelector(`.${selector}`)
    .scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
}