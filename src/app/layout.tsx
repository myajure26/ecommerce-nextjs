import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { APP_NAME, APP_DESCRIPTION, SERVER_URL } from '@/lib/constants';
import "./globals.css";
import { ThemeProvider } from 'next-themes';

const inter = Inter( { subsets: [ 'latin' ] } );

export const metadata: Metadata = {
  title: {
    template: `%s | ${ APP_NAME }`,
    default: APP_NAME
  },
  description: APP_DESCRIPTION,
  metadataBase: new URL( SERVER_URL )
};

const RootLayout = ( { children}: Readonly<{ children: React.ReactNode; }> ) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={ `${ inter.className } antialiased` }
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          { children }
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
