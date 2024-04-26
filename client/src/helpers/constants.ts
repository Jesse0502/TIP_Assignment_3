export const server_endpoint = "http://localhost:3000";

export const science_quiz: {
  name: string;
  questions: number;
  rating: number;
  duration: string;
  image: string;
  quiz: {
    question: string;
    options: string[];
    answer: string;
    explanation: string;
  }[];
} = {
  name: "Science Quiz",
  questions: 10,
  rating: 4,
  duration: "20min",
  image:
    "https://static.vecteezy.com/system/resources/thumbnails/013/717/509/small/school-education-and-science-doodle-background-free-vector.jpg",

  quiz: [
    {
      question: "What is the chemical symbol for Hydrogen?",
      options: ["Hg", "Ho", "H", "Ha"],
      answer: "H",
      explanation:
        "The chemical symbol for Hydrogen is 'H'. It is the lightest and most abundant element in the universe.",
    },
    {
      question: "What is Air Composed of?",
      options: ["Air", "Choppers", "Coffins", "Cheese"],
      answer: "Air",
      explanation:
        "Air is primarily composed of nitrogen (78%) and oxygen (21%), with trace amounts of other gases.",
    },
    {
      question: "What is the symbol for Gold?",
      options: ["Go", "Au", "Ag", "Gi"],
      answer: "Au",
      explanation:
        "The symbol for Gold is 'Au', derived from the Latin word 'aurum'. Gold is a precious metal known for its value and uses in jewelry and electronics.",
    },
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Rome"],
      answer: "Paris",
      explanation:
        "The capital of France is Paris. It is renowned for its art, culture, fashion, and iconic landmarks such as the Eiffel Tower.",
    },
    {
      question: "Who invented the light bulb?",
      options: [
        "Thomas Edison",
        "Nikola Tesla",
        "Alexander Graham Bell",
        "Albert Einstein",
      ],
      answer: "Thomas Edison",
      explanation:
        "Thomas Edison is credited with inventing the practical incandescent light bulb, revolutionizing the way we illuminate our world.",
    },
    {
      question: "What is the largest planet in our solar system?",
      options: ["Venus", "Jupiter", "Saturn", "Earth"],
      answer: "Jupiter",
      explanation:
        "Jupiter is the largest planet in our solar system. It is a gas giant with a vast atmosphere and iconic storm systems like the Great Red Spot.",
    },
    {
      question: "What is the powerhouse of the cell?",
      options: ["Mitochondria", "Nucleus", "Ribosome", "Chloroplast"],
      answer: "Mitochondria",
      explanation:
        "Mitochondria are often called the powerhouse of the cell. They generate energy (ATP) through cellular respiration, vital for cell function.",
    },
    {
      question: "Who developed the theory of relativity?",
      options: [
        "Isaac Newton",
        "Albert Einstein",
        "Galileo Galilei",
        "Stephen Hawking",
      ],
      answer: "Albert Einstein",
      explanation:
        "Albert Einstein developed the theory of relativity, which revolutionized our understanding of space, time, and gravity.",
    },
    {
      question: "Who discovered penicillin?",
      options: [
        "Alexander Fleming",
        "Albert Einstein",
        "Marie Curie",
        "Isaac Newton",
      ],
      answer: "Alexander Fleming",
      explanation:
        "Alexander Fleming discovered penicillin, the first widely used antibiotic that revolutionized medicine and saved countless lives.",
    },
    {
      question: "What is the atomic number of carbon?",
      options: ["6", "8", "12", "14"],
      answer: "6",
      explanation:
        "The atomic number of carbon is 6, making it the sixth element on the periodic table. Carbon is essential for life and forms the basis of organic compounds.",
    },
  ],
};

