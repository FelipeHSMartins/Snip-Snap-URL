import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import queryString from "querystring";

const app = express();
const port = 3000;
const API_URL = "https://cleanuri.com/api/v1/shorten";


app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.render("index.ejs", {insertPhrase: getInsertPhrase(), copiedPhrase: getCopiedPhrase(), appearPhrase: getAppearPhrase()});
});

app.post("/shorten", async (req, res) => {
    try {
        let ogURL = req.body.ogURL;
        let params = queryString.stringify({url: ogURL});

        let request = await axios.post(API_URL, params);
        let resultURL = request.data["result_url"];
        res.render("index.ejs", {reURL: resultURL, insertPhrase: getInsertPhrase(), copiedPhrase: getCopiedPhrase(), appearPhrase: getAppearPhrase()});
    } catch (error) {
        console.log("API fail: " + error.message);
        res.send("Error: " + error.message);
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


let insertPhrases = [
    "Paste Your Long URL for a Quick Trim Here 🍰",
    "Ctrl+V Your URL for a Snip-Snip Magic ✂️",
    "Ready to Chop? Insert Your URL Below ⚔️",
    "Snip, Snip! Paste Your Link to Shrink It ✄",
    "Place Your URL in the Barber's Chair 💇‍♂️",
    "Trim Your URL – Insert It Right Here ✅",
    "Snippy Studio – Your URL Goes Here ✄",
    "URL Shears & Clippers – Paste Your Link 🐏",
    "Bring Your URL for a Chop - Paste It Below 🪓",
    "Paste Your Link for a Shortcut – Magic Starts Now ✁",
    "Insert your magical link here ✨..."
];

let copiedPhrases = [
    "Link copied to clipboard!",
    "URL found a cozy home in your clipboard!",
    "Link cuddled up in your clipboard!",
    "Clipboard gave a hug to your link!",
    "Link's new BFF: Clipboard!",
    "Link found a clipboard sanctuary!"
];

let appearPhrases = [
    "Your snazzy shortened URL will appear here...✂️",
    "Short and sweet URL coming right up...",
    "Your zippy, shortened URL will pop up here...✂️",
    "A miniaturized URL will be born here...",
    "This is where your tidy URL will shine...",
    "Magic alert: your compact URL appears here...✂️",
    "Tiny, but mighty! Your URL is coming here...✂️",
    "Get ready for your petite URL to emerge here...✂️",
    "Your mini link is moments away from appearing here...✂️",
    "Your snazzy shortened URL will appear here...🌈",
    "In a blink, your stylishly shortened URL arrives here...",
    "Adorable alert: your URL will appear right here...🌟",
    "Get ready for your neat, little URL...📏"
];

function getInsertPhrase() {
    let randomNum = Math.floor(Math.random() * insertPhrases.length);
    return insertPhrases[randomNum];
}

function getCopiedPhrase() {
    let randomNum = Math.floor(Math.random() * copiedPhrases.length);
    return copiedPhrases[randomNum];
}

function getAppearPhrase() {
    let randomNum = Math.floor(Math.random() * appearPhrases.length);
    return appearPhrases[randomNum];
}