import { IData } from "../type/type"

export const Data = [
    {
        "name": "New York Culinary Institute",
        "course_name": "Culinary Arts",
        "short_name": "Culinary",
        "price": 40000,
        "duration": "1 years",
        "location": "USA",
        "address": "New York, USA",
        "logo": "https://example.com/logo_nyci.png",
        "picture": "https://example.com/picture_nyci.jpg",
        "intake": ["Fall", "Spring"],
        "program_level": "Undergraduate",
        "shortsummary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut mauris odio. Cras quis nisi vitae magna convallis venenatis. Duis dictum ipsum nec odio tristique, nec rutrum lorem varius. Phasellus quis lacus ut metus",
        "summary": "The New York Culinary Institute in the USA offers undergraduate programs in culinary arts. Students learn a variety of cooking techniques from around the world. The program duration is 2 years. Located in New York, students have access to diverse culinary experiences, from street food to fine dining.",
        "discipline": "Culinary Arts",
        "cost_of_living": "$70,000 per year",
        "fee": 300
    },
    {
        "name": "Toronto Baking Academy",
        "course_name": "Pastry and Baking Arts",
        "short_name": "Baking",
        "price": 35000,
        "duration": "2 years",
        "location": "Canada",
        "address": "Toronto, Canada",
        "logo": "https://example.com/logo_tba.png",
        "picture": "https://example.com/picture_tba.jpg",
        "intake": ["Fall"],
        "program_level": "Certificate",
        "shortsummary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut mauris odio. Cras quis nisi vitae magna convallis venenatis. Duis dictum ipsum nec odio tristique, nec rutrum lorem varius. Phasellus quis lacus ut metus",
        "summary": "The Toronto Baking Academy in Canada offers certificate programs in pastry and baking arts. Students learn the art of creating delicious pastries, bread, and desserts. The program duration is 2 years. Located in Toronto, students have access to a rich culinary heritage and diverse food scene.",
        "discipline": "Pastry and Baking Arts",
        "cost_of_living": "$60,000 per year",
        "fee": 250
    },
    {
        "name": "London Culinary Management School",
        "course_name": "Culinary Management",
        "short_name": "Management",
        "price": 42000,
        "duration": "3 years",
        "location": "UK",
        "address": "London, UK",
        "logo": "https://example.com/logo_lcms.png",
        "picture": "https://example.com/picture_lcms.jpg",
        "intake": ["Fall", "Spring"],
        "program_level": "Associate Degree",
        "shortsummary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut mauris odio. Cras quis nisi vitae magna convallis venenatis. Duis dictum ipsum nec odio tristique, nec rutrum lorem varius. Phasellus quis lacus ut metus",

        "summary": "The London Culinary Management School in the UK offers associate degree programs in culinary management. Students learn the art of managing and operating culinary businesses, including restaurants, hotels, and catering services. The program duration is 2 years. Located in London, students have access to a vibrant culinary scene.",
        "discipline": "Culinary Management",
        "cost_of_living": "£55,000 per year",
        "fee": 320
    },
    {
        "name": "Sydney Culinary Nutrition Institute",
        "course_name": "Culinary Nutrition",
        "short_name": "Nutrition",
        "price": 37000,
        "duration": "2 years",
        "location": "Australia",
        "address": "Sydney, Australia",
        "logo": "https://example.com/logo_scni.png",
        "picture": "https://example.com/picture_scni.jpg",
        "intake": ["Fall"],
        "program_level": "Diploma",
        "shortsummary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut mauris odio. Cras quis nisi vitae magna convallis venenatis. Duis dictum ipsum nec odio tristique, nec rutrum lorem varius. Phasellus quis lacus ut metus",

        "summary": "The Sydney Culinary Nutrition Institute in Australia offers diploma programs in culinary nutrition. Students explore the relationship between food and health, learning to create nutritious and balanced meals. The program duration is 2 years. Located in Sydney, students have access to a diverse food scene.",
        "discipline": "Culinary Nutrition",
        "cost_of_living": "$75,000 per year",
        "fee": 260
    },
    {
        "name": "Paris Gastronomy Academy",
        "course_name": "Gastronomy",
        "short_name": "Gastronomy",
        "price": 43000,
        "duration": "1 years",
        "location": "France",
        "address": "Paris, France",
        "logo": "https://example.com/logo_pga.png",
        "picture": "https://example.com/picture_pga.jpg",
        "intake": ["Spring"],
        "program_level": "Bachelor's Degree",
        "shortsummary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut mauris odio. Cras quis nisi vitae magna convallis venenatis. Duis dictum ipsum nec odio tristique, nec rutrum lorem varius. Phasellus quis lacus ut metus",

        "summary": "The Paris Gastronomy Academy in France offers bachelor's degree programs in gastronomy. Students delve into the cultural and social aspects of food, exploring culinary traditions from around the world. The program duration is 2 years. Located in Paris, students experience the vibrant food culture of France.",
        "discipline": "Gastronomy",
        "cost_of_living": "€8,000 per year",
        "fee": 300
    },
    {
        "name": "Tokyo Sustainable Cooking Institute",
        "course_name": "Sustainable Culinary Arts",
        "short_name": "Sustainable",
        "price": 39000,
        "duration": "3 years",
        "location": "Japan",
        "address": "Tokyo, Japan",
        "logo": "https://example.com/logo_tsci.png",
        "picture": "https://example.com/picture_tsci.jpg",
        "intake": ["Fall"],
        "program_level": "Master's Degree",
        "shortsummary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut mauris odio. Cras quis nisi vitae magna convallis venenatis. Duis dictum ipsum nec odio tristique, nec rutrum lorem varius. Phasellus quis lacus ut metus",

        "summary": "The Tokyo Sustainable Cooking Institute in Japan offers master's degree programs in sustainable culinary arts. Students focus on environmentally friendly and ethical practices in food production, emphasizing sustainability and responsible sourcing. The program duration is 2 years. Located in Tokyo, students experience a city known for its culinary innovation.",
        "discipline": "Sustainable Culinary Arts",
        "cost_of_living": "¥7,000,000 per year",
        "fee": 270
    },
    {
        "name": "California Culinary Institute",
        "course_name": "Culinary Arts",
        "short_name": "Culinary",
        "price": 38000,
        "duration": "4 years",
        "location": "USA",
        "address": "California, USA",
        "logo": "https://example.com/logo_california.png",
        "picture": "https://example.com/picture_california.jpg",
        "intake": ["Fall"],
        "program_level": "Undergraduate",
        "shortsummary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut mauris odio. Cras quis nisi vitae magna convallis venenatis. Duis dictum ipsum nec odio tristique, nec rutrum lorem varius. Phasellus quis lacus ut metus",

        "summary": "The California Culinary Institute in the USA offers undergraduate programs in culinary arts. Students learn a variety of cooking techniques and culinary traditions. The program duration is 2 years. Located in California, students have access to a diverse culinary scene and fresh, local ingredients.",
        "discipline": "Culinary Arts",
        "cost_of_living": "$80,000 per year",
        "fee": 280
    },
    {
        "name": "Montreal Pastry School",
        "course_name": "Pastry and Baking Arts",
        "short_name": "Pastry",
        "price": 36000,
        "duration": "4 years",
        "location": "Canada",
        "address": "Montreal, Canada",
        "logo": "https://example.com/logo_mps.png",
        "picture": "https://example.com/picture_mps.jpg",
        "intake": ["Spring"],
        "program_level": "Certificate",
        "shortsummary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut mauris odio. Cras quis nisi vitae magna convallis venenatis. Duis dictum ipsum nec odio tristique, nec rutrum lorem varius. Phasellus quis lacus ut metus",

        "summary": "The Montreal Pastry School in Canada offers certificate programs in pastry and baking arts. Students master the art of creating delicious pastries, bread, and desserts. The program duration is 2 years. Located in Montreal, students have access to a rich culinary heritage and diverse food scene.",
        "discipline": "Pastry and Baking Arts",
        "cost_of_living": "$65,000 per year",
        "fee": 270
    },
    {
        "name": "London Culinary Business School",
        "course_name": "Culinary Management",
        "short_name": "Management",
        "price": 41000,
        "duration": "2 years",
        "location": "UK",
        "address": "London, UK",
        "logo": "https://example.com/logo_lcbs.png",
        "picture": "https://example.com/picture_lcbs.jpg",
        "intake": ["Fall"],
        "program_level": "Diploma",
        "shortsummary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut mauris odio. Cras quis nisi vitae magna convallis venenatis. Duis dictum ipsum nec odio tristique, nec rutrum lorem varius. Phasellus quis lacus ut metus",

        "summary": "The London Culinary Business School in the UK offers diploma programs in culinary management. Students gain the skills and knowledge to manage culinary operations effectively. The program duration is 2 years. Located in London, students have access to a vibrant culinary scene and industry connections.",
        "discipline": "Culinary Management",
        "cost_of_living": "£60,000 per year",
        "fee": 300
    },
    {
        "name": "Melbourne Culinary Nutrition Institute",
        "course_name": "Culinary Nutrition",
        "short_name": "Nutrition",
        "price": 37000,
        "duration": "18 months",
        "location": "Australia",
        "address": "Melbourne, Australia",
        "logo": "https://example.com/logo_mni.png",
        "picture": "https://example.com/picture_mni.jpg",
        "intake": ["Spring"],
        "program_level": "Bachelor's Degree",
        "shortsummary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut mauris odio. Cras quis nisi vitae magna convallis venenatis. Duis dictum ipsum nec odio tristique, nec rutrum lorem varius. Phasellus quis lacus ut metus",

        "summary": "The Melbourne Culinary Nutrition Institute in Australia offers bachelor's degree programs in culinary nutrition. Students explore the connection between food and health, learning to create nutritious and delicious meals. The program duration is 2 years. Located in Melbourne, students have access to a diverse and multicultural food scene.",
        "discipline": "Culinary Nutrition",
        "cost_of_living": "$70,000 per year",
        "fee": 250
    },
    {
        "name": "Paris Gastronomy School",
        "course_name": "Gastronomy",
        "short_name": "Gastronomy",
        "price": 42000,
        "duration": "18 months",
        "location": "France",
        "address": "Paris, France",
        "logo": "https://example.com/logo_pgs.png",
        "picture": "https://example.com/picture_pgs.jpg",
        "intake": ["Spring"],
        "program_level": "Master's Degree",
        "shortsummary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut mauris odio. Cras quis nisi vitae magna convallis venenatis. Duis dictum ipsum nec odio tristique, nec rutrum lorem varius. Phasellus quis lacus ut metus",

        "summary": "The Paris Gastronomy School in France offers master's degree programs in gastronomy. Students delve into the cultural and social aspects of food, exploring culinary traditions from around the world. The program duration is 2 years. Located in Paris, students experience the vibrant food culture of France.",
        "discipline": "Gastronomy",
        "cost_of_living": "€55,000 per year",
        "fee": 280
    },
    {
        "name": "Osaka Sustainable Cooking Academy",
        "course_name": "Sustainable Culinary Arts",
        "short_name": "Sustainable",
        "price": 38000,
        "duration": "2 years",
        "location": "Japan",
        "address": "Osaka, Japan",
        "logo": "https://example.com/logo_osca.png",
        "picture": "https://example.com/picture_osca.jpg",
        "intake": ["Fall", "Spring"],
        "shortsummary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut mauris odio. Cras quis nisi vitae magna convallis venenatis. Duis dictum ipsum nec odio tristique, nec rutrum lorem varius. Phasellus quis lacus ut metus",

        "program_level": "Associate Degree",
        "summary": "The Osaka Sustainable Cooking Academy in Japan offers associate degree programs in sustainable culinary arts. Students focus on environmentally friendly and ethical practices in food production, emphasizing sustainability and responsible sourcing. The program duration is 2 years. Located in Osaka, students have access to a vibrant food culture and bustling culinary scene.",
        "discipline": "Sustainable Culinary Arts",
        "cost_of_living": "¥70,000 per year",
        "fee": 260
    },
    {
        "name": "Los Angeles Culinary Institute",
        "course_name": "Culinary Arts",
        "short_name": "Culinary",
        "price": 41000,
        "duration": "3 years",
        "location": "USA",
        "address": "Los Angeles, USA",
        "logo": "https://example.com/logo_laci.png",
        "picture": "https://example.com/picture_laci.jpg",
        "intake": ["Fall"],
        "program_level": "Undergraduate",
        "shortsummary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut mauris odio. Cras quis nisi vitae magna convallis venenatis. Duis dictum ipsum nec odio tristique, nec rutrum lorem varius. Phasellus quis lacus ut metus",

        "summary": "The Los Angeles Culinary Institute in the USA offers undergraduate programs in culinary arts. Students learn a variety of culinary techniques and skills. The program duration is 2 years. Located in Los Angeles, students have access to a diverse culinary scene and opportunities for hands-on experience.",
        "discipline": "Culinary Arts",
        "cost_of_living": "$75,000 per year",
        "fee": 270
    },
    {
        "name": "Vancouver Baking School",
        "course_name": "Pastry and Baking Arts",
        "short_name": "Baking",
        "price": 37000,
        "duration": "1 years",
        "location": "Canada",
        "address": "Vancouver, Canada",
        "logo": "https://example.com/logo_vbs.png",
        "picture": "https://example.com/picture_vbs.jpg",
        "intake": ["Spring"],
        "program_level": "Diploma",
        "shortsummary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut mauris odio. Cras quis nisi vitae magna convallis venenatis. Duis dictum ipsum nec odio tristique, nec rutrum lorem varius. Phasellus quis lacus ut metus",
        "summary": "The Vancouver Baking School in Canada offers diploma programs in pastry and baking arts. Students master the techniques of baking and pastry making, creating delicious desserts and pastries. The program duration is 2 years. Located in Vancouver, students have access to a vibrant culinary scene.",
        "discipline": "Pastry and Baking Arts",
        "cost_of_living": "$65,000 per year",
        "fee": 280
    }
]
export const Datax = Data.map(entry => {
    return {
        ...entry,
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Harvard_University_coat_of_arms.svg/800px-Harvard_University_coat_of_arms.svg.png",
        picture: "https://images.collegedunia.com/public/college_data/images/studyabroad/appImage/college_1090_29-15:00_o-HARVARD-UNIVERSITY-BUILDING-facebook.jpeg"
    };
});

export const datafilter = [
    "Location",
    "Program Levels",
    "Discipline",
    "Tuition Fee (USD)",
    "Intake"
]

export const Location = [
    "USA",
    "Canada",
    "Uk",
    "France",
    "Japan",
    "Austrila"
]
export const Program = ["Undergraduate", "Certificate", "Diploma", "Associate Degree", "Bachelor's Degree", "Master's Degree"]
export const Discpline = ["Culinary Arts", "Pastry and Baking Arts", "Culinary Management", "Culinary Nutrition", "Gastronomy", "Sustainable Culinary Arts"]
export const Price = [
    "0 - $10,000",
    "$10,000 - $20,000",
    "$20,000 - $40,000",
    "$40,000 - $60,000",
]
export const Intake = [
    "Spring",
    "Fall",
]
export const Duration = [
    "18 months",
    "1 year",
    "2 years",
    "3 years",
    "4 years",
]

export const Sort = [
    "Tuition cost (Low to High)",
    "Tuition cost (High to Low)",
    "Application fee (Low to High)",
    "Application fee (High to Low)",
]

export function addCommas(number: number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
