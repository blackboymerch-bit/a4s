import { useState } from 'react';
import { ArrowLeft, CheckCircle2, XCircle, Trophy } from 'lucide-react';
import { useProgress } from '../hooks/useProgress';
import confetti from 'canvas-confetti';

interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface QuizData {
  questions: QuizQuestion[];
  passingScore: number;
}

interface QuizProps {
  courseId: string;
  quiz: QuizData;
  onBack: () => void;
}

export function Quiz({ courseId, quiz, onBack }: QuizProps) {
  const { markQuizComplete } = useProgress();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const handleSelectAnswer = (answerIndex: number) => {
    if (hasSubmitted) return;
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    setShowResults(true);
    setHasSubmitted(true);

    const correctAnswers = selectedAnswers.filter(
      (answer, index) => answer === quiz.questions[index].correctAnswer
    ).length;

    const score = Math.round((correctAnswers / quiz.questions.length) * 100);

    if (score >= quiz.passingScore) {
      markQuizComplete(courseId, score);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  const correctAnswers = selectedAnswers.filter(
    (answer, index) => answer === quiz.questions[index].correctAnswer
  ).length;

  const score = Math.round((correctAnswers / quiz.questions.length) * 100);
  const passed = score >= quiz.passingScore;

  const currentQ = quiz.questions[currentQuestion];
  const selectedAnswer = selectedAnswers[currentQuestion];
  const isCorrect = selectedAnswer === currentQ.correctAnswer;

  if (showResults) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            {passed ? (
              <>
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="w-10 h-10 text-green-600" />
                </div>
                <h2 className="text-3xl mb-2">Congratulations!</h2>
                <p className="text-slate-600 mb-6">You passed the quiz!</p>
              </>
            ) : (
              <>
                <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <XCircle className="w-10 h-10 text-amber-600" />
                </div>
                <h2 className="text-3xl mb-2">Keep Learning!</h2>
                <p className="text-slate-600 mb-6">Review the material and try again</p>
              </>
            )}

            <div className="bg-slate-50 rounded-lg p-6 mb-6">
              <div className="text-5xl mb-2">{score}%</div>
              <div className="text-slate-600">
                {correctAnswers} out of {quiz.questions.length} correct
              </div>
              <div className="text-sm text-slate-500 mt-2">
                Passing score: {quiz.passingScore}%
              </div>
            </div>

            <div className="space-y-4 mb-6">
              {quiz.questions.map((q, index) => {
                const userAnswer = selectedAnswers[index];
                const isCorrect = userAnswer === q.correctAnswer;
                return (
                  <div
                    key={index}
                    className={`p-4 rounded-lg border-2 text-left ${
                      isCorrect
                        ? 'border-green-200 bg-green-50'
                        : 'border-red-200 bg-red-50'
                    }`}
                  >
                    <div className="flex items-start gap-3 mb-2">
                      {isCorrect ? (
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      ) : (
                        <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      )}
                      <div className="flex-1">
                        <p className="mb-2">{q.question}</p>
                        {!isCorrect && (
                          <p className="text-sm text-slate-600">
                            Correct answer: {q.options[q.correctAnswer]}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <button
              onClick={onBack}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Back to Course
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8">
      <div className="max-w-2xl mx-auto px-4">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-6 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Course
        </button>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center justify-between mb-6">
            <span className="text-sm text-slate-500">
              Question {currentQuestion + 1} of {quiz.questions.length}
            </span>
            <div className="flex gap-1">
              {quiz.questions.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    index === currentQuestion
                      ? 'bg-blue-600'
                      : selectedAnswers[index] !== undefined
                      ? 'bg-green-400'
                      : 'bg-slate-200'
                  }`}
                />
              ))}
            </div>
          </div>

          <h2 className="text-2xl mb-6">{currentQ.question}</h2>

          <div className="space-y-3 mb-8">
            {currentQ.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleSelectAnswer(index)}
                className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                  selectedAnswer === index
                    ? 'border-blue-600 bg-blue-50'
                    : 'border-slate-200 hover:border-slate-300 bg-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      selectedAnswer === index
                        ? 'border-blue-600 bg-blue-600'
                        : 'border-slate-300'
                    }`}
                  >
                    {selectedAnswer === index && (
                      <div className="w-2 h-2 bg-white rounded-full" />
                    )}
                  </div>
                  <span>{option}</span>
                </div>
              </button>
            ))}
          </div>

          <button
            onClick={handleNext}
            disabled={selectedAnswer === undefined}
            className={`w-full py-3 rounded-lg transition-colors ${
              selectedAnswer !== undefined
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-slate-200 text-slate-400 cursor-not-allowed'
            }`}
          >
            {currentQuestion < quiz.questions.length - 1 ? 'Next Question' : 'Submit Quiz'}
          </button>
        </div>
      </div>
    </div>
  );
}
