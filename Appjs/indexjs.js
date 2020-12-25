

eventListener();
LoadLastPage();

function eventListener() {

    var navlst = document.getElementsByClassName('nav-link');
    for (i = 0; i < navlst.length; i++) {
        navlst[i].addEventListener('click', menuClick);
    }
}

function menuClick(e) {
    localStorage.setItem('lastmenu', e.srcElement.id);
}

function LoadLastPage() {

    const menu = localStorage.getItem('lastmenu');
    if (menu === null) {

    } else {
        const nav = document.getElementById(menu);
        nav.click();
    }
}


function include(file) {

    var script = document.createElement('script');
    script.src = file;
    script.type = 'text/javascript';
    script.defer = true;

    document.getElementsByTagName('head').item(0).appendChild(script);

}

/* Include Many js files */
include('Appjs/LocalStorage.js');
include('Appjs/sendemail.js');
include('Appjs/carisurance.js');
include('Appjs/weeklybudgetapp.js');
include('Appjs/ajax.js');





