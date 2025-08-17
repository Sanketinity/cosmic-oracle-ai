// AI Astrologer Application JavaScript

// Zodiac data from the provided JSON
const zodiacData = {
  "aries": {
    "name": "Aries",
    "dates": "March 21 - April 19",
    "element": "Fire",
    "planet": "Mars",
    "symbol": "♈",
    "color": "#FF6B6B",
    "traits": ["Bold", "Energetic", "Leadership", "Independent", "Confident"],
    "strengths": ["Natural leader", "Courageous", "Determined", "Enthusiastic", "Honest"],
    "weaknesses": ["Impatient", "Short-tempered", "Impulsive", "Aggressive", "Selfish"],
    "career": "Entrepreneurs, military, sports, management, sales",
    "compatibility": ["Leo", "Sagittarius", "Gemini", "Aquarius"],
    "luckyNumbers": [1, 8, 17, 21, 25],
    "luckyColors": ["Red", "Orange", "Yellow"],
    "personality": "Aries individuals are natural-born leaders who approach life with unmatched enthusiasm and courage. You possess a pioneering spirit and aren't afraid to venture into uncharted territory."
  },
  "taurus": {
    "name": "Taurus",
    "dates": "April 20 - May 20",
    "element": "Earth",
    "planet": "Venus",
    "symbol": "♉",
    "color": "#4ECDC4",
    "traits": ["Reliable", "Patient", "Practical", "Devoted", "Stable"],
    "strengths": ["Dependable", "Patient", "Responsible", "Devoted", "Stable"],
    "weaknesses": ["Stubborn", "Possessive", "Uncompromising", "Materialistic"],
    "career": "Banking, agriculture, art, culinary arts, real estate",
    "compatibility": ["Virgo", "Capricorn", "Cancer", "Pisces"],
    "luckyNumbers": [2, 6, 9, 12, 24],
    "luckyColors": ["Green", "Pink", "Blue"],
    "personality": "Taurus individuals value stability and security above all else. You have a deep appreciation for beauty, comfort, and the finer things in life."
  },
  "gemini": {
    "name": "Gemini",
    "dates": "May 21 - June 20",
    "element": "Air",
    "planet": "Mercury",
    "symbol": "♊",
    "color": "#FFE66D",
    "traits": ["Adaptable", "Curious", "Communicative", "Witty", "Social"],
    "strengths": ["Versatile", "Quick-witted", "Enthusiastic", "Expressive", "Intelligent"],
    "weaknesses": ["Inconsistent", "Indecisive", "Superficial", "Restless"],
    "career": "Media, communication, teaching, writing, sales",
    "compatibility": ["Libra", "Aquarius", "Aries", "Leo"],
    "luckyNumbers": [5, 7, 14, 23, 32],
    "luckyColors": ["Yellow", "Silver", "Green"],
    "personality": "Gemini individuals are the communicators of the zodiac, blessed with quick wit and insatiable curiosity."
  },
  "cancer": {
    "name": "Cancer",
    "dates": "June 21 - July 22",
    "element": "Water",
    "planet": "Moon",
    "symbol": "♋",
    "color": "#A8E6CF",
    "traits": ["Intuitive", "Emotional", "Nurturing", "Protective", "Loyal"],
    "strengths": ["Compassionate", "Intuitive", "Loyal", "Protective", "Caring"],
    "weaknesses": ["Moody", "Pessimistic", "Clingy", "Suspicious", "Manipulative"],
    "career": "Healthcare, education, hospitality, social work, culinary arts",
    "compatibility": ["Scorpio", "Pisces", "Taurus", "Virgo"],
    "luckyNumbers": [2, 7, 11, 16, 20],
    "luckyColors": ["White", "Silver", "Sea Green"],
    "personality": "Cancer individuals are the nurturers of the zodiac, with deep emotional intelligence and strong intuitive abilities."
  },
  "leo": {
    "name": "Leo",
    "dates": "July 23 - August 22",
    "element": "Fire",
    "planet": "Sun",
    "symbol": "♌",
    "color": "#FFB347",
    "traits": ["Confident", "Generous", "Creative", "Dramatic", "Warm-hearted"],
    "strengths": ["Creative", "Generous", "Warm-hearted", "Cheerful", "Humorous"],
    "weaknesses": ["Arrogant", "Stubborn", "Self-centered", "Lazy", "Inflexible"],
    "career": "Entertainment, leadership, creative arts, public relations, politics",
    "compatibility": ["Aries", "Sagittarius", "Gemini", "Libra"],
    "luckyNumbers": [1, 3, 10, 19, 28],
    "luckyColors": ["Gold", "Orange", "Red"],
    "personality": "Leo individuals radiate confidence and natural charisma that draws others to them."
  },
  "virgo": {
    "name": "Virgo",
    "dates": "August 23 - September 22",
    "element": "Earth",
    "planet": "Mercury",
    "symbol": "♍",
    "color": "#DDA0DD",
    "traits": ["Analytical", "Practical", "Helpful", "Reliable", "Precise"],
    "strengths": ["Analytical", "Helpful", "Reliable", "Precise", "Modest"],
    "weaknesses": ["Overcritical", "Harsh", "Perfectionist", "Conservative"],
    "career": "Healthcare, analysis, research, editing, service industries",
    "compatibility": ["Taurus", "Capricorn", "Cancer", "Scorpio"],
    "luckyNumbers": [6, 14, 18, 23, 27],
    "luckyColors": ["Navy Blue", "Grey", "Brown"],
    "personality": "Virgo individuals possess an analytical mind and attention to detail that is unmatched."
  },
  "libra": {
    "name": "Libra",
    "dates": "September 23 - October 22",
    "element": "Air",
    "planet": "Venus",
    "symbol": "♎",
    "color": "#F8BBD9",
    "traits": ["Diplomatic", "Balanced", "Social", "Charming", "Fair-minded"],
    "strengths": ["Diplomatic", "Fair-minded", "Social", "Charming", "Peaceful"],
    "weaknesses": ["Indecisive", "Avoids confrontation", "Self-pity", "Unreliable"],
    "career": "Law, diplomacy, art, fashion, counseling, public relations",
    "compatibility": ["Gemini", "Aquarius", "Leo", "Sagittarius"],
    "luckyNumbers": [4, 6, 13, 15, 24],
    "luckyColors": ["Blue", "Green", "Pink"],
    "personality": "Libra individuals are the diplomats of the zodiac, with an innate sense of fairness and harmony."
  },
  "scorpio": {
    "name": "Scorpio",
    "dates": "October 23 - November 21",
    "element": "Water",
    "planet": "Pluto/Mars",
    "symbol": "♏",
    "color": "#CD5C5C",
    "traits": ["Intense", "Passionate", "Mysterious", "Determined", "Brave"],
    "strengths": ["Determined", "Brave", "Loyal", "Honest", "Ambitious"],
    "weaknesses": ["Jealous", "Secretive", "Resentful", "Controlling", "Stubborn"],
    "career": "Psychology, investigation, research, medicine, occult sciences",
    "compatibility": ["Cancer", "Pisces", "Virgo", "Capricorn"],
    "luckyNumbers": [8, 11, 18, 22, 29],
    "luckyColors": ["Deep Red", "Black", "Maroon"],
    "personality": "Scorpio individuals possess intense emotional depth and mysterious magnetism."
  },
  "sagittarius": {
    "name": "Sagittarius",
    "dates": "November 22 - December 21",
    "element": "Fire",
    "planet": "Jupiter",
    "symbol": "♐",
    "color": "#DEB887",
    "traits": ["Optimistic", "Freedom-loving", "Adventurous", "Philosophical", "Honest"],
    "strengths": ["Generous", "Idealistic", "Great sense of humor", "Philosophical"],
    "weaknesses": ["Impatient", "Undiplomatic", "Will say anything", "Inconsistent"],
    "career": "Travel, education, philosophy, sports, publishing, foreign trade",
    "compatibility": ["Aries", "Leo", "Libra", "Aquarius"],
    "luckyNumbers": [3, 7, 9, 15, 21],
    "luckyColors": ["Purple", "Turquoise", "Orange"],
    "personality": "Sagittarius individuals are the adventurers and philosophers of the zodiac."
  },
  "capricorn": {
    "name": "Capricorn",
    "dates": "December 22 - January 19",
    "element": "Earth",
    "planet": "Saturn",
    "symbol": "♑",
    "color": "#708090",
    "traits": ["Ambitious", "Disciplined", "Practical", "Responsible", "Patient"],
    "strengths": ["Responsible", "Disciplined", "Self-control", "Good managers"],
    "weaknesses": ["Know-it-all", "Unforgiving", "Condescending", "Pessimistic"],
    "career": "Management, government, engineering, real estate, administration",
    "compatibility": ["Taurus", "Virgo", "Scorpio", "Pisces"],
    "luckyNumbers": [4, 8, 13, 22, 26],
    "luckyColors": ["Brown", "Black", "Dark Green"],
    "personality": "Capricorn individuals are the achievers of the zodiac, with unwavering determination."
  },
  "aquarius": {
    "name": "Aquarius",
    "dates": "January 20 - February 18",
    "element": "Air",
    "planet": "Uranus/Saturn",
    "symbol": "♒",
    "color": "#87CEEB",
    "traits": ["Independent", "Humanitarian", "Original", "Friendly", "Inventive"],
    "strengths": ["Progressive", "Original", "Independent", "Humanitarian"],
    "weaknesses": ["Runs from emotional expression", "Temperamental", "Uncompromising"],
    "career": "Technology, humanitarian work, science, innovation, social causes",
    "compatibility": ["Gemini", "Libra", "Aries", "Sagittarius"],
    "luckyNumbers": [4, 7, 11, 22, 29],
    "luckyColors": ["Electric Blue", "Silver", "Purple"],
    "personality": "Aquarius individuals are the visionaries and humanitarians of the zodiac."
  },
  "pisces": {
    "name": "Pisces",
    "dates": "February 19 - March 20",
    "element": "Water",
    "planet": "Neptune/Jupiter",
    "symbol": "♓",
    "color": "#DA70D6",
    "traits": ["Compassionate", "Intuitive", "Artistic", "Gentle", "Wise"],
    "strengths": ["Compassionate", "Artistic", "Intuitive", "Gentle", "Wise"],
    "weaknesses": ["Fearful", "Overly trusting", "Sad", "Desire to escape reality"],
    "career": "Arts, healing, music, psychology, spiritual guidance, charity work",
    "compatibility": ["Cancer", "Scorpio", "Taurus", "Capricorn"],
    "luckyNumbers": [3, 9, 12, 15, 18],
    "luckyColors": ["Sea Green", "Lavender", "Silver"],
    "personality": "Pisces individuals are the dreamers and mystics of the zodiac, with deep emotional sensitivity."
  }
};

