import React from "react";
import { PinContainer } from "../ui/3d.pin";
import { Link } from "react-router-dom";

export function AnimatedPin({imagen, titulo, descripcion, redireccion}) {
  return (
    <div className="h-[30rem] w-full flex items-center justify-center ">
      <Link to={redireccion}>
        <PinContainer
          title="Cotizá"
        >
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[21rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              {titulo}
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 ">
                {descripcion}
              </span>
            </div>
            <img src={imagen} className="flex flex-1 w-full rounded-lg mt-4" />
          </div>
        </PinContainer>
      </Link>
    </div>
  );
}
