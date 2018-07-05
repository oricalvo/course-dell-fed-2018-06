const express = require("express");

const app = express();
const port = 3000;
const contacts = [
    {id: 1, name: "Ori"},
    {id: 2, name: "Roni"},
];

app.get("/api/contact", function(req, res) {
    res.send(contacts);
});

app.delete("/api/contact/:id", function(req, res) {
    const {id} = req.params;
    console.log("DELETE " + id);

    const index = contacts.findIndex(c => c.id == id);
    if(index != -1) {
        contacts.splice(index, 1);
    }

    res.send({
        ok: true
    });
});

app.listen(port, function() {
    console.log(`Server is running on ${port}`);
});
