import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDB } from "@/app/lib/utils";
import { User } from "@/app/lib/models";
import bcrypt from "bcrypt";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "credentials",
      async authorize(credentials) {
        try {
          await connectToDB();
          const user = await User.findOne({
            email: credentials.email,
          });
          if (user) {
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              user.password
            );
            if (isPasswordCorrect) {
              const isAdmin = user.isAdmin;
              if (!isAdmin) {
                throw new Error("You don't have admin level privilege");
              } else return user;
            } else {
              throw new Error("Wrong Password !!");
            }
          } else {
            throw new Error("User does not exist !!");
          }
        } catch (error) {
          console.log(error.message);
          throw new Error(error.message);
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.name = user.username;
        token.image = user.userImg;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.name = token.name;
        session.user.image = token.image;
      }
      return session;
    },
  },
  pages: {
    error: "/login",
  },
});

export { handler as GET, handler as POST };
