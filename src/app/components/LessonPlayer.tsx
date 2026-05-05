import { ArrowLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

interface Lesson {
  title: string;
  videoUrl: string;
  duration: string;
  description: string;
  keyPoints: string[];
}

interface LessonPlayerProps {
  lesson: Lesson;
  lessonNumber: number;
  totalLessons: number;
  isCompleted: boolean;
  onComplete: () => void;
  onBack: () => void;
  onNext: () => void;
}

export function LessonPlayer({
  lesson,
  lessonNumber,
  totalLessons,
  isCompleted,
  onComplete,
  onBack,
  onNext
}: LessonPlayerProps) {
  const [videoEnded, setVideoEnded] = useState(false);

  return (
    <div className="min-h-screen bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="bg-slate-800 px-4 py-3 flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Course
          </button>
          <span className="text-slate-300">
            Lesson {lessonNumber} of {totalLessons}
          </span>
        </div>

        <div className="aspect-video bg-black">
          <video
            key={lesson.videoUrl}
            className="w-full h-full"
            controls
            onEnded={() => setVideoEnded(true)}
          >
            <source src={lesson.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="bg-white p-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className="text-3xl mb-2">{lesson.title}</h1>
                <p className="text-slate-600">{lesson.description}</p>
              </div>
              {isCompleted && (
                <div className="flex items-center gap-2 text-green-600 bg-green-50 px-4 py-2 rounded-lg">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Completed</span>
                </div>
              )}
            </div>

            <div className="border-t border-slate-200 pt-6 mb-6">
              <h2 className="text-xl mb-3">Key Points</h2>
              <ul className="space-y-2">
                {lesson.keyPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5 text-sm">
                      {index + 1}
                    </div>
                    <span className="text-slate-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-slate-200">
              {!isCompleted && (
                <button
                  onClick={onComplete}
                  disabled={!videoEnded}
                  className={`px-6 py-3 rounded-lg transition-colors ${
                    videoEnded
                      ? 'bg-green-600 text-white hover:bg-green-700'
                      : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                  }`}
                >
                  Mark as Complete
                </button>
              )}
              {isCompleted && lessonNumber < totalLessons && (
                <button
                  onClick={onNext}
                  className="ml-auto flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Next Lesson
                  <ChevronRight className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
