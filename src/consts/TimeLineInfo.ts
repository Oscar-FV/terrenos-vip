interface Item {
    icon: string,
    tittle: string,
    text: string,
    direction: string
}

const ListItems: Item[] = [
    {
        icon: "mdi:home-search-outline",
        tittle: "descubre tu espacio ideal",
        text: "Encuentra el espacio perfecto que te brinde la oportunidad de construir la vida que siempre has imaginado.",
        direction: "left"
    },
    {
        icon: "healthicons:bills-outline",
        tittle: "reserva tu sueño con confianza",
        text: "Bloquea tu terreno o casa ideal con solo $5,000 pesos y asegura tu lugar en el paraíso inmobiliario sin preocuparte por revisiones de buró de crédito.",
        direction: "right"
    },
    {
        icon: "bitcoin-icons:sign-outline",
        tittle: "formaliza tu Compromiso",
        text: "Celebra este emocionante paso hacia la propiedad de tu nuevo hogar y deja que el proceso de realización de tus sueños comience oficialmente.",
        direction: "left"
    }
]

export default ListItems