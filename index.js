(()=>{const e=new URLSearchParams(window.location.search),t=e.get("widgetId"),n=e.get("withButton");if(t){(()=>{const e=document.createElement("script");e.setAttribute("src","https://static.elfsight.com/platform/platform.js"),e.setAttribute("data-use-service-core","true"),e.setAttribute("defer","true"),document.head.appendChild(e)})();t.split(",").forEach((e=>{n&&(e=>{const t=`https://dash.elfsight.com/admin/widgets/lookup/${e}`,n=document.createElement("button");n.style.cssText="\n    background-color: #f93262; /* Основной цвет */\n    color: #ffffff; /* Цвет текста */\n    border: none; /* Убираем границу */\n    border-radius: 4px; /* Радиус скругления углов */\n    padding: 8px 16px; /* Внутренние отступы */\n    font-size: 14px; /* Размер шрифта */\n    font-weight: 500; /* Жирность шрифта */\n    text-transform: uppercase; /* Приведение текста к верхнему регистру */\n    cursor: pointer; /* Курсор руки при наведении */\n    outline: none; /* Убираем обводку при фокусе */\n    transition: background-color 0.3s ease, transform 0.2s ease; /* Плавный переход цвета фона и трансформации */\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* Тень для кнопки */\n    margin: 20px 0;\n  ",n.addEventListener("mouseover",(()=>{n.style.backgroundColor="rgb(187 60 91)"})),n.addEventListener("mouseout",(()=>{n.style.backgroundColor="#f93262"})),n.addEventListener("mousedown",(()=>{n.style.transform="scale(0.95)"})),n.addEventListener("mouseup",(()=>{n.style.transform="scale(1)"})),n.addEventListener("click",(()=>{window.open(t,"_blank")})),n.textContent=`Widget: ${e}`,document.body.appendChild(n)})(e),(e=>{const t=document.createElement("div");t.classList.add(`elfsight-app-${e}`),document.body.appendChild(t)})(e)}))}})();
