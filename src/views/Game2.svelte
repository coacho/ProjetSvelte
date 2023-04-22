<script>
  let questions = [];
  let currentQuestion = 0;
  let score = 0;
  let difficulty = 'easy';
  let category = 'any';

  async function fetchQuestions() {
    const url = `https://opentdb.com/api.php?amount=10&difficulty=${difficulty}&category=${category}`;
    const response = await fetch(url);
    const data = await response.json();
    questions = data.results.map((q) => {
      return {
        question: q.question,
        correctAnswer: q.correct_answer,
        incorrectAnswers: q.incorrect_answers,
      };
    });
  }

  function startGame() {
    fetchQuestions().then(() => {
      currentQuestion = 0;
      score = 0;
      showQuestion();
    });
  }

  function showQuestion() {
    const question = questions[currentQuestion];
    const answers = [question.correctAnswer, ...question.incorrectAnswers];
    shuffleArray(answers);

    const answerButtons = document.querySelectorAll('.answer-button');
    answerButtons.forEach((button, index) => {
      button.textContent = answers[index];
      button.onclick = () => {
        if (button.textContent === question.correctAnswer) {
          score++;
          localStorage.setItem('score-game2', score.toString());
        }
        currentQuestion++;
        if (currentQuestion < questions.length) {
          showQuestion();
        } else {
          const finalScore = localStorage.getItem('score-game2');
          alert(`Game over! Your score is ${finalScore}`);
        }
      };
    });

    document.querySelector('.question').textContent = question.question;
    const savedScore = localStorage.getItem('score-game2');
    document.querySelector('.score').textContent = `Score: ${savedScore || 0}`;
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
</script>

<div>
  <h1>Trivia Game</h1>
  <div>
    <label for="difficulty-select">Difficulty:</label>
    <select id="difficulty-select" bind:value={difficulty}>
      <option value="easy">Easy</option>
      <option value="medium">Medium</option>
      <option value="hard">Hard</option>
    </select>
  </div>
  <div>
    <label for="category-select">Category:</label>
    <select id="category-select" bind:value={category}>
      <option value="any">Any Category</option>
      <option value="9">General Knowledge</option>
      <option value="10">Entertainment: Books</option>
      <option value="11">Entertainment: Film</option>
      <option value="12">Entertainment: Music</option>
      <option value="13">Entertainment: Musicals &amp; Theatres</option>
      <option value="14">Entertainment: Television</option>
      <option value="15">Entertainment: Video Games</option>
      <option value="16">Entertainment: Board Games</option>
      <option value="17">Science &amp; Nature</option>
      <option value="18">Science: Computers</option>
      <option value="19">Science: Mathematics</option>
      <option value="20">Mythology</option>
      <option value="21">Sports</option>
      <option value="22">Geography</option>
      <option value="23">History</option>
      <option value="24">Politics</option>
      <option value="25">Art</option>
      <option value="26">Celebrities</option>
      <option value="27">Animals</option>
      <option value="28">Vehicles</option>
      <option value="29">Entertainment: Comics</option>
      <option value="30">Science: Gadgets</option>
      <option value="31">Entertainment: Japanese Anime &amp; Manga</option>
      <option value="32">Entertainment: Cartoon &amp; Animations</option>
    </select>
  </div>
  <button on:click={startGame}>Start Game</button>
  <div class="question"></div>
  <div class="score"></div>
  <div class="answers">
    <button class="answer-button"></button>
    <button class="answer-button"></button>
    <button class="answer-button"></button>
    <button class="answer-button"></button>
  </div>
</div>
