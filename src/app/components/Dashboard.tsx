import { BookOpen, Music, Headphones, TrendingUp } from 'lucide-react';
import { CourseCard } from './CourseCard';
import { ProgressOverview } from './ProgressOverview';

const courses = [
  {
    id: 'music-theory-101',
    title: 'Music Theory Fundamentals',
    category: 'theory',
    description: 'Master the basics of music theory including scales, chords, and harmony',
    lessonCount: 12,
    duration: '6 hours',
    thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'piano-basics',
    title: 'Piano for Beginners',
    category: 'practical',
    description: 'Learn piano from scratch with hands-on exercises and practice routines',
    lessonCount: 15,
    duration: '8 hours',
    thumbnail: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=400&h=250&fit=crop',
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 'digital-production',
    title: 'Digital Music Production',
    category: 'production',
    description: 'Create professional tracks using DAW software and production techniques',
    lessonCount: 20,
    duration: '12 hours',
    thumbnail: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400&h=250&fit=crop',
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 'advanced-harmony',
    title: 'Advanced Harmony',
    category: 'theory',
    description: 'Explore jazz harmony, modal interchange, and complex chord progressions',
    lessonCount: 10,
    duration: '5 hours',
    thumbnail: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=250&fit=crop',
    color: 'from-orange-500 to-red-500'
  },
  {
    id: 'guitar-technique',
    title: 'Guitar Mastery',
    category: 'practical',
    description: 'Advanced techniques including fingerstyle, improvisation, and speed',
    lessonCount: 18,
    duration: '10 hours',
    thumbnail: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=400&h=250&fit=crop',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    id: 'mixing-mastering',
    title: 'Mixing & Mastering',
    category: 'production',
    description: 'Professional techniques for mixing and mastering your music productions',
    lessonCount: 16,
    duration: '9 hours',
    thumbnail: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=400&h=250&fit=crop',
    color: 'from-indigo-500 to-purple-500'
  }
];

const categories = [
  { id: 'theory', name: 'Music Theory', icon: BookOpen, color: 'text-blue-500' },
  { id: 'practical', name: 'Practical Skills', icon: Music, color: 'text-purple-500' },
  { id: 'production', name: 'Digital Production', icon: Headphones, color: 'text-green-500' }
];

interface DashboardProps {
  onSelectCourse: (courseId: string) => void;
}

export function Dashboard({ onSelectCourse }: DashboardProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-4xl mb-2">Your Courses</h1>
          <p className="text-slate-600">Continue your learning journey</p>
        </header>

        <ProgressOverview courses={courses} />

        <div className="mb-8">
          <div className="flex gap-4 overflow-x-auto pb-2">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow whitespace-nowrap"
                >
                  <Icon className={`w-5 h-5 ${category.color}`} />
                  <span>{category.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onSelect={() => onSelectCourse(course.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
