let currentScreen = 1;
const totalScreens = 8;

function nextScreen() {
  document.querySelector(`.screen-${currentScreen}`).classList.remove('active');
  currentScreen++;
  
  if (currentScreen > totalScreens) {
    completeOnboarding();
    return;
  }
  
  document.querySelector(`.screen-${currentScreen}`).classList.add('active');
  window.scrollTo(0, 0);
}

function skip() {
  if (confirm('Вы уверены, что хотите пропустить обучение?')) {
    completeOnboarding();
  }
}

function showVideo() {
  alert('Демо-ролик будет показан');
}

function showTip(tipType) {
  const tooltip = document.getElementById('tooltip');
  tooltip.classList.remove('hidden');
  
  const tips = {
    scale: 'AWS автоматически масштабирует ресурсы в зависимости от нагрузки',
    security: 'AWS предоставляет многоуровневую защиту данных и инфраструктуры',
    billing: 'Вы платите только за те ресурсы, которые действительно используете'
  };
  
  tooltip.textContent = tips[tipType] || 'Информация о функции';
  tooltip.classList.add('visible');
  
  setTimeout(() => {
    tooltip.classList.remove('visible');
  }, 8000);
}

function showService(service) {
  const serviceInfo = document.getElementById('serviceInfo');
  serviceInfo.classList.remove('hidden');
  
  const services = {
    ec2: 'Amazon EC2 - это веб-сервис, который предоставляет безопасные и изменяемые в размере вычислительные мощности в облаке',
    s3: 'Amazon S3 - это сервис хранения объектов, предлагающий ведущую в отрасли масштабируемость, доступность данных, безопасность и производительность',
    lambda: 'AWS Lambda - это сервис бессерверных вычислений, который выполняет ваш код в ответ на события'
  };
  
  serviceInfo.textContent = services[service] || 'Информация о сервисе';
  serviceInfo.classList.add('visible');
  
  setTimeout(() => {
    serviceInfo.classList.remove('visible');
  }, 3000);
}

function openDocumentation() {
  window.open('https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html', '_blank');
}

function showAlertModal() {
  document.getElementById('alertModal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('alertModal').style.display = 'none';
}

function goToAWSConsole() {
  window.open('https://console.aws.amazon.com/', '_blank');
}

function contactExpert() {
  alert('Форма связи с экспертом будет открыта');
}

function completeOnboarding() {
  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.remove('active');
  });
  document.querySelector('.screen-8').classList.add('active');
}

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.screen:not(.screen-1)').forEach(screen => {
    screen.classList.remove('active');
  });
});