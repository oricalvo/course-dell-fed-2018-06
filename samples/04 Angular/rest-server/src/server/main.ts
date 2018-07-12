import * as express from "express";

const app = express();
const port = 3000;

app.get("/api/contact", function(req, res) {
  res.send([
      {"id": 1, "name": "Ori"},
      {"id": 2, "name": "Roni"},
    ]
  );
});

app.listen(port, function() {
  console.log(`Server is running on port ${port}`);
});
