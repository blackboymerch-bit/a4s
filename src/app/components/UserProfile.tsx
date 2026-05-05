import { useState } from 'react';
import { X, User, Mail, Calendar, Shield, Edit2, Save, Fingerprint, Scan, Grid3x3 } from 'lucide-react';
import { toast } from 'sonner';

interface UserProfileProps {
  user: any;
  onClose: () => void;
  onUpdateUser: (updatedUser: any) => void;
}

export function UserProfile({ user, onClose, onUpdateUser }: UserProfileProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email
  });

  const handleSave = () => {
    const users = JSON.parse(localStorage.getItem('musicAcademyUsers') || '{}');

    if (formData.email !== user.email && users[formData.email]) {
      toast.error('Email already in use');
      return;
    }

    const updatedUser = {
      ...user,
      name: formData.name,
      email: formData.email
    };

    if (formData.email !== user.email) {
      delete users[user.email];
    }

    users[formData.email] = updatedUser;
    localStorage.setItem('musicAcademyUsers', JSON.stringify(users));
    localStorage.setItem('musicAcademyCurrentUser', JSON.stringify(updatedUser));

    onUpdateUser(updatedUser);
    setIsEditing(false);
    toast.success('Profile updated successfully!');
  };

  const toggleBiometric = (type: 'fingerprint' | 'faceID' | 'pattern') => {
    const users = JSON.parse(localStorage.getItem('musicAcademyUsers') || '{}');
    const currentUser = users[user.email];

    if (currentUser.biometricEnabled && currentUser.biometricType === type) {
      currentUser.biometricEnabled = false;
      currentUser.biometricType = null;
      toast.success('Biometric authentication disabled');
    } else {
      currentUser.biometricEnabled = true;
      currentUser.biometricType = type;
      toast.success(`${type === 'fingerprint' ? 'Fingerprint' : type === 'faceID' ? 'Face ID' : 'Pattern'} enabled!`);
    }

    users[user.email] = currentUser;
    localStorage.setItem('musicAcademyUsers', JSON.stringify(users));
    localStorage.setItem('musicAcademyCurrentUser', JSON.stringify(currentUser));
    onUpdateUser(currentUser);
  };

  const getBiometricIcon = (type: string) => {
    switch (type) {
      case 'fingerprint':
        return <Fingerprint className="w-5 h-5" />;
      case 'faceID':
        return <Scan className="w-5 h-5" />;
      case 'pattern':
        return <Grid3x3 className="w-5 h-5" />;
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-t-2xl">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl">Profile Settings</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-lg transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center text-3xl">
              {user.name.charAt(0).toUpperCase()}
            </div>
            <div>
              <h3 className="text-xl">{user.name}</h3>
              <p className="text-white/80">{user.email}</p>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <div className="bg-slate-50 rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg flex items-center gap-2">
                <User className="w-5 h-5" />
                Personal Information
              </h3>
              {!isEditing ? (
                <button
                  onClick={() => setIsEditing(true)}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Edit2 className="w-4 h-4" />
                  Edit
                </button>
              ) : (
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setFormData({ name: user.name, email: user.email });
                      setIsEditing(false);
                    }}
                    className="px-4 py-2 bg-slate-200 rounded-lg hover:bg-slate-300 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSave}
                    className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    <Save className="w-4 h-4" />
                    Save
                  </button>
                </div>
              )}
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm text-slate-600 mb-1">Full Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  disabled={!isEditing}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg disabled:bg-slate-100 disabled:text-slate-600"
                />
              </div>

              <div>
                <label className="block text-sm text-slate-600 mb-1">Email Address</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  disabled={!isEditing}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg disabled:bg-slate-100 disabled:text-slate-600"
                />
              </div>
            </div>
          </div>

          <div className="bg-slate-50 rounded-lg p-4">
            <h3 className="text-lg flex items-center gap-2 mb-4">
              <Shield className="w-5 h-5" />
              Biometric Security
            </h3>

            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600">
                    <Fingerprint className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold">Fingerprint</div>
                    <div className="text-sm text-slate-600">Use fingerprint to login</div>
                  </div>
                </div>
                <button
                  onClick={() => toggleBiometric('fingerprint')}
                  className={`relative w-12 h-6 rounded-full transition-colors ${
                    user.biometricEnabled && user.biometricType === 'fingerprint'
                      ? 'bg-green-500'
                      : 'bg-slate-300'
                  }`}
                >
                  <div
                    className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                      user.biometricEnabled && user.biometricType === 'fingerprint'
                        ? 'translate-x-7'
                        : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    <Scan className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold">Face ID</div>
                    <div className="text-sm text-slate-600">Use facial recognition</div>
                  </div>
                </div>
                <button
                  onClick={() => toggleBiometric('faceID')}
                  className={`relative w-12 h-6 rounded-full transition-colors ${
                    user.biometricEnabled && user.biometricType === 'faceID'
                      ? 'bg-green-500'
                      : 'bg-slate-300'
                  }`}
                >
                  <div
                    className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                      user.biometricEnabled && user.biometricType === 'faceID'
                        ? 'translate-x-7'
                        : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center text-pink-600">
                    <Grid3x3 className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold">Pattern Lock</div>
                    <div className="text-sm text-slate-600">Draw pattern to unlock</div>
                  </div>
                </div>
                <button
                  onClick={() => toggleBiometric('pattern')}
                  className={`relative w-12 h-6 rounded-full transition-colors ${
                    user.biometricEnabled && user.biometricType === 'pattern'
                      ? 'bg-green-500'
                      : 'bg-slate-300'
                  }`}
                >
                  <div
                    className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                      user.biometricEnabled && user.biometricType === 'pattern'
                        ? 'translate-x-7'
                        : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>

            {user.biometricEnabled && (
              <div className="mt-3 flex items-center gap-2 text-sm text-green-600 bg-green-50 p-3 rounded-lg">
                {getBiometricIcon(user.biometricType)}
                <span>
                  {user.biometricType === 'fingerprint' && 'Fingerprint authentication active'}
                  {user.biometricType === 'faceID' && 'Face ID authentication active'}
                  {user.biometricType === 'pattern' && 'Pattern lock authentication active'}
                </span>
              </div>
            )}
          </div>

          <div className="bg-slate-50 rounded-lg p-4">
            <h3 className="text-lg flex items-center gap-2 mb-4">
              <Calendar className="w-5 h-5" />
              Account Information
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-600">Member Since</span>
                <span>{new Date(user.createdAt).toLocaleDateString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Account Status</span>
                <span className="text-green-600">Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
