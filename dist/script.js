let numbers = [1, 2, 3, 4, 5, 6];
let data = {
  "questions": [{
  "question": "Which animal has the longest neck?",
  "answer": "Giraffe"
  },
  {
  "question": "What was the name of Vincent Van Gogh’s brother?",
  "answer": "Theo"
  },
  {
  "question": "How many sides does a triangle have?",
  "answer": "Three"
  },
  {
  "question": "What was the name of the ship Darwin took to the Galapagos and what year was his first voyage on it? (guess can be within three years)",
  "answer": "H.M.S. Beagle, 1835"
  },
  {
  "question": "It's a gimme! If someone on your team is wearing something purple right now, you may move the amount you rolled. Bonus: if it's purple polka dots, add an extra two spaces.",
  "answer": "No answer necessary"
  },
  {
  "question": "What is the name of the island at the toe of the boot of Italy?",
  "answer": "Sicilia (will accept Sicily)"
  },
  {
  "question": "What were the names of the wives of the first four presidents of the United States?",
  "answer": "Martha Washington, Abigail Adams, Martha Jefferson, and Dolley Madison."
  },
  {
  "question": "Forget the number you rolled. Move one space for each of the five (sometimes six) vowels in the alphabet you can name.",
  "answer": "A, E, I, O, U, and sometimes Y"
  },
  {
  "question": "Daily Triple! Who painted this painting? Bonus for an extra space: what is the painting’s title? Bonus for six extra spaces: when was it painted?<img class='question-img' src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/219932/Las-Meninas-Diego-Velazquez.jpg'>",
  "answer": "<em>Las Meninas</em> by Velázquez, 1656"
  },
  {
  "question": "What is the name of Peppa Pig's little brother?",
  "answer": "George"
  },
  {
  "question": "What is a group of owls called? A hootenanny, a parliament, or a sleuth?",
  "answer": "A parliament"
  },
  {
  "question": "Which ocean is off the Oregon coast?",
  "answer": "The Pacific"
  },
  {
  "question": "What is the name of the supermassive black hole at the center of the Milky Way galaxy?",
  "answer": "Sagittarius A*"
  },
  {
  "question": "It's a gimme! If anyone on your team has eaten a vegetable today, you may move the amount you rolled.",
  "answer": "No answer necessary"
  },
  {
  "question": "If you freeze water, what do you get?",
  "answer": "Ice."
  },
  {
  "question": "Forget the number you rolled. Move one space for each of the five Great Lakes you can name.",
  "answer": "Superior, Huron, Michigan, Ontario and Erie"
  },
  {
  "question": "How long is a zeptosecond? A thousandth of a second, a billionth of a second, a trillionth of a second, or a trillionth of a billionth of a second?",
  "answer": "A zeptosecond is a trillionth of a billionth of a second. It's the time that a Higgs Boson exists in experiments at the LHC. A millisecond is a thousandth of a second. A nanosecond is a billionth of a second. And a picosecond is a trillionth of a second."
  },
  {
  "question": "What do caterpillars turn into?",
  "answer": "Butterflies"
  },
  {
  "question": "Complete the stanza: \"The woods are lovely, dark and deep...\"",
  "answer": "But I have promises to keep,<br>And miles to go before I sleep<br>And miles to go before I sleep."
  },
  {
  "question": "What is 3 + 3 + 3?",
  "answer": "9"
  },
  {
  "question": "Name any year during which the Lewis and Clark Expedition took place.",
  "answer": "The Lewis and Clark Expedition (also known as the Corps of Discovery Expedition) spanned from August 31, 1803 to September 25, 1806."
  },
  {
  "question": "Which country is home to the kangaroo?",
  "answer": "Australia"
  },
  {
  "question": "Daily Triple! Who painted this painting? Bonus for an extra space: what is the painting’s title? Bonus for six extra spaces: when was it painted?<img class='question-img' src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/219932/The-Night-Watch-Rembrandt.webp'>",
  "answer": "<em>The Night Watch</em> by Rembrandt, 1642"
  },
  {
  "question": "What two countries are neighbors of the United States?",
  "answer": "Canada and Mexico"
  },
  {
  "question": "Who said, \"E pur si muove\" (\"And yet it moves\")?",
  "answer": "Galileo Galilei in 1633 after being forced to recant his claims that the Earth moves around the Sun, rather than the converse."
  },
  {
  "question": "What is 5 + 5 - 5 - 5?",
  "answer": "0"
  },
  {
  "question": "What are the colors of the rainbow?",
  "answer": "Red, orange, yellow, green, blue, indigo, violet (will accept purple)"
  },
  {
  "question": "How many members of Congress serve in the House of Representatives? 538, 100, 250, or 435?",
  "answer": "435"
  },
  {
  "question": "How many legs does a spider have?",
  "answer": "Eight."
  },
  {
  "question": "What was the first pizzeria in the United States?",
  "answer": "Lombardi's Pizza on Spring Street at Mott Street in New York City's Nolita neighborhood."
  },
  {
  "question": "Name three animals that lay eggs.",
  "answer": "Birds like chickens, penguins, parrots, and woodpeckers; reptiles like snakes, lizards, turtles, and alligators; amphibians like frogs and salamanders; fish like salmon, marlin, and goldfish; and even platypuses!"
  },
  {
  "question": "Who was the first person to run a mile in under four minutes? Bonus for an extra space: what year did they do it?",
  "answer": "Roger Bannister in 1954"
  },
  {
  "question": "What is the 15th Amendment? Slavery outlawed, rights of citizenship, voting rights for all races, federal income taxes, or the election of senators by popular vote?",
  "answer": "Voting Rights for All Races"
  },
  {
  "question": "Name three fruits.",
  "answer": "Banana, berries, orange, apple, grapes, tomatoes, avocadoes, etc."
  },
  {
  "question": "What is the speed of light (c)? 276,314 meters per second, 299,792,458 meters per second, or 1,000,000 meters per second?",
  "answer": "299,792,458 meters per second"
  },
  {
  "question": "In the movie <em>Frozen</em>, what season does Olaf sing about?",
  "answer": "Summer"
  },
  {
  "question": "Name all the planets in our solar system in order.",
  "answer": "Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune"
  },
  {
  "question": "What kind of vegetable is this?<img class='question-img' src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/219932/eggplant.jpg'>",
  "answer": "An eggplant"
  },
  {
  "question": "Forget the number you rolled. Move one space for each of the five Platonic ployhedrons you can name.",
  "answer": "Tetrahedron, cube, octahedron, dodecahedron, and icosahedron"
  },
  {
  "question": "What kid of house do birds build?",
  "answer": "A nest"
  },
  {
  "question": "Daily Triple! What is the Reinheitsgebot? Bonus for an extra space: what does it decree? Bonus for six extra spaces: when was it issued?",
  "answer": "It is the German Beer purity Law issued by Duke Wilhelm IV Bavaria in 1516 and decreed that beer shall only contain barley, hops and water (they didn't know about yeast yet)."
  },
  {
  "question": "How many sides does a rectangle have?",
  "answer": "Four"
  },
  {
  "question": "Which item was <em>not</em> invented at The Bell Labs Building on Bethune Street in the West Village? The transistor, amplifiers, vaccuum tubes, solar panels, lasers, or voice scramblers?",
  "answer": "Lasers"
  }]
}

