$(document).ready(function () {

    //sidebar open/close
    $('#openNav').click(function () {
        openNav();
    });
    $('#closeNav').click(function () {
        closeNav();
    });

    //Sidebar button handling
    $('#sidebarPage1').click(function () {
        scrollToPage('#pageOne');
        closeNav();
    });
    $('#sidebarPage2').click(function () {
        scrollToPage('#pageTwo');
        closeNav();
    });
    $('#sidebarPage3').click(function () {
        scrollToPage('#pageThree');
        closeNav();
    });
    $('#sidebarPage4').click(function () {
        scrollToPage('#pageFour');
        closeNav();
    });
    $('#sidebarPage5').click(function () {
        scrollToPage('#pageFive');
        closeNav();
    });

    $(window).scroll(function () {
        ScrollPage(false);
    })
});

function openNav() {
    document.getElementById("sideNav").style.width = "250px";
    //document.getElementById("pageOneContent").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("sideNav").style.width = "0";
    //document.getElementById("pageOneContent").style.marginLeft = "0";
}

function ScrollPage(up) {

    var scroll = window.pageYOffset || document.documentElement.scrollTop;
    var currentPage = 0;

    if (scroll >= 0 && scroll < 1000) {
        currentPage = 1;
    } else if (scroll >= 1000 && scroll < 2000) {
        currentPage = 2;
    } else if (scroll >= 2000 && scroll < 3000) {
        currentPage = 3;
    } else if (scroll >= 3000 && scroll < 4000) {
        currentPage = 4;
    } else if (scroll >= 4000 && scroll < 5000) {
        currentPage = 5;
    }

    console.log(scroll + " " + currentPage);

    switch (currentPage) {
        case 1:
            if (up) {
                //Do nothing, already at the top.
            } else {
                ScrollToPage("#pageTwo");
            }
            break;
        case 2:
            if (up) {
                ScrollToPage("#pageOne");
            } else {
                ScrollToPage("#pageThree");
            }
            break;
        case 3:
            if (up) {
                ScrollToPage("#pageTwo");
            } else {
                ScrollToPage("#pageFour");
            }
            break;
        case 4:
            if (up) {
                ScrollToPage("#pageThree");
            } else {
                ScrollToPage("#pageFive");
            }
            break;
        case 5:
            if (up) {
                ScrollToPage("#pageFour");
            } else {
                //Do nothing, already at bottom.
            }
            break;
    }
}

function scrollToPage(pageId) {
    $('html, body').animate({
        scrollTop: $(pageId).offset().top
    }, 500);
    closeNav();
}