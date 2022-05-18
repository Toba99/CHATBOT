const fs = require("fs");
const { sortBy, groupBy } = require("lodash");
const format = require("date-fns/lightFormat");

const userStore = require("./db/users.json");
const chatStore = require("./db/chats.json");
const accountStore = require("./db/accounts.json");

let users, chats, accounts;

function loaddb() {
  users = userStore;
  chats = chatStore;
  accounts = accountStore;
}

function saveChat(newChat, user) {
  const usersChat = chats[user] || [];
  chats = {...chats, [user]: [...usersChat, newChat] };
  persistChats(chats);
}

function findUser(username, password) {
  const user = users.find(user => user.username === username && user.password === password);
  return user || null;
}

function persistData(filename) {
  return function (data) {
    fs.writeFile(filename, JSON.stringify(data, null, 2), (err) => {
      if (err) throw err;
      console.log(`Data persisted to ${filename} successfully`);
    });
  };
}

const persistUsers = persistData("./db/users.json");
const persistChats = persistData("./db/chats.json");
const persistAccounts = persistData("./db/accounts.json");

function getUserChatHistory(userId) {
  const userChatHistory = chats[userId] || [];
  const chatHistory = [...userChatHistory, ...getConverstationStarter()];

  const sortedHistory = sortBy(chatHistory, ["timestamp"]);
  return groupBy(sortedHistory, (chat) =>
    format(new Date(chat.timestamp), "dd-MM-yyyy")
  );
}

function getConverstationStarter() {
  return [
    {
      sender: "ai",
      message: "Hey, I am Julia, a Medical Assistant",
      timestamp: new Date(),
    },
    {
      sender: "ai",
      message: "Enter your symptoms, e.g (Cough, Headache, e.t.c)",
      timestamp: new Date(),
    },
    {
      sender: "ai",
      message:
        "Here are some common symptoms to assist you: COUGH, RUNNY OR BLOCKED NOSE, FEVER, CHILLS, HEADACHE, SORE THROAT, MUSCLE OR BODY PAIN, NAUSEA, LOSS OF TASTE OR SMELL, TIREDNESS,DIFFICULTY SLEEPING, EARACHE, CONSTIPATION, STOMACH ACHE, TOOTHACHE, BAD BREATH,  or any other symptoms you may be experiencing",
      timestamp: new Date(),
    },
  ];
}

module.exports = { loaddb, getUserChatHistory, saveChat, findUser };
