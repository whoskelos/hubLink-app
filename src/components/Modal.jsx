/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { RiAddCircleLine } from "react-icons/ri";
import FormCreateUser from "./FormCreateUser";
export default function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("keydown", closeModal);
  }, [])

  const closeModal = (e) => {
    if (e.key === "Escape") {
      setIsOpen(false)
    }
  }

  const closeForm = () => {
    setIsOpen(false)
  }

  return (
    <>
      <div className="pt-5">
        <button onClick={() => setIsOpen(true)} className="bg-cyan-600 hover:bg-cyan-700 transition-colors rounded-full flex items-center gap-x-1 text-white font-medium text-xl py-1 px-4">
          <RiAddCircleLine className="text-2xl" />
          <span>Usuario</span>
        </button>
      </div>
      {
        isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex justify-center items-center w-full transition-all">
            <div className="bg-slate-200 p-6 rounded-md transition-all">
              <FormCreateUser handleClick={closeForm} />
            </div>
          </div>
        )
      }
    </>
  );
}
