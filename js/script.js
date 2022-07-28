const tabHeadings = document.querySelectorAll(".tab");
const tabContent = document.querySelector(".tab-content");
const tabContents = document.querySelectorAll(".tab-info");
const accBtn = document.getElementById("account");

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

accBtn.addEventListener("click", (e) => {
    accBtn.classList.toggle("active");
});

document.addEventListener("click", (e) => {
    if (e.target.closest("#account") !== accBtn) {
        if (accBtn.classList.contains("active")) {
            accBtn.classList.remove("active");
        }
    }
});
