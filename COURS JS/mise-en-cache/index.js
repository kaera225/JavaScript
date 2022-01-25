if ("serviceWorker" in navigator) {
    navigator.serviceWorker
        .register('/mise-en-cache/serviceWorker.js')
        .then((r) => console.log("sw registered" + r.scope))
        .catch((err) => console.log(err));
}