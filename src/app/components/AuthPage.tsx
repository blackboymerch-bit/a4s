import { useState } from 'react';
import { Music, Mail, Lock, User, ArrowRight, Fingerprint, Grid3x3, Scan } from 'lucide-react';
import { toast } from 'sonner';

interface AuthPageProps {
  onLogin: (user: any) => void;
}

export function AuthPage({ onLogin }: AuthPageProps) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [step, setStep] = useState<'auth' | 'verify' | 'biometric'>('auth');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [verificationCode, setVerificationCode] = useState('');
  const [sentCode, setSentCode] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const generateCode = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isSignUp) {
      if (formData.password !== formData.confirmPassword) {
        toast.error('Passwords do not match');
        return;
      }

      if (formData.password.length < 6) {
        toast.error('Password must be at least 6 characters');
        return;
      }

      const code = generateCode();
      setSentCode(code);
      setStep('verify');

      toast.success(`Verification code sent to ${formData.email}`, {
        description: `Demo code: ${code}`
      });
    } else {
      const users = JSON.parse(localStorage.getItem('musicAcademyUsers') || '{}');
      const user = users[formData.email];

      if (!user) {
        toast.error('Account not found');
        return;
      }

      if (user.password !== formData.password) {
        toast.error('Incorrect password');
        return;
      }

      if (user.biometricEnabled) {
        setStep('biometric');
      } else {
        onLogin(user);
        toast.success(`Welcome back, ${user.name}!`);
      }
    }
  };

  const handleVerification = () => {
    if (verificationCode === sentCode) {
      const users = JSON.parse(localStorage.getItem('musicAcademyUsers') || '{}');
      const newUser = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        biometricEnabled: false,
        biometricType: null,
        createdAt: new Date().toISOString()
      };

      users[formData.email] = newUser;
      localStorage.setItem('musicAcademyUsers', JSON.stringify(users));

      setStep('biometric');
      toast.success('Email verified successfully!');
    } else {
      toast.error('Invalid verification code');
    }
  };

  const handleBiometricSetup = (type: 'fingerprint' | 'faceID' | 'pattern' | 'skip') => {
    const users = JSON.parse(localStorage.getItem('musicAcademyUsers') || '{}');
    const user = users[formData.email];

    if (type !== 'skip') {
      user.biometricEnabled = true;
      user.biometricType = type;
      localStorage.setItem('musicAcademyUsers', JSON.stringify(users));
      toast.success(`${type === 'fingerprint' ? 'Fingerprint' : type === 'faceID' ? 'Face ID' : 'Pattern'} enabled successfully!`);
    }

    onLogin(user);
  };

  const handleBiometricLogin = (type: 'fingerprint' | 'faceID' | 'pattern') => {
    const users = JSON.parse(localStorage.getItem('musicAcademyUsers') || '{}');
    const user = users[formData.email];

    setTimeout(() => {
      if (user.biometricType === type) {
        onLogin(user);
        toast.success(`Logged in with ${type === 'fingerprint' ? 'Fingerprint' : type === 'faceID' ? 'Face ID' : 'Pattern'}!`);
      } else {
        toast.error('Biometric authentication failed');
      }
    }, 1000);
  };

  if (step === 'verify') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl mb-2">Verify Your Email</h2>
            <p className="text-slate-600">
              Enter the 6-digit code sent to {formData.email}
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 text-sm text-blue-800">
            <strong>Demo Mode:</strong> Your code is {sentCode}
          </div>

          <input
            type="text"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
            placeholder="Enter 6-digit code"
            maxLength={6}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg mb-4 text-center text-2xl tracking-widest"
          />

          <button
            onClick={handleVerification}
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg hover:opacity-90 transition-opacity mb-3"
          >
            Verify Email
          </button>

          <button
            onClick={() => {
              const newCode = generateCode();
              setSentCode(newCode);
              toast.success(`New code sent: ${newCode}`);
            }}
            className="w-full text-purple-600 hover:text-purple-700 text-sm"
          >
            Resend Code
          </button>
        </div>
      </div>
    );
  }

  if (step === 'biometric') {
    const users = JSON.parse(localStorage.getItem('musicAcademyUsers') || '{}');
    const user = users[formData.email];
    const isLogin = !isSignUp;

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Scan className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl mb-2">
              {isLogin ? 'Biometric Login' : 'Setup Biometric Security'}
            </h2>
            <p className="text-slate-600">
              {isLogin
                ? `Use your ${user.biometricType} to login`
                : 'Choose a biometric method to secure your account'}
            </p>
          </div>

          <div className="space-y-3 mb-6">
            <button
              onClick={() => isLogin ? handleBiometricLogin('fingerprint') : handleBiometricSetup('fingerprint')}
              className="w-full flex items-center gap-4 p-4 border-2 border-slate-200 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition-all"
            >
              <Fingerprint className="w-8 h-8 text-purple-600" />
              <div className="text-left">
                <div className="font-semibold">Fingerprint</div>
                <div className="text-sm text-slate-600">Use your fingerprint sensor</div>
              </div>
            </button>

            <button
              onClick={() => isLogin ? handleBiometricLogin('faceID') : handleBiometricSetup('faceID')}
              className="w-full flex items-center gap-4 p-4 border-2 border-slate-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all"
            >
              <Scan className="w-8 h-8 text-blue-600" />
              <div className="text-left">
                <div className="font-semibold">Face ID</div>
                <div className="text-sm text-slate-600">Use facial recognition</div>
              </div>
            </button>

            <button
              onClick={() => isLogin ? handleBiometricLogin('pattern') : handleBiometricSetup('pattern')}
              className="w-full flex items-center gap-4 p-4 border-2 border-slate-200 rounded-lg hover:border-pink-500 hover:bg-pink-50 transition-all"
            >
              <Grid3x3 className="w-8 h-8 text-pink-600" />
              <div className="text-left">
                <div className="font-semibold">Pattern Lock</div>
                <div className="text-sm text-slate-600">Draw a pattern to unlock</div>
              </div>
            </button>
          </div>

          {!isLogin && (
            <button
              onClick={() => handleBiometricSetup('skip')}
              className="w-full text-slate-600 hover:text-slate-900 text-sm"
            >
              Skip for now
            </button>
          )}

          {isLogin && (
            <button
              onClick={() => onLogin(user)}
              className="w-full text-slate-600 hover:text-slate-900 text-sm"
            >
              Use password instead
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Music className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl mb-2">Music Academy</h1>
          <p className="text-slate-600">
            {isSignUp ? 'Create your account' : 'Welcome back!'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {isSignUp && (
            <div>
              <label className="block text-sm mb-2">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  required
                  className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-sm mb-2">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your@email.com"
                required
                className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm mb-2">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="••••••••"
                required
                className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>

          {isSignUp && (
            <div>
              <label className="block text-sm mb-2">Confirm Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="••••••••"
                  required
                  className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
          >
            {isSignUp ? 'Create Account' : 'Login'}
            <ArrowRight className="w-5 h-5" />
          </button>
        </form>

        <div className="mt-6 text-center">
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-purple-600 hover:text-purple-700 text-sm"
          >
            {isSignUp ? 'Already have an account? Login' : "Don't have an account? Sign Up"}
          </button>
        </div>
      </div>
    </div>
  );
}
