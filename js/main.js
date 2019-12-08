function details() {
    console.log('ok');

    let text = document.getElementById('not-show');

    if (text.style.display == "none" ) {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}

function scrollToTop() {
    scrollTo(0, 0);
}