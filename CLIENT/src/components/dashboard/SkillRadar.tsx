"use client";

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface SkillData {
  label: string;
  value: number;
  color: string;
}

interface SkillRadarProps {
  skills: SkillData[];
  size?: number;
}

export const SkillRadar: React.FC<SkillRadarProps> = ({ 
  skills, 
  size = 200 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = size;
    canvas.height = size;
    const centerX = size / 2;
    const centerY = size / 2;
    const radius = size * 0.35;

    // Clear canvas
    ctx.clearRect(0, 0, size, size);

    // Draw concentric circles
    for (let i = 1; i <= 5; i++) {
      ctx.strokeStyle = 'rgba(139, 92, 246, 0.2)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(centerX, centerY, (radius / 5) * i, 0, Math.PI * 2);
      ctx.stroke();
    }

    // Draw axes
    const axes = ['N', 'E', 'S', 'W'];
    const angles = [0, Math.PI / 2, Math.PI, (3 * Math.PI) / 2];
    
    ctx.strokeStyle = 'rgba(139, 92, 246, 0.3)';
    ctx.lineWidth = 1;
    angles.forEach((angle, i) => {
      const x = centerX + Math.cos(angle) * radius;
      const y = centerY + Math.sin(angle) * radius;
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(x, y);
      ctx.stroke();

      // Draw axis labels
      ctx.fillStyle = 'rgba(139, 92, 246, 0.6)';
      ctx.font = '12px monospace';
      ctx.textAlign = 'center';
      const labelX = centerX + Math.cos(angle) * (radius + 15);
      const labelY = centerY + Math.sin(angle) * (radius + 15);
      ctx.fillText(axes[i], labelX, labelY);
    });

    // Draw skill polygon
    if (skills.length > 0) {
      ctx.fillStyle = 'rgba(139, 92, 246, 0.2)';
      ctx.strokeStyle = 'rgba(236, 72, 153, 0.8)';
      ctx.lineWidth = 2;
      ctx.beginPath();

      // Draw polygon
      skills.forEach((skill, index) => {
        const angle = (Math.PI * 2 * index) / skills.length - Math.PI / 2;
        const value = (skill.value / 100) * radius;
        const x = centerX + Math.cos(angle) * value;
        const y = centerY + Math.sin(angle) * value;

        if (index === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      });

      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Draw skill labels
      skills.forEach((skill, index) => {
        const angle = (Math.PI * 2 * index) / skills.length - Math.PI / 2;
        ctx.fillStyle = skill.color || '#a78bfa';
        ctx.font = '10px monospace';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        const labelX = centerX + Math.cos(angle) * (radius + 25);
        const labelY = centerY + Math.sin(angle) * (radius + 25);
        ctx.fillText(skill.label.substring(0, 8), labelX, labelY);
      });
    }
  }, [skills, size]);

  return (
    <div className="relative">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
};

