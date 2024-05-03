import { topVenue } from "../Models/Venue"


const topVenues: topVenue[] = [
    {   
        id: "meri",
        city: "mérida",
        estate: "yuc",
        paragraph1:"Mérida se ha distinguido no solo por ser una de las ciudades más seguras del país, también lo ha hecho por su crecimiento inmobiliario e industrial.",
        paragraph2: "En los últimos años ha tenido un aumento en plusvalía del 8.5% en estas y más áreas.",
        image: "/images/merida.webp",
        ahref: ""
    },
    {
        id: "canc",
        city: "cancún",
        estate: "q.roo",
        paragraph1:"Cancún se ha distinguido no solo por ser uno de los destinos turísticos más populares del país, sino también por su crecimiento económico y urbanístico.",
        paragraph2:"Cancún destaca como el principal destino turístico gracias a su excelente conectividad aérea y terrestre.",
        image: "/images/quintanaroo.webp",
        ahref: ""
    },
    {   
        id: "ags",
        city: "aguascalientes",
        estate: "ags",
        paragraph1:"Aguascalientes ha destacado no solo por ser una de las ciudades más prósperas del país, sino también por su crecimiento económico y cultural.",
        paragraph2: "Los inmuebles en Aguascalientes ofrecen una plusvalía y retorno de inversión superiores a la bolsa de valores.",
        image: "/images/aguascalientes.webp",
        ahref: ""
    },
    {   
        id: "mty",
        city: "monterrey",
        estate: "n.l.",
        paragraph1:"Monterrey, fusiona su dinamismo urbano con un legado histórico notable. Conocida como la " + '"Ciudad de las Montañas."',
        paragraph2: "Es un centro industrial y comercial importante en México, con una amplia oferta cultural que incluye festivales anuales y eventos deportivos.",
        image: "/images/monterrey.webp",
        ahref: ""
    }
]

export default topVenues