export const math_quiz: {
  name: string;
  questions: number;
  rating: number;
  duration: string;
  image: string;
  quiz: {
    question: string;
    options: string[];
    answer: string;
    explanation: string;
  }[];
} = {
  name: "Math Quiz",
  questions: 10,
  rating: 4,
  duration: "20min",
  image:
    "https://t3.ftcdn.net/jpg/04/83/90/18/360_F_483901821_46VsNR67uJC3xIKQN4aaxR6GtAZhx9G8.jpg",
  quiz: [
    {
      question: "What is the value of pi (π) to two decimal places?",
      options: ["3.12", "3.14", "3.16", "3.18"],
      answer: "3.14",
      explanation:
        "The value of pi (π) to two decimal places is approximately 3.14. Pi is a mathematical constant representing the ratio of a circle's circumference to its diameter.",
    },
    {
      question: "What is the square root of 64?",
      options: ["4", "8", "16", "32"],
      answer: "8",
      explanation:
        "The square root of 64 is 8. The square root of a number is a value that, when multiplied by itself, gives the original number.",
    },
    {
      question: "Solve for x: 2x + 5 = 15",
      options: ["x = 5", "x = 10", "x = 15", "x = 20"],
      answer: "x = 5",
      explanation:
        "To solve for x, we subtract 5 from both sides of the equation: 2x = 10. Then, we divide by 2: x = 5.",
    },
    {
      question:
        "What is the area of a rectangle with length 8 units and width 6 units?",
      options: ["14 sq units", "30 sq units", "36 sq units", "48 sq units"],
      answer: "48 sq units",
      explanation:
        "The area of a rectangle is calculated by multiplying its length and width. In this case, area = 8 units * 6 units = 48 square units.",
    },
    {
      question: "What is the sum of angles in a triangle?",
      options: ["90 degrees", "180 degrees", "270 degrees", "360 degrees"],
      answer: "180 degrees",
      explanation:
        "The sum of angles in a triangle is always 180 degrees. This is a fundamental property of triangles in Euclidean geometry.",
    },
    {
      question: "What is the value of 3 to the power of 4?",
      options: ["9", "12", "27", "81"],
      answer: "81",
      explanation:
        "3 to the power of 4 (3^4) means 3 multiplied by itself 4 times. So, 3^4 = 3 * 3 * 3 * 3 = 81.",
    },
    {
      question: "If a = 4 and b = 6, what is the value of a² + b²?",
      options: ["10", "20", "30", "40"],
      answer: "52",
      explanation:
        "a² + b² means the square of a plus the square of b. So, a² + b² = 4² + 6² = 16 + 36 = 52.",
    },
    {
      question:
        "What is the circumference of a circle with radius 5 units (use π = 3.14)?",
      options: ["10.14 units", "15.7 units", "31.4 units", "47.1 units"],
      answer: "31.4 units",
      explanation:
        "The circumference of a circle is calculated using the formula 2πr, where r is the radius. So, circumference = 2 * 3.14 * 5 = 31.4 units.",
    },
    {
      question: "Solve for x: 3x - 7 = 11",
      options: ["x = 6", "x = 9", "x = 10", "x = 18"],
      answer: "x = 6",
      explanation:
        "To solve for x, we add 7 to both sides of the equation: 3x = 18. Then, we divide by 3: x = 6.",
    },
    {
      question: "What is the volume of a cube with side length 3 units?",
      options: [
        "6 cubic units",
        "9 cubic units",
        "18 cubic units",
        "27 cubic units",
      ],
      answer: "27 cubic units",
      explanation:
        "The volume of a cube is calculated by cubing its side length. So, volume = 3^3 = 27 cubic units.",
    },
  ],
};

