import { useState, useEffect } from 'react';

interface CourseProgress {
  completedLessons: number;
  completedLessonsSet: Set<number>;
  quizCompleted: boolean;
  quizScore: number;
}

interface ProgressData {
  [courseId: string]: {
    completedLessons: number[];
    quizCompleted: boolean;
    quizScore: number;
  };
}

export function useProgress() {
  const [progress, setProgress] = useState<ProgressData>({});

  useEffect(() => {
    const saved = localStorage.getItem('musicAcademyProgress');
    if (saved) {
      try {
        setProgress(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse progress data');
      }
    }
  }, []);

  const saveProgress = (newProgress: ProgressData) => {
    setProgress(newProgress);
    localStorage.setItem('musicAcademyProgress', JSON.stringify(newProgress));
  };

  const getCourseProgress = (courseId: string): CourseProgress => {
    const courseProgress = progress[courseId] || {
      completedLessons: [],
      quizCompleted: false,
      quizScore: 0
    };

    return {
      completedLessons: courseProgress.completedLessons.length,
      completedLessonsSet: new Set(courseProgress.completedLessons),
      quizCompleted: courseProgress.quizCompleted,
      quizScore: courseProgress.quizScore
    };
  };

  const markLessonComplete = (courseId: string, lessonIndex: number) => {
    const courseProgress = progress[courseId] || {
      completedLessons: [],
      quizCompleted: false,
      quizScore: 0
    };

    if (!courseProgress.completedLessons.includes(lessonIndex)) {
      const newProgress = {
        ...progress,
        [courseId]: {
          ...courseProgress,
          completedLessons: [...courseProgress.completedLessons, lessonIndex]
        }
      };
      saveProgress(newProgress);
    }
  };

  const markQuizComplete = (courseId: string, score: number) => {
    const courseProgress = progress[courseId] || {
      completedLessons: [],
      quizCompleted: false,
      quizScore: 0
    };

    const newProgress = {
      ...progress,
      [courseId]: {
        ...courseProgress,
        quizCompleted: true,
        quizScore: score
      }
    };
    saveProgress(newProgress);
  };

  const getAllProgress = () => progress;

  return {
    getCourseProgress,
    markLessonComplete,
    markQuizComplete,
    getAllProgress
  };
}
