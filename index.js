const installPlatform = () => {
  const script = document.createElement('script');
  script.setAttribute(
    'src',
    'https://static.elfsight.com/platform/platform.js',
  );
  script.setAttribute('data-use-service-core', 'true');
  script.setAttribute('defer', 'true');
  document.head.appendChild(script);
};

const installWidget = (widgetId) => {
  const widget = document.createElement('div');
  widget.classList.add(`elfsight-app-${widgetId}`);
  document.body.appendChild(widget);
};

const installButton = (widgetId) => {
  const widgetLink = `https://dash.elfsight.com/admin/widgets/lookup/${widgetId}`;

  const button = document.createElement('button');
  button.style.cssText = `
    background-color: #f93262; /* Основной цвет */
    color: #ffffff; /* Цвет текста */
    border: none; /* Убираем границу */
    border-radius: 4px; /* Радиус скругления углов */
    padding: 8px 16px; /* Внутренние отступы */
    font-size: 14px; /* Размер шрифта */
    font-weight: 500; /* Жирность шрифта */
    text-transform: uppercase; /* Приведение текста к верхнему регистру */
    cursor: pointer; /* Курсор руки при наведении */
    outline: none; /* Убираем обводку при фокусе */
    transition: background-color 0.3s ease, transform 0.2s ease; /* Плавный переход цвета фона и трансформации */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* Тень для кнопки */
    margin: 20px 0;
  `;
  button.addEventListener('mouseover', () => {
    button.style.backgroundColor = 'rgb(187 60 91)';
  });
  button.addEventListener('mouseout', () => {
    button.style.backgroundColor = '#f93262';
  });
  button.addEventListener('mousedown', () => {
    button.style.transform = 'scale(0.95)';
  });
  button.addEventListener('mouseup', () => {
    button.style.transform = 'scale(1)';
  });
  button.addEventListener('click', () => {
    window.open(widgetLink, '_blank');
  });

  button.textContent = className;
  document.body.appendChild(button);
};

const searchParams = new URLSearchParams(window.location.search);
const widgetId = searchParams.get('widgetId');
const withButton = searchParams.get('withButton');
if (widgetId) {
  installPlatform();

  const widgetIdList = widgetId.split(',');
  widgetIdList.forEach((item) => {
    installWidget(item);

    if (withButton) {
      installButton(item);
    }
  });
}
