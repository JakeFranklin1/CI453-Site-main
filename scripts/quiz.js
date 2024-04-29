const questions = [
  {
    // 1
    question: "How often should you back up your data?",
    answers: [
      { text: "Everyday", correct: false },
      { text: "Once a year", correct: false },
      { text: "Between 2 times a week to once every 2 months ", correct: true },
      { text: "Never", correct: false },
    ],
  },
  {
    // 2
    question:
      "Which of these answers describes the attack type of shoulder surfing?",
    answers: [
      {
        text: "Looking over someone's shoulder to see their passwords or pin numbers",
        correct: true,
      },
      { text: "Using someone's shoulder as a surfboard", correct: false },
      { text: "Stealing someone's computer", correct: false },
      {
        text: "Using an SQL injection to gain admin privileges",
        correct: false,
      },
    ],
  },
  {
    // 3
    question: "Should you click on every link sent to you on your email?",
    answers: [
      { text: "No", correct: true },
      { text: "Yes", correct: false },
      { text: "Maybe", correct: false },
      { text: "Definitely", correct: false },
    ],
  },
  {
    // 4
    question: "What is a trojan attack in cyber security?",
    answers: [
      {
        text: "malware disguised as a harmless link you'd expect to see",
        correct: true,
      },
      { text: "a big wooden horse", correct: false },
      { text: "nothing", correct: false },
      {
        text: "looking over someone's shoulder to see their passwords or pin numbers",
        correct: false,
      },
    ],
  },
  {
    // 5
    question: "What should you include in a password?",
    answers: [
      {
        text: "numbers, special character, capital letters and be 6+ characters long",
        correct: true,
      },
      { text: "just numbers", correct: false },
      { text: "something short and simple", correct: false },
      { text: "use something you would easily remember", correct: false },
    ],
  },
  {
    // 6
    question:
      "What should you do if you receive an email from someone you don't know, asking for personal information?",
    answers: [
      { text: "Reply with the information they requested", correct: false },
      {
        text: "Delete the email and report it to a trusted adult",
        correct: true,
      },
      { text: "Share the information to make new friends", correct: false },
      { text: "Forward the email to all your friends", correct: false },
    ],
  },
  {
    // 7
    question: "Why is it important to keep your online identity private?",
    answers: [
      { text: "To make more friends online", correct: false },
      { text: "To avoid online games", correct: false },
      {
        text: "To protect yourself from cyberbullying and scams",
        correct: true,
      },
      { text: "To show off to others", correct: false },
    ],
  },
  {
    // 8
    question:
      "If a friend shares a photo with you, and you want to share it with others, what should you do?",
    answers: [
      { text: "Share it without asking", correct: false },
      { text: "Ask your friend for permission before sharing", correct: true },
      { text: "Edit the photo before sharing", correct: false },
      { text: "Delete the photo and ignore your friend", correct: false },
    ],
  },
  {
    // 9
    question: "What is the purpose of antivirus software on a computer?",
    answers: [
      { text: "To make the computer run faster", correct: false },
      { text: "To protect against viruses and malware", correct: true },
      { text: "To create new games", correct: false },
      { text: "To delete important files", correct: false },
    ],
  },
  {
    // 10
    question:
      "Which of the following is an example of personal information that should be kept private online?",
    answers: [
      { text: "Favorite color", correct: false },
      { text: "School name and location", correct: true },
      { text: "Favorite book", correct: false },
      { text: "Nickname", correct: false },
    ],
  },
  {
    // 11
    question:
      "What should you do if you come across a website that asks for your personal information in exchange for a free game?",
    answers: [
      { text: "Enter your information to get the game", correct: false },
      { text: "Ignore the website and close it immediately", correct: true },
      { text: "Ask a friend for advice", correct: false },
      { text: "Share the website with others", correct: false },
    ],
  },
  {
    // 12
    question: "What is two-factor authentication (2FA) used for?",
    answers: [
      { text: "Playing games online", correct: false },
      {
        text: "Adding extra layers of security to your accounts",
        correct: true,
      },
      { text: "Connecting to Wi-Fi", correct: false },
      { text: "Creating new usernames", correct: false },
    ],
  },
  {
    // 13
    question:
      "What is the purpose of software updates on your computer or devices?",
    answers: [
      { text: "To slow down the device", correct: false },
      { text: "To make the device look different", correct: false },
      { text: "To add new games", correct: false },
      {
        text: "To fix security vulnerabilities and improve performance",
        correct: true,
      },
    ],
  },
  {
    // 14
    question:
      "Why is it important to be cautious about clicking on links in emails or messages?",
    answers: [
      { text: "Links make the computer freeze", correct: false },
      { text: "Clicking on links can damage the internet", correct: false },
      {
        text: "Links might lead to malicious websites or phishing scams",
        correct: true,
      },
      { text: "Clicking on links helps make new friends", correct: false },
    ],
  },
  {
    // 15
    question:
      "If you receive a friend request from someone you don't know, what should you do?",
    answers: [
      { text: "Accept the request immediately", correct: false },
      { text: "Ignore the request", correct: true },
      { text: "Ask them for personal information", correct: false },
      { text: "Share their request with all your friends", correct: false },
    ],
  },
  {
    // 16
    question: "What does the term 'digital footprint' mean?",
    answers: [
      { text: "A type of online dance", correct: false },
      {
        text: "The trail of information left behind when using the internet",
        correct: true,
      },
      { text: "A new type of shoe for computers", correct: false },
      { text: "A way to measure internet speed", correct: false },
    ],
  },
  {
    // 17
    question:
      "If you accidentally download a file that seems suspicious, what should you do?",
    answers: [
      { text: "Share it with friends", correct: false },
      { text: "Open the file to see what's inside", correct: false },
      {
        text: "Delete the file and run a virus scan on your computer",
        correct: true,
      },
      { text: "Keep the file and use it later", correct: false },
    ],
  },
  {
    // 18
    question: "Why is it important to keep your passwords a secret?",
    answers: [
      { text: "To prevent others from accessing your accounts", correct: true },
      { text: "To make your friends curious", correct: false },
      { text: "To show off your passwords to others", correct: false },
      { text: "To make your computer run faster", correct: false },
    ],
  },
  {
    // 19
    question:
      "What should you do if you receive a suspicious message from someone you don't know?",
    answers: [
      { text: "Respond to the message and ask who they are", correct: false },
      {
        text: "Ignore the message and report it to a trusted adult",
        correct: true,
      },
      { text: "Share the message with all your friends", correct: false },
      { text: "Reply with personal information", correct: false },
    ],
  },
  {
    // 20
    question:
      "What is the safest way to communicate your passwords with a friend?",
    answers: [
      { text: "Sending them through email", correct: false },
      {
        text: "Telling them in person or through a private message",
        correct: true,
      },
      { text: "Posting them on social media", correct: false },
      { text: "Writing them on a public bulletin board", correct: false },
    ],
  },
  {
    // 21
    question:
      "What should you do if you receive an email from someone you don't know, asking for personal information?",
    answers: [
      { text: "Reply with the information they requested", correct: false },
      {
        text: "Delete the email and report it to a trusted adult",
        correct: true,
      },
      { text: "Share the information to make new friends", correct: false },
      { text: "Forward the email to all your friends", correct: false },
    ],
  },
  {
    // 22
    question: "What is a computer virus?",
    answers: [
      { text: "A tiny insect that lives inside your computer", correct: false },
      { text: "A program designed to harm your computer", correct: true },
      { text: "A helpful tool for fixing computer problems", correct: false },
      { text: "A type of computer game", correct: false },
    ],
  },
  {
    // 23
    question:
      "What should you do if you receive an email from someone you don't know with an attachment?",
    answers: [
      { text: "Open the attachment right away", correct: false },
      {
        text: "Delete the email without opening the attachment",
        correct: true,
      },
      {
        text: "Ask your parents to open the attachment for you",
        correct: false,
      },
      { text: "Reply to the email asking who sent it", correct: false },
    ],
  },
  {
    // 24
    question: "What is personal information?",
    answers: [
      {
        text: "Information about you that should be kept private",
        correct: true,
      },
      { text: "Information that you can share with anyone", correct: false },
      { text: "Information that only your friends can know", correct: false },
      { text: "Information that is not important", correct: false },
    ],
  },
  {
    // 25
    question: "What does 'phishing' mean?",
    answers: [
      { text: "Fishing in a pond", correct: false },
      {
        text: "Sending emails pretending to be from a reputable company to trick individuals into revealing personal information",
        correct: true,
      },
      { text: "A type of computer game", correct: false },
      { text: "A way to catch fish online", correct: false },
    ],
  },
  {
    // 26
    question: "What does 'malware' stand for?",
    answers: [
      { text: "Malicious Software", correct: true },
      { text: "Managed Learning Resource", correct: false },
      { text: "My Alarm's Ringing Like Everytime", correct: false },
      { text: "Mega Large Robot Elephant", correct: false },
    ],
  },
  {
    // 27
    question:
      "Why is it important to log out of your accounts after using a shared computer?",
    answers: [
      { text: "To save energy", correct: false },
      { text: "To prevent others from accessing your accounts", correct: true },
      { text: "To give others a chance to use your accounts", correct: false },
      { text: "To make your accounts look active", correct: false },
    ],
  },
  {
    // 28
    question: "What is a firewall?",
    answers: [
      { text: "A physical wall made of fire", correct: false },
      {
        text: "A protective barrier between a computer and the internet",
        correct: true,
      },
      { text: "A software used for making video calls", correct: false },
      { text: "A type of computer game", correct: false },
    ],
  },
  {
    // 29
    question: "What is two-factor authentication?",
    answers: [
      { text: "Using two computers at once", correct: false },
      {
        text: "A security process in which the user provides two different authentication factors to verify themselves",
        correct: true,
      },
      { text: "Playing two games at the same time", correct: false },
      { text: "A way to send two emails at once", correct: false },
    ],
  },
  {
    // 30
    question: "What is a VPN?",
    answers: [
      { text: "Virtual Private Network", correct: true },
      { text: "Very Powerful Ninja", correct: false },
      { text: "Video Processing Node", correct: false },
      { text: "Vibrant Personal Notebook", correct: false },
    ],
  },
  {
    // 31
    question: "What is the safest way to store your passwords?",
    answers: [
      {
        text: "Writing them down on a piece of paper and keeping it in your wallet",
        correct: false,
      },
      { text: "Saving them in a file on your computer", correct: false },
      { text: "Using a password manager", correct: true },
      { text: "Telling your friends", correct: false },
    ],
  },
  {
    // 32
    question:
      "What should you do if someone online asks for your personal information?",
    answers: [
      { text: "Give it to them", correct: false },
      { text: "Ignore them", correct: false },
      { text: "Ask your parents for advice", correct: true },
      { text: "Report them to the police", correct: false },
    ],
  },
  {
    // 33
    question: "What does 'encryption' mean?",
    answers: [
      {
        text: "A way to hide information by converting it into code",
        correct: true,
      },
      { text: "A type of computer virus", correct: false },
      { text: "A method for organizing data", correct: false },
      { text: "A way to make your computer run faster", correct: false },
    ],
  },
  {
    // 34
    question:
      "What should you do if you accidentally click on a suspicious link?",
    answers: [
      { text: "Click on it again to see what happens", correct: false },
      { text: "Close the browser immediately", correct: true },
      { text: "Share it with your friends", correct: false },
      { text: "Leave it open and go get your parents", correct: false },
    ],
  },
  {
    // 35
    question: "What is cyberbullying?",
    answers: [
      { text: "A game played on the computer", correct: false },
      {
        text: "Sending mean messages or spreading rumors using electronic communication",
        correct: true,
      },
      { text: "A way to protect your computer from viruses", correct: false },
      { text: "An online shopping website", correct: false },
    ],
  },
  {
    // 36
    question: "What is the purpose of antivirus software?",
    answers: [
      { text: "To make your computer run faster", correct: false },
      {
        text: "To protect your computer from viruses and malware",
        correct: true,
      },
      { text: "To create viruses", correct: false },
      { text: "To make your computer look cool", correct: false },
    ],
  },
  {
    // 37
    question: "What should you do if you see someone being cyberbullied?",
    answers: [
      { text: "Join in and make fun of the person too", correct: false },
      { text: "Tell the person to stop using the internet", correct: false },
      { text: "Report it to a trusted adult", correct: true },
      { text: "Ignore it", correct: false },
    ],
  },
  {
    // 38
    question: "What is a digital footprint?",
    answers: [
      {
        text: "An impression left by your feet on a digital scale",
        correct: false,
      },
      {
        text: "A trace of information that you leave behind when using the internet",
        correct: true,
      },
      {
        text: "A type of shoe for wearing while using computers",
        correct: false,
      },
      { text: "A way to measure how fast you type", correct: false },
    ],
  },
  {
    // 39
    question: "What does 'HTTPS' stand for?",
    answers: [
      { text: "Hyper Text Transmission Protocol Secure", correct: true },
      {
        text: "Home Tool for Electronic Products and Services",
        correct: false,
      },
      { text: "Help To Provide Secure", correct: false },
      {
        text: "Happy Times with Electronic Products and Services",
        correct: false,
      },
    ],
  },
  {
    // 40
    question: "What is 'social engineering'?",
    answers: [
      { text: "A way to build social networks online", correct: false },
      {
        text: "Tricking people into revealing personal information or performing actions they wouldn't normally do",
        correct: true,
      },
      { text: "A type of computer game", correct: false },
      { text: "A method for designing social media platforms", correct: false },
    ],
  },
];