export const art_quiz: {
  name: string;
  questions: number;
  rating: number;
  duration: string;
  image: string;
  quiz: {
    question: string;
    options: string[];
    answer: string;
    explanation: string;
  }[];
} = {
  name: "Art Quiz",
  questions: 10,
  rating: 4,
  duration: "20min",
  image:
    "https://t3.ftcdn.net/jpg/02/28/18/62/360_F_228186227_hTEQS8k4VtopmEVnkBbPvOaSIfXsqWON.jpg",
  quiz: [
    {
      question: "Who painted the Mona Lisa?",
      options: [
        "Vincent van Gogh",
        "Leonardo da Vinci",
        "Pablo Picasso",
        "Michelangelo",
      ],
      answer: "Leonardo da Vinci",
      explanation:
        "The Mona Lisa was painted by Leonardo da Vinci, one of the most famous Italian artists of the Renaissance period.",
    },
    {
      question:
        "Which art movement is known for its use of geometric shapes and primary colors?",
      options: [
        "Surrealism",
        "Cubism",
        "Impressionism",
        "Abstract Expressionism",
      ],
      answer: "Cubism",
      explanation:
        "Cubism is an art movement pioneered by artists like Pablo Picasso and Georges Braque, known for breaking down subjects into geometric forms.",
    },
    {
      question: "Who sculpted the statue of David?",
      options: ["Donatello", "Michelangelo", "Raphael", "Leonardo da Vinci"],
      answer: "Michelangelo",
      explanation:
        "The statue of David, a masterpiece of Renaissance sculpture, was created by the Italian artist Michelangelo.",
    },
    {
      question:
        "Which painting style features small, distinct dots of color that blend together when viewed from a distance?",
      options: ["Pointillism", "Fauvism", "Realism", "Baroque"],
      answer: "Pointillism",
      explanation:
        "Pointillism is a painting technique developed by artists like Georges Seurat, using small dots of color to create a cohesive image when viewed from afar.",
    },
    {
      question: "Who is known for creating 'The Starry Night'?",
      options: [
        "Vincent van Gogh",
        "Claude Monet",
        "Salvador Dalí",
        "Edvard Munch",
      ],
      answer: "Vincent van Gogh",
      explanation:
        "'The Starry Night' is a famous painting by Vincent van Gogh, showcasing his unique style and use of swirling brushstrokes.",
    },
    {
      question:
        "Which artist is associated with the 'Campbell's Soup Cans' artwork?",
      options: [
        "Jackson Pollock",
        "Andy Warhol",
        "Georgia O'Keeffe",
        "Salvador Dalí",
      ],
      answer: "Andy Warhol",
      explanation:
        "Andy Warhol, a leading figure in the Pop Art movement, created iconic works like the 'Campbell's Soup Cans' that explored consumer culture.",
    },
    {
      question: "Who painted the 'Water Lilies' series?",
      options: [
        "Paul Cézanne",
        "Pierre-Auguste Renoir",
        "Claude Monet",
        "Camille Pissarro",
      ],
      answer: "Claude Monet",
      explanation:
        "The 'Water Lilies' series is a collection of paintings by Claude Monet, depicting his beloved water garden at Giverny.",
    },
    {
      question:
        "Which art style is characterized by exaggerated, distorted figures and vivid colors?",
      options: ["Realism", "Surrealism", "Expressionism", "Futurism"],
      answer: "Expressionism",
      explanation:
        "Expressionism is an art movement known for its emotional intensity, with artists like Edvard Munch and Egon Schiele exploring psychological themes.",
    },
    {
      question: "Who sculpted 'The Thinker'?",
      options: [
        "Auguste Rodin",
        "Henry Moore",
        "Alberto Giacometti",
        "Constantin Brâncuși",
      ],
      answer: "Auguste Rodin",
      explanation:
        "'The Thinker' is a famous sculpture by Auguste Rodin, symbolizing contemplation and human intellect.",
    },
    {
      question: "Which artist is known for the 'Blue Period'?",
      options: [
        "Pablo Picasso",
        "Vincent van Gogh",
        "Claude Monet",
        "Salvador Dalí",
      ],
      answer: "Pablo Picasso",
      explanation:
        "During his 'Blue Period,' Pablo Picasso created artworks characterized by melancholy themes and a predominance of blue tones.",
    },
  ],
};

