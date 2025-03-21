import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

// Add static params generation for static builds
export async function generateStaticParams() {
  return [
    { nextauth: ['signin'] },
    { nextauth: ['signout'] },
    { nextauth: ['session'] },
    { nextauth: ['csrf'] },
    { nextauth: ['providers'] },
    { nextauth: ['callback'] },
    { nextauth: ['verify-request'] },
    { nextauth: ['error'] },
  ]
}

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // This is a basic example. In production, validate against your database
        if (credentials?.email === "user@example.com" && credentials?.password === "password") {
          return {
            id: "1",
            email: "user@example.com",
            name: "Demo User",
          }
        }
        return null
      }
    })
  ],
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
    error: '/auth/error',
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET || "your-secret-key-at-least-32-chars",
})

export { handler as GET, handler as POST }