"use client"
import Image from "next/image";
import styles from './page.module.scss'
import { useEffect, useRef, forwardRef, useState } from 'react';
import Actions from '@/components/actionsPanel/actionsPanel';
import Palette from '@/components/palette/palette';
import Tools from '@/components/tools/tools';

export default function Home() {
  const canvasRef = useRef<any>(null);
  const [update, setUpdate] = useState();
  const currentColor = useRef("black");
  const currentTool = "pencil";
  const currentSize = "8";

  // Start executing code on componentMounted, so all DOM's element exists
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = canvas.parentNode;

    // Don't remove, it makes save button work (re-rendering everything)
    setUpdate(canvas);

    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    
    
    const context = canvas.getContext("2d");
  
    const mouse = { x:0, y:0};
    let draw = false;
                
  // Start drawing line on Mouse Down
  canvas.addEventListener("mousedown", function(this: HTMLElement, e: MouseEvent){
        
      mouse.x = e.pageX - this.offsetLeft;
      mouse.y = e.pageY - this.offsetTop;
      draw = true;
      context.beginPath();
      context.moveTo(mouse.x, mouse.y);
  });

  // Draw line on Mouse Move
  canvas.addEventListener("mousemove", function(this: HTMLElement, e: MouseEvent){
        
      if(draw==true){
        
          mouse.x = e.pageX - this.offsetLeft;
          mouse.y = e.pageY - this.offsetTop;
          context.lineTo(mouse.x, mouse.y);
          context.strokeStyle = currentColor.current;
          context.lineWidth = currentSize;
          context.stroke();
      }
  });
  
  // Stop drawing line on Mouse Up
  canvas.addEventListener("mouseup", function(e: MouseEvent){
      draw = false;
  });
  })

  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <div className={styles.top_panel}>
          <Palette onClick={(color: string) => {
            currentColor.current = color;
          }}/>
          <Actions canvas={canvasRef.current}/>
        </div>
        <div className={styles.flex_wrap}>
          <div className={styles.left_panel}>
            <Tools onClick={(color: string) => {
            currentColor.current = color;
          }}/>
          </div>
          <div className={styles.work_area}>
            <canvas id={styles.canvas} ref={canvasRef} ></canvas>
          </div>
        </div>
      </div>
    </main>
  );
}
