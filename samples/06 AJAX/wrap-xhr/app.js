refresh();

function refresh() {
    getTopContacts().then(contacts => {
        console.log("contacts", contacts);
    }).catch(err => {
        console.log("ERROR: " + err.message);
    });
}

function getTopContacts() {
    return getContacts()
        .then(contacts => {throw new Error("XXX");});
}

function getContacts() {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "contacts.json");
        xhr.send();

        xhr.addEventListener("readystatechange", function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    resolve(JSON.parse(xhr.responseText));
                }
                else {
                    reject(new Error("diuhdihd"));
                }
            }
        });
    });
}
