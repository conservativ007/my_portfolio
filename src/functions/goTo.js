export function goTo(e, selector) {
  e.preventDefault();

  let rootDocument = document.querySelector("#root");
  rootDocument.classList.remove("animate");
  setTimeout(() => rootDocument.classList.remove("modalview"), 400);
  setTimeout(() => getScrollIntoView(selector), 400);
}

function getScrollIntoView(selector) {
  document.querySelector(`.${selector}`)
    .scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
}