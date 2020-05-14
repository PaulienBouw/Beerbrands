#BeerBrand by Paulien Bouw
Dit project is gemaakt met de BreweryDB api. 
Deze opdracht heb ik gemaakt voor PXL Widgets. 
Ik laat hiermee zien hoever mijn codingskills zijn.

##Technische keuzes
* React. Ik heb gekozen om het project in React.js te maken. Hier heb ik mij in verdiept tijdens de opleiding aan Winc Academy. Ook heb ik hierna nog een project gemaakt voor journalisten. 

* Api calls. Ik heb besloten voor een 1-malige api call te gaan en dan alle data op te slaan in een state. Misschien dat dat voor een grotere database meerdere end points meer voor de hand liggend was. Maar met deze kleine database werkt dit prima. Ik kan mij voorstellen dat je bij een grote database per filteroptie een api call maakt.

* De filteropties heb ik opgeslagen in een state zodat de beerbrand lijst eenvoudig te filteren is.
Voor de filteropties heb ik de hele lijst met landnamen en de lijst types ook gefiltert zodat je maar 1x dezelfde waarde als select optie ziet.
Daarnaast heb ik een reset knop toegevoegd om weer opnieuw de hele lijst te zien.

* Weergave beerbrand items worden weergegeven met gebruik makende van de filter. Deze functie geeft zolang de filter states een lege string bevatten, de gehele lijst terug, anders alleen de gefilterde waarde.



