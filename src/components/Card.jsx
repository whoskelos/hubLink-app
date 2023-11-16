import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function Card({ title, rutaImg, ruta }) {
    return (
        <>
            <Link to={ruta}>
                <button
                    className="bg-white flex flex-col relative overflow-hidden height-auto text-foreground box-border outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 cursor-pointer transition-transform-background motion-reduce:transition-none data-[pressed=true]:scale-[0.97] shadow-xl rounded-md hover:scale-105 hover:contrast-100 transition-all"
                    type="button"
                    role="button"
                >
                    <div className="relative flex w-full flex-auto flex-col place-content-inherit align-items-inherit h-auto break-words text-left overflow-y-auto subpixel-antialiased p-0 ">
                        <img
                            alt="Orange"
                            className="w-[250px] h-[200px] object-contain p-2 opacity-80 hover:opacity-100 transition-all"
                            src={rutaImg}
                        />
                    </div>
                    <div className="bg-cyan-600 text-white p-3 h-auto flex w-full items-center overflow-hidden color-inherit subpixel-antialiased rounded-b-large justify-between">
                        <b>{title}</b>
                    </div>
                </button>
            </Link>
        </>
    );
}
