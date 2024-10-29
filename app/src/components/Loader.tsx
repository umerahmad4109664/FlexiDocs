import React, { useEffect, useState } from "react";
import "../css/Loader.css";
import { CheckIcon } from "@heroicons/react/24/outline";

const Loader = () => {
    const [progress, setProgress] = useState(false)
    const [success, setSuccess] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setProgress(true)
        }, 1000);
        setTimeout(() => {
            setSuccess(true)
        }, 2000);
      }, []);
  return (
    <div className="loader">
      <div className="relative h-full">
        {progress && 
        <CircularProgress />
        }
        {success && 
        <p style={{ position: "absolute", top: "60%", left: "44%",fontSize:"56px", color:"#4caf50" }}>Success</p>
        }
      </div>
    </div>
  );
};

export default Loader;




const CircularProgress = () => {
    const [percentage, setPercentage] = useState(0);
    const radius = 90; // Radius of the circle
    const strokeWidth = 10; // Width of the stroke
    const normalizedRadius = radius - strokeWidth / 2;
    const circumference = normalizedRadius * 2 * Math.PI;

    useEffect(() => {
        const duration =1000; // 2 seconds
        const interval = 10; // Update every 10 milliseconds
        const steps = duration / interval; // Total steps to reach 100
        const increment = 100 / steps; // Amount to increment on each step
    
        const intervalId = setInterval(() => {
          setPercentage(prevX => {
            const newPercentage = Math.min(prevX + increment, 100); // Cap at 100
            if (newPercentage >= 100) {
              clearInterval(intervalId); // Clear interval when reaching 100
            }
            return newPercentage; // Update percentage
          });
        }, interval);
    
        return () => clearInterval(intervalId); // Cleanup interval on unmount
      }, []);
  
    const strokeDashoffset = circumference - (percentage / 100) * circumference;
  
    return (
      <svg style={{ position: "absolute", top: "35%", left: "45%" }} width={radius * 2} height={radius * 2}>
        <circle
          stroke="#e6e6e6"
          fill="transparent"
          strokeWidth={strokeWidth}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke="#4caf50"
          fill="transparent"
          strokeWidth={strokeWidth}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={strokeDashoffset}
          style={{ transition: 'stroke-dashoffset 0.1s linear' }} // Update transition for smoother animation
          transform={`rotate(-90 ${radius} ${radius})`}
        />
       
        <text
          x="50%"
          y="50%"
          alignmentBaseline="middle"
          textAnchor="middle"
          fontSize="40"
          fill="white"
        >
          {Math.floor(percentage)}%
        </text>
      </svg>
    );
  };
  