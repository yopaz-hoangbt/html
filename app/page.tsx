export default function MidAutumnFestival() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#0a0e27] via-[#1e1b4b] to-[#312e81]">
      {/* Stars Background */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-yellow-200 rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Full Moon */}
      <div className="absolute top-20 right-10 md:right-20 w-32 h-32 md:w-48 md:h-48 bg-gradient-to-br from-yellow-200 via-yellow-300 to-amber-400 rounded-full animate-float animate-glow">
        <div className="absolute inset-2 bg-gradient-to-br from-yellow-100/30 to-transparent rounded-full" />
        <div className="absolute top-8 left-6 w-8 h-8 bg-yellow-400/20 rounded-full blur-sm" />
        <div className="absolute bottom-10 right-8 w-6 h-6 bg-yellow-400/20 rounded-full blur-sm" />
      </div>

      {/* Floating Lanterns */}
      <div
        className="absolute top-40 left-10 md:left-20 animate-swing"
        style={{ animationDelay: "0s" }}
      >
        <div className="w-16 h-20 md:w-20 md:h-24 bg-gradient-to-b from-red-500 to-red-600 rounded-lg relative">
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-2 bg-yellow-600 rounded-full" />
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-12 border-2 border-yellow-400 rounded-full" />
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-8 bg-yellow-400"
            style={{ clipPath: "polygon(50% 100%, 0% 0%, 100% 0%)" }}
          />
        </div>
      </div>

      <div
        className="absolute top-60 right-32 animate-swing"
        style={{ animationDelay: "0.5s" }}
      >
        <div className="w-12 h-16 md:w-16 md:h-20 bg-gradient-to-b from-amber-500 to-orange-600 rounded-lg relative">
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-6 h-2 bg-yellow-600 rounded-full" />
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-8 h-8 border-2 border-yellow-400 rounded-full" />
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-6 bg-yellow-400"
            style={{ clipPath: "polygon(50% 100%, 0% 0%, 100% 0%)" }}
          />
        </div>
      </div>

      <div
        className="absolute bottom-40 left-1/4 animate-swing"
        style={{ animationDelay: "1s" }}
      >
        <div className="w-14 h-18 md:w-18 md:h-22 bg-gradient-to-b from-pink-500 to-pink-600 rounded-lg relative">
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-7 h-2 bg-yellow-600 rounded-full" />
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-10 h-10 border-2 border-yellow-400 rounded-full" />
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-7 bg-yellow-400"
            style={{ clipPath: "polygon(50% 100%, 0% 0%, 100% 0%)" }}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
        {/* Decorative Stars Around Title */}
        <div className="relative">
          <div
            className="absolute -top-8 -left-8 text-4xl md:text-6xl animate-float"
            style={{ animationDelay: "0s" }}
          >
            ⭐
          </div>
          <div
            className="absolute -top-6 -right-6 text-3xl md:text-5xl animate-float"
            style={{ animationDelay: "0.5s" }}
          >
            ✨
          </div>
          <div
            className="absolute -bottom-4 -left-6 text-3xl md:text-5xl animate-float"
            style={{ animationDelay: "1s" }}
          >
            🌟
          </div>
          <div
            className="absolute -bottom-6 -right-8 text-4xl md:text-6xl animate-float"
            style={{ animationDelay: "1.5s" }}
          >
            💫
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-center mb-8 animate-fadeInUp">
            <span className="bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-500 bg-clip-text text-transparent drop-shadow-lg text-balance">
              Trung Thu Vui Vẻ
            </span>
          </h1>
        </div>

        <p
          className="text-xl md:text-3xl text-yellow-200 text-center mb-12 animate-fadeInUp font-medium text-balance"
          style={{ animationDelay: "0.3s" }}
        >
          Gửi đến Phùng Khánh Linh yêu dấu
        </p>

        {/* Mooncakes */}
        <div
          className="flex gap-6 md:gap-12 mb-12 animate-fadeInUp"
          style={{ animationDelay: "0.6s" }}
        >
          <div className="w-20 h-20 md:w-28 md:h-28 bg-gradient-to-br from-amber-600 to-yellow-700 rounded-full flex items-center justify-center border-4 border-yellow-500 animate-float shadow-xl">
            <div className="text-3xl md:text-5xl">🥮</div>
          </div>
          <div
            className="w-20 h-20 md:w-28 md:h-28 bg-gradient-to-br from-amber-600 to-yellow-700 rounded-full flex items-center justify-center border-4 border-yellow-500 animate-float shadow-xl"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="text-3xl md:text-5xl">🥮</div>
          </div>
          <div
            className="w-20 h-20 md:w-28 md:h-28 bg-gradient-to-br from-amber-600 to-yellow-700 rounded-full flex items-center justify-center border-4 border-yellow-500 animate-float shadow-xl"
            style={{ animationDelay: "1s" }}
          >
            <div className="text-3xl md:text-5xl">🥮</div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div
          className="flex gap-8 text-5xl md:text-7xl animate-fadeInUp"
          style={{ animationDelay: "0.9s" }}
        >
          <span className="animate-float" style={{ animationDelay: "0s" }}>
            🏮
          </span>
          <span className="animate-float" style={{ animationDelay: "0.3s" }}>
            🌕
          </span>
          <span className="animate-float" style={{ animationDelay: "0.6s" }}>
            🏮
          </span>
        </div>

        <div
          className="mt-16 text-center animate-fadeInUp"
          style={{ animationDelay: "1.2s" }}
        >
          <p className="text-lg md:text-2xl text-amber-300 font-medium text-balance">
            Chúc em một mùa Trung Thu thật ấm áp và hạnh phúc
          </p>
          <p className="text-base md:text-xl text-yellow-200 mt-2 text-balance">
            Trăng tròn, người tròn, tình yêu mãi tròn đầy bên nhau
          </p>
        </div>
      </div>

      {/* Floating Sparkles */}
      <div className="absolute bottom-10 left-10 text-3xl animate-float">
        ✨
      </div>
      <div
        className="absolute bottom-20 right-20 text-4xl animate-float"
        style={{ animationDelay: "0.7s" }}
      >
        ⭐
      </div>
      <div
        className="absolute top-1/3 left-1/4 text-2xl animate-float"
        style={{ animationDelay: "1.2s" }}
      >
        💫
      </div>
      <div
        className="absolute top-2/3 right-1/3 text-3xl animate-float"
        style={{ animationDelay: "0.4s" }}
      >
        🌟
      </div>
    </main>
  );
}
