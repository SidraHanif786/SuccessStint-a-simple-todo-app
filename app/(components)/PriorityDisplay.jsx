import { faFire } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PriorityDisplay = ({ priority }) => {
  let color;
  if (priority === 1) color = "text-red-500";
  else if (priority === 2) color = "text-amber-500";
  else if (priority === 3) color = "text-lime-500";
  else if (priority === 4) color = "text-cyan-500";
  else if (priority === 5) color = "text-teal-500";
  return (
    <div className="flex justify-start align-baseline py-1 ">
      <FontAwesomeIcon
        icon={faFire}
        className={` pr-1 ${priority > 0 ? color : " text-slate-400"}`}
      />
      <FontAwesomeIcon
        icon={faFire}
        className={` pr-1 ${priority > 1 ? color : " text-slate-400"}`}
      />
      <FontAwesomeIcon
        icon={faFire}
        className={`  pr-1 ${priority > 2 ? color : " text-slate-400"}`}
      />
      <FontAwesomeIcon
        icon={faFire}
        className={` pr-1 ${priority > 3 ? color : " text-slate-400"}`}
      />
      <FontAwesomeIcon
        icon={faFire}
        className={` ${priority > 4 ? color : " text-slate-400"}`}
      />
    </div>
  );
};

export default PriorityDisplay;
