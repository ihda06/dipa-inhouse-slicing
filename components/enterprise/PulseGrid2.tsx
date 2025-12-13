const getRandomDelay = () => {
  return Math.random() * 5 + "s";
};

const getRandomDuration = () => {
  return Math.random() * 3 + 2 + "s";
};
const PulsingGrid2 = () => {
  // Konfigurasi Grid
  const rows = 8; // Jumlah baris
  const cols = 50; // Jumlah kolom
  const totalDots = rows * cols;

  return (
    <div className="relative w-full h-64 overflow-hidden bg-transparent flex items-end justify-center">
      <div
        className="grid gap-6 transform translate-y-8"
        style={{
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
        }}
      >
        {[...Array(totalDots)].map((_, i) => {
          // Kita acak delay animasi agar tidak berkedip barengan
          const randomDelay = getRandomDelay();
          const randomDuration = getRandomDuration();

          return (
            <div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-blue-400/50"
              style={{
                // Menambahkan animasi pulse kustom lewat inline style
                animation: `twinkle ${randomDuration} ease-in-out infinite`,
                animationDelay: randomDelay,
              }}
            />
          );
        })}
      </div>

      {/* Definisi Keyframes untuk animasi "Twinkle" */}
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); background-color: #3b82f6; } /* Blue-500 saat terang */
        }
      `}</style>
    </div>
  );
};

export default PulsingGrid2;
