import { venueListing } from "../Models/Venue";

const Listing: venueListing[] = [
  {
    city: "mérida",
    estate: "yuc",
    paragraph1:
      "Mérida se ha distinguido no solo por ser una de las ciudades más seguras del país, también lo ha hecho por su crecimiento inmobiliario e industrial.",
    paragraph2:
      "En los últimos años ha tenido un aumento en plusvalía del 8.5% en estas y más áreas.",
    image: "/images/merida.webp",
    ahref: "",
    location: { lat: 21.929509691751438, lng: -102.28782625174749 },
  },
  {
    city: "cancún",
    estate: "q.roo",
    paragraph1:
      "Cancún se ha distinguido no solo por ser uno de los destinos turísticos más populares del país, sino también por su crecimiento económico y urbanístico.",
    paragraph2:
      "Cancún destaca como el principal destino turístico gracias a su excelente conectividad aérea y terrestre.",
    image: "/images/quintanaroo.webp",
    ahref: "",
    location: { lat: 22.161916849058013, lng: -100.97609187755027 },
  },
];

export default Listing;