// Common questions for the chat interface
const commonQuestions = [
  "What career path is best for me?",
  "When will I find love?",
  "What should I know about my health?",
  "Will my financial situation improve?",
  "What are my lucky numbers today?",
  "Who am I most compatible with?",
  "What challenges will I face this year?",
  "When should I make important decisions?"
];

// Global variables
let currentStep = 1;
const totalSteps = 4;
let userData = {};
let userZodiacSign = null;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  setupEventListeners();
  generateQuestionChips();
  
  // Set current date as max for birth date input
  const birthDateInput = document.getElementById('birth-date');
  const today = new Date().toISOString().split('T')[0];
  birthDateInput.max = today;
});

// Setup event listeners
function setupEventListeners() {
  const form = document.getElementById('birth-form');
  form.addEventListener('submit', handleFormSubmit);
  
  const questionInput = document.getElementById('question-input');
  questionInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      sendQuestion();
    }
  });
  
  // Add input event listeners for floating labels
  const inputs = document.querySelectorAll('.form-control');
  inputs.forEach(input => {
    input.addEventListener('input', updateFloatingLabel);
    input.addEventListener('focus', updateFloatingLabel);
    input.addEventListener('blur', updateFloatingLabel);
  });
}

// Start the astrological journey
function startJourney() {
  const heroSection = document.getElementById('hero');
  const formSection = document.getElementById('form-section');
  
  heroSection.style.opacity = '0';
  heroSection.style.transform = 'translateY(-20px)';
  
  setTimeout(() => {
    heroSection.classList.add('hidden');
    formSection.classList.remove('hidden');
    formSection.style.opacity = '0';
    formSection.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
      formSection.style.transition = 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
      formSection.style.opacity = '1';
      formSection.style.transform = 'translateY(0)';
    }, 50);
  }, 300);
}

