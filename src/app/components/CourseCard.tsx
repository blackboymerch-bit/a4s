import { Clock, BookOpen, CheckCircle2 } from 'lucide-react';
import { useProgress } from '../hooks/useProgress';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Course {
  id: string;
  title: string;
  category: string;
  description: string;
  lessonCount: number;
  duration: string;
  thumbnail: string;
  color: string;
}

interface CourseCardProps {
  course: Course;
  onSelect: () => void;
}

export function CourseCard({ course, onSelect }: CourseCardProps) {
  const { getCourseProgress } = useProgress();
  const progress = getCourseProgress(course.id);
  const completionPercent = (progress.completedLessons / course.lessonCount) * 100;

  return (
    <div
      onClick={onSelect}
      className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all cursor-pointer overflow-hidden group"
    >
      <div className="relative h-40 overflow-hidden">
        <ImageWithFallback
          src={course.thumbnail}
          alt={course.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${course.color} opacity-60`} />
        {completionPercent > 0 && (
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
            <CheckCircle2 className="w-4 h-4 text-green-600" />
            <span className="text-sm">{Math.round(completionPercent)}%</span>
          </div>
        )}
      </div>

      <div className="p-5">
        <h3 className="text-xl mb-2">{course.title}</h3>
        <p className="text-slate-600 text-sm mb-4 line-clamp-2">{course.description}</p>

        <div className="flex items-center justify-between text-sm text-slate-500 mb-3">
          <div className="flex items-center gap-1">
            <BookOpen className="w-4 h-4" />
            <span>{course.lessonCount} lessons</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{course.duration}</span>
          </div>
        </div>

        {completionPercent > 0 && (
          <div className="w-full bg-slate-200 rounded-full h-2">
            <div
              className={`h-2 rounded-full bg-gradient-to-r ${course.color}`}
              style={{ width: `${completionPercent}%` }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
