require("dotenv").config({ path: "variables.env" });

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { Wit } = require("node-wit");

const Pusher = require("pusher");
const req = require("express/lib/request");
const { loaddb, getUserChatHistory, saveChat } = require("./db");
const responses = require("./responsefile").responses;
const recommendations = require("./responsefile").recommendations;
const symptoms = require("./responsefile").symptoms;
const causes = require("./responsefile").causes;
const drugs = require("./responsefile").drugs;
const allIntents = require("./responsefile").allIntents.intss;

const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID,
  key: process.env.PUSHER_APP_KEY,
  secret: process.env.PUSHER_APP_SECRET,
  cluster: process.env.PUSHER_APP_CLUSTER,
  encrypted: true,
});

const client = new Wit({
  accessToken: process.env.WIT_ACCESS_TOKEN,
});

loaddb();
const app = express();

app.use(cors({ origin: "*" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/chats", (req, res) => {
  const { message } = req.body;
  createUserMessage(message, "tobs");

  client
    .message(message)
    .then((resp) => {
      const intent = findIntent(resp);
      sendIntentResponses(intent);
      res.json({ message: "successful" });
    })
    .catch((error) => {
      res.json({});
      createSystemMessage(
        "I am currently offline. Please try again later",
        "tobs"
      );
      console.log(error);
    });
});

app.get("/chats/:id", (req, res) => {
  const userId = req.params.id;
  const chat = getUserChatHistory(userId);
  res.json(chat);
});

app.set("port", process.env.PORT || 7777);
const server = app.listen(app.get("port"), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});

function createUserMessage(message, loggedInUser) {
  const chatMessage = {
    timestamp: new Date(),
    message,
    sender: "user",
  };
  broadcastMessage(chatMessage);
  saveChat(chatMessage, "tobs");
}

function createSystemMessage(message, loggedInUser) {
  const chatMessage = {
    timestamp: new Date(),
    message,
    sender: "ai",
  };
  broadcastMessage(chatMessage);
  saveChat(chatMessage, "tobs");
}

function broadcastMessage(chatMessage) {
  pusher.trigger("bot", "bot-response", chatMessage);
}

function sendIntentResponses(intent) {
  if (intent.includes("get")) {
    [responses, recommendations, symptoms, causes, drugs].forEach((section, index) => {
      const message = section[intent][Math.floor(Math.random() * section[intent].length)];
      setTimeout(() => createSystemMessage(message), 2000 * index);
    });
  } else {
    const message = responses[intent][Math.floor(Math.random() * responses[intent].length)];
    createSystemMessage(message);
  }
}

function findIntent(witResponse) {
  const witIntents = witResponse.intents;
  const firstIntent = witIntents && witIntents.length > 0 && witIntents[0].name;
  if (!firstIntent) return "noresponse";

  const selectedIntent = allIntents.find((intent) => intent === firstIntent);
  if (!selectedIntent) return "noresponse";

  return selectedIntent;
}
