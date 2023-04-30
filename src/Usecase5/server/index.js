const express = require("express");
const dayjs = require("dayjs");
const utc = require("dayjs/plugin/utc");

dayjs.extend(utc);

const PORT = 2468;
const app = express();

// A simple Mock API that sends and receives dates and act as backend
app.post("/send", (req, res) => {
    let sentDate;
    try {
        const dateParse = dayjs.utc(req.body.sendDate).format();
        if (dateParse)
            res.status(201).send({
                data: sentDate,
                status: true,
                code: 201,
            });
        else throw new Error("Problem saving sentDate");
    } catch (error) {
        res.status(500).send({
            status: false,
            code: 500,
            data: error,
        });
    }
});

app.get("/receive", (req, res) => {
    let receivedDate = dayjs.utc();
    if (receivedDate)
        res.status(200).send({
            data: receivedDate,
            status: true,
            code: 200,
        });
    else
        res.status(500).send({
            data: "Problem parsing date",
            status: false,
            code: 500,
        });
});

app.listen(PORT, () => {
    console.log(`💻 Listening on PORT:${PORT}, URL: http://localhost:${PORT}`);
});
