import { readDB, writeDB } from "../dbController";

const messagesRoute = [
  {
    // GET MESSAGES
    method: "get",
    routes: "/messages",
    handler: (req, res) => {
      const msgs = readDB("messages");
      res.send(msgs);
    },
  },
  {
    // CREATE MESSAGES
    method: "post",
    routes: "/messages",
    handler: (req, res) => {
      const msgs = readDB("messages");
    },
  },
  {
    // UPDATE MESSAGES
    method: "put",
    routes: "/messages/:id",
    handler: (req, res) => {
      res.send();
    },
  },
  {
    // DELETE MESSAGES
    method: "delete",
    routes: "/messages/:id",
    handler: (req, res) => {
      res.send();
    },
  },
];

export default messagesRoute;
