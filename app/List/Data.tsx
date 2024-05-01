import { MdLocationOn } from 'react-icons/md';
import { LiaCertificateSolid } from "react-icons/lia";
import { IoBookOutline } from "react-icons/io5";
import { MdOutlineMonetizationOn } from "react-icons/md";
import { FaCalendar } from "react-icons/fa";
import { IoCalendarSharp } from "react-icons/io5";
import { FaBuildingColumns } from "react-icons/fa6";
import { FaBuildingUser } from "react-icons/fa6";
import { BiSelectMultiple } from "react-icons/bi";
import { GrScorecard } from "react-icons/gr";
import { FaDollarSign } from "react-icons/fa";

export const Allfilterdata=[
    {
        "name":"Location",
        "icon": MdLocationOn
    },
    {
        "name":"Program Level",
        "icon": LiaCertificateSolid
    },
    {
        "name":"Discipline",
        "icon": IoBookOutline
    },
    {
        "name":"Tuition (USD)",
        "icon": MdOutlineMonetizationOn
    },
    {
        "name":"Intake",
        "icon": FaCalendar
    },
    {
        "name":"Program Duration",
        "icon": IoCalendarSharp
    },
    {
        "name":"School",
        "icon": FaBuildingColumns
    },
    {
        "name":"Co-op and Internship",
        "icon": FaBuildingUser
    },
    {
        "name":"English Score",
        "icon": BiSelectMultiple
    },
    {
        "name":"GMAT / GRE Score",
        "icon": GrScorecard
    },
    {
        "name":"Application Fee",
        "icon": FaDollarSign
    },

]

