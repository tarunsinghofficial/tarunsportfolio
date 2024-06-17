import { Montserrat } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Initialize Montserrat font with specific options (optional)
const montserrat = Montserrat({ 
  subsets: ['latin'], 
  weights: [400, 700]
});

export const metadata = {
  title: "Tarun's Portfolio",
  description: "Tarun Singh's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
