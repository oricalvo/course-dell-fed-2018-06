import * as express from "express";

const app = express();

app.get("/api/contact", function(req, res) {
    res.send([
        {id:1, name: "OrZZZ"},
        {id:2, name: "Roni2"},
    ]);
});

app.listen(3000, function() {
    console.log("Server is running on port 3000");
});

