const questionDisplay = document.getElementById('questions');
const answerDisplay = document.getElementById('answer');

const questions = [
    {
        id: 0,
        text: "Pick a vacation destination:",
        answers: [
            {
                text: "New York",
                image: "https://en.wikipedia.org/wiki/File:View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu.jpg",
                alt: "Photo of the empire state building during daytime",
                credit: "Oliver Niblett"
            },
            {
                text: "Austin",
                image: "https://en.wikipedia.org/wiki/File:Austin_August_2019_19_(skyline_and_Lady_Bird_Lake).jpg",
                alt: "Time-lapse photography car lights on bridge",
                credit: "Carlos Alfonso"
            },
            {
                text: "Portland",
                image: "https://en.wikipedia.org/wiki/File:Portland_and_Mt._Hood_from_Pittock_Mansion.jpg",
                alt: "High rise buildings",
                credit: "Elena Kuchko"
            },
            {
                text: "New Orleans",
                image: "https://en.wikipedia.org/wiki/File:New_Orleans_skyline-02.jpg",
                alt: "Road with people and house",
                credit: "Joao Francisco"
            }
        ]
    },
    {
        id: 1,
        text: "Pick some food",
        answers: [
            {
                text: "Pizza",
                image: "https://en.wikipedia.org/wiki/File:Eq_it-na_pizza-margherita_sep2005_sml.jpg",
                alt: "Pepperoni Pizza",
                credit: "Alan Hardman"
            },
            {
                text: "Sandwich",
                image: "https://en.wikipedia.org/wiki/File:Egg_Sandwich.jpg",
                alt: "Sandwich",
                credit: "Eaters Collective"
            },
            {
                text: "Pasta",
                image: "https://en.wikipedia.org/wiki/File:(Pasta)_by_David_Adam_Kess_(pic.2).jpg",
                alt: "Pasta in tomato sauce",
                credit: "Mgg Vitchakorn"
            },
            {
                text: "Hamburger",
                image: "https://en.wikipedia.org/wiki/File:Hamburger_(black_bg).jpg",
                alt: "Hamburger",
                credit: "sk"
            }

        ]
    },
    {
        id: 2,
        text: "Pick a home",
        answers: [
            {
                text: "Traditional",
                image: "https://en.wikipedia.org/wiki/File:248_Ashley_Ave_-_2017.jpg",
                alt: "focus photography of building windows",
                credit: "Burgess Milner"
            },
            {
                text: "Modern",
                image: "https://en.wikipedia.org/wiki/File:Bamboo_House_in_Sambava_Madagascar.JPG",
                alt: "low angle view of building",
                credit: "Brandon Giggs"
            },
            {
                text: "House",
                image: "https://en.wikipedia.org/wiki/File:9,_Strada_Mitropolit_Nifon,_Bucharest_(Romania).jpg",
                alt: "trees besides white house",
                credit: "Phil Hearing"
            },
            {
                text: "Mountains",
                image: "https://en.wikipedia.org/wiki/File:Deras-TreeHouse.JPG",
                alt: "brown wooden cabin infront of forest",
                credit: "eulauretta"
            }
        ]
    }
]

const populateQuestions = () => {
    questions.forEach(question => {
        const titleBlock = document.createElement('div');
        titleBlock.id = question.id;
        titleBlock.classList.add('title-block');

        questionDisplay.append(titleBlock);
    })
}

populateQuestions();