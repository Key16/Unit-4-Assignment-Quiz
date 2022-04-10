## Quiz Assignment 

### Brainstorming

GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and my score

Framework 

Start Game to trigger time
- Can't go past 0 
- Has to start and trigger the quiz first set of questions

Answering questions
- Create list of questions in arrays
- Need to append elements and text content 
- Play a noise for correct and incorrect answers
- Lose if timer runs out

Storing questions
- using local storage to remember score
- Insert name to remember high score

