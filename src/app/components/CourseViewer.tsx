import { useState } from 'react';
import { ArrowLeft, PlayCircle, CheckCircle2, Award } from 'lucide-react';
import { LessonPlayer } from './LessonPlayer';
import { Quiz } from './Quiz';
import { useProgress } from '../hooks/useProgress';
import { courseData } from '../data/courseData';

interface CourseViewerProps {
  courseId: string;
  onBack: () => void;
}

export function CourseViewer({ courseId, onBack }: CourseViewerProps) {
  const course = courseData[courseId];
  const { getCourseProgress, markLessonComplete } = useProgress();
  const progress = getCourseProgress(courseId);

  const [currentLesson, setCurrentLesson] = useState<number | null>(null);
  const [showQuiz, setShowQuiz] = useState(false);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Course not found</p>
      </div>
    );
  }

  const handleLessonComplete = (lessonIndex: number) => {
    markLessonComplete(courseId, lessonIndex);
  };

  const allLessonsCompleted = progress.completedLessons === course.lessons.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {currentLesson !== null ? (
        <LessonPlayer
          lesson={course.lessons[currentLesson]}
          lessonNumber={currentLesson + 1}
          totalLessons={course.lessons.length}
          isCompleted={progress.completedLessonsSet.has(currentLesson)}
          onComplete={() => handleLessonComplete(currentLesson)}
          onBack={() => setCurrentLesson(null)}
          onNext={() => {
            if (currentLesson < course.lessons.length - 1) {
              setCurrentLesson(currentLesson + 1);
            } else {
              setCurrentLesson(null);
            }
          }}
        />
      ) : showQuiz ? (
        <Quiz
          courseId={courseId}
          quiz={course.quiz}
          onBack={() => setShowQuiz(false)}
        />
      ) : (
        <div className="max-w-5xl mx-auto px-4 py-8">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Courses
          </button>

          <div className={`bg-gradient-to-r ${course.color} rounded-xl p-8 text-white mb-8`}>
            <h1 className="text-4xl mb-3">{course.title}</h1>
            <p className="text-lg opacity-90 mb-4">{course.description}</p>
            <div className="flex items-center gap-4 text-sm">
              <span>{course.lessons.length} lessons</span>
              <span>•</span>
              <span>{course.duration}</span>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl">Your Progress</h2>
              <span className="text-lg">
                {progress.completedLessons}/{course.lessons.length} lessons
              </span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-3 mb-4">
              <div
                className={`h-3 rounded-full bg-gradient-to-r ${course.color}`}
                style={{
                  width: `${(progress.completedLessons / course.lessons.length) * 100}%`
                }}
              />
            </div>
            {progress.quizCompleted && (
              <div className="flex items-center gap-2 text-green-600">
                <Award className="w-5 h-5" />
                <span>Quiz completed with {progress.quizScore}% score!</span>
              </div>
            )}
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 mb-6">
            <h2 className="text-2xl mb-4">Lessons</h2>
            <div className="space-y-3">
              {course.lessons.map((lesson, index) => {
                const isCompleted = progress.completedLessonsSet.has(index);
                return (
                  <div
                    key={index}
                    onClick={() => setCurrentLesson(index)}
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-slate-50 cursor-pointer transition-colors border border-slate-200"
                  >
                    <div className="flex-shrink-0">
                      {isCompleted ? (
                        <CheckCircle2 className="w-6 h-6 text-green-600" />
                      ) : (
                        <PlayCircle className="w-6 h-6 text-slate-400" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-slate-500">Lesson {index + 1}</span>
                        {isCompleted && (
                          <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">
                            Completed
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg">{lesson.title}</h3>
                    </div>
                    <div className="text-sm text-slate-500">{lesson.duration}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-2xl">Final Quiz</h2>
              {progress.quizCompleted && (
                <span className="flex items-center gap-2 text-green-600">
                  <CheckCircle2 className="w-5 h-5" />
                  Completed
                </span>
              )}
            </div>
            <p className="text-slate-600 mb-4">
              Test your knowledge with {course.quiz.questions.length} questions
            </p>
            {!allLessonsCompleted ? (
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-amber-800">
                Complete all lessons to unlock the quiz
              </div>
            ) : (
              <button
                onClick={() => setShowQuiz(true)}
                className={`px-6 py-3 rounded-lg transition-colors ${
                  progress.quizCompleted
                    ? 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                    : 'bg-gradient-to-r ' + course.color + ' text-white hover:opacity-90'
                }`}
              >
                {progress.quizCompleted ? 'Retake Quiz' : 'Start Quiz'}
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
