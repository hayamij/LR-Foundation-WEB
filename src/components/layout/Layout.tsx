/**
 * Layout Component
 * Main application layout with header and footer
 */

import Header from './Header';
import Footer from './Footer';
import { DonorTicker, NotificationPopup } from '../features';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <DonorTicker />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <NotificationPopup />
    </div>
  );
}
