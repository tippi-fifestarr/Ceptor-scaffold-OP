import "@rainbow-me/rainbowkit/styles.css";
import { AppProviders } from "~~/components/AppProviders";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AppProviders>
      <main className="flex flex-col min-h-screen">{children}</main>
    </AppProviders>
  );
};

export default Layout;
