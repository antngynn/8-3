const startPage = document.getElementById("start-page");
const quizPage = document.getElementById("quiz-page");
const resultPage = document.getElementById("result-page");

const startButton = document.getElementById("start-button");
const restartButton = document.getElementById("restart-button");

const questionTitle = document.getElementById("question-title");
const answersContainer = document.getElementById("answers");
const progressText = document.getElementById("progress-text");
const progressFill = document.getElementById("progress-fill");
const questionCard = document.getElementById("question-card");

const resultName = document.getElementById("result-name");
const resultSubtitle = document.getElementById("result-subtitle");
const resultKeywords = document.getElementById("result-keywords");
const resultLongText = document.getElementById("result-long-text");

const scores = {
  rose: 0,
  lavender: 0,
  vanilla: 0,
  ocean: 0,
  jasmine: 0
};

let currentQuestionIndex = 0;

const questions = [
  {
    question: "Nếu trái tim bạn có một cách tỏa sáng riêng, nó sẽ giống điều gì nhất?",
    answers: [
      { text: "Một ánh đèn vàng rất ấm, không chói lóa nhưng khiến ai ở gần cũng thấy dễ chịu.", type: "vanilla" },
      { text: "Một buổi sớm có gió, dịu nhẹ và đủ khiến người ta bình tâm lại.", type: "lavender" },
      { text: "Ánh nắng đi qua rèm cửa, mềm mại nhưng vẫn rực rỡ theo cách rất riêng.", type: "rose" },
      { text: "Mặt biển phản chiếu bầu trời, trong trẻo, rộng và khó đoán hết được.", type: "ocean" },
      { text: "Một ngọn nến nhỏ trong phòng tối, lặng lẽ nhưng vẫn âm thầm sưởi ấm mọi thứ.", type: "jasmine" }
    ]
  },
  {
    question: "Khi người khác nhắc đến bạn, bạn muốn họ nhớ nhất điều gì?",
    answers: [
      { text: "Rằng mình là người dịu dàng, biết yêu thương và luôn khiến người khác thấy được trân trọng.", type: "rose" },
      { text: "Rằng ở cạnh mình, họ được nghỉ ngơi khỏi những bộn bề của cuộc sống.", type: "lavender" },
      { text: "Rằng mình đem lại cảm giác ngọt ngào, ấm áp và rất đỗi thân quen.", type: "vanilla" },
      { text: "Rằng mình tự do, sâu sắc và có một thế giới nội tâm rất đẹp.", type: "ocean" },
      { text: "Rằng mình tử tế thật lòng, không cần phô bày mà vẫn đủ làm người khác nhớ mãi.", type: "jasmine" }
    ]
  },
  {
    question: "Trong những ngày mệt mỏi nhất, bạn thường là kiểu người như thế nào?",
    answers: [
      { text: "Vẫn cố mỉm cười và chăm sóc cảm xúc của những người xung quanh.", type: "jasmine" },
      { text: "Tìm một góc thật yên để tự mình lắng lại, sắp xếp mọi thứ trong lòng.", type: "lavender" },
      { text: "Muốn được ở cạnh người mình tin tưởng, chỉ cần một cái ôm nhẹ cũng đủ.", type: "rose" },
      { text: "Tự chữa lành bằng những điều nhỏ bé như đồ ngọt, nhạc nhẹ, ánh đèn êm.", type: "vanilla" },
      { text: "Muốn bước ra một nơi thật rộng, thật thoáng để thở sâu và thấy lòng mình mở ra.", type: "ocean" }
    ]
  },
  {
    question: "Nếu tình bạn của bạn là một nơi chốn, nó sẽ là gì?",
    answers: [
      { text: "Một căn phòng sáng đèn, lúc nào cũng có chỗ cho những tâm sự chân thành.", type: "vanilla" },
      { text: "Một khu vườn yên tĩnh, ít ồn ào nhưng ai bước vào cũng thấy lòng dịu lại.", type: "lavender" },
      { text: "Một góc ban công ngập nắng, nơi tiếng cười và sự dịu dàng luôn tồn tại cùng nhau.", type: "rose" },
      { text: "Một cung đường dài với bầu trời rộng, nơi người ta được là chính mình.", type: "ocean" },
      { text: "Một mái hiên ngày mưa, bình dị thôi nhưng luôn khiến người khác thấy an toàn.", type: "jasmine" }
    ]
  },
  {
    question: "Điều đẹp nhất ở một cô gái, theo bạn, là gì?",
    answers: [
      { text: "Là sự mềm mại nhưng không yếu đuối, biết yêu thương nhưng vẫn có nguyên tắc riêng.", type: "rose" },
      { text: "Là khả năng khiến những người xung quanh cảm thấy bình yên chỉ bằng cách hiện diện.", type: "lavender" },
      { text: "Là một trái tim ấm, biết nâng niu những điều nhỏ bé và bình thường nhất.", type: "vanilla" },
      { text: "Là tinh thần tự do, dám sống thật với cảm xúc và con người của mình.", type: "ocean" },
      { text: "Là lòng tốt âm thầm, không ồn ào nhưng đủ làm cả một ngày của ai đó sáng hơn.", type: "jasmine" }
    ]
  },
  {
    question: "Khi đứng trước một người bạn rất quý, bạn thường mang đến cảm giác gì?",
    answers: [
      { text: "Được lắng nghe và được yêu thương một cách rất chân thành.", type: "rose" },
      { text: "Được thả lỏng, được bình tĩnh lại, như vừa đi qua một khoảng trời rất dịu.", type: "lavender" },
      { text: "Được chăm sóc bởi những điều nhỏ xíu nhưng đáng nhớ vô cùng.", type: "vanilla" },
      { text: "Được truyền cảm hứng để mạnh dạn hơn, sống thật hơn.", type: "ocean" },
      { text: "Được an ủi bằng sự tử tế rất đỗi nhẹ nhàng.", type: "jasmine" }
    ]
  },
  {
    question: "Nếu cảm xúc của bạn có thể hóa thành một mùa, đó sẽ là mùa nào?",
    answers: [
      { text: "Mùa xuân, vì trái tim mình luôn có phần dịu dàng và đầy hy vọng.", type: "rose" },
      { text: "Cuối thu, khi mọi thứ lắng xuống và con người ta dễ nghe thấy lòng mình nhất.", type: "lavender" },
      { text: "Đầu đông, lúc người ta chỉ cần một điều ấm áp là đủ thấy hạnh phúc.", type: "vanilla" },
      { text: "Mùa hè, rộng mở, trong trẻo và đầy những giấc mơ chưa gọi thành tên.", type: "ocean" },
      { text: "Một ngày giao mùa, rất nhẹ nhưng để lại cảm giác thương nhớ rất lâu.", type: "jasmine" }
    ]
  },
  {
    question: "Bạn nghĩ mình mạnh mẽ nhất ở điểm nào?",
    answers: [
      { text: "Biết yêu người khác bằng cả sự dịu dàng nhưng vẫn không đánh mất bản thân.", type: "rose" },
      { text: "Biết giữ lòng mình yên giữa rất nhiều xô bồ và áp lực.", type: "lavender" },
      { text: "Biết lan tỏa sự ấm áp ngay cả khi bản thân cũng đang có những ngày không ổn.", type: "vanilla" },
      { text: "Biết bước tiếp, biết trưởng thành và vẫn giữ cho tâm hồn mình rộng mở.", type: "ocean" },
      { text: "Biết lựa chọn tử tế trong một thế giới đôi khi chẳng dễ dàng để dịu dàng.", type: "jasmine" }
    ]
  },
  {
    question: "Nếu thanh xuân của bạn để lại một dư vị, bạn muốn đó là gì?",
    answers: [
      { text: "Một dư vị ngọt mềm, khiến người ta nhớ về bằng nụ cười rất êm.", type: "vanilla" },
      { text: "Một dư vị trong trẻo và sâu lắng, càng nghĩ lại càng thấy đẹp.", type: "lavender" },
      { text: "Một dư vị ấm áp và rực rỡ, như những ngày có nắng len qua kẽ tay.", type: "rose" },
      { text: "Một dư vị rộng và xanh, của những giấc mơ từng rất lớn và rất thật.", type: "ocean" },
      { text: "Một dư vị dịu lành, như có ai đó từng xuất hiện và khiến mọi thứ mềm đi một chút.", type: "jasmine" }
    ]
  },
  {
    question: "Trong ngày 8/3, lời khen nào khiến bạn thấy được chạm đến nhất?",
    answers: [
      { text: "Cậu dịu dàng thật đấy, nhưng chính sự dịu dàng ấy lại khiến người khác rất nể phục.", type: "rose" },
      { text: "Ở cạnh cậu, mọi thứ như chậm lại một chút và bình yên hơn rất nhiều.", type: "lavender" },
      { text: "Cậu đem đến cảm giác thân thuộc và ấm áp như một điều nhỏ bé nhưng rất quý.", type: "vanilla" },
      { text: "Cậu làm người khác muốn sống thật hơn, can đảm hơn và mơ nhiều hơn.", type: "ocean" },
      { text: "Cậu tốt theo một cách rất đẹp, không cần cố gắng để nổi bật mà vẫn đáng nhớ vô cùng.", type: "jasmine" }
    ]
  }
];

