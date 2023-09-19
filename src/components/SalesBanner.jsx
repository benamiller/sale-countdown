import React, { useState, useEffect } from 'react';

function SalesBanner({ saleEndDate }) {
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
    return (
      <> 
        <div className="bg-black text-white p-4">
          <div className="container mx-auto text-center">
            <div className="flex items-center justify-center">
              <svg fill="none" width="24px" height="24px" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z"></path>
              </svg>
              <span className="text-2xl font-bold">Mix & Match Buy 1 Get 1 50% off!</span>
            </div>
            <p>{`Sale Ends In ${saleTime.days} Days ${saleTime.hours} Hours ${saleTime.minutes} Minutes ${saleTime.seconds} Seconds`}</p>
          </div>
        </div>
      </>
    );
  } else {
    return "";
  }
  
}

export default SalesBanner;

