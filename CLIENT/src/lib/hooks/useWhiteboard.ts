/**
 * Custom hook for whiteboard functionality
 * Handles drawing, erasing, and collaboration features
 */

import { useRef, useState, useCallback } from 'react';

export interface WhiteboardTool {
  type: 'pen' | 'eraser' | 'highlighter';
  color: string;
  size: number;
}

export interface UseWhiteboardReturn {
  canvasRef: React.RefObject<HTMLCanvasElement | null>;
  tool: WhiteboardTool;
  setTool: (tool: Partial<WhiteboardTool>) => void;
  clearCanvas: () => void;
  isDrawing: boolean;
}

export function useWhiteboard(): UseWhiteboardReturn {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [tool, setToolState] = useState<WhiteboardTool>({
    type: 'pen',
    color: '#000000',
    size: 3
  });
  const [isDrawing, setIsDrawing] = useState(false);

  const setTool = useCallback((newTool: Partial<WhiteboardTool>) => {
    setToolState(prev => ({ ...prev, ...newTool }));
  }, []);

  const clearCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    }
  }, []);

  return {
    canvasRef,
    tool,
    setTool,
    clearCanvas,
    isDrawing
  };
}

