var pow = require('pow-mongodb-fixtures');
var fixtures = pow.connect('dbimmobilier');
var id = pow.createObjectId;
fixtures.clearAndLoad({
    immobiliers:[
        {
            "Id": "0",
            "categorie": "Appartement",
            "datedepos": "19 NOV 19:45",
            "description": "CAMPAGNE A Paris - AU DERNIER ETAGE D'UNE RÉSIDENCE DE BONNE FACTURE DE 2002 -DUPLEX - AU CALME - Comme une petite maison dans un environnement privilégié, ce beau 5 pièces traversant vous propose au premier niveau: une entrée desservant une cuisine indépendante aménagée et équipée (possibilité US), un séjour, 2 chambres une salle de bains et un WC indépendant. Au second niveau deux chambres et une salle de bains avec WC. A proximité des commerces. Coup de coeur assuré !! Place de parking. Charges courantes/an: 2 226.56 euros.Prix de vente indiqué comprenant honoraires d'agence pour 4,80 % TTC. Copropriété de 225 lots dont 112 appartements dont 5.00 % honoraires TTC à la charge de l'acquéreur. Copropriété de 225 lots Charges annuelles: 2226 e.",
            "imagePath": "http://i.f1g.fr/media/ext/1900x1900/madame.lefigaro.fr/sites/default/files/img/2015/07/lappartement-new-yorkais-de-julia-roberts-est-a-vendre.jpg",
            "price": "80.000",
            "titre": "Appartement 100 m à Sokra",
            "ville": "Ariana"
        },
        {
            "Id": "1",
            "categorie": "Villa",
            "datedepos": "25 OCT 06:23",
            "description": "JOLIE PROPRIÉTÉ COMPOSÉE D'UNE MANOIR 18ème, RESTAURATION DE GRANDE QUALITÉ AYANT GARDE LES ÉLÉMENTS D'ÉPOQUE (tomettes, boisereis,..). 2 DÉPENDANCES DONT 1 ANCIEN PRESSOIR AMENAGE. MAISON D'AMIS AVEC SALLE DE BILLARD BIBLIOTHÈQUE. PARC DE 1 HECTARE 6 AVEC TENNIS ET PISCINE CHAUFFÉE. MANOIR du XVIII: entrée, salon cheminée, séjour cheminée, WC laves mains, boudoir, cuisine aménagée équipée. Etage: 4 chambres, 3 salles de bains WC, dressing. PRESSOIR: entrée, 2 cuisines aménagées et équipées, salon cheminée, chambre, WC. Etage: 5 chambres, 2 salles de bains douches. MAISON EN COLOMBAGE: Salon billard bibliothèque, buanderie, WC, garage. Etage: pièce palière bureau, kitchenette, 2 chambres salle de bains, WC. Terrain de tennis, piscine chauffée avec pompe à chaleur. Abri de jardin. Parking extérieur. Terrain 1.6 hectare environ. ",
            "imagePath": "http://cdn.travelkeys.com/sites/all/themes/travelkeysv4/images/slides/villascaribe_1_0villa_wings_8441.jpg?nnazar",
            "price": "250.000",
            "titre": "Villa 200 m à Gamarth supérieur",
            "ville": "Ariana"
        },
        {
            "Id": "2",
            "categorie": "Comerce",
            "datedepos": "10 NOV 08:32",
            "description": "Frais de notaire réduits - passage boiton: Unique, au coeur de la Butte aux Cailles, venez découvrir cette magnifique maison de ville avec sa terrasse et son jardin. Dans une nouvelle résidence labelisée Bâtiment Basse Consommation (BBC) vous serez séduit par l'emplacement unique de ce bien. Sur la partie basse elle se compose d'une grande pièce de vie avec cuisine américaine, une chambres, une salle d'eau avec WC. A l'étage se trouve 2 chambres dont une avec dressing, une salle de bains et un WC séparé. Une cave complète ce bien. A 500m des métros place d'Italie - Corvisart. ",
            "imagePath": "http://imganuncios.mitula.net/fonds_de_commerce_boutique_mont_de_marsan_2870125478119290864.jpg",
            "price": "30.000",
            "titre": "Font de comerce Café à centre ville",
            "ville": "Ariana"
        },
        {
            "Id": "3",
            "categorie": "Comerce",
            "datedepos": "14 Mai 12:40",
            "description": "Votre agence immobilière APPARTISSY, vous propose une nouvelle maison de 4/5 pièces en parfait état. A 8 minutes de la mairie d'Issy, au calme, à l'arrière d'une autre maison, vous découvrirez une maison composée d'une très grande pièce à vivre avec cuisine US aménagée et équipée donnant sur la terrasse sans vis à vis plein sud, à l'étage 3 belle chambres donnant sur un balcon, salle de bains et salle d'eau. La maison est équipée en domotique, d'un récupérateur d'eau de pluie, parfaitement isolée et chauffée par le sol et un poêle à bois. La maison dispose d'un grand garage. A visiter très rapidement.",
            "imagePath": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNYh2_lajvJHInNIicwoQOOUysduvsQrh8JBBy2Qbwve_YBcCGSQ",
            "price": "20.000 DNT",
            "titre": "Font de comerce 7ammas",
            "ville": "Ariana"
        },
        {
            "Id":"4",
            "categorie": "Villa",
            "datedepos": "20 Mars 15:03",
            "description": "Rare. Belle maison à rénover, de 176m avec 54 m² en sous-sol. Possibilité de diviser en appartements ou grande famille. Situé en plein coeur de Paris entre le parc de la villette et les Buttes Chaumont dans une rue calme. Cette maison très lumineuse est composé de plusieurs niveaux, au premier niveau, elle dispose d'une grande entrée, une cuisine et un beau séjour avec belle hauteur sous plafond et beaucoup d'ouvertures. Au R + 1, une grande chambre double, une seconde chambre, une salle de bain, WC séparé et un débarras. Au R + 2,3 autres chambres, une salle de bain avec WC. Bel espace de 54 m² en sous-sol. Terrasse + jardinet. Possibilité parking dans la résidence. Nous contacter. ",
            "imagePath": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEsB40z9TvYTCLrDv2NtDmlMXtFa5_nxzyAlnPZl7iGvVyvw1_3w",
            "price": "290.000",
            "titre": "Villa à Sidi Rzig",
            "ville": "Ariana"
        },
        {
            "Id": "5",
            "categorie": "Appartement",
            "datedepos": "14 Mai 12:40",
            "description": "Maison calme et ensoleillée, de 155 m² habitables + cour pavée de 15 m², terrasse de 22 m², et sous-sol de 20 m². Rez-de-chaussée: salon, salle à manger, cuisine équipée, placards, cour pavée. 1er étage: 2 grandes chambres (dont une est divisible en deux petites), salle de bains, WC, placards, buanderie. 2ème étage: suite parentale (anciennement 2 chambres) avec salle de douche, WC, dressing, terrasse. Combles aménagés: grande chambre. Sous-sol avec caves et rangements. 2 Parking possibles (1 à la vente, l'autre en location) juste à côté. Beaucoup de charme, belle hauteur sous plafond, poutres apparentes. Proche écoles, parc Georges Brassens. Métro Plaisance (ligne 13) à 8 minutes et Convention (ligne 12) à 15 minutes. Tram T3, Bus n°62,89,91,95. ",
            "imagePath": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQNdOqBMyoHMg6x64StlEF2IqEsGks8yOkcUzHEceWN8-INjX1S",
            "price": "150.000",
            "titre": "Appartement à Ariana",
            "ville": "Ariana"
        }
    ]
});