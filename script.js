let numbers = [1, 2, 3, 4, 5, 6];
let data = {
  "questions": [{
  "question": "<p>How many members of Congress serve in the House of Representatives? 538, 100, 250, or 435?</p>",
  "answer": "435"
  },
  {
  "question": "<p>What is the definition of&nbsp;<em>peruse</em>?</p>",
  "answer": "To read in a thorough or careful way"
  },
  {
  "question": "<p>Which animal has the longest neck?</p>",
  "answer": "Giraffe"
  },
  {
  "question": "<p>How many sides does a triangle have?</p>",
  "answer": "Three"
  },
  {
  "question": "<p>What was the name of Vincent Van Gogh’s brother?</p>",
  "answer": "Theo"
  },
  {
  "question": "<p>What was the name of the ship Darwin took to the Galapagos and what year was his first voyage on it? (guess can be within three years)</p>",
  "answer": "H.M.S. Beagle, 1835"
  },
  {
  "question": "<p>It's a gimme! If someone on your team is wearing something purple right now, you may move the amount you rolled. Bonus: if it's purple polka dots, add an extra two spaces.</p>",
  "answer": "No answer necessary"
  },
  {
  "question": "<p>What is the name of the island at the toe of the boot of Italy?</p>",
  "answer": "Sicilia (will accept Sicily)"
  },
  {
  "question": "<p>What were the names of the wives of the first four presidents of the United States?</p>",
  "answer": "Martha Washington, Abigail Adams, Martha Jefferson, and Dolley Madison."
  },
  {
  "question": "<p>Daily Triple! Who painted this painting? Bonus for an extra space: what is the painting’s title? Bonus for six extra spaces: when was it painted?</p><img class='question-img' src='./img/Las-Meninas-Diego-Velazquez.jpg'>",
  "answer": "<em>Las Meninas</em> by Velázquez, 1656"
  },
  {
  "question": "<p>Forget the number you rolled. Move one space for each of the five (sometimes six) vowels in the alphabet you can name.</p>",
  "answer": "A, E, I, O, U, and sometimes Y"
  },
  {
  "question": "<p>What is the name of Peppa Pig's little brother?</p>",
  "answer": "George"
  },
  {
  "question": "<p>What is a group of owls called? A hootenanny, a parliament, or a sleuth?</p>",
  "answer": "A parliament"
  },
  {
  "question": "<p>Forget the number you rolled. Move one space for each of the five Great Lakes you can name.</p>",
  "answer": "Superior, Huron, Michigan, Ontario and Erie"
  },
  {
  "question": "<p>Which ocean is off the Oregon coast?</p>",
  "answer": "The Pacific"
  },
  {
  "question": "<p>If you freeze water, what do you get?</p>",
  "answer": "Ice"
  },
  {
  "question": "<p>What is the name of the supermassive black hole at the center of the Milky Way galaxy?</p>",
  "answer": "Sagittarius A*"
  },
  {
  "question": "<p>How long is a zeptosecond? A billionth of a second, a trillionth of a second, or a trillionth of a billionth of a second?</p>",
  "answer": "A zeptosecond is a trillionth of a billionth of a second. It's the time that a Higgs Boson exists in experiments at the LHC. A nanosecond is a billionth of a second. And a picosecond is a trillionth of a second."
  },
  {
  "question": "<p>What do caterpillars turn into?</p>",
  "answer": "Butterflies"
  },
  {
  "question": "<p>It's a gimme! If anyone on your team has eaten a vegetable today, you may move the amount you rolled.</p>",
  "answer": "No answer necessary"
  },
  {
  "question": "<p>Daily Triple! Who painted this painting? Bonus for an extra space: what is the painting’s title? Bonus for six extra spaces: when was it painted?</p><img class='question-img' src='./img/The-Night-Watch-Rembrandt.webp'>",
  "answer": "<em>The Night Watch</em> by Rembrandt, 1642"
  },
  {
  "question": "<p>Complete the stanza: \"The woods are lovely, dark and deep...\"</p>",
  "answer": "But I have promises to keep,<br>And miles to go before I sleep,<br>And miles to go before I sleep."
  },
  {
  "question": "<p>What is 3 + 3 + 3?</p>",
  "answer": "9"
  },
  {
  "question": "<p>Which country is home to the kangaroo?</p>",
  "answer": "Australia"
  },
  {
  "question": "<p>Name any year during which the Lewis and Clark Expedition took place.</p>",
  "answer": "The Lewis and Clark Expedition (also known as the Corps of Discovery Expedition) spanned from August 31, 1803 to September 25, 1806."
  },
  {
  "question": "<p>Who said, \"E pur si muove\" (\"And yet it moves\")?</p>",
  "answer": "Galileo Galilei in 1633 after being forced to recant his claims that the Earth moves around the Sun, rather than the converse."
  },
  {
  "question": "<p>What two countries are neighbors of the United States?</p>",
  "answer": "Canada and Mexico"
  },
  {
  "question": "<p>What is 5 + 5 - 5 - 5?</p>",
  "answer": "0"
  },
  {
  "question": "<p>What is the definition of&nbsp;<em>metadiegetic</em>?</p>",
  "answer": "Pertaining to a secondary narrative embedded within the primary narrative (a story within a story)"
  },
  {
  "question": "<p>What was the first pizzeria in the United States?</p>",
  "answer": "Lombardi's Pizza on Spring Street at Mott Street in New York City's Nolita neighborhood."
  },
  {
  "question": "<p>What are the colors of the rainbow?</p>",
  "answer": "Red, orange, yellow, green, blue, indigo, violet (will accept purple)"
  },
  {
  "question": "<p>How many legs does a spider have?</p>",
  "answer": "Eight"
  },
  {
  "question": "<p>Who was the first person to run a mile in under four minutes? Bonus for an extra space: what year did they do it?</p>",
  "answer": "Roger Bannister in 1954"
  },
  {
  "question": "<p>What is the 15th Amendment? Slavery outlawed, rights of citizenship, voting rights for all races, federal income taxes, or the election of senators by popular vote?</p>",
  "answer": "Voting rights for all races"
  },
  {
  "question": "<p>Name three animals that lay eggs.</p>",
  "answer": "Birds like chickens, penguins, parrots, and woodpeckers; reptiles like snakes, lizards, turtles, and alligators; amphibians like frogs and salamanders; fish like salmon, marlin, and goldfish; and even platypuses!"
  },
  {
  "question": "<p>Name three fruits.</p>",
  "answer": "Bananas, berries, oranges, apples, grapes, tomatoes, avocadoes, etc."
  },
  {
  "question": "<p>What is the speed of light (c)? 276,314 meters per second, 299,792,458 meters per second, or 1,000,000 meters per second?</p>",
  "answer": "299,792,458 meters per second"
  },
  {
  "question": "<p>Name all the planets in our solar system in order.</p>",
  "answer": "Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune"
  },
  {
  "question": "<p>In the movie&nbsp;<em>Frozen</em>, what season does Olaf sing about?</p>",
  "answer": "Summer"
  },
  {
  "question": "<p>What kind of vegetable is this?</p><img class='question-img' src='./img/eggplant.jpg'>",
  "answer": "Eggplant (will accept aubergine or melanzane)"
  },
  {
  "question": "<p>Forget the number you rolled. Move one space for each of the five Platonic Polyhedrons you can name.</p>",
  "answer": "Tetrahedron, cube, octahedron, dodecahedron, and icosahedron"
  },
  {
  "question": "<p>Daily Triple! What is the Reinheitsgebot? Bonus for an extra space: what does it decree? Bonus for six extra spaces: when was it issued?</p>",
  "answer": "It is the German beer purity Law issued by Duke Wilhelm IV Bavaria in 1516 and decreed that beer shall only contain barley, hops and water (they didn't know about yeast yet)."
  },
  {
  "question": "<p>What kind of house do birds build?</p>",
  "answer": "A nest"
  },
  {
  "question": "<p>How many sides does a rectangle have?</p>",
  "answer": "Four"
  },
  {
  "question": "<p>Which item was&nbsp;<em>not</em> invented at The Bell Labs Building on Bethune Street in the West Village? The transistor, amplifiers, vaccuum tubes, solar panels, lasers, or voice scramblers?</p>",
  "answer": "Lasers"
  },
  {
  "question": "<p>What is the definition of&nbsp;<em>bumptious</em>?</p>",
  "answer": "Self-assertive or proud to an irritating degree"
  },
  {
  "question": "<p>How many wheels does a car have?</p>",
  "answer": "Four (will accept five including steering wheel)"
  },
  {
  "question": "<p>What does a bear do in winter?</p>",
  "answer": "Hibernate"
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
  $(".turn").toggleClass("visible");
  // enlarge image
  $(".question-img").on("click", function(event) {
    $(this).toggleClass("large");
  });
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
$(".icon").on("click", function() {
  $(this).toggleClass("visible");
});