// Navigate to next step
function nextStep() {
  if (!validateCurrentStep()) {
    return;
  }
  
  if (currentStep < totalSteps) {
    const currentStepElement = document.querySelector(`[data-step="${currentStep}"]`);
    const nextStepElement = document.querySelector(`[data-step="${currentStep + 1}"]`);
    
    currentStepElement.classList.remove('active');
    nextStepElement.classList.add('active');
    
    currentStep++;
    updateProgress();
    updateNavigationButtons();
  }
}

// Navigate to previous step
function previousStep() {
  if (currentStep > 1) {
    const currentStepElement = document.querySelector(`[data-step="${currentStep}"]`);
    const prevStepElement = document.querySelector(`[data-step="${currentStep - 1}"]`);
    
    currentStepElement.classList.remove('active');
    prevStepElement.classList.add('active');
    
    currentStep--;
    updateProgress();
    updateNavigationButtons();
  }
}

// Update progress bar
function updateProgress() {
  const progressFill = document.getElementById('progress-fill');
  const currentStepSpan = document.getElementById('current-step');
  const percentage = (currentStep / totalSteps) * 100;
  
  progressFill.style.width = `${percentage}%`;
  currentStepSpan.textContent = currentStep;
}

// Update navigation buttons
function updateNavigationButtons() {
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  const submitBtn = document.getElementById('submit-btn');
  
  prevBtn.disabled = currentStep === 1;
  
  if (currentStep === totalSteps) {
    nextBtn.classList.add('hidden');
    submitBtn.classList.remove('hidden');
  } else {
    nextBtn.classList.remove('hidden');
    submitBtn.classList.add('hidden');
  }
}

