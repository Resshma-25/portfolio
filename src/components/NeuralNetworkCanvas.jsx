import React, { useEffect, useRef } from 'react';

const NeuralNetworkCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Create interconnected neural network nodes concentrated on the right side
    const nodes = [];
    const nodeCount = 55;

    class Node {
      constructor() {
        // Bias nodes towards right side as seen in the target image
        this.x = Math.random() * (width * 0.55) + (width * 0.45);
        this.y = Math.random() * (height * 0.7) + (height * 0.1);
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 2.5 + 1.2;
        this.color = ['#00c6ff', '#3a7bd5', '#923cb5', '#38bdf8'][Math.floor(Math.random() * 4)];
        this.pulse = Math.random() * Math.PI;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.pulse += 0.03;

        if (this.x < width * 0.4 || this.x > width) this.vx *= -1;
        if (this.y < height * 0.05 || this.y > height * 0.85) this.vy *= -1;
      }

      draw() {
        ctx.beginPath();
        const currentRadius = this.radius + Math.sin(this.pulse) * 0.7;
        ctx.arc(this.x, this.y, Math.max(0.5, currentRadius), 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 12;
        ctx.shadowColor = this.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    for (let i = 0; i < nodeCount; i++) {
      nodes.push(new Node());
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw faint background glowing sphere blur
      const radialGlow = ctx.createRadialGradient(
        width * 0.7, height * 0.4, 10,
        width * 0.7, height * 0.4, 280
      );
      radialGlow.addColorStop(0, 'rgba(0, 198, 255, 0.12)');
      radialGlow.addColorStop(0.5, 'rgba(146, 60, 181, 0.08)');
      radialGlow.addColorStop(1, 'transparent');

      ctx.fillStyle = radialGlow;
      ctx.beginPath();
      ctx.arc(width * 0.7, height * 0.4, 280, 0, Math.PI * 2);
      ctx.fill();

      // Draw neural connections
      for (let i = 0; i < nodes.length; i++) {
        nodes[i].update();
        nodes[i].draw();

        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            const alpha = (1 - dist / 150) * 0.3;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(0, 198, 255, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas id="bg-canvas" ref={canvasRef} />;
};

export default NeuralNetworkCanvas;
