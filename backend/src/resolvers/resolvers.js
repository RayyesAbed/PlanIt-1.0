const User = require("../schemas/User");
const hashPassword = require("../services/hashPassword");
const isPasswordValid = require("../utils/isPasswordValid");

const resolvers = {
  Query: {
    async getUser(parent, args) {
      const user = await User.findOne({ email: args.email });
      if (!user) {
        throw new Error("User not found");
      }
      return user;
    },
  },
  Mutation: {
    async updateUser(parent, args) {
      const user = await User.findById(args.id);
      if (!user) {
        throw new Error("User not found");
      }
      if (args.name) {
        user.name = args.name;
      }
      if (args.email) {
        user.email = args.email;
      }
      if (args.password) {
        if (!isPasswordValid(args.password)) {
          throw new Error("Password does not meet the requirements");
        } else {
          user.password = await hashPassword(args.password);
        }
      }
      await user.save();
      return user;
    },
  },
};

module.exports = resolvers;