// Validate current step
function validateCurrentStep() {
  const currentStepElement = document.querySelector(`[data-step="${currentStep}"]`);
  const input = currentStepElement.querySelector('.form-control');
  
  if (!input.value.trim()) {
    input.focus();
    input.style.borderColor = '#FF6B6B';
    input.style.boxShadow = '0 0 0 3px rgba(255, 107, 107, 0.2)';
    
    setTimeout(() => {
      input.style.borderColor = '';
      input.style.boxShadow = '';
    }, 3000);
    
    return false;
  }
  
  return true;
}

// Update floating label animation
function updateFloatingLabel(e) {
  const input = e.target;
  const label = input.nextElementSibling;
  
  if (input.value || input.type === 'date' || input.type === 'time') {
    label.style.transform = 'translateY(-140%) scale(0.85)';
    label.style.color = '#4ECDC4';
  } else if (!input.matches(':focus')) {
    label.style.transform = 'translateY(-50%)';
    label.style.color = 'rgba(255, 255, 255, 0.6)';
  }
}

// Handle form submission
function handleFormSubmit(e) {
  e.preventDefault();
  
  if (!validateCurrentStep()) {
    return;
  }
  
  // Collect user data
  userData = {
    name: document.getElementById('name').value.trim(),
    birthDate: document.getElementById('birth-date').value,
    birthTime: document.getElementById('birth-time').value,
    birthPlace: document.getElementById('birth-place').value.trim()
  };
  
  // Calculate zodiac sign
  userZodiacSign = calculateZodiacSign(userData.birthDate);
  
  // Show loading screen
  showLoadingScreen();
  
  // Simulate calculation time
  setTimeout(() => {
    showResults();
  }, 3000);
}

// Show loading screen
function showLoadingScreen() {
  const formSection = document.getElementById('form-section');
  const loadingSection = document.getElementById('loading-section');
  
  formSection.classList.add('hidden');
  loadingSection.classList.remove('hidden');
}

// Calculate zodiac sign from birth date
function calculateZodiacSign(birthDate) {
  const date = new Date(birthDate);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  
  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return 'aries';
  if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return 'taurus';
  if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return 'gemini';
  if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return 'cancer';
  if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return 'leo';
  if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return 'virgo';
  if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return 'libra';
  if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return 'scorpio';
  if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return 'sagittarius';
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return 'capricorn';
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return 'aquarius';
  if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) return 'pisces';
  
  return 'aries'; // fallback
}

// Show results section
function showResults() {
  const loadingSection = document.getElementById('loading-section');
  const resultsSection = document.getElementById('results-section');
  
  loadingSection.classList.add('hidden');
  resultsSection.classList.remove('hidden');
  
  populateResults();
}

