/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { RiAddCircleLine } from "react-icons/ri";
export default function Modal({ openModal }) {
    const [isOpen, setIsOpen] = useState(false);

    const closeModal = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false)
      }
    }

    return (
        <>
            <button onClick={() => setIsOpen(true)} onKeyDown={closeModal} className="bg-cyan-600 hover:bg-cyan-700 transition-colors rounded-full flex items-center gap-x-1 text-white font-medium text-xl py-1 px-4">
                <RiAddCircleLine className="text-2xl" />
                <span>Usuario</span>
            </button>
            {
              isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
                  <div className="bg-white p-5 rounded flex flex-col justify-center items-center gap-5">
                    Hola
                  </div>
                </div>
              )
            }
        </>
    );
}
