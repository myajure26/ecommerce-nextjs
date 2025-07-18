import { signIn, signOut } from '@/auth';
import { signInFormSchema } from '@/lib/validators';
import { isRedirectError } from 'next/dist/client/components/redirect-error';

export const signInWithCredentials = async (prevState: unknown, formData: FormData) => {

  try {
    
    const user = signInFormSchema.parse({
      email: formData.get('email'),
      password: formData.get('password'),
    });

    await signIn('credentials', user);

    return { success: true, message: 'Sign in successful' };

  } catch (error) {
    
    if (isRedirectError(error)) {
      throw { success: false, message: 'Redirect error occurred' };
    }

    throw { success: false, message: 'Invalid credentials' };

  }

}

export const signOutUser = async () => {
  await signOut();
}