const results = {
  rose: {
    name: "🌹 ROSE BLOOM",
    subtitle: "Bạn là mùi hương của sự dịu dàng, tinh tế và một trái tim biết yêu thương thật sâu.",
    keywords: ["Dịu dàng", "Tinh tế", "Ấm áp", "Đáng nhớ"],
    theme: "theme-rose",
    longText: `
      <p>Bạn giống như hương hoa hồng vào một buổi sáng có nắng rất nhẹ — không quá ồn ào, không cần phô trương, nhưng chỉ cần xuất hiện thôi cũng đủ khiến không gian xung quanh trở nên mềm mại hơn.</p>
      <p>Điều đáng quý nhất ở bạn nằm ở cách bạn khiến sự quan tâm trở nên chân thành. Bạn nhớ những điều nhỏ xíu, để ý những thay đổi rất khẽ trong cảm xúc của người khác. Bạn đẹp theo kiểu khiến người ta càng ở gần càng thấy thương, càng biết càng thấy quý.</p>
    `
  },
  lavender: {
    name: "💜 LAVENDER HUSH",
    subtitle: "Bạn là mùi hương của sự bình yên, sâu lắng và cảm giác được nghỉ ngơi.",
    keywords: ["Bình yên", "Sâu lắng", "Nhẹ nhàng", "Chữa lành"],
    theme: "theme-lavender",
    longText: `<p>Bạn giống như mùi lavender vương trên vạt áo — nhẹ nhàng, đủ khiến người ta thở chậm lại. Bạn hiểu cảm xúc và những khoảng lặng, là nơi an toàn để người khác được là chính mình.</p>`
  },
  vanilla: {
    name: "🍦 VANILLA GLOW",
    subtitle: "Bạn là mùi hương của sự ấm áp, ngọt ngào và những niềm vui nhỏ bé.",
    keywords: ["Ấm áp", "Ngọt ngào", "Thân thuộc", "Dễ mến"],
    theme: "theme-vanilla",
    longText: `<p>Bạn đem đến cảm giác thân thuộc, mà trong cuộc đời này, thân thuộc đôi khi còn quý hơn cả rực rỡ. Sự chân thành và ấm áp của bạn chính là món quà quý giá nhất dành cho những người xung quanh.</p>`
  },
  ocean: {
    name: "🌊 OCEAN MIST",
    subtitle: "Bạn là mùi hương của tự do, trong trẻo và một tâm hồn rộng lớn.",
    keywords: ["Tự do", "Trong trẻo", "Sâu sắc", "Truyền cảm hứng"],
    theme: "theme-ocean",
    longText: `<p>Bạn giống như mùi hương của biển sau cơn gió sớm. Ở bạn có một tinh thần tự do, dám sống thật với cảm xúc và luôn là nguồn cảm hứng để người khác dám mơ xa hơn.</p>`
  },
  jasmine: {
    name: "🌼 JASMINE WHISPER",
    subtitle: "Bạn là mùi hương của sự tử tế, thuần hậu và vẻ đẹp âm thầm.",
    keywords: ["Tử tế", "Âm thầm", "Dịu lành", "Đáng quý"],
    theme: "theme-jasmine",
    longText: `<p>Bạn giống như hương nhài trong đêm — không ồn ào nhưng nhớ thật lâu. Sự tử tế của bạn đến từ cách bạn sống và bảo vệ sự mềm mại của mình giữa thế giới vội vã.</p>`
  }
};

