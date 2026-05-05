import { Trophy, Target, Clock } from 'lucide-react';
import { useProgress } from '../hooks/useProgress';

interface Course {
  id: string;
  lessonCount: number;
}

interface ProgressOverviewProps {
  courses: Course[];
}

export function ProgressOverview({ courses }: ProgressOverviewProps) {
  const { getAllProgress } = useProgress();
  const allProgress = getAllProgress();

  const totalLessons = courses.reduce((sum, course) => sum + course.lessonCount, 0);
  const completedLessons = courses.reduce((sum, course) => {
    const progress = allProgress[course.id];
    return sum + (progress?.completedLessons || 0);
  }, 0);

  const totalQuizzes = courses.length;
  const completedQuizzes = Object.values(allProgress).filter(p => p.quizCompleted).length;

  const overallProgress = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-slate-600">Overall Progress</span>
          <Target className="w-5 h-5 text-blue-500" />
        </div>
        <div className="text-3xl mb-2">{overallProgress}%</div>
        <div className="w-full bg-slate-200 rounded-full h-2">
          <div
            className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"
            style={{ width: `${overallProgress}%` }}
          />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-slate-600">Lessons Completed</span>
          <Clock className="w-5 h-5 text-purple-500" />
        </div>
        <div className="text-3xl mb-2">
          {completedLessons}/{totalLessons}
        </div>
        <p className="text-sm text-slate-500">Keep learning!</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-slate-600">Quizzes Passed</span>
          <Trophy className="w-5 h-5 text-yellow-500" />
        </div>
        <div className="text-3xl mb-2">
          {completedQuizzes}/{totalQuizzes}
        </div>
        <p className="text-sm text-slate-500">Test your knowledge</p>
      </div>
    </div>
  );
}
