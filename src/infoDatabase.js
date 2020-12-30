import img1 from "./images/1.jpg";
import img2 from "./images/2.jpg";
import img3 from "./images/3.jpg";
import img4 from "./images/4.jpg";
import img5 from "./images/5.jpg";
import img6 from "./images/6.jpg";
import img7 from "./images/7.png";
import img8 from "./images/8.png";
import img9 from "./images/9.jpg";
import img10 from "./images/10.jpg";

const infoDatabase = [
  {
    imgSrc: img1,
    hints: "Start from the trees",
    question: "How many hidden faces do you see here?",
    answerOptions: [
      { answer: "12", isCorrect: false },
      { answer: "13", isCorrect: false },
      { answer: "14", isCorrect: true },
      { answer: "15", isCorrect: false },
    ],
  },

  {
    imgSrc: img2,
    hints: "See the cubes from distant view ",
    question: "Tell total number of cubes?",
    answerOptions: [
      { answer: "6", isCorrect: false },
      { answer: "9", isCorrect: false },
      { answer: "12", isCorrect: false },
      { answer: "7", isCorrect: true },
    ],
  },

  {
    imgSrc: img3,
    hints: "Start counting from the left side",
    question: "Can you count the number of horses?",
    answerOptions: [
      { answer: "2", isCorrect: false },
      { answer: "3", isCorrect: false },
      { answer: "4", isCorrect: true },
      { answer: "5", isCorrect: false },
    ],
  },

  {
    imgSrc: img4,
    hints: "Which item is not in the picture?",
    question: "Watch this picture for 10 seconds, then flip!",
    answerOptions: [
      { answer: "Football", isCorrect: false },
      { answer: "Sunglass", isCorrect: true },
      { answer: "Apple", isCorrect: false },
      { answer: "Axe", isCorrect: false },
    ],
  },

  {
    imgSrc: img5,
    hints: "Don't rush, count slowly",
    question: "How many pair of eyes do you see?",
    answerOptions: [
      { answer: "6 pairs", isCorrect: true },
      { answer: "5 pairs", isCorrect: false },
      { answer: "4 pairs", isCorrect: false },
      { answer: "8 pairs", isCorrect: false },
    ],
  },

  {
    imgSrc: img6,
    hints: "Identify whether result will be odd or even",
    question: "Fill empty square with the right number?",
    answerOptions: [
      { answer: "5", isCorrect: false },
      { answer: "8", isCorrect: false },
      { answer: "1", isCorrect: false },
      { answer: "10", isCorrect: true },
    ],
  },

  {
    imgSrc: img7,
    hints: "Water flows high to low",
    question: "Which tank will fill first?",
    answerOptions: [
      { answer: "5", isCorrect: false },
      { answer: "2", isCorrect: true },
      { answer: "4", isCorrect: false },
      { answer: "3", isCorrect: false },
    ],
  },

  {
    imgSrc: img8,
    hints: "Which group of alphabet you saw in the list?",
    question: "Watch alphabet groups for 10 seconds, then flip!",
    answerOptions: [
      { answer: "VTUS", isCorrect: false },
      { answer: "NMLK", isCorrect: true },
      { answer: "JILG", isCorrect: false },
      { answer: "RPQT", isCorrect: false },
    ],
  },

  {
    imgSrc: img9,
    hints: "Try to read the whole photo",
    question: "How many people went camping?",
    answerOptions: [
      { answer: "7", isCorrect: false },
      { answer: "4", isCorrect: true },
      { answer: "9", isCorrect: false },
      { answer: "10", isCorrect: false },
    ],
  },

  {
    imgSrc: img10,
    hints: "Look for color variation",
    question: "Which letter do you see?",
    answerOptions: [
      { answer: "F", isCorrect: false },
      { answer: "H", isCorrect: false },
      { answer: "C", isCorrect: false },
      { answer: "E", isCorrect: true },
    ],
  },
];

export default infoDatabase;
