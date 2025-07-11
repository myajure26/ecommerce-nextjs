import Footer from '@/components/shared/footer';
import Header from '@/components/shared/header';

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex h-screen flex-col">
      <Header/>
      <main className="flex-1 wrapper">
        { children }
      </main>
      <Footer/>
    </div>
  );
}

export default RootLayout;