// Populate results with zodiac data
function populateResults() {
  const sign = zodiacData[userZodiacSign];
  
  // Update user name
  document.getElementById('user-name-display').textContent = `Welcome, ${userData.name}!`;
  
  // Zodiac sign card
  document.getElementById('zodiac-symbol').textContent = sign.symbol;
  document.getElementById('zodiac-name').textContent = sign.name;
  document.getElementById('zodiac-dates').textContent = sign.dates;
  document.getElementById('zodiac-element').textContent = sign.element;
  document.getElementById('zodiac-planet').textContent = sign.planet;
  
  // Personality card
  document.getElementById('personality-text').textContent = sign.personality;
  
  // Traits
  const traitsList = document.getElementById('traits-list');
  traitsList.innerHTML = '';
  sign.traits.forEach(trait => {
    const traitTag = document.createElement('span');
    traitTag.className = 'trait-tag';
    traitTag.textContent = trait;
    traitsList.appendChild(traitTag);
  });
  
  // Compatibility
  const compatibilityList = document.getElementById('compatibility-list');
  compatibilityList.innerHTML = '';
  sign.compatibility.forEach(compatibleSign => {
    const compatibilitySign = document.createElement('span');
    compatibilitySign.className = 'compatibility-sign';
    compatibilitySign.textContent = compatibleSign;
    compatibilityList.appendChild(compatibilitySign);
  });
  
  // Lucky elements
  document.getElementById('lucky-numbers').textContent = sign.luckyNumbers.join(', ');
  document.getElementById('lucky-colors').textContent = sign.luckyColors.join(', ');
  
  // Career
  document.getElementById('career-fields').textContent = sign.career;
  
  // Strengths
  const strengthList = document.getElementById('strength-list');
  strengthList.innerHTML = '';
  sign.strengths.forEach(strength => {
    const strengthTag = document.createElement('span');
    strengthTag.className = 'strength-tag';
    strengthTag.textContent = strength;
    strengthList.appendChild(strengthTag);
  });
  
  // Weaknesses
  const weaknessList = document.getElementById('weakness-list');
  weaknessList.innerHTML = '';
  sign.weaknesses.forEach(weakness => {
    const weaknessTag = document.createElement('span');
    weaknessTag.className = 'weakness-tag';
    weaknessTag.textContent = weakness;
    weaknessList.appendChild(weaknessTag);
  });
}

// Generate question chips
function generateQuestionChips() {
  const questionChips = document.getElementById('question-chips');
  
  commonQuestions.slice(0, 6).forEach(question => {
    const chip = document.createElement('span');
    chip.className = 'question-chip';
    chip.textContent = question;
    chip.addEventListener('click', () => {
      document.getElementById('question-input').value = question;
      sendQuestion();
    });
    questionChips.appendChild(chip);
  });
}

// Send question to oracle
function sendQuestion() {
  const questionInput = document.getElementById('question-input');
  const question = questionInput.value.trim();
  
  if (!question) return;
  
  addUserMessage(question);
  questionInput.value = '';
  
  // Show typing indicator
  showTypingIndicator();
  
  // Generate response after a delay
  setTimeout(() => {
    const response = generateOracleResponse(question);
    hideTypingIndicator();
    addOracleMessage(response);
  }, 1500 + Math.random() * 1500);
}

