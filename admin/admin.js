var a = 1;

function showRightSide() {
    const rightSide = document.querySelector(".right_side");
    const barsIcon = document.querySelector("#fa");

    if (a === 1) {
        rightSide.style.display = "none";
        document.querySelector('.iframe_page').className = "iframe_page_full";
        barsIcon.className = "fa fa-bars";
        a = 0;
    } else {
        rightSide.style.display = "block";
        document.querySelector('.iframe_page_full').className = "iframe_page";
        barsIcon.className = "fa fa-close";
        a = 1;
    }
}


show_iframe_page = () => {
    parent.location = "../";
}

gérer_les_slides = () => {
    parent.location = "./gestionnaire_des_pages/gérer_les_slides.php";
}

gérer_les_produits = () => {
    parent.location = "./gestionnaire_des_pages/gérer_les_produits.php";
}