import { useEffect, useRef } from "react";

export default function ParticleBackground({
  dotCount = 80,
  dotColor = "rgba(255, 255, 255, 0.6)",
  minRadius = 1,
  maxRadius = 2.5,
  speed = 0.3,
}) {
  const canvasRef = useRef(null);
  const dotsRef = useRef([]);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // init dots
    dotsRef.current = Array.from({ length: dotCount }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * (maxRadius - minRadius) + minRadius,
      vx: (Math.random() - 0.5) * speed,
      vy: (Math.random() - 0.5) * speed,
      alpha: Math.random() * 0.5 + 0.3,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      dotsRef.current.forEach((dot) => {
        dot.x += dot.vx;
        dot.y += dot.vy;

        // wrap around edges
        if (dot.x < 0) dot.x = canvas.width;
        if (dot.x > canvas.width) dot.x = 0;
        if (dot.y < 0) dot.y = canvas.height;
        if (dot.y > canvas.height) dot.y = 0;

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.r, 0, Math.PI * 2);
        ctx.fillStyle = dotColor.replace(
          /[\d.]+\)$/,
          `${dot.alpha})`
        );
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationRef.current);
    };
  }, [dotCount, dotColor, minRadius, maxRadius, speed]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}