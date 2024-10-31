import Logo from './components/Logo';
import Navigation from './components/Navigation';

export const metadata = {
  title: 'Wild Oasis',
  description: 'created by Placide Imanzi Kabisa',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <Logo></Logo>
          <Navigation></Navigation>
        </header>

        <main>{children}</main>

        <footer>Copyright by The wild Oasis</footer>
      </body>
    </html>
  );
}
