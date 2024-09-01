import { signOut } from 'next-auth/react';

export const handleSignOut = async (redirectTo: string ): Promise<void> => {
  try {
    await signOut({ callbackUrl: redirectTo });
  } catch (error) {
    console.error("Error during sign out:", error);
  }
};
