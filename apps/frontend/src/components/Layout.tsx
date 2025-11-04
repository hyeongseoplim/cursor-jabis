import { Link, Outlet, useLocation } from 'react-router-dom';
import { LayoutDashboard, FileText, Package, Database, Moon, Sun } from 'lucide-react';
import { Button } from './ui/button';
import { useState, useEffect } from 'react';

export function Layout() {
  const location = useLocation();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const navItems = [
    { path: '/', label: '대시보드', icon: LayoutDashboard },
    { path: '/contract', label: '계약 관리', icon: FileText },
    { path: '/product', label: '제품 관리', icon: Package },
    { path: '/masters', label: '기본정보 관리', icon: Database },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <img src="/jabis-logo.svg" alt="JABIS Logo" className="w-12 h-12" />
                <div>
                  <h1 className="text-xl font-bold">JABIS</h1>
                  <p className="text-xs text-muted-foreground">Jinhak Apply Business Integration System</p>
                </div>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsDark(!isDark)}
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="flex gap-6">
          <aside className="w-64 shrink-0">
            <nav className="space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center space-x-3 px-3 py-2 rounded-md transition-colors ${
                      isActive
                        ? 'bg-primary text-primary-foreground'
                        : 'hover:bg-accent hover:text-accent-foreground'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </nav>
          </aside>

          <main className="flex-1">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}
