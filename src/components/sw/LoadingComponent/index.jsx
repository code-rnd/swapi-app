import React, { useState, useEffect } from "react";

import "./style.scss";

export default function LoadingComponent(props) {
  const { isLoading } = props;

  const [isToggle, setIsToggle] = useState(false);
  const [isTimer, setTimer] = useState({ name: null, status: false, count: 0 });

  useEffect(() => {
    if (!isLoading) {
      clearTimeout(isTimer.name);
      return;
    }
  }, []);

  const handleStart = () => {
    let count = 0;
    const timer = setTimeout(() => {
      count = count + 1;
      setTimer({ name: timer, status: true, count: count });
    }, 400);
  };

  useEffect(() => {
    if (!isLoading) {
      clearTimeout(isTimer.name);
      return;
    }

    setIsToggle(!isToggle);
    handleStart();
  }, [isTimer]);

  return (
    <div className="loading">
      <div className="spinner">
        <div className={`rectangle-big rectangle`}>
          <div
            className={`rectangle-${isToggle ? "toggle" : "little"} rectangle`}
          ></div>
        </div>
      </div>
    </div>
  );
}
