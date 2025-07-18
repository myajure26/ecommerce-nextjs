import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components';
import { APP_NAME } from '@/lib/constants';
import SignInForm from './signin-form';

export const metadata: Metadata = {
  title: 'Sign In',
};

const SignInPage = () => {
  return (
    <div className="w-[90vw] md:max-w-md md:w-full mx-auto">
      <Card>
        <CardHeader>
          <Link href="/" className="flex-center py-2">
            <Image src="/images/logo.svg" width={100} height="100" alt={`${APP_NAME} logo`} priority={true}/>
          </Link>
          <CardTitle className="text-center">Sign In</CardTitle>
          <CardDescription className="text-center">
            Sign in to your account
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <SignInForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default SignInPage;