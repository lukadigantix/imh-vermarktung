export type Property = {
  id: string;
  title: string;
  address: string;
  city: string;
  price: string;
  priceRaw: number;
  rooms: number;
  sqm: number;
  floor: number;
  yearBuilt: number;
  description: string;
  features: string[];
  tags: { label: string; variant: "default" | "exclusive" | "sold" | "new" }[];
  image?: string;
};

export const properties: Property[] = [
  {
    id: "penthouse-zuerich-seefeld",
    title: "Exklusives Penthouse mit Seesicht",
    address: "Seefeldstrasse 142",
    city: "8008 Zürich",
    price: "CHF 2'850'000",
    priceRaw: 2850000,
    rooms: 5.5,
    sqm: 248,
    floor: 7,
    yearBuilt: 2019,
    description:
      "Einzigartiges Penthouse im begehrten Seefeldquartier mit atemberaubendem Panoramablick auf den Zürichsee und die Alpen. Die grosszügige, lichtdurchflutete Wohnfläche wurde durch einen renommierten Innenarchitekten mit erlesenen Materialien gestaltet. Umlaufende Terrassen laden zum Verweilen ein. Absolute Privatsphäre, höchste Qualität und ein einmaliger Ausblick machen diese Liegenschaft zu einem seltenen Angebot.",
    features: [
      "Panoramaterrasse, ca. 85 m²",
      "Offene Küche mit Bulthaup-Einbaugeräten",
      "Primärzone mit begehbarem Kleiderschrank",
      "Massanfertigungen & Parkett in Eiche",
      "Fussbodenheizung",
      "Lift direkt in die Wohnung",
      "2 Tiefgaragenplätze",
      "Private Weinkammer",
      "Smart-Home-System",
    ],
    tags: [
      { label: "Exklusiv", variant: "exclusive" },
      { label: "Seeblick", variant: "default" },
    ],
    image: "https://images.pexels.com/photos/7031405/pexels-photo-7031405.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "villa-kuesnacht",
    title: "Herrschaftliche Villa am Zürichsee",
    address: "Seestrasse 74",
    city: "8700 Küsnacht",
    price: "CHF 7'200'000",
    priceRaw: 7200000,
    rooms: 9.5,
    sqm: 520,
    floor: 1,
    yearBuilt: 1924,
    description:
      "Prächtige Art-déco-Villa in der exklusivsten Wohngemeinde am Zürichsee. Das aufwendig renovierte Anwesen vereint historischen Charme mit modernstem Komfort. Direkter Seezugang, gepflegter Parkgarten und ein repräsentativer Innenausbau schaffen ein aussergewöhnliches Wohnerlebnis. Ideal für anspruchsvollste Kunden, die Privatsphäre, Geschichte und Qualität schätzen.",
    features: [
      "Direkter Seezugang mit eigenem Bootshaus",
      "Parkgarten ca. 1'800 m²",
      "Repräsentative Eingangshalle mit Marmorboden",
      "Bibliothek & Weinkeller",
      "Wintergarten mit Seesicht",
      "Doppelgarage & mehrere Aussenparkplätze",
      "Gästehaus, 2 Zimmer",
      "Alle modernen Installationen erneuert (2021)",
    ],
    tags: [
      { label: "Exklusiv", variant: "exclusive" },
      { label: "Neu", variant: "new" },
    ],
    image: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "maisonette-meilen",
    title: "Elegante Maisonette mit Seeblick",
    address: "Dorfstrasse 18",
    city: "8706 Meilen",
    price: "CHF 1'490'000",
    priceRaw: 1490000,
    rooms: 4.5,
    sqm: 162,
    floor: 3,
    yearBuilt: 2015,
    description:
      "Grosszügige Maisonette-Wohnung in ruhiger Dorflage mit traumhaftem Blick auf den Zürichsee. Moderne Ausstattung auf zwei Ebenen, lichtdurchflutete Wohnräume und eine Sonnenterrasse machen diese Liegenschaft zu einem besonderen Angebot am rechten Seeufer.",
    features: [
      "Sonnenterrasse ca. 30 m² mit Seesicht",
      "Offene Wohnküche mit Qualitätsgeräten",
      "Badezimmer mit freistehender Badewanne",
      "Eichenparkett",
      "Tiefgaragenplatz",
      "Keller",
    ],
    tags: [
      { label: "Neu", variant: "new" },
    ],
    image: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "attika-zollikon",
    title: "Attika-Wohnung mit Dachterrasse",
    address: "Bergstrasse 9",
    city: "8702 Zollikon",
    price: "CHF 3'200'000",
    priceRaw: 3200000,
    rooms: 6.5,
    sqm: 290,
    floor: 6,
    yearBuilt: 2020,
    description:
      "Exklusive Attika-Wohnung in Toplage mit grosszügiger Dachterrasse und weitem Blick über den Zürichsee. Hochwertigste Materialien, offener Grundriss und modernste Haustechnik.",
    features: [
      "Dachterrasse ca. 100 m²",
      "Offener Wohn-/Essbereich",
      "3 Bäder, 2 Badezimmer",
      "Smart-Home",
      "2 Tiefgaragenplätze",
    ],
    tags: [
      { label: "Exklusiv", variant: "exclusive" },
    ],
    image: "https://images.pexels.com/photos/4290722/pexels-photo-4290722.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "landhaus-hombrechtikon",
    title: "Charmantes Landhaus mit Garten",
    address: "Feldstrasse 33",
    city: "8634 Hombrechtikon",
    price: "CHF 2'100'000",
    priceRaw: 2100000,
    rooms: 7.5,
    sqm: 340,
    floor: 1,
    yearBuilt: 2005,
    description:
      "Gepflegtes Einfamilienhaus in ruhiger Wohnlage mit grossem, parkähnlichem Garten. Helle Räume, moderner Ausbau und direkter Anschluss ans Naherholungsgebiet.",
    features: [
      "Garten ca. 900 m²",
      "Doppelgarage",
      "Nebengebäude / Atelier",
      "Ausgebauter Keller",
      "Terrasse und Sitzplatz",
    ],
    tags: [
      { label: "Neu", variant: "new" },
    ],
    image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "wohnung-riesbach",
    title: "Stilvolle Wohnung im Seefeld",
    address: "Wildbachstrasse 12",
    city: "8008 Zürich",
    price: "CHF 1'980'000",
    priceRaw: 1980000,
    rooms: 3.5,
    sqm: 118,
    floor: 4,
    yearBuilt: 2018,
    description:
      "Hochwertig renovierte Wohnung im begehrten Seefeldquartier. Ruhige, sonnige Lage, eleganter Ausbau und kurze Distanz zu Restaurants, See und ÖV.",
    features: [
      "Südbalkon",
      "Parkett",
      "Einbauküche",
      "Tiefgaragenplatz",
    ],
    tags: [
      { label: "Exklusiv", variant: "exclusive" },
    ],
    image: "https://images.pexels.com/photos/5524239/pexels-photo-5524239.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

export function getPropertyById(id: string): Property | undefined {
  return properties.find((p) => p.id === id);
}
