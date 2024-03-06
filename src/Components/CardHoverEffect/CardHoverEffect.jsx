import {HoverEffect}  from "../ui/card-hover-effect";
 
export function CardHoverEffect() {
  return (
    <div className="max-w-4xl w-[20rem] md:w-[45rem] xl:w-[60rem] lg:px-0">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Seguros para personas",
    description:
      "Garantiza tu tranquilidad y la de tus seres queridos con nuestras soluciones personalizadas para la salud y el futuro financiero.",
    link: "https://stripe.com",
  },
  {
    title: "Seguros para profesionales",
    description:
      "Protege tus bienes y propiedades con nuestra cobertura confiable ante imprevistos.",
    link: "https://netflix.com",
  },
  {
    title: "Seguros para empresas",
    description:
      "Planifica hoy para disfrutar mañana con nuestras opciones de inversión y ahorro diseñadas para una jubilación segura y sin preocupaciones.",
    link: "https://facebook.com",
  },
];