export const music_quiz: {
  name: string;
  questions: number;
  rating: number;
  duration: string;
  image: string;
  quiz: {
    question: string;
    options: string[];
    answer: string;
    explanation: string;
  }[];
} = {
  name: "Music Quiz",
  questions: 10,
  rating: 4,
  duration: "15min",
  image:
    "https://t3.ftcdn.net/jpg/02/23/60/54/360_F_223605406_nGKtPp42ZRx4ZxvrcVeT3Ek6V5Uw4ETh.jpg",
  quiz: [
    {
      question: "Who is known as the 'King of Pop'?",
      options: ["Elvis Presley", "Michael Jackson", "Prince", "Frank Sinatra"],
      answer: "Michael Jackson",
      explanation:
        "Michael Jackson earned the title 'King of Pop' for his immense influence and groundbreaking contributions to pop music.",
    },
    {
      question: "Which band released the album 'The Dark Side of the Moon'?",
      options: [
        "Led Zeppelin",
        "The Rolling Stones",
        "Pink Floyd",
        "The Beatles",
      ],
      answer: "Pink Floyd",
      explanation:
        "'The Dark Side of the Moon' is a famous album by Pink Floyd, known for its innovative sound and themes.",
    },
    {
      question:
        "Who composed 'Symphony No. 9' also known as the 'Choral Symphony'?",
      options: [
        "Ludwig van Beethoven",
        "Wolfgang Amadeus Mozart",
        "Johann Sebastian Bach",
        "Frederic Chopin",
      ],
      answer: "Ludwig van Beethoven",
      explanation:
        "Beethoven composed 'Symphony No. 9' which includes the 'Ode to Joy' and is regarded as one of his greatest works.",
    },
    {
      question: "Which artist released the hit song 'Thriller'?",
      options: ["Elton John", "Whitney Houston", "Madonna", "Michael Jackson"],
      answer: "Michael Jackson",
      explanation:
        "'Thriller' is a popular song by Michael Jackson, known for its iconic music video and innovative dance moves.",
    },
    {
      question: "Who is known for the album 'Born in the U.S.A.'?",
      options: ["Bruce Springsteen", "Bob Dylan", "Billy Joel", "David Bowie"],
      answer: "Bruce Springsteen",
      explanation:
        "'Born in the U.S.A.' is a critically acclaimed album by Bruce Springsteen, addressing social and political themes.",
    },
    {
      question: "Which singer is nicknamed 'The Queen of Soul'?",
      options: [
        "Diana Ross",
        "Aretha Franklin",
        "Whitney Houston",
        "Tina Turner",
      ],
      answer: "Aretha Franklin",
      explanation:
        "Aretha Franklin earned the title 'The Queen of Soul' for her powerful vocals and impact on soul music.",
    },
    {
      question: "Who composed the famous opera 'The Marriage of Figaro'?",
      options: [
        "Giuseppe Verdi",
        "Wolfgang Amadeus Mozart",
        "Johann Strauss II",
        "Richard Wagner",
      ],
      answer: "Wolfgang Amadeus Mozart",
      explanation:
        "'The Marriage of Figaro' is an opera by Mozart, renowned for its intricate compositions and comedic elements.",
    },
    {
      question: "Which band released the song 'Bohemian Rhapsody'?",
      options: ["The Beatles", "Queen", "Led Zeppelin", "The Rolling Stones"],
      answer: "Queen",
      explanation:
        "'Bohemian Rhapsody' is a popular song by Queen, known for its operatic style and complex structure.",
    },
    {
      question: "Who is known for the hit song 'Purple Haze'?",
      options: ["Jimi Hendrix", "Bob Marley", "Eric Clapton", "Janis Joplin"],
      answer: "Jimi Hendrix",
      explanation:
        "'Purple Haze' is a classic song by Jimi Hendrix, showcasing his innovative guitar techniques and psychedelic rock style.",
    },
    {
      question: "Which composer is famous for 'The Four Seasons'?",
      options: [
        "Ludwig van Beethoven",
        "Wolfgang Amadeus Mozart",
        "Antonio Vivaldi",
        "Johann Sebastian Bach",
      ],
      answer: "Antonio Vivaldi",
      explanation:
        "'The Four Seasons' is a renowned composition by Antonio Vivaldi, featuring vivid musical depictions of each season.",
    },
  ],
};
