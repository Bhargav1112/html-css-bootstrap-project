const tabHeadings = document.querySelectorAll(".tab");
const tabContent = document.querySelector(".tab-content");
const tabContents = document.querySelectorAll(".tab-info");

const clickHandler = (e) => {
    const element = e.target.closest(".tab");
    tabContents.forEach((content) => {
        content.classList.remove("active");
    });
    tabHeadings.forEach((title) => {
        title.classList.remove("active");
    });
    element.classList.add("active");
    const contentNumber = element.dataset.tab;
    console.log(contentNumber);
    const tab = tabContent.querySelector(`.tab-content--${contentNumber}`);
    tab.classList.add("active");
};
tabHeadings.forEach((title) => {
    title.addEventListener("click", clickHandler);
});
