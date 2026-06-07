require("dotenv").config();

const express = require("express");
const cors = require("cors");

const projectRoutes =
require("./routes/projectRoutes");

const contactRoutes =
require("./routes/contactRoutes");

const app = express();

app.use(cors());

app.use(express.json());

app.use(
"/api/projects",
projectRoutes
);

app.use(
"/api/contact",
contactRoutes
);

app.listen(
process.env.PORT,
() =>
{
    console.log(
    `Server Running On Port ${process.env.PORT}`
    );
}
);