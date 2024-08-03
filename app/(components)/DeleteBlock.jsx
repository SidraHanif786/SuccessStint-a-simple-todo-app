"use client";

import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const DeleteBlock = ({ id }) => {
  const [currentUrl, setCurrentUrl] = useState("");
  useEffect(() => {
    if (typeof window !== "undefined") {
      const fullUrl = window.location.href;
      setCurrentUrl(fullUrl);
    }
  }, []);
  console.log(currentUrl);

  const router = useRouter();
  const deleteTicket = async () => {
    const url = `${currentUrl}/api/Tickets/`;
    const res = await fetch(`${url}${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      router.refresh();
    }
  };

  return (
    <FontAwesomeIcon
      icon={faX}
      style={{ height: '20px', width: '24px' }}
      className=" text-red-500 hover:cursor-pointer hover:text-red-600"
      onClick={deleteTicket}
    />
  );
};

export default DeleteBlock;
