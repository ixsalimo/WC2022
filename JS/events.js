const Header = _qs("header") , BackArrow = _id("arrow-left__wrapper");
window.addEventListener('scroll' , () => {
    if (window.scrollY > 0) {
        Header.classList.add("scrolled-header");
    } else {
        Header.classList.remove("scrolled-header");
    }
});
if (BackArrow != null) {
    BackArrow.addEventListener('click' , () => history.back());
}