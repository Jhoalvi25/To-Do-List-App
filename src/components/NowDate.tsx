import { useEffect, useState } from "react";



const NowDate = () => {

  const [currentDate, setCurrentDate] = useState<any>();

  const getCurrentDate = () => {
    let today = new Date();
    let year = today.getFullYear(); // Year
    let month = today.getMonth() + 1; // Month
    let date = today.getDate(); // Date
    setCurrentDate(`${year}-${month}-${date}`);
  };
  useEffect(() => {
    getCurrentDate();
  }, []);

  return (
    <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
      {currentDate}
    </div>
  );
};

export default NowDate;
