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
  document.body.prepend(widget);
};

const searchParams = new URLSearchParams(window.location.search);
const widgetId = searchParams.get('widgetId');
if (widgetId) {
  installPlatform();

  const widgetIdList = widgetId.split(',');
  widgetIdList.forEach(installWidget);
}
