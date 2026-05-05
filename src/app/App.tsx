import { useState, useEffect } from 'react';
import { Toaster } from 'sonner';
import { AuthPage } from './components/AuthPage';
import { Dashboard } from './components/Dashboard';
import { CourseViewer } from './components/CourseViewer';
import { Header } from './components/Header';
import { UserProfile } from './components/UserProfile';

export default function App() {
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [showProfile, setShowProfile] = useState(false);

  useEffect(() => {
    const savedUser = localStorage.getItem('musicAcademyCurrentUser');
    if (savedUser) {
      try {
        setCurrentUser(JSON.parse(savedUser));
      } catch (e) {
        console.error('Failed to parse user data');
      }
    }
  }, []);

  const handleLogin = (user: any) => {
    setCurrentUser(user);
    localStorage.setItem('musicAcademyCurrentUser', JSON.stringify(user));
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setSelectedCourse(null);
    localStorage.removeItem('musicAcademyCurrentUser');
  };

  const handleUpdateUser = (updatedUser: any) => {
    setCurrentUser(updatedUser);
  };

  if (!currentUser) {
    return (
      <>
        <AuthPage onLogin={handleLogin} />
        <Toaster position="top-center" richColors />
      </>
    );
  }

  return (
    <div className="size-full">
      <Header
        user={currentUser}
        onLogout={handleLogout}
        onOpenProfile={() => setShowProfile(true)}
      />

      {selectedCourse ? (
        <CourseViewer
          courseId={selectedCourse}
          onBack={() => setSelectedCourse(null)}
        />
      ) : (
        <Dashboard onSelectCourse={setSelectedCourse} />
      )}

      {showProfile && (
        <UserProfile
          user={currentUser}
          onClose={() => setShowProfile(false)}
          onUpdateUser={handleUpdateUser}
        />
      )}

      <Toaster position="top-center" richColors />
    </div>
  );
}