"use client";

import React from 'react';
import Image from "next/image";

interface ResultEntry {
  position: number;
  name: string;
  points: string;
  dnf?: boolean;
}

const results: ResultEntry[] = [
  { position: 1, name: "Kraus", points: "99" },
  { position: 2, name: "Schopf", points: "78" },
  { position: 3, name: "Měkota", points: "75" },
  { position: 4, name: "Lžičař", points: "43" },
  { position: 5, name: "Wagner", points: "42" },
  { position: 6, name: "Slavík", points: "8" },
  { position: 7, name: "Burjan", points: "7" },
  { position: 8, name: "Macek", points: "5" },
  { position: 9, name: "Balabán", points: "-", dnf: true },
  { position: 10, name: "Rýzlerová", points: "-", dnf: true },
];

export function RaceReport2025() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Hero Image */}
        <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden shadow-xl mb-12">
          <Image
            src="/race-2025/IMG_6305.JPG"
            alt="Peloton Ronde Van Praageren 2025 na startu u Výstaviště"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 896px"
            priority
          />
        </div>

        {/* Headline */}
        <h2 className="text-4xl md:text-5xl font-bold text-dark-blue mb-6 leading-tight">
          Vítězem Ronde Van Praageren Jan Kraus
        </h2>

        {/* Intro/Subtitle Paragraph */}
        <p className="text-xl text-gray-700 mb-8 leading-relaxed border-l-4 border-primary pl-6">
          Bývalý medailista z Mistrovství Evropy na dráze a někdejší závodník pražské Dukly při neúčasti obhájce prvenství Jana Hudečka porazil své soupeře z CC Currywurst o třídu. Favorizovaní závodníci domácího klubu Filip Měkota a Michal Wagner nestačili přes své sofistikované tréninkové metody ani na druhého Davida Schopfa, který naopak netrénoval skoro vůbec.
        </p>

        {/* Paragraph 1 - with drop cap */}
        <p className="text-lg text-gray-800 mb-6 leading-relaxed">
          <span className="float-left text-6xl font-bold text-primary mr-3 mt-1 leading-none">P</span>
          raha. Jakmile se rozplynuly ranní mlhy nad Stromovkou, šlo rozpoznat charakteristické siluety závodníků CC Currywurst. Adam Burjan, který dorazil ze svého bydliště v dalekém Lipsku a nemohl podle svých slov dospat, nervózně popojížděl do poslední chvíle na startu sem a tam. Pátý ročník Ronde Van Praageren odstartoval v poklidné atmosféře, která však i tak byla plná očekávání. Tradiční závod po vzhůru vedoucích dlážděných úsecích v Praze a jejím okolí přilákal rekordní účast v podobě dvanácti závodníků. Jakmile se peloton propletl Stromovkou, opakoval se tradiční pohled z minulých let: vyhrané rovinaté segmenty v podání Janka Lžičaře. Otec myšlenky celého závodu si nenechává KOM na Secteur Pavé du Stromoffka uniknout už v podstatě od zavedení aplikace Strava. Drží jen s přestávkami v podobě diskutabilních výkonů kohosi se jménem Marek S-Works v podstatě od roku 2015. Důvod je prostý: žádný jiný cyklista není ochoten popřít pud sebezáchovy natolik, že by dokázal vjet do dlážděné zatáčky frekventované pejskaři a maminkami s kočárky padesátkou. Díky pravidelnému zahrnování gumových medvídku do svého obědového menu a váze, která už 10 let neklesla pod 80 kg, se však sádlem obalený bývalý dráhař neřadil k dnešním favoritům.
        </p>

        {/* Video 1 */}
        <div className="my-10">
          <video
            className="w-full rounded-lg shadow-lg"
            controls
            preload="metadata"
            poster="/race-2025/IMG_6305.JPG"
          >
            <source src="/race-2025/video-1.mp4" type="video/mp4" />
            <source src="/race-2025/IMG_4764.mov" type="video/quicktime" />
            Váš prohlížeč nepodporuje přehrávání videa.
          </video>
        </div>

        {/* Paragraph 2 */}
        <p className="text-lg text-gray-800 mb-6 leading-relaxed">
          Na dohled k legendární závodní zóně Buštěhrad, dostávají závodníci poslední pokyny ohledně uspořádání. Potom se rozpoutá peklo. Ze zdrcujícího tempa vyrazil v Lidicích Kraus, který nedal v prvním segmentu ostatním ani přičichnout. Jediný z účastníky se zkušenostmi z velké cyklisty brzy ukázal, jaká je mezi ním a ostatními výkonnostní propast. Před prvním průjezdem Buštěhradbergem panoval zdánlivý klid, ze kterého vyrazil prudkým nástupem Schopf, za ním Kraus a Lžičař. Schopfovo odbočení mimo trať však hned nesportovně ztrestali svým nástupem Lžičař s Krausem. Staršímu a tlustšímu z bývalých kolegů z Dukly ale brzo došel dech, pročež neměl jejich nástup dlouhého trvání. Zbytek vedoucí skupiny zatím dotáhl na čelo odhodlaný Michal Wagner. Plešatějící gravelista měl před závodem neochvějnou důvěru v tréninkový plán sestavený jeho distančním koučem Janem Kalivodou. Kalivoda je přitom zastáncem kontroverzních metod přípravy jako konzumace velkých množství coca coly před závody a zahrnutí intenzivního rychlostního tréninku v základním období v prosinci. Gravelový bicykl však Wagnerovi nestačil v druhém průjezdu Buštěhradbergem, kdy se stihl od pelotonu odpoutat nezdolný Filip Měkota. Bývalý veslař, která tak často sází na hrubou sílu z tahu, kterou s oblibou ničí své kolegy z CC Currywurst. Letos Měkota navázal spolupráci s Danielem Turkem, milovníkem kompenzace a někdejším vítězem etapy na slavném Okruhu Ardenami právě ve snaze vyrovnat se Michalu Wagnerovi. Měkotovu nástupu chvíli stačil jen Kraus, zatímco zbývající závodníci si mezi sebou jen vyměňovali zlomené pohledy. Poslední segment na Hengtsbergu si ale Měkota nechal pro sebe.
        </p>

        {/* Paragraph 3 */}
        <p className="text-lg text-gray-800 mb-6 leading-relaxed">
          Právě po závodní zóně Buštěhrad bývají většinou již karty rozdány, letos však byl závod ještě otevřený. Po obligátní každoroční pauze v kavárně v Hostivici na doplnění síl následovalo druhé dějství závodu. Výjezd na Bílou Horu jako by dodal novou krev do žil Adamu Burjanovi, který zatím hrál spíše druhé housle a jeho nástupy mimo bodované části závodu mu nenesly ovoce. Jen těsně milovníka mostů z pražského Motola porazil opět Kraus následovaný Wagnerem. Ani to však nestačilo na KOM, který drží od založení segmentu tajemný Jon Dahl Habasson. &bdquo;Nabrat nějaký komy&ldquo; ohlásil tehdy fantom pražské stravy a jal se den po založení segmentu nastolit čas, který se už léta nedaří nikomu překonat.
        </p>

        {/* Photo - Criterium at Strahov */}
        <figure className="my-10">
          <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/race-2025/IMG_6310.JPG"
              alt="Kritérium na Strahově - závěrečné kolo Ronde Van Praageren 2025"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 896px"
              loading="lazy"
            />
          </div>
          <figcaption className="text-center text-gray-600 mt-3 italic">
            Kritérium na Strahově - zlatý hřeb Ronde Van Praageren
          </figcaption>
        </figure>

        {/* Paragraph 4 */}
        <p className="text-lg text-gray-800 mb-6 leading-relaxed">
          Po přejezdu do Radlic a nelítostné sérii kopců Uiberg, Hlubočepy a Reservoirberg opakovaně bodoval Schopf marně stíhaný Měkotou s Wagnerem, ale nejvíce konzistentní zůstával Kraus. Za Uibergem závod opustila jediná žena ve startovním poli: statečná Lucie Rýzlerová zaznamenala defekt, který byl poslední hřebičkem do rakve jejího cyklistického výkonu na Ronde Van Praageren a zcela ji zlomil na mysli. Nepomohla jí ani asistence obětavého Adama Burjana, který s sebou tradičně vozí součástky, z nichž by se dal sestavit celý jeden nahradní bicykl. Lucka nemá závodění příliš v lásce, nebojí se však nových výzev, což ji přivedlo na start tradiční pražské kostkované klasiky tento rok. Ačkoliv letos musela nakonec sklopit hlavu, netají se tím, že chystá na příští rok sesterský ženský závod na téže trati. Traduje se totiž, že tempo trojice Wagner-Schopf-Měkota je natolik věhlasné, že žádná žena mimo Lucii o účasti ani neuvažovala. Není bez zajímavosti, že interakce Lucky a Adama při výměně duše měla později mnohem hlubší a intenzivnější dozvuky v podobě mezipohlavní synergie vrcholící v mj. podobě společných výletů do Polska a na Mečínovu svatbu.
        </p>

        {/* Video 2 */}
        <div className="my-10">
          <video
            className="w-full rounded-lg shadow-lg"
            controls
            preload="metadata"
          >
            <source src="/race-2025/video-2.mp4" type="video/mp4" />
            <source src="/race-2025/IMG_4767.mov" type="video/quicktime" />
            Váš prohlížeč nepodporuje přehrávání videa.
          </video>
        </div>

        {/* Paragraph 5 */}
        <p className="text-lg text-gray-800 mb-6 leading-relaxed">
          Vyhrocené závodění se neobešlo bez několika incidentů: při výjezdu na hlubočepský kopec se srazil Wagner s Burjanem, zatímco při přejezdu na Vinohrady došlo ke střetu autobusu se skupinkou cyklistů, který neměl daleko k fyzické srážce Slavíka s řidičem autobusu. Krátké kopce na východním břehu Vltavy však svědčily Schopfovi, který se svými výkony dotahoval na vedoucího Krause. Tradiční výjezd na Praagse Burchtberg byl spíše zkouškou vůle než čehokoliv jiného, přestože část závodníků nerespektovala neutralizaci mimo závodní zónu.
        </p>

        {/* Paragraph 6 */}
        <p className="text-lg text-gray-800 mb-6 leading-relaxed">
          Kritérium na Strahově, zlatý hřeb Ronde Van Praageren, mělo letos dramatický průběh. První sprint vyhrál Kraus před Lžičařem, nicméně rychlejšímu z obou bývalých závodníků Dukly přišlo, že tempo je příliš malé, pročež se jal vyrazit z pelotonu nástupem. Na to musel reagovat Měkota, který jako jediný dokázal Krause udržet aspoň na dohled. Ostatní závodníci za ním postupně hnili, když tempu v zatáčkách nestačil ani jinak skvěle jedoucí Wagner. Výkonem v závěrečném kritériu si Jan Kraus tak zpečetil triumf v celém závodě, který nechal zásoby energie všech závodníků naprosto prázdné.
        </p>

        {/* Video 3 */}
        <div className="my-10">
          <video
            className="w-full rounded-lg shadow-lg"
            controls
            preload="metadata"
          >
            <source src="/race-2025/video-3.mp4" type="video/mp4" />
            <source src="/race-2025/IMG_4770.mov" type="video/quicktime" />
            Váš prohlížeč nepodporuje přehrávání videa.
          </video>
        </div>

        {/* Paragraph 7 */}
        <p className="text-lg text-gray-800 mb-8 leading-relaxed">
          Za zmínku stojí, že závěrečného vyhlášení nejlepších závodníků odehrávajícího se tradičně v Burjasklepě se nezúčastnil Michal Wagner, který dříve slíbil, že se bude se svými přáteli věnovat v jakési skalní usedlosti hře v Dračí doupě. Později vyšlo najevo, že Michal hrál se svými kamarády až do čtyř hodin do rána.
        </p>

        {/* Results Table */}
        <div className="bg-gray-50 rounded-lg p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-dark-blue mb-6 text-center uppercase tracking-wide">
            Výsledky
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {results.map((result) => (
              <div
                key={result.position}
                className={`flex flex-col items-center p-4 rounded-lg ${
                  result.position === 1
                    ? "bg-yellow-accent/30 border-2 border-yellow-accent"
                    : result.position === 2
                    ? "bg-gray-200 border-2 border-gray-300"
                    : result.position === 3
                    ? "bg-amber-100 border-2 border-amber-300"
                    : "bg-white border border-gray-200"
                }`}
              >
                <span className="text-2xl font-bold text-dark-blue">
                  {result.position}.
                </span>
                <span className="font-semibold text-gray-800">{result.name}</span>
                <span className="text-sm text-gray-600">
                  {result.dnf ? "DNF" : `${result.points} b.`}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
