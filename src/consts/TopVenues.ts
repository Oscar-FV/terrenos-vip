interface Venue {
    city: string,
    estate: string,
    paragraph1: string,
    paragraph2: string
    image: string,
    ahref: string 
}

const topVenues: Venue[] = [
    {
        city: "mérida",
        estate: "yuc",
        paragraph1:"Mérida se ha distinguido no solo por ser una de las ciudades más seguras del país, también lo ha hecho por su crecimiento inmobiliario e industrial.",
        paragraph2: "En los últimos años ha tenido un aumento en plusvalía del 8.5% en estas y más áreas.",
        image: "/images/merida.webp",
        ahref: ""
    },
    {
        city: "cancún",
        estate: "q.roo",
        paragraph1:"Cancún se ha distinguido no solo por ser uno de los destinos turísticos más populares del país, sino también por su crecimiento económico y urbanístico.",
        paragraph2:"Cancún destaca como el principal destino turístico gracias a su excelente conectividad aérea y terrestre.",
        image: "/images/quintanaroo.webp",
        ahref: ""
    },
    {
        city: "aguascalientes",
        estate: "ags",
        paragraph1:"Aguascalientes ha destacado no solo por ser una de las ciudades más prósperas del país, sino también por su crecimiento económico y cultural.",
        paragraph2: "Los inmuebles en Aguascalientes ofrecen una plusvalía y retorno de inversión superiores a la bolsa de valores.",
        image: "/images/aguascalientes.webp",
        ahref: ""
    }
]

export default topVenues