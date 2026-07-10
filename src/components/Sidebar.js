'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Target,
  Dumbbell,
  UtensilsCrossed,
  Flame,
  Calculator,
  TrendingUp,
} from 'lucide-react';

const sections = [
  {
    label: 'MAIN',
    links: [
      { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
      { href: '/exercises', label: 'Exercises', icon: Target },
      { href: '/workouts', label: 'Workouts', icon: Dumbbell },
    ],
  },
  {
    label: 'NUTRITION',
    links: [
      { href: '/diet', label: 'Diet Plans', icon: UtensilsCrossed },
      { href: '/calories', label: 'Calorie Tracker', icon: Flame },
      { href: '/bmi', label: 'BMI Calculator', icon: Calculator },
    ],
  },
  {
    label: 'PROGRESS',
    links: [
      { href: '/tracker', label: 'Weight Tracker', icon: TrendingUp },
    ],
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sidebar">
      {sections.map((section, sectionIdx) => (
        <div key={section.label}>
          {sectionIdx > 0 && <div className="sidebar-divider" />}
          <div className="sidebar-label">{section.label}</div>
          {section.links.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`sidebar-link ${isActive ? 'active' : ''}`}
              >
                <Icon size={18} />
                <span>{link.label}</span>
              </Link>
            );
          })}
        </div>
      ))}
    </aside>
  );
}
