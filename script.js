const randomBooks = [
    { name: "The Great Gatsby", image: "path/to/great-gatsby.jpg" },
    { name: "To Kill a Mockingbird", image: "path/to/to-kill-a-mockingbird.jpg" },
    { name: "1984", image: "path/to/1984.jpg" },
    { name: "Pride and Prejudice", image: "path/to/pride-and-prejudice.jpg" },
    { name: "The Catcher in the Rye", image: "path/to/catcher-in-the-rye.jpg" }
];

const genreBooks = {
    "fiction": [
        { name: "The Great Gatsby", image: "path/to/great-gatsby.jpg" },
        { name: "To Kill a Mockingbird", image: "path/to/to-kill-a-mockingbird.jpg" },
        { name: "Pride and Prejudice", image: "path/to/pride-and-prejudice.jpg" }
    ],
    "non-fiction": [
        { name: "Sapiens: A Brief History of Humankind", image: "path/to/sapiens.jpg" },
        { name: "Educated", image: "path/to/educated.jpg" },
        { name: "The Immortal Life of Henrietta Lacks", image: "path/to/henrietta-lacks.jpg" }
    ],
    "mystery": [
        { name: "Gone Girl", image: "path/to/gone-girl.jpg" },
        { name: "The Girl with the Dragon Tattoo", image: "path/to/dragon-tattoo.jpg" },
        { name: "Big Little Lies", image: "path/to/big-little-lies.jpg" }
    ],
    "fantasy": [
        { name: "Harry Potter and the Sorcerer's Stone", image: "path/to/harry-potter.jpg" },
        { name: "The Hobbit", image: "path/to/hobbit.jpg" },
        { name: "The Name of the Wind", image: "path/to/name-of-the-wind.jpg" }
    ]
};

function getRecommendation() {
    const recommendationType = document.querySelector('input[name="recommendationType"]:checked').value;
    let recommendation;

    if (recommendationType === "random") {
        // Get a random book from the list
        recommendation = randomBooks[Math.floor(Math.random() * randomBooks.length)];
    } else if (recommendationType === "genre") {
        // Get the selected genre
        const genre = document.getElementById("genre").value;
        // Get a random book from the selected genre
        const books = genreBooks[genre];
        recommendation = books[Math.floor(Math.random() * books.length)];
    }

    document.getElementById("bookName").textContent = recommendation.name;
    document.getElementById("bookImage").src = recommendation.image;
    document.getElementById("bookName").style.display = "block";
    document.getElementById("bookImage").style.display = "block";
}

// Show or hide the genre selection based on user choice
document.querySelectorAll('input[name="recommendationType"]').forEach(radio => {
    radio.addEventListener('change', function() {
        const genreSelection = document.getElementById("genreSelection");
        if (this.value === "genre") {
            genreSelection.style.display = "block";
        } else {
            genreSelection.style.display = "none";
        }
    });
});
