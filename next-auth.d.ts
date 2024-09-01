import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      role?: string;
      Payload?: any; // Adjust the type based on the actual structure of your Payload
    } & DefaultSession['user'];
  }

  interface JWT {
    role?: string;
    Payload?: any; // Adjust the type based on the actual structure of your Payload
  }
}
