import { useEffect, useState } from 'react';
import { RECENT_DONORS } from '../../config/constants';

export default function DonorTicker() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % RECENT_DONORS.length);
        setIsVisible(true);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const donor = RECENT_DONORS[currentIndex];

  return (
    <div className="bg-gradient-to-r from-rose-500 to-orange-500 text-white py-3 overflow-hidden">
      <div className="container mx-auto px-4">
        <div
          className={`flex items-center justify-center gap-3 transition-all duration-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
          }`}
        >
          <span className="material-icons text-sm animate-pulse">favorite</span>
          <span className="font-semibold">{donor.name}</span>
          <span className="opacity-80">vừa ủng hộ</span>
          <span className="font-bold">
            {donor.amount.toLocaleString('vi-VN')}đ
          </span>
          <span className="opacity-80">vào dự án</span>
          <span className="font-semibold text-yellow-200">{donor.program}</span>
          <span className="opacity-60 text-sm">• {donor.time}</span>
        </div>
      </div>
    </div>
  );
}
