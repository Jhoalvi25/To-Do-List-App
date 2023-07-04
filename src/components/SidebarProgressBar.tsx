import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Circle } from "rc-progress";

const SidebarProgressBar = () => {
  const contentObjects = useSelector((state: any) => state.content);
  const [percent, setPercent] = useState(0);
  useEffect(() => {
    calculateProgress();
    console.log(contentObjects);
  }, [contentObjects]);

  const calculateProgress = () => {
    const contentList = Object.keys(contentObjects).map(
      (i) => contentObjects[i]
    );
    const length: any = contentList.length;
    console.log("All:", contentList.length);
    let successCount = 0;
    contentList.forEach((item) => {
      if (item.check) {
        successCount++;
      }
    });
    console.log("success:", successCount);
    setPercent((length && (successCount / length) * 100).toFixed(2));
    console.log(percent);
  };

  return (
    <div className="flex flex-col justify-center items-center mb-10">
      <h2>Progress</h2>
      <div className="relative w-[200px] h-[200px]">
        <Circle percent={percent} strokeWidth={8} strokeColor="skyblue" />
        <strong className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          {percent}%
        </strong>
      </div>
    </div>
  );
};

export default SidebarProgressBar;
