const ProgressDisplay = ({ progress }) => {
  return (
    <div className="w-full bg-gray-300 rounded-full h-2.5 dark:bg-gray-700">
      <div
        className="bg-blue-500 h-2.5 rounded-full"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressDisplay;
