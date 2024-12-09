const translations = {
    en: {
        title: "Handmade Candy Flowers",
        description: "We create handmade flowers from crepe paper with candies. Perfect gifts for various holidays and occasions. Custom designs include alcohol bottles, coffee, tea, and toys adorned with candy flowers. Delivery within Switzerland via IBAN payment.",
        gallery: "Gallery",
        delivery: "Delivery: CHF 10 anywhere in Switzerland",
        production: "Production time: 1-2 weeks or by agreement",
        faq: "Frequently Asked Questions"
    },
    de: {
        title: "Handgemachte Blumen aus Süßigkeiten",
        description: "Wir erstellen handgemachte Blumen aus Krepppapier mit Süßigkeiten. Perfekte Geschenke für verschiedene Feiertage und Anlässe. Maßgeschneiderte Designs umfassen Alkoholflaschen, Kaffee, Tee und Spielzeuge, die mit Süßigkeitenblumen verziert sind. Lieferung innerhalb der Schweiz mit IBAN-Zahlung.",
        gallery: "Galerie",
        delivery: "Lieferung: CHF 10 überall in der Schweiz",
        production: "Produktionszeit: 1-2 Wochen oder nach Vereinbarung",
        faq: "Häufig gestellte Fragen"
    },
    ru: {
        title: "Ручная работа: конфетные цветы",
        description: "Мы создаем цветы ручной работы из гофрированной бумаги с конфетами. Идеальный подарок для различных праздников и событий. Индивидуальное оформление бутылок с алкоголем, кофе, чая, игрушек украшенными конфетами. Доставка по Швейцарии через оплату IBAN.",
        gallery: "Галерея",
        delivery: "Доставка: 10 CHF по всей Швейцарии",
        production: "Срок изготовления: 1-2 недели или по договоренности",
        faq: "Часто задаваемые вопросы"
    }
};

document.querySelector('.language-selector').addEventListener('click', (e) => {
    const lang = e.target.getAttribute('data-lang');
    if (lang && translations[lang]) {
        const content = translations[lang];
        document.getElementById('content').innerHTML = `
            <h1>${content.title}</h1>
            <p>${content.description}</p>
            <h2>${content.gallery}</h2>
            <div class="gallery">
                <img src="images/sample1.jpg" alt="Sample 1">
                <img src="images/sample2.jpg" alt="Sample 2">
            </div>
            <p>${content.delivery}</p>
            <p>${content.production}</p>
            <h3>${content.faq}</h3>
        `;
    }
});

// Default language
document.querySelector('[data-lang="en"]').click();
