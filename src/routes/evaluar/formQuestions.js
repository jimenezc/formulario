let baseOptions = [
    {
        value: 5,
        title: "Muy de acuerdo",
    },
    {
        value: 4,
        title: "Algo de acuerdo",
    },
    {
        value: 3,
        title: "Ni de acuerdo ni en desacuerdo",
    },
    {
        value: 2,
        title: "Algo en desacuerdo",
    },
    {
        value: 1,
        title: "Muy en desacuerdo",
    },
];

let dimension1 = {
    title: "Dimensión 1: Medio Ambiente.", questions: [
        {
            title: "La empresa mide regularmente su huella de carbono.",
            aiInput:
                "De una recomendacion para que esta empresa mida regularmente su huella de carbono.",
            id: "first",
            options: [...baseOptions],
            answer: 5,
        },
        {
            title: "Se implementan políticas de reducción de residuos.",
            aiInput:
                "De una recomendacion para que esta empresa implemente políticas de reducción de residuos.",
            id: "second",
            options: [...baseOptions],
            answer: 5,
        },
        {
            title: "Se promueve el uso eficiente de recursos naturales.",
            aiInput:
                "De una recomendacion para que esta empresa promueva el uso eficiente de recursos naturales.",

            id: "third",
            options: [...baseOptions],
            answer: 5,
        },
        {
            title: "Se capacita al personal en prácticas sostenibles.",
            aiInput:
                "De una recomendacion para que esta empresa capacite al personal en prácticas sostenibles.",

            id: "fourth",
            options: [...baseOptions],
            answer: 5,
        },
    ]
};
let dimension2 = {
    title: "Dimensión 2: Prácticas Laborales.", questions: [
        {
            title: "La empresa ofrece condiciones laborales seguras y saludables.",
            aiInput:
                "De una recomendacion para que esta empresa ofrezca condiciones laborales seguras y saludables.",
            id: "first",
            options: [...baseOptions],
            answer: 5,
        },
        {
            title: "Se promueve la equidad de género y la inclusión.",
            aiInput:
                "De una recomendacion para que esta empresa promueva la equidad de género y la inclusión.",
            id: "second",
            options: [...baseOptions],
            answer: 5,
        },
        {
            title: "Existen canales efectivos para denuncias laborales.",
            aiInput:
                "De una recomendacion para que esta empresa cree canales efectivos para denuncias laborales.",

            id: "third",
            options: [...baseOptions],
            answer: 5,
        },
        {
            title: "Se invierte en capacitación y desarrollo del personal.",
            aiInput:
                "De una recomendacion para que esta empresa invierta en capacitación y desarrollo del personal.",

            id: "fourth",
            options: [...baseOptions],
            answer: 5,
        },
    ]
};
let dimension3 = {
    title: "Dimensión 3: Gobernanza y Ética.", questions: [
        {
            title: "La empresa cuenta con un código de ética vigente.",
            aiInput:
                "De una recomendacion para que esta empresa cuente con un código de ética vigente.",
            id: "first",
            options: [...baseOptions],
            answer: 5,
        },
        {
            title: "Se realizan auditorías internas de cumplimiento.",
            aiInput:
                "De una recomendacion para que esta empresa realize auditorías internas de cumplimiento.",
            id: "second",
            options: [...baseOptions],
            answer: 5,
        },
        {
            title: "Hay transparencia en la toma de decisiones.",
            aiInput:
                "De una recomendacion para que esta una empresa haya mas transparencia en la toma de decisiones.",

            id: "third",
            options: [...baseOptions],
            answer: 5,
        },
        {
            title: "Se previenen conflictos de interés.",
            aiInput:
                "De una recomendacion para que esta empresa prevenga conflictos de interés.",

            id: "fourth",
            options: [...baseOptions],
            answer: 5,
        },
    ]
};
let dimension4 = {
    title: "Dimensión 4: Comunidad y Sociedad.", questions: [
        {
            title: "La empresa participa en proyectos comunitarios.",
            aiInput:
                "De una recomendacion para que esta empresa participe en proyectos comunitarios.",
            id: "first",
            options: [...baseOptions],
            answer: 5,
        },
        {
            title: "Se evalúa el impacto social de sus operaciones.",
            aiInput:
                "De una recomendacion para que esta empresa evalúe el impacto social de sus operaciones.",
            id: "second",
            options: [...baseOptions],
            answer: 5,
        },
        {
            title: "Se promueve el voluntariado corporativo.",
            aiInput:
                "De una recomendacion para que esta empresa promueva el voluntariado corporativo.",

            id: "third",
            options: [...baseOptions],
            answer: 5,
        },
        {
            title: "Se colabora con ONGs o instituciones locales.",
            aiInput:
                "De una recomendacion para que esta empresa colabore con ONGs o instituciones locales.",

            id: "fourth",
            options: [...baseOptions],
            answer: 5,
        },
    ]
};
let dimension5 = {
    title: "Dimensión 5: Cadena de Suministro Responsable.", questions: [
        {
            title: "Se evalúa a los proveedores en criterios de RSE.",
            aiInput:
                "De una recomendacion para que esta empresa evalúe a los proveedores en criterios de RSE.",
            id: "first",
            options: [...baseOptions],
            answer: 5,
        },
        {
            title: "Se exige cumplimiento de estándares éticos.",
            aiInput:
                "De una recomendacion para que esta empresa exiga el cumplimiento de estándares éticos.",
            id: "second",
            options: [...baseOptions],
            answer: 5,
        },
        {
            title: "Se promueve la sostenibilidad en la cadena de valor.",
            aiInput:
                "De una recomendacion para que esta empresa promueva la sostenibilidad en la cadena de valor.",

            id: "third",
            options: [...baseOptions],
            answer: 5,
        },
        {
            title: "Se auditan prácticas de proveedores críticos.",
            aiInput:
                "De una recomendacion para que esta empresa auditen prácticas de proveedores críticos.",

            id: "fourth",
            options: [...baseOptions],
            answer: 5,
        },
    ]
};

export { dimension1, dimension2, dimension3, dimension4, dimension5 }; 