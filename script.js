document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const count = 30; // количество снежинок

  for (let i = 0; i < count; i++) {
    const flake = document.createElement('div');
    flake.textContent = '❄';
    flake.className = 'snowflake';
    flake.style.left = Math.random() * 100 + 'vw';
    flake.style.fontSize = (Math.random() * 1.4 + 0.8) + 'em';
    flake.style.opacity = Math.random() * 0.6 + 0.4;
    flake.style.animationDuration = (Math.random() * 10 + 5) + 's';
    flake.style.animationDelay = Math.random() * 5 + 's';
    body.appendChild(flake);
  }
});
// ============================================
// 📅 Установка текущей даты
// ============================================

function setCurrentDate() {
    const now = new Date();
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        weekday: 'long'
    };
    document.getElementById('currentDate').textContent = 
        '📅 ' + now.toLocaleDateString('ru-RU', options);
    
    document.getElementById('lastUpdate').textContent = 
        now.toLocaleDateString('ru-RU', options);
}

// ============================================
// 🎯 Анимация чисел
// ============================================

function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        element.textContent = value + '%';
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// ============================================
// 📊 Обработка формы предсказания
// ============================================

document.getElementById('predictionForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const age = parseInt(document.getElementById('age').value);
    const experience = parseInt(document.getElementById('experience').value);
    const accidents = parseInt(document.getElementById('accidents').value);
    
    // Простая логика предсказания
    let riskScore = 0;
    
    if (age < 25) riskScore += 2;
    if (experience < 3) riskScore += 2;
    riskScore += accidents;
    
    const resultDiv = document.getElementById('predictionResult');
    
    if (riskScore <= 3) {
        resultDiv.className = 'prediction-result approved';
        resultDiv.innerHTML = '✅ ОДОБРЕНО <br> <small>Низкий риск страхования</small>';
    } else if (riskScore <= 5) {
        resultDiv.className = 'prediction-result premium';
        resultDiv.innerHTML = '⚠️ ПОВЫШЕННАЯ СТАВКА <br> <small>Средний риск страхования</small>';
    } else {
        resultDiv.className = 'prediction-result denied';
        resultDiv.innerHTML = '❌ ОТКАЗАНО <br> <small>Высокий риск страхования</small>';
    }
});

// ============================================
// 🚀 Инициализация при загрузке
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Установка даты
    setCurrentDate();
    
    // Анимация accuracy
    const accuracyElement = document.getElementById('accuracy');
    animateValue(accuracyElement, 0, 69, 1500);
    
    // Анимация прогресс-баров
    setTimeout(() => {
        document.querySelectorAll('.stat-bar-fill, .feature-bar-fill').forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0%';
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
        });
    }, 500);
    
    console.log('🚗 CASCO ML Model Loaded Successfully!');
    console.log('📊 Accuracy: 69%');
    console.log('📅 Date: ' + new Date().toLocaleDateString('ru-RU'));
});

// ============================================
// 🔄 Обновление времени каждую минуту
// ============================================

setInterval(setCurrentDate, 60000);
