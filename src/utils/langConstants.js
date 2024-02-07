export const ALL_LANGUAGES = {
  en: {
    search: "Search",
    gptSearchPlaceholder: "What do you want to watch today?",
    disclaimer:
      "As, I don't have OPEN AI tier-1 subscription, i can't access the API and so, I have taken hard coded data of movies and search those movies inside TMDB database. Just click search button and you will get the results",
  },
  hindi: {
    search: "खोज",
    gptSearchPlaceholder: "आज आप क्या देखना चाहते हैं?",
    disclaimer:
      "चूंकि, मेरे पास ओपन एआई टियर-1 सदस्यता नहीं है, मैं एपीआई तक नहीं पहुंच सकता और इसलिए, मैंने फिल्मों का हार्ड कोडित डेटा लिया है और उन फिल्मों को टीएमडीबी डेटाबेस के अंदर खोजा है। बस खोज बटन पर क्लिक करें और आपको परिणाम मिल जाएंगे",
  },
  italian: {
    search: "ricerca",
    gptSearchPlaceholder: "Cosa vuoi guardare oggi?",
    disclaimer:
      "Poiché non ho un abbonamento OPEN AI tier-1, non riesco ad accedere all'API e quindi ho preso i dati codificati dei film e li ho cercati all'interno del database TMDB. Basta fare clic sul pulsante di ricerca e otterrai i risultati",
  },
  french: {
    search: "recherche",
    gptSearchPlaceholder: "Que veux-tu regarder aujourd’hui ?",
    disclaimer:
      "Comme je n'ai pas d'abonnement OPEN AI niveau 1, je ne peux pas accéder à l'API et j'ai donc pris des données codées en dur de films et recherché ces films dans la base de données TMDB. Cliquez simplement sur le bouton de recherche et vous obtiendrez les résultats",
  },
};

export const SUPPORTED_LANGUAGES = [
  {
    identifier: "en",
    name: "English",
  },
  {
    identifier: "hindi",
    name: "Hindi",
  },
  {
    identifier: "french",
    name: "French",
  },
  {
    identifier: "italian",
    name: "Italian",
  },
];
