import { useState, useEffect } from 'react';
import { LogOut, Settings, Sun, Moon, Sunrise, User } from 'lucide-react';

interface HeaderProps {
  user: any;
  onLogout: () => void;
  onOpenProfile: () => void;
}

export function Header({ user, onLogout, onOpenProfile }: HeaderProps) {
  const [greeting, setGreeting] = useState('');
  const [timeIcon, setTimeIcon] = useState<any>(Sun);

  useEffect(() => {
    const updateGreeting = () => {
      const hour = new Date().getHours();

      if (hour < 12) {
        setGreeting('Good Morning');
        setTimeIcon(Sunrise);
      } else if (hour < 18) {
        setGreeting('Good Afternoon');
        setTimeIcon(Sun);
      } else {
        setGreeting('Good Evening');
        setTimeIcon(Moon);
      }
    };

    updateGreeting();
    const interval = setInterval(updateGreeting, 60000);
    return () => clearInterval(interval);
  }, []);

  const TimeIconComponent = timeIcon;

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <TimeIconComponent className="w-6 h-6 text-amber-500" />
            <div>
              <h2 className="text-xl">{greeting}, {user.name}!</h2>
              <p className="text-sm text-slate-600">
                {new Date().toLocaleDateString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenProfile}
              className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm">
                {user.name.charAt(0).toUpperCase()}
              </div>
              <span className="hidden md:inline">{user.name}</span>
            </button>

            <button
              onClick={onLogout}
              className="flex items-center gap-2 px-4 py-2 bg-red-100 text-red-600 hover:bg-red-200 rounded-lg transition-colors"
            >
              <LogOut className="w-5 h-5" />
              <span className="hidden md:inline">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