// Add user message to chat
function addUserMessage(message) {
  const chatMessages = document.getElementById('chat-messages');
  const messageDiv = document.createElement('div');
  messageDiv.className = 'user-message';
  
  messageDiv.innerHTML = `
    <div class="message-avatar">👤</div>
    <div class="message-content">
      <p>${message}</p>
    </div>
  `;
  
  chatMessages.appendChild(messageDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Add oracle message to chat
function addOracleMessage(message) {
  const chatMessages = document.getElementById('chat-messages');
  const messageDiv = document.createElement('div');
  messageDiv.className = 'oracle-message';
  
  messageDiv.innerHTML = `
    <div class="message-avatar">🔮</div>
    <div class="message-content">
      <p>${message}</p>
    </div>
  `;
  
  chatMessages.appendChild(messageDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Show typing indicator
function showTypingIndicator() {
  const chatMessages = document.getElementById('chat-messages');
  const typingDiv = document.createElement('div');
  typingDiv.className = 'typing-indicator';
  typingDiv.id = 'typing-indicator';
  
  typingDiv.innerHTML = `
    <div class="message-avatar">🔮</div>
    <div class="typing-dots">
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
    </div>
    <span>The Oracle is consulting the stars...</span>
  `;
  
  chatMessages.appendChild(typingDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Hide typing indicator
function hideTypingIndicator() {
  const typingIndicator = document.getElementById('typing-indicator');
  if (typingIndicator) {
    typingIndicator.remove();
  }
}

// Generate oracle response based on question and user data
function generateOracleResponse(question) {
  const sign = zodiacData[userZodiacSign];
  const name = userData.name.split(' ')[0]; // Use first name
  
  const responses = {
    career: [
      `${name}, as a ${sign.name}, your natural ${sign.traits[0].toLowerCase()} nature makes you well-suited for ${sign.career.toLowerCase()}. The stars suggest focusing on leadership roles that match your ${sign.element.toLowerCase()} energy.`,
      `The cosmic alignment favors your career growth, ${name}. Your ${sign.name} determination and ${sign.strengths[0].toLowerCase()} qualities will open new opportunities in the coming months. Trust your instincts.`,
      `Dear ${name}, your ${sign.element} sign energy is particularly strong in professional matters. Consider fields that utilize your natural ${sign.traits[1].toLowerCase()} abilities. Success awaits those who embrace their true nature.`
    ],
    love: [
      `${name}, Venus whispers that your ${sign.name} heart is ready for deep connection. Look for partners among ${sign.compatibility[0]} or ${sign.compatibility[1]} signs - they complement your ${sign.element.toLowerCase()} nature beautifully.`,
      `The stars reveal that your ${sign.traits[2].toLowerCase()} personality attracts kindred spirits. Trust your intuition, ${name}. Love flows when you embrace your authentic ${sign.name} self.`,
      `Dear ${name}, your romantic destiny is written in the stars. As a ${sign.name}, you seek a partner who appreciates your ${sign.strengths[0].toLowerCase()} nature. Be patient - true love recognizes true love.`
    ],
    health: [
      `${name}, your ${sign.name} constitution benefits from activities that honor your ${sign.element.toLowerCase()} element. Listen to your body's wisdom and maintain balance in all things.`,
      `The cosmic forces advise paying attention to your ${sign.element.toLowerCase()} element's needs, ${name}. Your ${sign.name} vitality is strongest when you align with your natural rhythms.`,
      `Dear ${name}, as a ${sign.name}, your health flourishes through practices that enhance your innate ${sign.traits[0].toLowerCase()} energy. The stars favor holistic approaches to wellness.`
    ],
    finance: [
      `${name}, your ${sign.name} approach to resources reflects your ${sign.element.toLowerCase()} nature. The stars suggest that your natural ${sign.strengths[0].toLowerCase()} abilities will lead to financial stability. Trust your instincts with investments.`,
      `The cosmic energies surrounding your finances are shifting positively, ${name}. Your ${sign.name} determination and ${sign.traits[0].toLowerCase()} spirit will overcome current challenges. Opportunity comes to those who persist.`,
      `Dear ${name}, Jupiter's influence on your financial sector is strengthening. Your ${sign.element} sign wisdom suggests diversifying your resources while staying true to your ${sign.name} values.`
    ],
    general: [
      `${name}, the cosmic energies surrounding you as a ${sign.name} are particularly powerful right now. Your ${sign.element.toLowerCase()} nature guides you toward your highest path. Trust the journey.`,
      `Dear ${name}, your ${sign.name} spirit shines brightly in the cosmic tapestry. The stars whisper of significant growth and transformation aligned with your natural ${sign.traits[0].toLowerCase()} essence.`,
      `The universe recognizes your ${sign.name} energy, ${name}. Your ${sign.element} sign wisdom and ${sign.strengths[0].toLowerCase()} qualities are your greatest assets in navigating life's mysteries.`,
      `${name}, as the celestial bodies dance in harmony with your ${sign.name} essence, remember that your ${sign.traits[1].toLowerCase()} nature is both a gift and a guide. The cosmos supports your authentic path.`
    ]
  };
  
  // Determine response category based on question content
  let category = 'general';
  const questionLower = question.toLowerCase();
  
  if (questionLower.includes('career') || questionLower.includes('job') || questionLower.includes('work') || questionLower.includes('business')) {
    category = 'career';
  } else if (questionLower.includes('love') || questionLower.includes('relationship') || questionLower.includes('marriage') || questionLower.includes('partner')) {
    category = 'love';
  } else if (questionLower.includes('health') || questionLower.includes('wellness') || questionLower.includes('body') || questionLower.includes('diet')) {
    category = 'health';
  } else if (questionLower.includes('money') || questionLower.includes('finance') || questionLower.includes('wealth') || questionLower.includes('invest')) {
    category = 'finance';
  }
  
  // Select random response from category
  const categoryResponses = responses[category];
  return categoryResponses[Math.floor(Math.random() * categoryResponses.length)];
}