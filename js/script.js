var kosar = [];
var aktNyelv = 'hu';
var akciosok = [];

var pizzak = [
    { nev: "Szüzes Trón", ar: 3290, img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=600&q=80", desc: { hu: "Csípős szalámi, jalapeno, chili szósz.", en: "Spicy salami, jalapeno, chili sauce.", de: "Würzige Salami, Jalapeno, Chilisauce." } },
    { nev: "Vidéki Bőség", ar: 2890, img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=600&q=80", desc: { hu: "Bacon, lilahagyma, tejfölös alap, trappista.", en: "Bacon, red onion, sour cream base, trappist.", de: "Speck, rote Zwiebeln, Sauerrahmbasis, Trappistenkäse." } },
    { nev: "Sajtok Ura", ar: 2490, img: "https://images.unsplash.com/photo-1573821663912-569905455b1c?auto=format&fit=crop&w=600&q=80", desc: { hu: "Négyféle válogatott sajt, oregánó.", en: "Selection of four cheeses, oregano.", de: "Auswahl von vier Käsesorten, Oregano." } },
    { nev: "Erdő Kapitánya", ar: 2790, img: "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=600&q=80", desc: { hu: "Gomba, sonka, kukorica, paradicsom.", en: "Mushrooms, ham, corn, tomatoes.", de: "Pilze, Schinken, Mais, Tomaten." } },
    { nev: "Tengeri Szörny", ar: 3590, img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80", desc: { hu: "Tenger gyümölcsei, fokhagyma, citrom.", en: "Seafood mix, garlic, lemon zest.", de: "Meeresfrüchte, Knoblauch, Zitrone." } },
    { nev: "Zöld Lovag", ar: 2590, img: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&w=600&q=80", desc: { hu: "Spenót, feta sajt, fokhagyma, olíva.", en: "Spinach, feta cheese, garlic, olives.", de: "Spinat, Feta, Knoblauch, Oliven." } },
    { nev: "BBQ Báró", ar: 3190, img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80", desc: { hu: "Csirke, BBQ szósz, hagyma, bacon.", en: "Chicken, BBQ sauce, onion, bacon.", de: "Hähnchen, BBQ-Sauce, Zwiebel, Speck." } },
    { nev: "Udleti Bolond", ar: 2690, img: "https://www.foodandwine.com/thmb/iJw7N_NfcPpd-EB8rpYbzrkSFIM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/tomato-mozzarella-pizza-FT-RECIPE0725-e7244e979c504188a049623668c15b2e.jpg", desc: { hu: "Sonka, ananász, kukorica.", en: "Ham, pineapple, corn.", de: "Schinken, Ananas, Mais." } },
    { nev: "Magyar Vitéz", ar: 3090, img: "https://azureskproductionfs.blob.core.windows.net/azureskproduction/kamu-pizza-2-large-IJYABY.webp", desc: { hu: "Kolbász, hegyes erős, hagyma, tojás.", en: "Sausage, hot pepper, onion, egg.", de: "Wurst, scharfer Pfeffer, Zwiebel, Ei." } },
    { nev: "Fehér Hercegnő", ar: 2890, img: "https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?auto=format&fit=crop&w=600&q=80", desc: { hu: "Tejfölös alap, csirke, brokkoli.", en: "Sour cream base, chicken, broccoli.", de: "Sauerrahmbasis, Hähnchen, Brokkoli." } },
    { nev: "Arany Korona", ar: 2490, img: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?auto=format&fit=crop&w=600&q=80", desc: { hu: "Sonka, dupla kukorica, sajt.", en: "Ham, double corn, cheese.", de: "Schinken, doppelter Mais, Käse." } },
    { nev: "Sárkány Lehelet", ar: 3390, img: "https://images.unsplash.com/photo-1605478371310-a9f1e96b4ff4?auto=format&fit=crop&w=600&q=80", desc: { hu: "Extra csípős szósz, pepperoni, chili.", en: "Extra hot sauce, pepperoni, chili.", de: "Extra scharfe Sauce, Pepperoni, Chili." } },
    { nev: "Pármai Herceg", ar: 3490, img: "https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?auto=format&fit=crop&w=600&q=80", desc: { hu: "Pármai sonka, rukkola, parmezán.", en: "Parma ham, arugula, parmesan.", de: "Parmaschinken, Rucola, Parmesan." } },
    { nev: "Vega Várvédő", ar: 2590, img: "https://images.unsplash.com/photo-1458642849426-cfb724f15ef7?auto=format&fit=crop&w=600&q=80", desc: { hu: "Cukkini, padlizsán, paprika, gomba.", en: "Zucchini, eggplant, peppers, mushrooms.", de: "Zucchini, Auberginen, Paprika, Pilze." } },
    { nev: "Húsimádó Király", ar: 3690, img: "https://images.unsplash.com/photo-1506354666786-959d6d497f1a?auto=format&fit=crop&w=600&q=80", desc: { hu: "Sonka, szalámi, bacon, csirke.", en: "Ham, salami, bacon, chicken.", de: "Schinken, Salami, Speck, Hähnchen." } },
    { nev: "Calzone Lovag", ar: 2990, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Pizza_Margherita_stu_spivack.jpg/2560px-Pizza_Margherita_stu_spivack.jpg", desc: { hu: "Töltött pizza: sonka, gomba, sajt.", en: "Folded pizza: ham, mushrooms, cheese.", de: "Gefüllte Pizza: Schinken, Pilze, Käse." } },
    { nev: "Tonhalas Gróf", ar: 3190, img: "https://st5.depositphotos.com/16122460/73005/i/450/depositphotos_730057288-stock-photo-woman-taking-piece-tasty-pizza.jpg", desc: { hu: "Tonhal, olívabogyó, citrom, hagyma.", en: "Tuna, olives, lemon, onion.", de: "Thunfisch, Oliven, Zitrone, Zwiebel." } },
    { nev: "Kívánság Ura", ar: 3090, img: "https://images.unsplash.com/photo-1544982503-9f984c14501a?auto=format&fit=crop&w=600&q=80", desc: { hu: "5 választható feltét.", en: "5 toppings of your choice.", de: "5 Beläge nach Wahl." } },
    { nev: "Bolognai Bástya", ar: 2890, img: "https://images.unsplash.com/photo-1620374643809-b69c702d0ed4?auto=format&fit=crop&w=600&q=80", desc: { hu: "Bolognai ragu, sajt.", en: "Bolognese ragout, cheese.", de: "Bolognese-Ragout, Käse." } },
    { nev: "Királyi Lakoma", ar: 11990, img: "https://pizzagarden.hu/wp-content/uploads/2024/05/online-pizza-rendeles-budapest-pizza-garden.jpg", desc: { hu: "5 választható pizza az étlapról", en: "5 selectable pizzas from the menu", de: "5 auswählbare Pizzen aus dem Menü" } },
];

var szotar = {
    hu: {
        fooldal: "Étlap",
        foglalas: "Asztalfoglalás",
        koszontes: "A KIRÁLY VISSZATÉRT",
        szlogen: "Uralkodó ízek, fejedelmi kiszolgálás.",
        kosarba: "KOSÁRBA",
        kosar_cim: "KOSARAD",
        vegosszeg: "Összesen:",
        asztal_cim: "VÁLASSZON ASZTALT",
        vendegek_szama: "HÁNY FŐRE FOGLAL?",
        kivalasztott_asztal: "KIVÁLASZTOTT ASZTAL SZÁMA",
        nev: "TELJES NÉV",
        datum: "IDŐPONT",
        fizetes_gomb: "FIZETÉS",
        foglalas_veglegesit: "FOGLALÁS MEGERŐSÍTÉSE",
        kartya_adatok: "BANKKÁRTYA ADATOK",
        kartya_tulaj: "KÁRTYABIRTOKOS",
        kartya_szam: "KÁRTYASZÁM",
        lejarat: "LEJÁRAT",
        fizetes_veglegesit: "FIZETÉS"
    },
    en: {
        fooldal: "Menu",
        foglalas: "Book a Table",
        koszontes: "THE KING IS BACK",
        szlogen: "Ruling flavors, royal service.",
        kosarba: "ADD TO CART",
        kosar_cim: "YOUR CART",
        vegosszeg: "Total:",
        asztal_cim: "CHOOSE A TABLE",
        vendegek_szama: "NUMBER OF GUESTS?",
        kivalasztott_asztal: "SELECTED TABLE NUMBER",
        nev: "FULL NAME",
        datum: "DATE AND TIME",
        fizetes_gomb: "PAY",
        foglalas_veglegesit: "CONFIRM BOOKING",
        kartya_adatok: "CREDIT CARD DETAILS",
        kartya_tulaj: "CARDHOLDER",
        kartya_szam: "CARD NUMBER",
        lejarat: "EXPIRY",
        fizetes_veglegesit: "PAY"
    },
    de: {
        fooldal: "Speisekarte",
        foglalas: "Tischreservierung",
        koszontes: "DER KÖNIG IST ZURÜCK",
        szlogen: "Herrschende Aromen, königlicher Service.",
        kosarba: "IN DEN WARENKORB",
        kosar_cim: "WARENKORB",
        vegosszeg: "Gesamt:",
        asztal_cim: "TISCH WÄHLEN",
        vendegek_szama: "ANZAHL DER GÄSTE?",
        kivalasztott_asztal: "AUSGEWÄHLTE TISCHNUMMER",
        nev: "VOLLSTÄNDIGER NAME",
        datum: "ZEITPUNKT",
        fizetes_gomb: "BEZAHLEN",
        foglalas_veglegesit: "BUCHUNG BESTÄTIGEN",
        kartya_adatok: "KREDITKARTENDATEN",
        kartya_tulaj: "KARTENINHABER",
        kartya_szam: "KARTENNUMMER",
        lejarat: "ABLAUF",
        fizetes_veglegesit: "BEZAHLEN"
    }
};

while (akciosok.length < 3) {
    var r = Math.floor(Math.random() * pizzak.length);
    var benneVan = false;
    for (var i = 0; i < akciosok.length; i++) {
        if (akciosok[i] === r) {
            benneVan = true;
        }
    }
    if (benneVan == false) {
        akciosok.push(r);
    }
}

document.addEventListener('DOMContentLoaded', function () {

    if (localStorage.getItem('nyelv')) {
        aktNyelv = localStorage.getItem('nyelv');
    }

    var temaGomb = document.getElementById('temaGomb');
    var elmentettTema = localStorage.getItem('tema');

    if (elmentettTema === 'vilagos') {
        document.body.classList.add('vilagos-tema');
        if (temaGomb) { temaGomb.textContent = '☀️'; }
    } else {
        document.body.classList.remove('vilagos-tema');
        if (temaGomb) { temaGomb.textContent = '🌙'; }
    }

    if (temaGomb) {
        temaGomb.addEventListener('click', function () {
            if (document.body.classList.contains('vilagos-tema')) {
                document.body.classList.remove('vilagos-tema');
                this.textContent = '🌙';
                localStorage.setItem('tema', 'sotet');
            } else {
                document.body.classList.add('vilagos-tema');
                this.textContent = '☀️';
                localStorage.setItem('tema', 'vilagos');
            }
        });
    }

    function nyelvValtas() {
        var elemek = document.querySelectorAll('[data-lang]');
        for (var i = 0; i < elemek.length; i++) {
            var kulcs = elemek[i].getAttribute('data-lang');
            if (szotar[aktNyelv]) {
                if (szotar[aktNyelv][kulcs]) {
                    elemek[i].textContent = szotar[aktNyelv][kulcs];
                }
            }
        }
        menuKirajzolas();
        kosarFrissites();
    }

    nyelvValtas();

    var nyelvSelect = document.getElementById('nyelvValaszto');
    if (nyelvSelect) {
        nyelvSelect.value = aktNyelv;
        nyelvSelect.addEventListener('change', function () {
            aktNyelv = this.value;
            localStorage.setItem('nyelv', aktNyelv);
            nyelvValtas();
        });
    }

    function menuKirajzolas() {
        var doboz = document.getElementById('menuDoboz');
        if (doboz == null) { return; }

        doboz.innerHTML = '';
        var gombSzoveg = szotar[aktNyelv]['kosarba'];

        for (var i = 0; i < pizzak.length; i++) {
            var p = pizzak[i];
            var arHtml = '<span class="ar">' + p.ar + ' Ft</span>';
            var vegsoAr = p.ar;

            var akciosE = false;
            for (var j = 0; j < akciosok.length; j++) {
                if (akciosok[j] === i) {
                    akciosE = true;
                }
            }

            if (akciosE) {
                var kedvezmeny = Math.round(p.ar * 0.87 / 10) * 10;
                vegsoAr = kedvezmeny;
                arHtml = '<span class="eredeti-ar">' + p.ar + ' Ft</span>' +
                    '<span class="akcios-ar">' + vegsoAr + ' Ft</span>';
            }

            var div = document.createElement('div');
            div.className = 'kartya';
            var html = '<img src="' + p.img + '" alt="' + p.nev + '">';
            html = html + '<div class="kartya-tartalom">';
            html = html + '<h3>' + p.nev + '</h3>';
            html = html + '<p>' + p.desc[aktNyelv] + '</p>';
            html = html + '<div class="ar-sor">';
            html = html + '<div>' + arHtml + '</div>';
            html = html + '<button class="btn-kosar" onclick="kosarbaRak(\'' + p.nev + '\', ' + vegsoAr + ')">' + gombSzoveg + '</button>';
            html = html + '</div></div>';
            
            div.innerHTML = html;
            doboz.appendChild(div);
        }
    }

    var kosarGomb = document.getElementById('kosarGomb');
    var kosarDoboz = document.getElementById('kosarOldalsav');
    var kosarX = document.getElementById('kosarBezar');

    if (kosarGomb) {
        if (kosarDoboz) {
            kosarGomb.addEventListener('click', function () {
                kosarDoboz.classList.add('kosar-nyitva');
            });
            if (kosarX) {
                kosarX.addEventListener('click', function () {
                    kosarDoboz.classList.remove('kosar-nyitva');
                });
            }
        }
    }

    window.kosarbaRak = function (nev, ar) {
        var targy = { id: Date.now(), nev: nev, ar: ar };
        kosar.push(targy);
        kosarFrissites();
        if (kosarDoboz) {
            kosarDoboz.classList.add('kosar-nyitva');
        }
    };

    window.kosarTorles = function (id) {
        var ujKosar = [];
        for (var i = 0; i < kosar.length; i++) {
            if (kosar[i].id !== id) {
                ujKosar.push(kosar[i]);
            }
        }
        kosar = ujKosar;
        kosarFrissites();
    };

    function kosarFrissites() {
        var lista = document.getElementById('kosarLista');
        var vegosszegElem = document.getElementById('vegosszegErtek');
        var szamlalo = document.getElementById('kosarSzamlalo');

        if (lista == null) { return; }

        lista.innerHTML = '';
        var osszeg = 0;

        if (kosar.length === 0) {
            lista.innerHTML = '<p style="text-align: center; color: #666;">A kosár üres.</p>';
        } else {
            for (var i = 0; i < kosar.length; i++) {
                var elem = kosar[i];
                osszeg = osszeg + elem.ar;
                var sor = '<div class="kosar-elem">';
                sor = sor + '<div class="kosar-elem-info">';
                sor = sor + '<span class="kosar-elem-nev">' + elem.nev + '</span>';
                sor = sor + '<span class="kosar-elem-ar">' + elem.ar + ' Ft</span>';
                sor = sor + '</div>';
                sor = sor + '<button class="torles-gomb" onclick="kosarTorles(' + elem.id + ')">✕</button>';
                sor = sor + '</div>';
                lista.innerHTML = lista.innerHTML + sor;
            }
        }

        if (vegosszegElem) { vegosszegElem.textContent = osszeg + ' Ft'; }
        if (szamlalo) { szamlalo.textContent = kosar.length; }
    }

    var asztalok = document.querySelectorAll('.asztal');
    var asztalInput = document.getElementById('kivalasztottAsztalInput');
    var vendegInput = document.getElementById('vendegekSzamaInput');

    function szekRajzolas(doboz, db) {
        var regiek = doboz.querySelectorAll('.szek');
        for (var i = 0; i < regiek.length; i++) {
            regiek[i].remove();
        }

        var tavolsag = 40;
        for (var j = 0; j < db; j++) {
            var ujSzek = document.createElement('div');
            ujSzek.className = 'szek';

            var fok = j * (360 / db);
            var radian = fok * (Math.PI / 180);

            var x = 50 + tavolsag * Math.cos(radian);
            var y = 50 + tavolsag * Math.sin(radian);
            var forgatas = fok + 90;

            ujSzek.style.left = x + '%';
            ujSzek.style.top = y + '%';
            ujSzek.style.transform = 'translate(-50%, -50%) rotate(' + forgatas + 'deg)';

            doboz.appendChild(ujSzek);
        }
    }

    function asztalBetoltes() {
        if (asztalok.length === 0) { return; }

        var mentett = localStorage.getItem('asztalStatusz');
        var adatok = [];

        if (mentett) {
            adatok = JSON.parse(mentett);
        } else {
            for (var i = 0; i < asztalok.length; i++) {
                var azonosito = asztalok[i].getAttribute('data-id');
                var randomSzam = Math.random();
                var foglaltE = false;
                if (randomSzam < 0.3) {
                    foglaltE = true;
                }
                var vendegDb = Math.floor(Math.random() * 7) + 2;

                var targy = { id: azonosito, foglalt: foglaltE, vendeg: vendegDb };
                adatok.push(targy);
            }
            localStorage.setItem('asztalStatusz', JSON.stringify(adatok));
        }

        for (var k = 0; k < adatok.length; k++) {
            var adat = adatok[k];
            var asztalElem = document.querySelector('.asztal[data-id="' + adat.id + '"]');

            if (asztalElem) {
                if (adat.foglalt) {
                    asztalElem.classList.add('foglalt');
                    var szulo = asztalElem.parentElement;
                    szekRajzolas(szulo, adat.vendeg);
                }
            }
        }
    }

    function szabadAsztalFrissites() {
        if (!vendegInput) { return; }
        var szam = parseInt(vendegInput.value);
        if (isNaN(szam)) { szam = 1; }
        if (szam > 12) { szam = 12; }
        if (szam < 1) { szam = 1; }

        var dobozok = document.querySelectorAll('.asztal-wrapper');
        for (var i = 0; i < dobozok.length; i++) {
            var asztal = dobozok[i].querySelector('.asztal');
            if (!asztal.classList.contains('foglalt')) {
                szekRajzolas(dobozok[i], szam);
            }
        }
    }

    if (asztalok.length > 0) {
        asztalBetoltes();
        szabadAsztalFrissites();
        if (vendegInput) {
            vendegInput.addEventListener('input', szabadAsztalFrissites);
        }

        for (var i = 0; i < asztalok.length; i++) {
            asztalok[i].addEventListener('click', function () {
                if (this.classList.contains('foglalt')) { return; }

                for (var j = 0; j < asztalok.length; j++) {
                    asztalok[j].classList.remove('kivalasztva');
                }
                this.classList.add('kivalasztva');
                var id = this.getAttribute('data-id');
                if (asztalInput) { asztalInput.value = id; }
            });
        }
    }

    var foglalasBtn = document.getElementById('foglalasGomb');
    if (foglalasBtn) {
        foglalasBtn.addEventListener('click', function () {
            if (!asztalInput.value) {
                alert("Kérjük válasszon asztalt!");
                return;
            }

            var text = localStorage.getItem('asztalStatusz');
            var lista = [];
            if (text) { lista = JSON.parse(text); }

            var kivId = asztalInput.value;
            var fo = vendegInput.value;

            for (var i = 0; i < lista.length; i++) {
                if (lista[i].id == kivId) {
                    lista[i].foglalt = true;
                    lista[i].vendeg = fo;
                    break;
                }
            }

            localStorage.setItem('asztalStatusz', JSON.stringify(lista));
            alert("Asztalfoglalás sikeresen rögzítve!");
            location.reload();
        });
    }

    var fizetesGomb = document.getElementById('fizetesInditasGomb');
    var modal = document.getElementById('fizetesModal');
    var bezarGomb = document.querySelector('.bezar');

    if (fizetesGomb) {
        fizetesGomb.addEventListener('click', function () {
            if (kosar.length === 0) {
                alert("Üres kosárral nem lehet fizetni!");
                return;
            }
            modal.style.display = 'flex';
            if (kosarDoboz) { kosarDoboz.classList.remove('kosar-nyitva'); }
        });
    }

    if (bezarGomb) {
        if (modal) {
            bezarGomb.addEventListener('click', function () {
                modal.style.display = 'none';
            });
            window.addEventListener('click', function (e) {
                if (e.target == modal) {
                    modal.style.display = 'none';
                }
            });
        }
    }

    var veglegesites = document.getElementById('veglegesitesGomb');
    if (veglegesites) {
        veglegesites.addEventListener('click', function () {
            
            var nevMezo = document.getElementById('kartyaNev');
            var szamMezo = document.getElementById('kartyaSzam');
            var lejaratMezo = document.getElementById('kartyaLejarat');
            var cvcMezo = document.getElementById('kartyaCvc');

            var hiba = false;

            if (nevMezo.value.length === 0) { hiba = true; }
            if (szamMezo.value.length === 0) { hiba = true; }
            if (lejaratMezo.value.length === 0) { hiba = true; }
            if (cvcMezo.value.length === 0) { hiba = true; }

            if (hiba == true) {
                alert("Minden mezőt ki kell tölteni a fizetéshez!");
                return;
            }

            alert("Köszönjük a rendelést! A fizetés sikeres.");
            modal.style.display = 'none';
            kosar = [];
            kosarFrissites();
        });
    }

    var kartyaInput = document.getElementById('kartyaSzam');
    var tipusKijelzo = document.getElementById('kartyaTipus');

    if (kartyaInput) {
        if (tipusKijelzo) {
            kartyaInput.addEventListener('input', function () {
                var ertek = this.value;
                var kartyaNev = "";
                var szin = "";

                if (ertek.indexOf('4') === 0) {
                    kartyaNev = "VISA";
                    szin = "#4a90e2";
                } else if (ertek.indexOf('5') === 0) {
                    kartyaNev = "MasterCard";
                    szin = "#ff5f5f";
                }

                tipusKijelzo.textContent = kartyaNev;
                tipusKijelzo.style.color = szin;
            });
        }
    }

    var ikon = document.getElementById('hamburgerGomb');
    var mobilMenu = document.getElementById('navMenu');

    if (ikon) {
        if (mobilMenu) {
            ikon.addEventListener('click', function () {
                ikon.classList.toggle('aktiv');
                mobilMenu.classList.toggle('nyitva');
            });
        }
    }
});