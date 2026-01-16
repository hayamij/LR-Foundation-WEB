import { useEffect, useState } from 'react';
import { RECENT_DONORS } from '../../config/constants';

interface Notification {
  id: number;
  name: string;
  amount: number;
  program: string;
  time: string;
}

export default function NotificationPopup() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show first notification after 3 seconds
    const initialTimer = setTimeout(() => {
      showNextNotification();
    }, 3000);

    // Then show new notification every 8 seconds
    const interval = setInterval(() => {
      showNextNotification();
    }, 8000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  const showNextNotification = () => {
    const randomDonor = RECENT_DONORS[Math.floor(Math.random() * RECENT_DONORS.length)];
    const newNotification: Notification = {
      id: Date.now(),
      name: randomDonor.name,
      amount: randomDonor.amount,
      program: randomDonor.program,
      time: randomDonor.time,
    };

    setNotifications(prev => [...prev, newNotification]);
    setVisible(true);

    // Hide after 5 seconds
    setTimeout(() => {
      setVisible(false);
      // Remove after animation
      setTimeout(() => {
        setNotifications(prev => prev.filter(n => n.id !== newNotification.id));
      }, 300);
    }, 5000);
  };

  if (notifications.length === 0) return null;

  const currentNotification = notifications[notifications.length - 1];

  return (
    <div
      className={`fixed bottom-6 left-6 z-50 transition-all duration-300 transform ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`}
    >
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-4 max-w-sm hover:shadow-xl transition-shadow">
        {/* Header */}
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center">
            <span className="material-icons text-white text-lg animate-pulse">favorite</span>
          </div>
          <div className="flex-1">
            <div className="text-xs text-gray-500 font-semibold">🎉 Mới vừa ủng hộ</div>
            <div className="text-xs text-gray-400">{currentNotification.time}</div>
          </div>
          <button
            onClick={() => setVisible(false)}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <span className="material-icons text-sm">close</span>
          </button>
        </div>

        {/* Content */}
        <div className="space-y-2">
          <div className="font-bold text-gray-900 text-sm">
            {currentNotification.name}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-green-600">
              {currentNotification.amount.toLocaleString('vi-VN')}đ
            </span>
            <span className="text-xs text-gray-500">→</span>
            <span className="text-xs text-gray-700 font-semibold line-clamp-1">
              {currentNotification.program}
            </span>
          </div>
        </div>

        {/* Action */}
        <div className="mt-4 pt-3 border-t border-gray-100">
          <a
            href="/donate"
            className="flex items-center justify-center gap-2 text-xs font-bold text-green-600 hover:text-green-700 transition-colors"
          >
            <span>Bạn cũng có thể giúp đỡ</span>
            <span className="material-icons text-sm">arrow_forward</span>
          </a>
        </div>

        {/* Decorative gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 via-emerald-500 to-green-500 rounded-b-2xl" />
      </div>
    </div>
  );
}