// Declarations
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const overlay = document.getElementById("overlay");
const popup = document.getElementById("popup");
const closePopupButton = document.getElementById("close-popup");
const playAgainButton = document.getElementById("play-again-btn");
const finalScoreElement = document.getElementById("final-score");
const playNowButton = document.getElementById("play-now-btn");

let currentQuestionIndex = 0;
let score = 0;
let previouslyAsked = [];

// Starts the quiz
playNowButton.addEventListener("click", () => {
  start.style.display = "none";
  // startQuiz(); // Not needed
});

// Shuffle function to randomize answer options
function shuffle(array) {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle
  while (0 !== currentIndex) {
    // Pick a remaining element
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

function startQuiz() {
  // Resets the question index and score.
  currentQuestionIndex = 1;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function getRandomQuestion() {
  // Randomly chooses a question from the Array
  let randomIndex = Math.floor(Math.random() * questions.length);
  let randomQuestion = questions[randomIndex];

  // Check if the question has already been asked
  while (previouslyAsked.includes(randomQuestion)) {
    randomIndex = Math.floor(Math.random() * questions.length);
    randomQuestion = questions[randomIndex];
    console.log("New question generated");
  }

  // Add the asked question to the list
  previouslyAsked.push(randomQuestion);
  console.log(previouslyAsked); // Testing

  // If all questions have been asked, reset the list
  if (previouslyAsked.length === questions.length) {
    previouslyAsked = [];
    console.log("QUESTIONS RESET"); // Testing
  }
  return randomQuestion;
}

function showQuestion() {
  resetState();
  let currentQuestion = getRandomQuestion();

  let questionNo = currentQuestionIndex;
  // Shows the number of the current question
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  // Shuffle answers - I noticed a lot of the answers in the array land on the second button
  // so this just moves them around a bit because I dont want to go through the entire array and do it myself
  shuffle(currentQuestion.answers);

  // Adds each answer to a button that the user can click. If they choose the wrong answer then the correct one
  // is shown in green, and the question they chose is red. (Which is in the selectAnswer function)
  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButton.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  // Resets the state of the quiz - hides the next button until the user answers a question.
  nextButton.style.display = "none";
  while (answerButton.firstChild) {
    answerButton.removeChild(answerButton.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";

  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButton.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${10}`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < 11) {
    showQuestion();
  } else {
    showScore();
    showPopup(score); // Call the showPopup function with the score
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < 11) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

closePopupButton.addEventListener("click", closePopup);
playAgainButton.addEventListener("click", () => {
  closePopup(); // Close the popup
  startQuiz(); // Start the quiz again
});

function showPopup(finalScore) {
  finalScoreElement.textContent = finalScore;
  overlay.style.display = "flex";
}

function closePopup() {
  overlay.style.display = "none";
}

startQuiz();