// roll die
$(".roll-btn").on("click", function(event) {
  let rollWrap = $(".roll-result-wrapper");
  if (rollWrap.hasClass("visible")) {
    rollWrap.removeClass("visible");
  } else {
    rollWrap.addClass("visible");
  }
  let num = numbers[Math.floor(Math.random() * numbers.length)];
  let rollNum = $(".roll-result-number");
  setTimeout(function() {
    rollNum.text(num);
    rollWrap.addClass("visible");
  }, 1000);
  event.preventDefault();
});

// view question

let index = -1;
let count = 0;
let item = data.questions[index - 1];

// displayItem(item);

function displayItem(item) {
  $(".question").html(item.question);
  $(".answer").html(item.answer);
}

$(".question-btn").on("click", function(event) {
  $(".question-wrapper").show();
  displayItem(data.questions[++index]);
  if (index >= data.questions.length - 1) {
    console.log("index is maxed out at " + index);
    index = -1;
    return index;
  } else {
    console.log("index = " + index);
  }
  event.preventDefault();
});

// view answer
$(".view-answer-link").on("click", function(event) {
  $(".answer").toggleClass("visible");
  event.preventDefault();
});

// hide question
$(".close-link").on("click", function(event) {
  $(".question-wrapper").hide();
  $(".answer").removeClass("visible");
  event.preventDefault();
});

// move piece
$("rect").on("click", function() {
  $(this).toggleClass("visible");
});