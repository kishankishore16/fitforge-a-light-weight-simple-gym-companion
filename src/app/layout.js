import './globals.css';
import Navbar from '@/components/Navbar';
import BottomNav from '@/components/BottomNav';
import Sidebar from '@/components/Sidebar';

export const metadata = {
  title: 'FitForge - Your Budget Fitness Companion',
  description: 'Free workout plans, exercise library with form guides, budget-friendly Indian diet plans, BMI calculator, and progress tracking for beginners and intermediates.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <Sidebar />
        <main>{children}</main>
        <BottomNav />
      </body>
    </html>
  );
}