export const Datax = [
    {
        "name": "New York Culinary Institute",
        "course_name": "Culinary Arts",
        "short_name": "Culinary",
        "price": 40000,
        "duration": "1 years",
        "location": "USA",
        "address": "New York, USA",
        "logo": "https://bcassetcdn.com/public/blog/wp-content/uploads/2022/05/11161344/University-of-the-Philippines-Logo.png",
        "picture": "https://th.bing.com/th/id/R.f1ff3a4db5de5bed7112258f6b90f01a?rik=eYLT%2bL4SFXE7fw&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2f4%2f44%2fCardiff_University_main_building.jpg&ehk=8M7jOK5Ot3SN8AlrQbjoAm0ytdjaJwasY6FaHD6cULs%3d&risl=&pid=ImgRaw&r=0",
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
        "logo": "https://bcassetcdn.com/public/blog/wp-content/uploads/2022/05/11161344/University-of-the-Philippines-Logo.png",
        "picture": "https://th.bing.com/th/id/OIP.mvJWN9Qm4LWQZ659fGKGFgHaFj?w=640&h=480&rs=1&pid=ImgDetMain",
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
        "logo": "https://bcassetcdn.com/public/blog/wp-content/uploads/2022/05/11161344/University-of-the-Philippines-Logo.png",
        "picture": "https://www.timeshighereducation.com/student/sites/default/files/styles/default/public/2021-09/harvard-university-campus.jpg?itok=SK_1MUqi",
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
        "logo": "https://bcassetcdn.com/public/blog/wp-content/uploads/2022/05/11161344/University-of-the-Philippines-Logo.png",
        "picture": "https://www.timeshighereducation.com/student/sites/default/files/styles/default/public/2021-09/harvard-university-campus.jpg?itok=SK_1MUqi",
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
        "logo": "https://bcassetcdn.com/public/blog/wp-content/uploads/2022/05/11161532/Chicago-University-Logo.png",
        "picture": "https://www.timeshighereducation.com/student/sites/default/files/styles/default/public/2021-09/harvard-university-campus.jpg?itok=SK_1MUqi",
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
        "logo": "https://bcassetcdn.com/public/blog/wp-content/uploads/2022/05/11161532/Chicago-University-Logo.png",
        "picture": "https://media.licdn.com/dms/image/C4D12AQHaevI3GHB0KA/article-cover_image-shrink_600_2000/0/1631959208239?e=2147483647&v=beta&t=g9B3rFYssfOKDSTU5qzcH0YevXEWknYVZaqMqUc73Bo",
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
        "logo": "https://bcassetcdn.com/public/blog/wp-content/uploads/2022/05/11161532/Chicago-University-Logo.png",
        "picture": "https://media.licdn.com/dms/image/C4D12AQHaevI3GHB0KA/article-cover_image-shrink_600_2000/0/1631959208239?e=2147483647&v=beta&t=g9B3rFYssfOKDSTU5qzcH0YevXEWknYVZaqMqUc73Bo",
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
        "logo": "https://bcassetcdn.com/public/blog/wp-content/uploads/2022/05/11161532/Chicago-University-Logo.png",
        "picture": "https://media.licdn.com/dms/image/C4D12AQHaevI3GHB0KA/article-cover_image-shrink_600_2000/0/1631959208239?e=2147483647&v=beta&t=g9B3rFYssfOKDSTU5qzcH0YevXEWknYVZaqMqUc73Bo",
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
        "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScBWCUOwPhLpjIZ5W1XHFI7AnaAw8c37SA2Kvu0IN2z-I6cKhyq8VsN-3hXhQjYmXqMYY&usqp=CAU",
        "picture": "https://media.licdn.com/dms/image/C4D12AQHaevI3GHB0KA/article-cover_image-shrink_600_2000/0/1631959208239?e=2147483647&v=beta&t=g9B3rFYssfOKDSTU5qzcH0YevXEWknYVZaqMqUc73Bo",
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
        "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScBWCUOwPhLpjIZ5W1XHFI7AnaAw8c37SA2Kvu0IN2z-I6cKhyq8VsN-3hXhQjYmXqMYY&usqp=CAU",
        "picture": "https://wenr.wes.org/wp-content/uploads/2019/09/iStock-1142918319_WENR_Ranking_740_430.jpg",
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
        "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScBWCUOwPhLpjIZ5W1XHFI7AnaAw8c37SA2Kvu0IN2z-I6cKhyq8VsN-3hXhQjYmXqMYY&usqp=CAU",
        "picture": "https://media.licdn.com/dms/image/C4D12AQHaevI3GHB0KA/article-cover_image-shrink_600_2000/0/1631959208239?e=2147483647&v=beta&t=g9B3rFYssfOKDSTU5qzcH0YevXEWknYVZaqMqUc73Bo",
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
        "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScBWCUOwPhLpjIZ5W1XHFI7AnaAw8c37SA2Kvu0IN2z-I6cKhyq8VsN-3hXhQjYmXqMYY&usqp=CAU",
        "picture": "https://wenr.wes.org/wp-content/uploads/2019/09/iStock-1142918319_WENR_Ranking_740_430.jpg",
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
        "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScBWCUOwPhLpjIZ5W1XHFI7AnaAw8c37SA2Kvu0IN2z-I6cKhyq8VsN-3hXhQjYmXqMYY&usqp=CAU",
        "picture": "https://wenr.wes.org/wp-content/uploads/2019/09/iStock-1142918319_WENR_Ranking_740_430.jpg",
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
        "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScBWCUOwPhLpjIZ5W1XHFI7AnaAw8c37SA2Kvu0IN2z-I6cKhyq8VsN-3hXhQjYmXqMYY&usqp=CAU",
        "picture": "https://wenr.wes.org/wp-content/uploads/2019/09/iStock-1142918319_WENR_Ranking_740_430.jpg",
        "intake": ["Spring"],
        "program_level": "Diploma",
        "shortsummary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut mauris odio. Cras quis nisi vitae magna convallis venenatis. Duis dictum ipsum nec odio tristique, nec rutrum lorem varius. Phasellus quis lacus ut metus",
        "summary": "The Vancouver Baking School in Canada offers diploma programs in pastry and baking arts. Students master the techniques of baking and pastry making, creating delicious desserts and pastries. The program duration is 2 years. Located in Vancouver, students have access to a vibrant culinary scene.",
        "discipline": "Pastry and Baking Arts",
        "cost_of_living": "$65,000 per year",
        "fee": 280
    }
]


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