function resetScores() {
  for (let key in scores) {
    scores[key] = 0;
  }
}

function startQuiz() {
  resetScores();
  currentQuestionIndex = 0;
  startPage.classList.add("hidden");
  resultPage.classList.add("hidden");
  quizPage.classList.remove("hidden");
  showQuestion();
}

function showQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  const questionNumber = currentQuestionIndex + 1;
  const progressPercent = (questionNumber / questions.length) * 100;

  // Đã sửa dấu backtick ở đây
  progressText.textContent = `Câu ${questionNumber} / ${questions.length}`;
  progressFill.style.width = `${progressPercent}%`;

  questionTitle.textContent = currentQuestion.question;
  answersContainer.innerHTML = "";

  // Hiệu ứng Fade-in cho câu hỏi
  questionCard.classList.remove("fade-in");
  void questionCard.offsetWidth; 
  questionCard.classList.add("fade-in");

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.className = "answer-btn";
    button.textContent = answer.text;

    button.addEventListener("click", () => {
      scores[answer.type]++;
      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
        showQuestion();
      } else {
        showResult();
      }
    });
    answersContainer.appendChild(button);
  });
}

function getTopResult() {
  let topType = "rose";
  let highestScore = -1;
  for (let type in scores) {
    if (scores[type] > highestScore) {
      highestScore = scores[type];
      topType = type;
    }
  }
  return topType;
}

function showResult() {
  const topType = getTopResult();
  const result = results[topType];

  quizPage.classList.add("hidden");
  resultPage.classList.remove("hidden");

  resultName.textContent = result.name;
  resultSubtitle.textContent = result.subtitle;
  resultLongText.innerHTML = result.longText;

  resultKeywords.innerHTML = "";
  result.keywords.forEach((word) => {
    const span = document.createElement("span");
    span.className = "keyword";
    span.textContent = word;
    resultKeywords.appendChild(span);
  });

  // Cập nhật theme màu sắc
  resultPage.className = "result-page"; 
  resultPage.classList.add(result.theme);

  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Gán sự kiện cho các nút
startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", () => {
  resultPage.classList.add("hidden");
  startPage.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
});