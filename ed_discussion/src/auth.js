import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import getUser from "@/app/api/getuser";
import bcrypt from "bcrypt";

// @ts-ignore
// @ts-ignore
// @ts-ignore
export const { auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            async authorize(credentials) {
                const parsedCredentials = z
                    .object({ email: z.string().email(), password: z.string().min(6) })
                    .safeParse(credentials);
                if (parsedCredentials.success) {
                    const { email, password } = parsedCredentials.data;
                    const user = await getUser(email);
                    if (!user) return null;
                    const passwordsMatch = await bcrypt.compare(password, user.pass);
                    console.log(passwordsMatch);
                    if (passwordsMatch) {
                        return user;
                    }
                }
                console.log("Invalid credentials");
                return null;
            },
        }),
    ],
});