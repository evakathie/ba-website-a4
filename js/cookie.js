function showCookieNotice() {
    if (this.window.localStorage.getItem('aCookieHinweis')) {
        document.getElementById("cookiehinweis").style="display:none";
    }
}

function cookieOk() {
    document.getElementById("cookiehinweis").style="display:none";
    window.localStorage.setItem('aCookieHinweis', '1');
}

/* Nach Experiment:
localStorage.removeItem('aCookieHinweis');
*/
