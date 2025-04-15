// first load the environment variables
const dotenv = require("dotenv");
dotenv.config({ path: "../frontend/.env.development" });

const express = require("express");
const cors = require("cors");
const mongooseConnect = require("./src/configs/mongooseConnect");
const authRoutes = require("./src/routes/authRoutes");
const taskRoutes = require("./src/routes/taskRoutes");
const userDataRoutes = require("./src/routes/userDataRoutes");
const cookieParser = require("cookie-parser");
const { ApolloServer } = require("@apollo/server"); // GraphQL server
const { expressMiddleware } = require("@apollo/server/express4"); // Enables to attach Apollo server to Express server
const typeDefs = require("./src/schemas/typeDefs");
const resolvers = require("./src/resolvers/resolvers");

async function startServer() {
  const server = new ApolloServer({ typeDefs: typeDefs, resolvers: resolvers });

  await server.start();

  const app = express();

  app.use(cors({ origin: process.env.VITE_FRONTEND_URL, credentials: true }));

  app.use(express.json());

  app.use(cookieParser());

  app.use("/auth", authRoutes);

  app.use("/tasks", taskRoutes);

  app.use("/user_data", userDataRoutes);

  app.use("/graphql", expressMiddleware(server));

  mongooseConnect()
    .then(() => {
      console.log("CONNECTED");
      app.listen(3000);
    })
    .catch((err) => {
      console.log(err);
    });
}

startServer();
