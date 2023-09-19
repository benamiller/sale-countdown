import React, { useState, useEffect } from 'react';

function SaleCountdown({ saleEndDate }) {
  const calculateTimeUntilSaleEnds = () => {
    const currentTime = new Date().getTime();
    const timeDifference = saleEndDate - currentTime;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / (1000));
  
    return {
      days,
      hours,
      minutes,
      seconds
    };
  };

  const doesSaleEndInFuture = () => {
    const currentTime = new Date().getTime();
    if (saleEndDate - currentTime < 0) {
      return false;
    }
    return true;
  }

  const [saleTime, setSaleTime] = useState(calculateTimeUntilSaleEnds());
  
  useEffect(() => {
    const timerIntervalID = setInterval(() => {
      setSaleTime(calculateTimeUntilSaleEnds());
    }, 1000);

    return () => clearInterval(timerIntervalID);
  }, []);

  
  if (doesSaleEndInFuture()) {
    return `Sale Ends In ${saleTime.days} Days ${saleTime.hours} Hours ${saleTime.minutes} Minutes ${saleTime.seconds} Seconds`
  } else {
    return "";
  }
  
}

export default SaleCountdown;

