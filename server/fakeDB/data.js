const mongoose = require("mongoose");
const { ROLE_ADMIN } = require("../../constants/roles");

const user1Id = mongoose.Types.ObjectId();
const user2Id = mongoose.Types.ObjectId();

const data = {
    users: [
        {
            _id: user1Id,
            email: "artur.meinzer@web.de",
            name: "Artur Meinzer",
            username: "Artur99",
            info: "Hello I am Artur and I am a developer",
            password: "test123!",
            role: ROLE_ADMIN,
        },
        {
            _id: user2Id,
            email: "artur.meinzer1@web.de",
            name: "Test User",
            username: "Test99",
            info: "Hello I am Test and I am a test",
            password: "test123!",
            role: ROLE_ADMIN,
        },
    ],
    projects: [
        {
            title: "Porfolio Page",
            content: "Test content",
            techStack: ["javascript", "react", "nextjs", "graphql", "mongodb"],
        },
        {
            title: "Sudoku App",
            content: "Some content",
            techStack: ["javascript", "react", "firebase"],
            github: "https://github.com/arturmeinzer/sudoku",
        },
    ],
    jobs: [
        {
            company: "MD Hardware & Service GmbH",
            position: "Software Entwickler (Festanstellung)",
            bullets: [
                "Planung und Realisierung webbasierter Anwendungen nach Kundenwunsch",
                "Modifizierung bestehender Anwendungen",
                "Programmerstellung mit PHP 5 und Javascript",
                "Erstellung von Internetseiten in HTML mit CSS-Formatierungen nach Designvorlagen",
                "Telefon- und Onlinesupport",
            ],
            startDate: new Date("2009-07-01"),
            endDate: new Date("2011-06-30"),
        },
        {
            company: "tourist-online.de GmbH",
            position: "Software Entwickler (Festanstellung)",
            bullets: [
                "Einbau und Pflege der Google Karte mit Google API",
                "Optimierung von MySQL-Abfragen für das Backend",
                "Optimierung von Cronjobs und Shell-Skripten in der Linux-Shell",
                "Datengrabbing von der AIDA-Seite mit wget in der Shell",
                "Optimierungen am Frontend und Behebung von Fehlern",
                "Arbeit mit Schnittstellen von Veranstaltern und Behebung diverser Fehler",
                "Diverse Projekte für AdWords Anzeigen realisiert (Haupttätigkeit)",
                "Erstellung von Videos mit Animoto Schnittstelle",
            ],
            startDate: new Date("2011-07-01"),
            endDate: new Date("2014-06-30"),
        },
        {
            company: "CHECK24 Vergleichsportal GmbH",
            position: "Software Entwickler (Festanstellung)",
            bullets: [
                "Optimierung von MySQL-Abfragen",
                "Einbau neuer Features für das Frontend",
                "Optimierung und Pflege der Payment-API",
                "Erstellung und Pflege von Microservices und Schnittstellen",
                "Optimierung und Pflege von weiteren Schnittstellen",
                "Arbeit mit Symfony Framework",
                "Umstellung von PHP 5 auf PHP 7",
                "Erstellung von Unit Tests mit PHPUnit",
            ],
            startDate: new Date("2014-07-01"),
            endDate: new Date("2018-02-28"),
        },
        {
            company: "Hygi.de GmbH & Co. KG",
            position: "Software Entwickler (Festanstellung)",
            bullets: [
                "Arbeiten am Shop mithilfe vom Symfony Framework in einer PHP 7 Umgebung",
                "Integration von Fact-Finder in den Shop",
                "Performance Optimierung von MySQL-Abfragen",
                "Implementierung von neuen Features in den Shop",
                "Arbeiten mit internen und externen APIs",
                "Erstellung von Unit Tests mit PHPUnit",
                "Frontend-Anpassungen mithilfe von Vue.js",
            ],
            startDate: new Date("2018-03-01"),
            endDate: new Date("2019-04-30"),
        },
        {
            company: "Powercloud GmbH",
            position: "Software Entwickler (Freelancer)",
            bullets: [
                "Arbeit an einer Software in einer PHP 7 Umgebung",
                "Anpassung der Marktkommunikation für Energielieferanten mithilfe der EDIFACT Schnittstelle",
                "Anpassung und Erstellung von Unit-Tests zur Qualitätssicherung",
                "Lösen von Bugs und Erhöhung der Stabilität",
            ],
            startDate: new Date("2019-06-01"),
            endDate: new Date("2019-08-31"),
        },
        {
            company: "TUI Deutschland GmbH",
            position: "Software Entwickler (Freelancer)",
            bullets: [
                "Entwicklung mit Zend Expressive und PHP 7 im Backend",
                "Entwicklung mit React.js und Typescript im Frontend",
                "Erstellung von Unit-Tests für Back- und Frontend",
                "Erstellung von Selenium-Tests mit Typescript",
                "Arbeit mit diversen externen Schnittstellen (z.B. Deutsche Bahn)",
                "Schrittweise Transformation der Anwendung in Richtung SPA (Single Page Application)",
                "Erhöhung der Performance für einen schnelleren Seitenaufruf",
            ],
            startDate: new Date("2019-10-01"),
            endDate: new Date("2020-04-30"),
        },
        {
            company: "Kaffee Partner GmbH",
            position: "Software Entwickler (Freelancer)",
            bullets: [
                "Entwicklung mit dem Contao CMS und PHP 7",
                "Umstellung einer Symfony basierten API auf neuere Symfony Version",
                "Anpassung des Landing Page Systems auf neuere Contao Version",
                "Contao-Module zu Symfony Bundles umbauen",
                "Administrative Tätigkeiten an der Serverlandschaft",
                "Umstellung auf Docker für die lokale Entwicklung",
            ],
            startDate: new Date("2020-10-01"),
            endDate: new Date("2021-02-28"),
        },
        {
            company: "Kitafino GmbH",
            position: "Software Entwickler (Freelancer)",
            bullets: [
                "Entwicklung mit PHP 7",
                "Refactoring von Legacy Code",
                "Erstellung von Unit-Test für das Backend",
                "Einbau von Symfony Komponenten für eine schrittweise Umstellung auf das Symfony Framework",
            ],
            startDate: new Date("2021-02-01"),
            endDate: new Date("2021-04-30"),
        },
    ],
};

module.exports = data;
