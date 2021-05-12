let tabcontents = document.querySelectorAll('.tabcontent');
let tabs = document.querySelectorAll('.blog-tab');

function changeActiveTab(clickedTab) {
    tabs.forEach(tab => tab.classList.remove("active"));
    clickedTab.classList.add("active");
}

function changeTabContent(month) {
    tabcontents.forEach(tabContent => tabContent.setAttribute("style", "display:none"));
    document.getElementById(month).setAttribute("style", "display:block");
}

function openBlogs(e, month) {
    e.stopImmediatePropagation();
    let clickTab = e.currentTarget;
    changeActiveTab(clickTab);
    changeTabContent(month);
}
