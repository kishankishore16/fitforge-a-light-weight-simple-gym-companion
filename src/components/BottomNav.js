'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Target, Plus, UtensilsCrossed, User } from 'lucide-react';

const tabs = [
  { href: '/dashboard', label: 'Home', icon: LayoutDashboard },
  { href: '/exercises', label: 'Exercises', icon: Target },
  { href: null, label: 'Add', icon: Plus, isFab: true },
  { href: '/diet', label: 'Diet', icon: UtensilsCrossed },
  { href: '/profile', label: 'Profile', icon: User },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="bottom-nav">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = tab.href && pathname === tab.href;

        if (tab.isFab) {
          return (
            <Link key="fab" href="/workouts/new" className="bottom-nav-fab">
              <Icon size={24} />
            </Link>
          );
        }

        return (
          <Link
            key={tab.href}
            href={tab.href}
            className={`bottom-nav-item ${isActive ? 'active' : ''}`}
          >
            <Icon size={20} />
            <span>{tab.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
