'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Dumbbell } from 'lucide-react';

const navLinks = [
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/exercises', label: 'Exercises' },
  { href: '/workouts', label: 'Workouts' },
  { href: '/diet', label: 'Diet' },
  { href: '/bmi', label: 'BMI' },
  { href: '/tracker', label: 'Tracker' },
];

export default function Navbar({ user }) {
  const pathname = usePathname();

  const getInitial = () => {
    if (user && user.name) {
      return user.name.charAt(0).toUpperCase();
    }
    return 'U';
  };

  return (
    <nav className="navbar">
      <Link href="/" className="navbar-logo">
        <Dumbbell size={28} />
        <span>
          Fit<span className="accent">Forge</span>
        </span>
      </Link>

      <div className="navbar-links">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`navbar-link ${pathname === link.href ? 'active' : ''}`}
          >
            {link.label}
          </Link>
        ))}
      </div>

      <div className="navbar-actions">
        <Link href="/profile" className="navbar-avatar">
          {getInitial()}
        </Link>
      </div>
    </nav>
  );
}
