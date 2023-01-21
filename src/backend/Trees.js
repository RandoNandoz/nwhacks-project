import { initializeApp } from "firebase/app";
import { getDataBase, ref, set } from "firebase/database";

const firebaseConfig = {

    apiKey: "AIzaSyDhQtFyzVzn8HyImunbxYc_dyzArZg0010",

    authDomain: "plantis-8ff44.firebaseapp.com",

    databaseURL: "https://plantis-8ff44-default-rtdb.firebaseio.com",

    projectId: "plantis-8ff44",

    storageBucket: "plantis-8ff44.appspot.com",

    messagingSenderId: "157187864759",

    appId: "1:157187864759:web:dc4a544c9f1082b0937532"

};

const app = initializeApp(firebaseConfig);

const db = getDataBase(app);

// const readPlantsFromDb() => {
//     const dbRef = db;
// }

const writePlantsToDb = () => {
    set(ref(
        db, 'plant_data/', {
        "Fern": {
            "name": "Fern",
            "description": "Ferns are vascular plants that reproduce via spores and have neither seeds nor flowers. They differ from mosses by being vascular plants with xylem and phloem and from liverworts by lacking a central strand of cells. The fronds of ferns may appear simple or compound. Ferns have been in existence for over 300 million years, and are the dominant plants in many environments. They are found in a wide variety of habitats, from tropical rainforests to alpine tundra. The spores of ferns are dispersed by wind or water. Ferns are an important food source for many animals, including humans. Ferns are also used as ornamental plants in gardens and as houseplants.",
            "image": "",
            "watering": "Water every 2-3 days",
            "lighting": "Bright indirect light",
            "temperature": "65-75 degrees",
            "humidity": "High humidity",
            "fertilizer": "Fertilize every 2 weeks",
            "toxicity": "Non-toxic",
            "pet-friendly": "Pet-friendly",
            "difficulty": "Easy",
            "size": "Small",
            "growth": "Slow",
            "type": "Fern",
        },
        "Chinese Evergreen": {
            "name": "Chinese Evergreen",
            "description": "The Chinese evergreen (Aglaonema) is a popular houseplant due to its low maintenance requirements. It is a member of the Araceae family, which includes many other popular houseplants such as the Philodendron and the Dieffenbachia. Chinese evergreens are native to Southeast Asia and are used in traditional Chinese medicine. They are also used in Feng Shui to bring good luck and fortune to the home. Chinese evergreens are available in a variety of colors and patterns, including white, green, and variegated. They are also available in a variety of sizes, including small, medium, and large. Chinese evergreens are easy to grow and care for. They are relatively low maintenance and can be grown indoors or outdoors. They are also easy to propagate. Chinese evergreens are an excellent choice for first-time plant owners. They are also a great choice for people who want to add a little color to their home without having to worry about maintenance. Chinese evergreens are also a good choice for people who are allergic to plants. They are non-toxic and non-irritating. Chinese evergreens are also a great choice for people who want to add a little color to their home without having to worry about maintenance. Chinese evergreens are also a good choice for people who are allergic to plants. They are non-toxic and non-irritating.",
            "image": "",
            "watering": "Water every 2-3 days",
            "lighting": "Bright indirect light",
            "temperature": "65-75 degrees",
            "humidity": "High humidity",
            "fertilizer": "Fertilize every 2 weeks",
            "toxicity": "Non-toxic",
            "pet-friendly": "Pet-friendly",
            "difficulty": "Easy",
            "size": "Small",
            "growth": "Slow",
            "type": "Chinese Evergreen",
        },
        "Monstera": {
            "name": "Monstera",
            "description": "The monstera (Monstera deliciosa) is a popular houseplant due to its large, beautiful leaves. It is a member of the Araceae family, which includes many other popular houseplants such as the Philodendron and the Dieffenbachia. Monstera are native to Central America and are used in traditional Central American medicine. They are also used in Feng Shui to bring good luck and fortune to the home. Monstera are available in a variety of colors and patterns, including white, green, and variegated. They are also available in a variety of sizes, including small, medium, and large. Monstera are easy to grow and care for. They are relatively low maintenance and can be grown indoors or outdoors. They are also easy to propagate. Monstera are an excellent choice for first-time plant owners. They are also a great choice for people who want to add a little color to their home without having to worry about maintenance. Monstera are also a good choice for people who are allergic to plants. They are non-toxic and non-irritating. Monstera are also a great choice for people who want to add a little color to their home without having to worry about maintenance. Monstera are also a good choice for people who are allergic to plants. They are non-toxic and non-irritating.",
            "image": "",
            "watering": "Water every 2-3 days",
            "lighting": "Bright indirect light",
            "temperature": "65-75 degrees",
            "humidity": "High humidity",
            "fertilizer": "Fertilize every 2 weeks",
            "toxicity": "Non-toxic",
            "pet-friendly": "Pet-friendly",
            "difficulty": "Easy",
            "size": "Small",
            "growth": "Slow",
            "type": "Monstera",
        },
        "Aloe Vera": {
            "name": "Aloe Vera",
            "description": "The aloe vera (Aloe vera) is a popular houseplant due to its large, beautiful leaves. It is a member of the Araceae family, which includes many other popular houseplants such as the Philodendron and the Dieffenbachia. Aloe vera are native to Central America and are used in traditional Central American medicine. They are also used in Feng Shui to bring good luck and fortune to the home. Aloe vera are available in a variety of colors and patterns, including white, green, and variegated. They are also available in a variety of sizes, including small, medium, and large. Aloe vera are easy to grow and care for. They are relatively low maintenance and can be grown indoors or outdoors. They are also easy to propagate. Aloe vera are an excellent choice for first-time plant owners. They are also a great choice for people who want to add a little color to their home without having to worry about maintenance. Aloe vera are also a good choice for people who are allergic to plants. They are non-toxic and non-irritating. Aloe vera are also a great choice for people who want to add a little color to their home without having to worry about maintenance. Aloe vera are also a good choice for people who are allergic to plants. They are non-toxic and non-irritating.",
            "image": "",
            "watering": "Water every 2-3 days",
            "lighting": "Bright indirect light",
            "temperature": "65-75 degrees",
            "humidity": "High humidity",
            "fertilizer": "Fertilize every 2 weeks",
            "toxicity": "Non-toxic",
            "pet-friendly": "Pet-friendly",
            "difficulty": "Easy",
            "size": "Small",
            "growth": "Slow",
            "type": "Aloe Vera",
        },
        "Snake Plant": {
            "name": "Snake Plant",
            "description": "The snake plant (Sansevieria trifasciata) is a popular houseplant due to its large, beautiful leaves. It is a member of the Araceae family, which includes many other popular houseplants such as the Philodendron and the Dieffenbachia. Snake plants are native to Central America and are used in traditional Central American medicine. They are also used in Feng Shui to bring good luck and fortune to the home. Snake plants are available in a variety of colors and patterns, including white, green, and variegated. They are also available in a variety of sizes, including small, medium, and large. Snake plants are easy to grow and care for. They are relatively low maintenance and can be grown indoors or outdoors. They are also easy to propagate. Snake plants are an excellent choice for first-time plant owners. They are also a great choice for people who want to add a little color to their home without having to worry about maintenance. Snake plants are also a good choice for people who are allergic to plants. They are non-toxic and non-irritating. Snake plants are also a great choice for people who want to add a little color to their home without having to worry about maintenance. Snake plants are also a good choice for people who are allergic to plants. They are non-toxic and non-irritating.",
            "image": "",
            "watering": "Water every 2-3 days",
            "lighting": "Bright indirect light",
            "temperature": "65-75 degrees",
            "humidity": "High humidity",
            "fertilize" : "Fertilize every 2 weeks",
            "toxicity": "Non-toxic",
            "pet-friendly": "Pet-friendly",
            "difficulty": "Easy",
            "size": "Small",
            "growth": "Slow",
            "type": "Snake Plant",
        },
        "Spider Plant": {},
        "Succulent": {},
        "Banana Plants": {}
    }
    ))
}