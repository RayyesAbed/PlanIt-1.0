const User = require("../schemas/User");
const hashPassword = require("../services/hashPassword");
const sendEmail = require("../services/sendEmail");
const isPasswordValid = require("../utils/isPasswordValid");
const jwt = require("jsonwebtoken");
const argon2 = require("argon2");

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

      if (args.toBeConfirmedEmail) {
        user.toBeConfirmedEmail = args.toBeConfirmedEmail;

        const emailToken = jwt.sign(
          { email: user.toBeConfirmedEmail },
          process.env.JWT_SECRET,
          {
            expiresIn: "1h",
          }
        );

        const validationURL = `${process.env.VITE_FRONTEND_URL}/verify-email?token=${emailToken}`;

        await sendEmail(
          user.toBeConfirmedEmail,
          "PlanIt Email Change Verification",
          `
            <p> Hi ${user.name}, </p>
        
            <p> You have requested to change your account email. Please click on the verification link: ${validationURL}</p>
        
            <p>This link expires in an hour. </p>
        
            <p>Not you. Then please feel free to ignore this email. </p>
        
            <p>Thanks</p>
            <p>PlanIt</p>
            `
        );
      }

      await user.save();
      return user;
    },
    async updatePassword(parent, args) {
      const user = await User.findById(args.id);
      if (!user) {
        throw new Error("User not found");
      }
      if (!args.oldPassword || !args.newPassword) {
        throw new Error(
          "Both old and new passwords are required to change the password."
        );
      }

      const passwordsMatch = await argon2.verify(
        user.password,
        args.oldPassword
      );

      if (!passwordsMatch) {
        throw new Error("Incorrect old password");
      }

      if (!isPasswordValid(args.newPassword)) {
        throw new Error("The new password is not secure enough");
      }

      if (args.oldPassword === args.newPassword) {
        throw new Error("Old and new passwords are the same");
      }

      let hashedNewPassword = await hashPassword(args.newPassword);
      user.password = hashedNewPassword;
      await user.save();
      return user;
    },
  },
};

module.exports = resolvers;
