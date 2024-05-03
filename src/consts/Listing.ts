import { venueListing } from "../Models/Venue";

const Listing: venueListing[] = [
  {
    id: "mty",
    city: "monterrey",
    estate: "n.l.",
    info: "Invierte en una ciudad de progreso, al norte del país y a solo unas horas de Estados Unidos. Es momento de asegurar tu calidad de vida.",
    price: "2,160",
    location: { lat: 26.024302582826795, lng: -100.11454431097557 },
  },
  {
    id: "meri",
    city: "mérida",
    estate: "yuc",
    info: "Aquí está tu lugar, en donde podrás brindarle tranquilidad a tu familia en la ciudad más segura del país.",
    price: "2,478",
    location: { lat: 21.161368212191018, lng: -89.80311330249314 },
  },
  {
    id: "canc",
    city: "cancún",
    estate: "q.roo",
    info: "Aquí está tu lugar, en una de las zonas turísticas más importantes en el mundo y en donde podrás disfrutar de todos los beneficios de vivir cerca de la costa.",
    price: "2,055",
    location: { lat: 21.726383470565402, lng: -89.64805069784772 }
  },
  {
    id: "slp",
    city: "san luis potosí",
    estate: "s.l.p",
    info: "Aquí está tu lugar, en  uno de los estados con mayor crecimiento industrial a nivel nacional.",
    price: "1,812",
    location: 
      { lat: 21.929799585611452, lng: -100.94314447862293 }
    ,
  },
  {
    id: "qro",
    city: "querétaro",
    estate: "qro",
    info: "Aquí está tu lugar, en el estado con mayor crecimiento económico.",
    price: "1,176",
    location: { lat: 20.627530522981733, lng: -100.27358715950453 },
  },
  {
    id: "ags",
    city: "aguascalientes",
    estate: "ags",
    info: "Invierte en el Bajío, en un estado propicio para disfrutar de cada día y de sus atractivos. Además, de asegurar mayor calidad de vida.",
    price: "1,915",
    location: { lat: 21.929509691751438, lng: -102.28782625174749 },
  },
];

export default Listing;
