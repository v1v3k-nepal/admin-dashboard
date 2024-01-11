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
        await connectToDB();

        try {
          const user = await User.findOne({
            email: credentials.email,
          });
          if (user) {
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              user.password
            );
            if (isPasswordCorrect) {
              return user;
            } else {
              throw new Error("Wrong Password !!");
            }
          } else {
            throw new Error("User does not exist !!");
          }
        } catch (error) {
          throw new Error(error);
        }
      },
    }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_ID,
    //   clientSecret: process.env.GOOGLE_SECRET,
    // }),
  ],
  pages: {
    error: "/login",
  },
});

export { handler as GET, handler as POST };

// import NextAuth from "next-auth";
// // import GoogleProvider from "next-auth/providers/google";
// import CredentialsProvider from "next-auth/providers/credentials";
// import bcrypt from "bcrypt";
// import { connectToDB } from "@/app/lib/utils";
// import { User } from "@/app/lib/models";

// // interface Icredentials {
// //     email: string;
// //     password: string;
// // : Partial<Record<string | number, unknown>>
// //   }

// // type Tcredentials = Partial<Record<string, string>>;

// export const login = async (credentials) => {
//   try {
//     connectToDB();
//     console.log(credentials, "i am credentials");
//     const user = await User.findOne({ email: credentials.email });

//     console.log(user?.password, credentials.password, "i am user in auth");

//     if (!user) {
//       throw new Error("User Does not Exist");
//     } else {
//       if (!user.isAdmin) {
//         throw new Error("User Does not have Admin Level Privilege");
//       } else {
//         const isPasswordCorrect = await bcrypt.compare(
//           credentials.password,
//           user.password
//         );
//         console.log(isPasswordCorrect, "password match or not");
//         if (isPasswordCorrect) {
//           return user;
//         } else {
//           throw new Error("Password Incorrect");
//         }
//       }
//     }
//   } catch (error) {
//     console.log(error.message);
//     throw new Error("Failed to Login");
//   }
// };

// const handler = NextAuth({
//   providers: [
//     CredentialsProvider({
//       id: "credentials",
//       name: "credentials",
//       async authorize(credentials) {
//         try {
//           const user = await login(credentials);
//           console.log(user, "i am authorize");
//           return user;
//         } catch (error) {
//           return null;
//         }
//       },
//     }),
//   ],
//   pages: {
//     error: "/login",
//   },
// });

// export { handler as GET, handler as POST };
