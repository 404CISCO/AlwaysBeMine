import React, { useState, useEffect } from "react";

const MarqueeProposal = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sentences = [
    "Tehreen, you light up my world like no one else ever could. ✨",
    "Every single moment with you feels like pure magic. 💫",
    "My world begins and ends with you in it, always. 💕",
    "You're the reason my heart beats faster, every single day.",
    "Life feels complete and beautiful when you're around me.",
    "I can't imagine my future without you by my side, forever.",
    "You're my sunshine on the darkest and longest days. 🌞",
    "With you, every single day is a blessing from above.",
    "You're the missing piece that completes my heart and soul. ❤️",
    "You make even the simplest moments feel absolutely extraordinary.",
    "You make my world brighter, happier, and more beautiful. 🌹",
    "You're the dream I never ever want to wake up from.",
    "Tehreen, will you be the love of my life forever and always? 💍",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sentences.length);
    }, 9000); // Change sentence every 9 seconds
    return () => clearInterval(interval);
  }, [sentences.length]);

  return (
    <div
      style={{
        width: "50%",
        height: "75px",
        margin: "50px auto",
        borderRadius: "25px",
        overflow: "hidden",
        position: "relative",
        background: "transparent",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
        border: "4px solid #ffffff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          whiteSpace: "nowrap",
          position: "absolute",
          animation: "marquee 10s linear infinite",
        }}
        key={currentIndex}
      >
        <span
          style={{
            fontSize: "2rem",
            fontFamily: "Charm, serif", 
            // fontFamily: "Beau Rivage, serif", 
            fontStyle: "normal",
            fontWeight: "700",
            color: "#191a19",
            textShadow: "0 4px 8px rgba(0, 0, 0, 0.6)",
          }}
        >
          {sentences[currentIndex]}
        </span>
      </div>
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%); /* Start fully off-screen to the right */
          }
          100% {
            transform: translateX(-100%); /* End fully off-screen to the left */
          }
        }
      `}</style>
    </div>
  );
};

export default MarqueeProposal;
