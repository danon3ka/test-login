// Вставьте сюда полученный вами firebaseConfig
const firebaseConfig = {
    apiKey: "AIzaSyBrIjooGNGFPLktIuR2FrzFaiN82i9lD-Y",
    authDomain: "guideline-closemod.firebaseapp.com",
    projectId: "guideline-closemod",
    storageBucket: "guideline-closemod.firebasestorage.app",
    messagingSenderId: "279485089267",
    appId: "1:279485089267:web:4fd8c6810cb3152acd7e86",
    measurementId: "G-FL6JRV8TYS"
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  // Инициализация Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

  // Обработка формы авторизации
  document.getElementById('login-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    const nickname = document.getElementById('nickname').value.trim();
    const password = document.getElementById('password').value.trim();

    try {
      const userRef = db.collection("users").doc(nickname);
      const doc = await userRef.get();

      if (!doc.exists) {
        alert("Пользователь не найден!");
        return;
      }

      const storedPassword = doc.data().password;
      if (storedPassword !== password) {
        alert("Неправильный пароль!");
        return;
      }

      showProtectedContent();
    } catch (error) {
      alert("Ошибка входа: " + error.message);
    }
  });

  function showProtectedContent() {
    document.getElementById('login').classList.add('hidden');
    document.getElementById('content').classList.remove('hidden');
  }

  document.getElementById('logout').addEventListener('click', () => {
    document.getElementById('login').classList.remove('hidden');
    document.getElementById('content').classList.add('hidden');
  });



document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("rule-modal");
    const overlay = document.getElementById("modal-overlay");
    const closeModal = document.getElementById("close-modal");
    const modalTitle = document.getElementById("modal-title");
    const modalContent = document.getElementById("modal-content");

    function openModal(title, content) {
        modalTitle.innerText = title;
        modalContent.innerHTML = content;

        modalTitle.classList.add('large-title'); // Применение класса

        modal.classList.add("active");
        overlay.classList.add("active");

        // Отключаем прокрутку страницы
        document.body.classList.add('no-scroll');
    }

    function closeModalWindow() {
        modal.classList.remove("active");
        overlay.classList.remove("active");

        // Включаем прокрутку страницы
        document.body.classList.remove('no-scroll');
    }

    closeModal.addEventListener("click", closeModalWindow);
    overlay.addEventListener("click", closeModalWindow);

    document.querySelectorAll(".rule button").forEach((button, index) => {
        button.addEventListener("click", () => {
            const rules = [
                {
                    title: "1.1. Запрещено оскорбление/провокация участников сервера.",
                    content: `
                        <div>
                            <span class="title title-penalty">Наказание</span>
                        </div><br>
                        <table class="table-punishments-transitions">
                            <thead>
                                <tr>
                                    <th>Первый случай</th>
                                    <th>Повторные нарушения</th>
                                    <th>Постоянные нарушения</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><div class="punishment-item">Бан <span  class="penalty">1ч<span/></div></td>
                                    <td><div class="punishment-item punishment-repeat">Бан <span  class="penalty">2ч<span/></div></td>
                                    <td><div class="punishment-item punishment-permanent">Бан <span  class="color-red">10д</span></div></td>
                                </tr>
                            </tbody>
                        </table>
                        <div>
                            <p><span class="color-blue">Первый случай</span> - минимальное наказание, пользователь нарушил впервые.</p>
                            <p><span class="color-blue">Повторные нарушения</span> - увеличенное наказание, пользователь нарушает второй или более раз.</p>
                            <p><span class="color-blue">Постоянные нарушения</span> - более жесткие меры, пользователь систематически нарушает правила. Применяется по согласованию с <span class="color-red">старшим составом</span>.</p>
                            <p><span class="title-primer">Как проверить?</span></p>
                            <p class="tab-indent">1. Копируем <span class="grey-bg">ID</span> пользователя.</p>
                            <p class="tab-indent">2. Переходим в канал <span class="bg-color-channels"> # ⚪┇logs-closemod</span>.</p>
                            <p class="tab-indent">3. Используем комбинации <span class="grey-bg">Ctrl + F</span> и <span class="grey-bg">Ctrl + V</span>.</p>
                        </div>

                        <div style="margin-top: 20px;">
                            <span class="title title-info">Информация</span>
                        </div>
                        
                        <p>Любые формы оскорблений, направленные на участников сервера, караются.</p>
                        <p> <span class="c-red">Оскорбление</span> - умышленное унижение чести и достоинства личности.</p>
                        <p> <span class="c-red">Провокация на конфликт </span> - любая форма колкостей по отношению к пользователям нашего сервера (такие действия должны пресекаться на корню, если вы смогли предотвратить конфликт, наказание смягчается вплоть до нуля).</p>
                        <p>Не забывайте, что слова характеризующие уровень игры <span class="color-important">не относятся к 1.1</span>.</p>
                        <p><span class="title-primer">Примеры нарушения правила:</span></p>
                        <p class="tab-indent"><span class="grey-bg">Еблан</span>,<span class="grey-bg">долбоеб</span>,<span class="grey-bg">хуесос</span>,<span class="grey-bg">уебан</span>,<span class="grey-bg">мразь</span> и т.д.</p>
                        <p>Также в данном пункте важно заметить, что если человека спровоцировали на нарушение данного правила, то наказание либо не выдается либо же выдается в маленькой мере.</p>
                        
                        <div class="bg-notes-frame">
                            <span class="title-notes">Примечание:</span><br>Если вы находитесь не на рабочем месте(не являетесь ведущим клоза), а просто участвуете в чужом клозе/играете в своем и вас начинают оскорблять, то это относиться к пункту <span class="c-red">1.1</span>. То есть если вас оскорбляли как игрока - <span class="c-red">1.1</span>.
                        </div></br>
                    `
                },
                {
                    title: "1.2. Все игроки клоза должны находиться в голосовых каналах команд.",
                    content: `
                        <div>
                            <span class="title title-penalty">Наказание</span>
                        </div><br>
                        <table class="table-punishments-transitions">
                            <thead>
                                <tr>
                                    <th>Первый случай</th>
                                    <th>Повторные нарушения</th>
                                    <th>Постоянные нарушения</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><div class="punishment-item">Бан <span  class="penalty">30м<span/></div></td>
                                    <td><div class="punishment-item punishment-repeat">Бан <span  class="penalty">1ч<span/></div></td>
                                    <td><div class="punishment-item punishment-permanent">Бан <span  class="color-red">10д</span></div></td>
                                </tr>
                            </tbody>
                        </table>
                        <div>
                            <p><span class="color-blue">Первый случай</span> - минимальное наказание, пользователь нарушил впервые.</p>
                            <p><span class="color-blue">Повторные нарушения</span> - увеличенное наказание, пользователь нарушает второй или более раз.</p>
                            <p><span class="color-blue">Постоянные нарушения</span> - более жесткие меры, пользователь систематически нарушает правила. Применяется по согласованию с <span class="color-red">старшим составом</span>.</p>
                            <p><span class="title-primer">Как проверить?</span></p>
                            <p class="tab-indent">1. Копируем <span class="grey-bg">ID</span> пользователя.</p>
                            <p class="tab-indent">2. Переходим в канал <span class="bg-color-channels"> # ⚪┇logs-closemod</span>.</p>
                            <p class="tab-indent">3. Используем комбинации <span class="grey-bg">Ctrl + F</span> и <span class="grey-bg">Ctrl + V</span>.</p>
                        </div>
                        <div style="margin-top: 20px;">
                            <span class="title title-info">Информация</span>
                        </div>
                        <p>Игроки обязаны быть на связи в голосовых каналах своей команды. Это обеспечивает коммуникацию и командную игру.</p>
                        <p>Выдаем <span class="c-red">блокировку</span>, в случае когда игрок покинул голосовой канал и более не подключается.</p>
                        <p>Так же если игрок отсутвует более 2х- раундов - <span class="c-red">выдаем наказание</span>.</p>
                        <p><span class="c-orange">Исключением</span> является необходимость перезайти, иной момент, требуемый перезахода в Дискорд.</p><br>
                    `
                },
                {
                    title: "1.3. Запрещены деструктивные действия, которые могут привести команду к поражению.",
                    content: `
                        <div>
                            <span class="title title-penalty">Наказание</span>
                        </div><br>
                        <table class="table-punishments-transitions">
                            <thead>
                                <tr>
                                    <th>Первый случай</th>
                                    <th>Повторные нарушения</th>
                                    <th>Постоянные нарушения</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><div class="punishment-item">Бан <span  class="penalty">1д<span/></div></td>
                                    <td><div class="punishment-item punishment-repeat">Бан <span  class="penalty">2д<span/></div></td>
                                    <td><div class="punishment-item punishment-permanent">Бан <span  class="color-red">30д</span></div></td>
                                </tr>
                            </tbody>
                        </table>
                        <div>
                            <p><span class="color-blue">Первый случай</span> - минимальное наказание, пользователь нарушил впервые.</p>
                            <p><span class="color-blue">Повторные нарушения</span> - увеличенное наказание, пользователь нарушает второй или более раз.</p>
                            <p><span class="color-blue">Постоянные нарушения</span> - более жесткие меры, пользователь систематически нарушает правила. Применяется по согласованию с <span class="color-red">старшим составом</span>.</p>
                            <p><span class="title-primer">Как проверить?</span></p>
                            <p class="tab-indent">1. Копируем <span class="grey-bg">ID</span> пользователя.</p>
                            <p class="tab-indent">2. Переходим в канал <span class="bg-color-channels"> # ⚪┇logs-closemod</span>.</p>
                            <p class="tab-indent">3. Используем комбинации <span class="grey-bg">Ctrl + F</span> и <span class="grey-bg">Ctrl + V</span>.</p>
                        </div>
                        <div style="margin-top: 20px;">
                            <span class="title title-info">Информация</span>
                        </div>
                        <p>Например, афк более 2-ух раундов, помеха союзникам гранатами, намеренный «боди блок» союзника, «Слив» информации о союзнике в общий чат и т.д.</p>
                        <p><span class="c-red">Помеха союзникам гранатами:</span> Намеренный урон гранатами по союзникам, игрок намеренно бросает ослепляющие гранаты в своих товарищей, тем самым мешая нормальной игре.</p
                        <p><span class="c-red">Намеренный «боди блок» союзника:</span> Игрок блокирует путь своим союзникам, не позволяя им покинуть базу или занять ключевые позиции.</p>
                        <p><span class="c-red">Слив информации:</span> Игрок намеренно сообщает в общий чат расположение или планы своей команды.</p>
                        <p><span class="c-orange">Исключением</span> является слив инфы в стратегических целях, то есть ради обмана противников.</p>
                        <p><span class="c-red">Другие деструктивные действия:</span> Тимкиллинг, намеренная игра с ножем/только диглом, когда есть деньги на полноценный закуп, намеренная передача оружия врагу, неадекватное поведение в голосовом чате.</p>
                        <p>Эти действия подрывают командную игру и приводят к провалу всей стратегии команды, а так же убивают желание играть.</p><br>
                        `
                },
                {
                    title: "1.4. Запрещено использование сторонних программ макросов/ахк/скриптов/читов/скинченджеров. А так же запрещено отказываться от проверки на читы.",
                    content: `
                        <div>
                            <span class="title title-penalty">Наказание</span>
                        </div><br>
                        <table class="table-punishments-transitions">
                            <thead>
                                <tr>
                                    <th>Первый случай</th>
                                    <th>Повторные нарушения</th>
                                    <th>Постоянные нарушения</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><div class="punishment-item">Бан <span  class="color-red">90д<span/></div></td>
                                    <td><div class="punishment-item punishment-repeat">Бан <span  class="color-red">120д<span/></div></td>
                                    <td><div class="punishment-item punishment-permanent"><span  class="color-red">Пермач</span></div></td>
                                </tr>
                            </tbody>
                        </table>
                        <div>
                            <p><span class="color-blue">Первый случай</span> - минимальное наказание, пользователь нарушил впервые.</p>
                            <p><span class="color-blue">Повторные нарушения</span> - увеличенное наказание, пользователь нарушает второй или более раз.</p>
                            <p><span class="color-blue">Постоянные нарушения</span> - более жесткие меры, пользователь систематически нарушает правила. Применяется по согласованию с <span class="color-red">старшим составом</span>.</p>
                            <p><span class="title-primer">Как проверить?</span></p>
                            <p class="tab-indent">1. Копируем <span class="grey-bg">ID</span> пользователя.</p>
                            <p class="tab-indent">2. Переходим в канал <span class="bg-color-channels"> # ⚪┇logs-closemod</span>.</p>
                            <p class="tab-indent">3. Используем комбинации <span class="grey-bg">Ctrl + F</span> и <span class="grey-bg">Ctrl + V</span>.</p>
                        </div>
                        <div style="margin-top: 20px;">
                            <span class="title title-info">Информация</span>
                        </div>
                        <p>К данному пункту правил относится только те скрипты, которые касаются игры CS2, все читы для других игр не караются этим пунктом правил, но могут служить поводом подозревать пользователя.</p>
                        <p><span class="c-red">Поступила жалоба на пользователя?:</span></p>
                        <p class="tab-indent">1. Одна жалоба <b>без отката</b>? — <span class="c-orange">отправляем на проверку без блокировки в клозах</span>.</p>
                        <p class="tab-indent">2. Одна жалоба с <b>весомым откатом</b>? — <span class="c-red">отправляем на проверку с блокировкой на 1 день</span>.</p>
                        <p class="tab-indent">3. Две и более жалоб <b>с одного матча</b> — <span class="c-red">отправляем на проверку с блокировкой на 1 день</span>.</p>
                        <p class="c-red">Как отправить на проверку?: </p>
                        <p class="tab-indent"><span class="bg-color-commands">/проверка ID Жалоба пользователя</span> в канале <span class="bg-color-channels"># 💻┇проверка-на-читы</span>.</p>
                        <p class="c-red">Как выдать блокировку?: </p>
                        <p class="tab-indent"><span class="bg-color-commands">/ban ID 1d До проверки на читы</span> в канале <span class="bg-color-channels"># ✏・запись</span> или <span class="bg-color-channels"># 🔧┇для-клоз-команд</span>.</p>
                        
                        <div class="bg-notes-frame">
                            <strong>Так же стоить помнить</strong> , что в случае успешного прохождения проверки <span class="c-orange">блокировку</span> с пользователя <span class="c-orange">необходимо снять.</span> Для этого стоит обратиться к человеку от роли <span class="bg-color-nastavnik">@• Наставник</span> или выше.
                        </div><br><br><br>
                    `
                },
                {
                    title: "1.5. Игроки клоза обязаны предоставлять информацию о противниках.",
                    content: `
                        <div>
                            <span class="title title-penalty">Наказание</span>
                        </div><br>
                        <table class="table-punishments-transitions">
                            <thead>
                                <tr>
                                    <th>Первый случай</th>
                                    <th>Повторные нарушения</th>
                                    <th>Постоянные нарушения</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><div class="punishment-item">Бан <span  class="penalty">30м<span/></div></td>
                                    <td><div class="punishment-item punishment-repeat">Бан <span  class="penalty">1ч<span/></div></td>
                                    <td><div class="punishment-item punishment-permanent">Бан <span  class="color-red">5д</span></div></td>
                                </tr>
                            </tbody>
                        </table>
                        <div>
                            <p><span class="color-blue">Первый случай</span> - минимальное наказание, пользователь нарушил впервые.</p>
                            <p><span class="color-blue">Повторные нарушения</span> - увеличенное наказание, пользователь нарушает второй или более раз.</p>
                            <p><span class="color-blue">Постоянные нарушения</span> - более жесткие меры, пользователь систематически нарушает правила. Применяется по согласованию с <span class="color-red">старшим составом</span>.</p>
                            <p><span class="title-primer">Как проверить?</span></p>
                            <p class="tab-indent">1. Копируем <span class="grey-bg">ID</span> пользователя.</p>
                            <p class="tab-indent">2. Переходим в канал <span class="bg-color-channels"> # ⚪┇logs-closemod</span>.</p>
                            <p class="tab-indent">3. Используем комбинации <span class="grey-bg">Ctrl + F</span> и <span class="grey-bg">Ctrl + V</span>.</p>
                        </div>

                        <div style="margin-top: 20px;">
                            <span class="title title-info">Информация</span>
                        </div>
                        <p>Например, местоположение врага, количество нанесенного урона и т.д.</p>
                        <p>Если же поступает жалоба, что игрок никак не коммуницирует с командой - <span class="color-red">выдаем наказание</span>.</p>
                        <p><span class="c-orange">Исключением</span> является коммуникация через игру, если человек предупреждает о том, что он будет говорить в игре и его необходимо размутить (если кто-то отключает голосовой чат).</p><br>
                        `
                },
                {
                    title: "1.6. Запрещено покидать матч до его завершения.",
                    content: `
                        <div>
                            <span class="title title-penalty">Наказание</span>
                        </div><br>
                        <table class="table-punishments-transitions">
                            <thead>
                                <tr>
                                    <th>Первый случай</th>
                                    <th>Повторные нарушения</th>
                                    <th>Постоянные нарушения</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><div class="punishment-item">Бан <span  class="penalty">2ч<span/></div></td>
                                    <td><div class="punishment-item punishment-repeat">Бан <span  class="penalty">3ч<span/></div></td>
                                    <td><div class="punishment-item punishment-permanent">Бан <span  class="color-red">10д</span></div></td>
                                </tr>
                            </tbody>
                        </table>
                        <div>
                            <p><span class="color-blue">Первый случай</span> - минимальное наказание, пользователь нарушил впервые.</p>
                            <p><span class="color-blue">Повторные нарушения</span> - увеличенное наказание, пользователь нарушает второй или более раз.</p>
                            <p><span class="color-blue">Постоянные нарушения</span> - более жесткие меры, пользователь систематически нарушает правила. Применяется по согласованию с <span class="color-red">старшим составом</span>.</p>
                            <p><span class="title-primer">Как проверить?</span></p>
                            <p class="tab-indent">1. Копируем <span class="grey-bg">ID</span> пользователя.</p>
                            <p class="tab-indent">2. Переходим в канал <span class="bg-color-channels"> # ⚪┇logs-closemod</span>.</p>
                            <p class="tab-indent">3. Используем комбинации <span class="grey-bg">Ctrl + F</span> и <span class="grey-bg">Ctrl + V</span>.</p>
                        </div>

                        <div style="margin-top: 20px;">
                            <span class="title title-info">Информация</span>
                        </div>
                        <p>Игроки должны оставаться в матче до конца, чтобы не подводить команду.</p>
                        <p>Выдаем <span class="c-red">блокировку</span>, в случае когда игрок покинул матч и более не подключается.</p>
                        <p>Так же если игрок отсутвует более 2х- раундов - <span class="c-red">выдаем наказание</span>.</p>
                        <p><span class="c-orange">Исключением</span> является плохое подключение к интернету, необходимость перезайти, иной момент, требуемый перезахода в игру.</p>
                        `
                },
                {
                    title: "1.7. Запрещена неявка на клоз после записи и его начала.",
                    content: `
                        <div>
                            <span class="title title-penalty">Наказание</span>
                        </div><br>
                        <table class="table-punishments-transitions">
                            <thead>
                                <tr>
                                    <th>Первый случай</th>
                                    <th>Повторные нарушения</th>
                                    <th>Постоянные нарушения</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><div class="punishment-item">Бан <span  class="penalty">30м<span/></div></td>
                                    <td><div class="punishment-item punishment-repeat">Бан <span  class="penalty">2ч<span/></div></td>
                                    <td><div class="punishment-item punishment-permanent">Бан <span  class="color-red">5д</span></div></td>
                                </tr>
                            </tbody>
                        </table>
                        <div>
                            <p><span class="color-blue">Первый случай</span> - минимальное наказание, пользователь нарушил впервые.</p>
                            <p><span class="color-blue">Повторные нарушения</span> - увеличенное наказание, пользователь нарушает второй или более раз.</p>
                            <p><span class="color-blue">Постоянные нарушения</span> - более жесткие меры, пользователь систематически нарушает правила. Применяется по согласованию с <span class="color-red">старшим составом</span>.</p>
                            <p><span class="title-primer">Как проверить?</span></p>
                            <p class="tab-indent">1. Копируем <span class="grey-bg">ID</span> пользователя.</p>
                            <p class="tab-indent">2. Переходим в канал <span class="bg-color-channels"> # ⚪┇logs-closemod</span>.</p>
                            <p class="tab-indent">3. Используем комбинации <span class="grey-bg">Ctrl + F</span> и <span class="grey-bg">Ctrl + V</span>.</p>
                        </div>
                        <div>
                            <span class="title title-info">Информация</span>
                        </div>
                        <p>Все игроки должны зайти в игру в течении 5 минут с момента формирования ссылки для подключения на сервер.</p>
                        <p class="c-orange">Объяснение:</p>
                        <p>При появлении <span class="grey-bg">connect 157.90.1.110:27049</span>, игроки получают до 5 минут на подключение к серверу.</p>
                        <p><span class="c-orange">Исключением</span> является случай когда человека не "пускает" на сервер/карту, а так же другие индивидуальные, но весомые причины, о которых должны сообщить Вам в лс.</p>
                        <p>В данной ситуации<span class="c-orange"> наказание не выдаем</span>.</p>`
                },
                {
                    title: "1.8. Запрещено оскорбление родных.",
                    content: `
                        <div style="margin-top: 20px;">
                            <span class="title title-info">Таблица 1.8</span>
                        </div></br>
                        <table>
                            <tr>
                                <td id="rule-1.8" class="notes">№</td>
                                <td class="notes">Описание случая 1.8</td>
                                <td class="notes">Действие</td>
                            </tr>
                            <tr>
                                <td class="number-1-8">1</td>
                                <td class="notes-text">Использование формы употребления родных как случай агресси или ненависти с употребление нецензурных слов или высказываний в адрес родителей. Считается прямое или косвенное упоминание*</br></br><span class="color-orange"><span class="color-orange">Пример:</span></span> <span class="grey-bg">твой папа деб*л</span>, <span class="grey-bg">твоя мама д*ра</span>.</td>
                                <td class="notes-text"><span class="color-blue">🟡 Бан 2 дня</td>
                            </tr>
                            <tr>
                                <td class="number-1-8">2</td>
                                <td class="notes-text">Употребление в адрес родителей высказываний, описывающих нанесение вреда здоровью, половых связий и прочих действий нарушающих рамки моральной и этической стороны*</br></br><span class="color-orange">Пример 1:</span> <span class="grey-bg">я твою маму пиз*ил ногами</span></br></br><span class="color-orange">Пример 2:</span> <span class="grey-bg">твоя мать шл*ха, батя пид*р</span>.</td>
                                <td class="notes-text"><span class="color-red">🔴 Обращение к модерации</span></td>
                            </tr>
                            <tr>
                                <td class="number-1-8">3</td>
                                <td class="notes-text">Употребление в адрес родителей высказываний которые содержат случаи летального исхода</br></br><span class="color-orange">Пример:</span> <span class="grey-bg">я твою семью уб*ю</span>.</td>
                                <td class="notes-text"><span class="color-red">🔴 Обращение к модерации</span></td>
                            </tr>
                        </table></br>
                        `
                },
                {
                    title: "1.9. Запрещено любое упоминание политики и религии.",
                    content: `
                        <div>
                            <span class="title title-penalty">Наказание</span>
                        </div><br>
                        <table class="table-punishments-transitions">
                            <thead>
                                <tr>
                                    <th>Первый случай</th>
                                    <th>Повторные нарушения</th>
                                    <th>Постоянные нарушения</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><div class="punishment-item">Бан <span  class="penalty">1д<span/></div></td>
                                    <td><div class="punishment-item punishment-repeat">Бан <span  class="penalty">3д<span/></div></td>
                                    <td><div class="punishment-item punishment-permanent">Бан <span  class="color-red">30д</span></div></td>
                                </tr>
                            </tbody>
                        </table>
                        <div>
                            <p><span class="color-blue">Первый случай</span> - минимальное наказание, пользователь нарушил впервые.</p>
                            <p><span class="color-blue">Повторные нарушения</span> - увеличенное наказание, пользователь нарушает второй или более раз.</p>
                            <p><span class="color-blue">Постоянные нарушения</span> - более жесткие меры, пользователь систематически нарушает правила. Применяется по согласованию с <span class="color-red">старшим составом</span>.</p>
                            <p><span class="title-primer">Как проверить?</span></p>
                            <p class="tab-indent">1. Копируем <span class="grey-bg">ID</span> пользователя.</p>
                            <p class="tab-indent">2. Переходим в канал <span class="bg-color-channels"> # ⚪┇logs-closemod</span>.</p>
                            <p class="tab-indent">3. Используем комбинации <span class="grey-bg">Ctrl + F</span> и <span class="grey-bg">Ctrl + V</span>.</p>
                        </div>

                        <div style="margin-top: 20px;">
                            <span class="title title-info">Информация</span>
                        </div>
                        <p>Запрещено любое упоминание политики, политических деятелей, политических ситуаций, а так же запрещено любое упоминание религии.</p>
                        <p><span class="title-primer">Примеры нарушения правила:</span></p>
                        <p class="tab-indent"><span class="color-primer1">Пользователь 1:</span> <span class="grey-bg">Слава Украине!</span></p>
                        <p class="tab-indent"><span class="color-primer2">Пользователь 2:</span> <span class="grey-bg">Чел ты живешь в Украине помойке, а еще у тебя матери нет ХААХАХАХХ )0))))0)))))0.</span></p>
                        <p class="tab-indent"><span class="color-primer1">Пользователь 1:</span> <span class="grey-bg">Ну про мать было лишнее, а ещё Россия в 1000 раз хуже, у нас хотя бы есть свобода слова.</span></p>
                        
                        <p><span class="title-primer">Примеры НЕ ОТНОСЯТСЯ К НАРУШЕНИЮ:</span></p>
                        <p class="tab-indent"><span class="color-primer1">Пользователь 1:</span> <span class="grey-bg">Как думаете, когда было лучше в США? По моему мнению, в 80-ых самая атмосфера тогда была)</span></p>
                        <p class="tab-indent"><span class="color-primer2">Пользователь 2:</span> <span class="grey-bg">Не думаю, как по мне щас выросла экономика, есть некоторые траблы, но это взаимозаменяется тем, что тогда бандиты творили :)</span></p>

                        <p>Если у пользователя в профиле в обо мне написано: «Слава украине» - нарушения нет, главное чтобы пользователь не агитировал посмотреть его профиль</p>
                        <p class="title-primer">К нарушению относятся <span class="c-red">Исторические личности</span>.</p>
                        <div class="bg-notes-frame">
                            <span class="title-notes">Примечание:</span> Не нарушают исторические личности которые были до <span class="c-red">1901 года</span>. Также если историческая личность к примеру правила с 1890 по 1902, то это уже считаться нарушением пункта правил <span class="c-red">1.9</span>.
                        </div></br>
                        `
                },
                {
                    title: "1.10. Запрещено использование неадекватных и провоцирующих ников в игре.",
                    content: `
                        <div>
                            <span class="title title-penalty">Наказание</span>
                        </div><br>
                        <table class="table-punishments-transitions">
                            <thead>
                                <tr>
                                    <th>Первый случай</th>
                                    <th>Второй случай</th>
                                    <th>Последующие нарушения</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><div class="punishment-item">Бан <span  class="penalty">1д<span/></div></td>
                                    <td><div class="punishment-item punishment-repeat">Бан <span  class="penalty">14д<span/></div></td>
                                    <td><div class="punishment-item punishment-permanent">Бан <span  class="color-red">30д</span></div></td>
                                </tr>
                            </tbody>
                        </table>
                        <div>
                            <p><span class="color-blue">Первый случай</span> - минимальное наказание, пользователь нарушил впервые. <span class="color-yellow">Аминистировать</span> после смены ника.</p>
                            <p><span class="color-blue">Второй случай</span> - увеличенное наказание, пользователь не сменил ник после первой блокировки.</p>
                            <p><span class="color-blue">Последующие нарушения</span> - более жесткие меры, пользователь систематически нарушает правило. Применяется по согласованию с <span class="color-red">старшим составом</span>.</p>
                            <p><span class="title-primer">Как проверить?</span></p>
                            <p class="tab-indent">1. Копируем <span class="grey-bg">ID</span> пользователя.</p>
                            <p class="tab-indent">2. Переходим в канал <span class="bg-color-channels"> # ⚪┇logs-closemod</span>.</p>
                            <p class="tab-indent">3. Используем комбинации <span class="grey-bg">Ctrl + F</span> и <span class="grey-bg">Ctrl + V</span>.</p>
                            <p><span class="title-primer">Действия после блокировки:</span></p>
                            <p><span class="color-blue">Первый инцидент</span>: сообщить о блокировке и попросить сменить ник, если пользователь хочет продолжить дальнейшее участие в клозах.</p>
                            <p><span class="color-blue">Повторный инцидент</span>: повторно сообщить о блокировке и последний раз попросим сменить ник, если человек неадекватный и отказывается - <span  class="color-red">бан на 14д<span/>.</p>
                            <p><span class="color-yellow">Человек позже сменил ник:</span> можно амнистировать, если ник сменили, но при повторном нарушении <span  class="color-red">бан от 30д<span/>.</p>
                        </div>

                        <div style="margin-top: 20px;">
                            <span class="title title-info">Информация</span>
                        </div>
                        <p><span class="c-red">Неадекватный ник</span> - это такой, который содержит грубые, оскорбительные или неподобающие выражения, в том числе ненормативную лексику, оскорбления на основе расы, пола, национальности, а также пошлости и неуместные шутки.</p>
                        <p><span class="c-red">Провоцирующий никнейм</span> - это такой, который намеренно вызывает негативную реакцию других участников игры или нарушает общие нормы этикета. Это может включать политические лозунги, упоминания конфликтов, имена или фразы, связанные с исторически неоднозначными личностями, а также ники, насмехающиеся над участниками сообщества или игровыми событиями.</p>
                        <p><span class="color-red">Примеры нарушений:</span></p>
                        <p class="tab-indent"><span class="color-orange">Неадекватные никнеймы:</span> </p>
                        <p class="tab-indent">1. Мать_твою_123 — использование оскорбительных фраз.</p>
                        <p class="tab-indent">2. Xx_ТупойХохол_xX — использование расистских или национальных оскорблений.</p>
                        <p class="tab-indent"><span class="color-orange">Провоцирующие никнеймы:</span> </p>
                        <p class="tab-indent">1. СлаваСССР — может провоцировать политические споры, особенно среди участников с разными взглядами на историю.</p>
                        <p class="tab-indent">2. Аллах_Бабах — провокация на религиозной основе.</p>
                        <p class="tab-indent">3. КрымНаш_228 — политически заряженная тема, которая может вызывать конфликты.</p><br>
                        `
                },
                {
                    title: "1.11. Запрещено нарушение правил сообщества Discord.",
                    content: `
                        <div>
                            <span class="title title-penalty">Наказание</span>
                        </div>
                        <h4>При нарушении любого пункта правил сообщества Discord - <span class="color-red">передать жалобу модерации</span>.</h4>
                        <h4>
                            <span class="tb-1-11">Бан 9999д</span> - до общей разблокировки на сервере.
                        </h4>
                        <div style="margin-top: 20px;">
                            <span class="title title-info">Таблица 1.11</span>
                        </div></br>
                        <table>
                            <tr>
                                <td id="rule-1.11" class="number">№</td>
                                <td id="note-text">Правила сообщества Discord</td>
                            </tr>
                            <tr>
                                <td class="number">1</td>
                                <td>Не допускайте притеснений: не организуйте, не поддерживайте и не участвуйте в них.</br></br><span class="color-orange">Пример</span>: Участник начинает оскорблять другого в чате, называя его неудачником. Другие поддерживают его и пишут: <span class="grey-bg">Давайте бегать за ним по румам и говорить что он долбоеб</span>.</td>
                            </tr>
                            <tr>
                                <td class="number">2</td>
                                <td>Не угрожайте насилием или причинением вреда другим людям.</br></br><span class="color-orange">Пример:</span> <span class="grey-bg">Скинь адрес, приеду и разберусь с тобой.</span></td>
                            </tr>
                            <tr>
                                <td class="number">3</td>
                                <td>Не используйте язык вражды и не проявляйте ненависть к другим.</br></br><span class="color-orange">Пример:</span> Оскорбления на основе расы, пола, ориентации или религии, инвалидностей.</td>
                            </tr>
                            <tr>
                                <td class="number">4</td>
                                <td>Не организуйте, не поддерживайте и не пропагандируйте насильственный экстремизм.</br></br><span class="color-orange">Пример:</span> Участник в чате пишет: <span class="grey-bg">Талибаны правы, их действия оправданы</span>, и публикует изображение, пропагандирующее насилие.</td>
                            </tr>
                            <tr>
                                <td class="number">5</td>
                                <td>Не запрашивайте сексуальный контент и не вступайте в сексуальные отношения с людьми младше 18 лет.</br></br><span class="color-orange">Пример:</span> Письменные просьбы отправить интимные фотографии или предложения встретиться для сексуальных отношений с несовершеннолетними.</td>
                            </tr>
                            <tr>
                                <td class="number">6</td>
                                <td>Не предоставляйте сексуально откровенный контент лицам моложе 18 лет.</br></br><span class="color-orange">Пример:</span> Отправка или демонстрация интимных фотографий или видео несовершеннолетним в войсе или через личные сообщения.</td>
                            </tr>
                            <tr>
                                <td class="number">7</td>
                                <td>Не делитесь, не распространяйте и не создавайте сексуально откровенный или намекающий контент других людей без их согласия.</br></br><span class="color-orange">Пример:</span> Публикация интимных фотографий другого человека без его разрешения или распространение личных сообщений с сексуальным подтекстом.</td>
                            </tr>
                            <tr>
                                <td class="number">8</td>
                                <td>	Не делитесь контентом, который пропагандирует или оправдывает самоубийство или физическое самоповреждение.</br></br><span class="color-orange">Пример:</span> Публикация изображений или сообщений, призывающих к самоповреждению или восхваляющих суицид как выход из ситуации.</td>
                            </tr>
                            <tr>
                                <td class="number">9</td>
                                <td>Не делитесь реальными изображениями или видео, содержащими насилие, кровь или жестокое обращение с животными или людьми, особенно если это делается для того, чтобы напугать или шокировать людей.</br><span class="color-orange">Пример:</span> Отправка видео с жестоким убийством животного или сцены насилия, чтобы вызвать у других страха или неприятные эмоции.</td>
                            </tr>
                            <tr>
                                <td class="number">10</td>
                                <td>	Не отправляйте нежелательные массовые сообщения (спам) другим пользователям.</br><span class="color-orange">Пример:</span> Пользователь рассылает одно и то же сообщение в личные сообщения множеству людей, например: Привет! У меня есть классная информация для тебя, открой ссылку и узнай больше! — без того, чтобы участники сами просили об этом.</td>
                            </tr>
                            <tr>
                                <td class="number">11</td>
                                <td>Не распространяйте ложную или вводящую в заблуждение информацию.</br><span class="color-orange">Пример:</span> Публикация фейковых новостей или недостоверных данных, чтобы обмануть других участников.</td>
                            </tr>
                            <tr>
                                <td class="number">12</td>
                                <td>Не притворяйтесь кем-то другим с целью обмана или вреда.</br><span class="color-orange">Пример:</span> Создание аккаунта с чужим именем и аватаром, чтобы выдавать себя за этого человека и вводить других в заблуждение.</td>
                            </tr>
                            <tr>
                                <td class="number">13</td>
                                <td>Не совершайте действий, которые могут угрожать безопасности аккаунтов, сетей или систем.</br></br><span class="color-orange">Пример:</span> Попытка взломать чужую учетную запись, распространение вредоносных программ или атаки на серверы.</td>
                            </tr>
                            <tr>
                                <td class="number">14</td>
                                <td>	Не используйте Discord для организации или продвижения финансового мошенничества.</br><span class="color-orange">Пример:</span> Создание схемы "быстрого заработка" или отправка сообщений с фальшивыми инвестиционными предложениями, чтобы обмануть пользователей и получить их деньги.</td>
                            </tr>
                            <tr>
                                <td class="number">15</td>
                                <td>Не совершайте действий, которые обманывают других ради получения прибыли.</br></br><span class="color-orange">Пример</span>: Продажа поддельных товаров или услуг, сбор денег на несуществующий проект.</td>
                            </tr>
                            <tr>
                                <td class="number">16</td>
                                <td>Не публикуйте контент, который нарушает права интеллектуальной собственности других людей.</br></br><span class="color-orange">Пример:</span> Распространение фильмов, музыки или изображений без разрешения правообладателя.</td>
                            </tr>
                            <tr>
                                <td class="number">17</td>
                                <td>Не занимайтесь продвижением или продажей опасных или запрещенных товаров.</br></br><span class="color-orange">Пример:</span> Продажа наркотиков, оружия или поддельных документов через Discord.</td>
                            </tr>
                            <tr>
                                <td class="number">18</td>
                                <td>Не организуйте и не участвуйте в незаконных азартных играх.</br></br><span class="color-orange">Пример:</span> Проведение ставок на деньги или организацию лотерей без лицензии через Discord. (Если человек намеренно пропагондирует)</td>
                            </tr>
                            <tr>
                                <td class="number">19</td>
                                <td>Не организовывайте, не поддерживайте и не участвуйте в незаконной или опасной деятельности.</br></br><span class="color-orange">Пример:</span> Участник пишет: <span class="grey-bg">Давайте встретимся в 15:00, чтобы устроить драку с другими людьми</span>.</td>
                            </tr>
                        </table></br>
                        <div>
                            <p class="color-blue">Скам в разных играх - Нарушает 1.11</p>
                            <p>Стоит учесть, что при разборе жалоб обмана/скама на сторонних площадках(сервера по майнкрафту, роблокс, раст и т.д) рассматриваются только при подтверждении администрации стороннего ресурса и подтверждение реальной стоимости потерянных ресурсов(при отсутствии реальной стоимости наказание не выдаются). (уже есть в конституции)</p>
                        </div>
                        `
                },
                {
                    title: "1.12. Запрещено «воровать» слот на клозе.",
                    content: `
                        <div>
                            <span class="title title-penalty">Наказание</span>
                        </div><br>
                        <table class="table-punishments-transitions">
                            <thead>
                                <tr>
                                    <th>Первый случай</th>
                                    <th>Повторные нарушения</th>
                                    <th>Постоянные нарушения</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><div class="punishment-item">Бан <span  class="penalty">30м<span/></div></td>
                                    <td><div class="punishment-item punishment-repeat">Бан <span  class="penalty">2ч<span/></div></td>
                                    <td><div class="punishment-item punishment-permanent">Бан <span  class="color-red">1д</span></div></td>
                                </tr>
                            </tbody>
                        </table>
                        <div>
                            <p><span class="color-blue">Первый случай</span> - минимальное наказание, пользователь нарушил впервые.</p>
                            <p><span class="color-blue">Повторные нарушения</span> - увеличенное наказание, пользователь нарушает второй или более раз.</p>
                            <p><span class="color-blue">Постоянные нарушения</span> - более жесткие меры, пользователь систематически нарушает правила. Применяется по согласованию с <span class="color-red">старшим составом</span>.</p>
                            <p><span class="title-primer">Как проверить?</span></p>
                            <p class="tab-indent">1. Копируем <span class="grey-bg">ID</span> пользователя.</p>
                            <p class="tab-indent">2. Переходим в канал <span class="bg-color-channels"> # ⚪┇logs-closemod</span>.</p>
                            <p class="tab-indent">3. Используем комбинации <span class="grey-bg">Ctrl + F</span> и <span class="grey-bg">Ctrl + V</span>.</p>
                        </div>

                        <div style="margin-top: 20px;">
                            <span class="title title-info">Информация</span>
                        </div>
                        <p>Запрещается занимать слот, который вам не пренадлежит.</p>
                        <p class="tab-indent"><span class="c-red">Пример:</span></p>
                        <p class="tab-indent">По той или иной причине ведущий перезапустил клоз, человек слезает в запись, когда она и так полная.</p>
                        <p><span class="c-orange">Важно понимать</span>, все участники клоза, который был перезапущен, остаются в составе. Изменения в составе могут быть внесены по решению ведущего, если на то есть обоснованные причины.</p>
                        <p><span class="c-red">Запреты</span> на подобные действия указаны в <a style="color: beige;" href="#notes" id="nav-notes">Примечаниях</a>, что относится непосредственно к ведущему клоза.</p>
                        
                        <div class="bg-notes-frame" id="note1-12">
                            <span class="title-notes">Примечание:</span><br>Все участники клоза, который был завершен, остаются в составе, если того пожелают. Изменения в составе могут быть внесены только при добровольном свобождении слота кого-то из игроков.
                        </div></br>
                        `
                },
                {
                    title: "1.13. Запрещено использовать недоработки игры(баги), негативно влияющие на игровой процесс.",
                    content: `
                        <div>
                            <span class="title title-penalty">Наказание</span>
                        </div><br>
                        <table class="table-punishments-transitions">
                            <thead>
                                <tr>
                                    <th>Первый случай</th>
                                    <th>Повторные нарушения</th>
                                    <th>Постоянные нарушения</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><div class="punishment-item">Бан <span  class="penalty">3д<span/></div></td>
                                    <td><div class="punishment-item punishment-repeat">Бан <span  class="penalty">7д<span/></div></td>
                                    <td><div class="punishment-item punishment-permanent">Бан <span  class="color-red">21д</span></div></td>
                                </tr>
                            </tbody>
                        </table>
                        <div>
                            <p><span class="color-blue">Первый случай</span> - минимальное наказание, пользователь нарушил впервые.</p>
                            <p><span class="color-blue">Повторные нарушения</span> - увеличенное наказание, пользователь нарушает второй или более раз.</p>
                            <p><span class="color-blue">Постоянные нарушения</span> - более жесткие меры, пользователь систематически нарушает правила. Применяется по согласованию с <span class="color-red">старшим составом</span>.</p>
                            <p><span class="title-primer">Как проверить?</span></p>
                            <p class="tab-indent">1. Копируем <span class="grey-bg">ID</span> пользователя.</p>
                            <p class="tab-indent">2. Переходим в канал <span class="bg-color-channels"> # ⚪┇logs-closemod</span>.</p>
                            <p class="tab-indent">3. Используем комбинации <span class="grey-bg">Ctrl + F</span> и <span class="grey-bg">Ctrl + V</span>.</p>
                        </div>

                        <div style="margin-top: 20px;">
                            <span class="title title-info">Информация</span>
                        </div>
                        <p>Любые использования багов строго запрещены и караются <span class="c-red">блокировкой до 7 дней</span>.</p>
                        <p>Примером может быть баг с анимацией плента бомбы, где можно смотреть сквозь текстуры.</p>`
                },
                {
                    title: "1.14. Запрещено создавать помехи в голосовых каналах.",
                    content: `
                        <div>
                            <span class="title title-penalty">Наказание</span>
                        </div><br>
                        <table class="table-punishments-transitions">
                            <thead>
                                <tr>
                                    <th>Первый случай</th>
                                    <th>Повторные нарушения</th>
                                    <th>Постоянные нарушения</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><div class="punishment-item">Бан <span  class="penalty">30м<span/></div></td>
                                    <td><div class="punishment-item punishment-repeat">Бан <span  class="penalty">2ч<span/></div></td>
                                    <td><div class="punishment-item punishment-permanent">Бан <span  class="color-red">3д</span></div></td>
                                </tr>
                            </tbody>
                        </table>
                        <div>
                            <p><span class="color-blue">Первый случай</span> - минимальное наказание, пользователь нарушил впервые.</p>
                            <p><span class="color-blue">Повторные нарушения</span> - увеличенное наказание, пользователь нарушает второй или более раз.</p>
                            <p><span class="color-blue">Постоянные нарушения</span> - более жесткие меры, пользователь систематически нарушает правила. Применяется по согласованию с <span class="color-red">старшим составом</span>.</p>
                            <p><span class="title-primer">Как проверить?</span></p>
                            <p class="tab-indent">1. Копируем <span class="grey-bg">ID</span> пользователя.</p>
                            <p class="tab-indent">2. Переходим в канал <span class="bg-color-channels"> # ⚪┇logs-closemod</span>.</p>
                            <p class="tab-indent">3. Используем комбинации <span class="grey-bg">Ctrl + F</span> и <span class="grey-bg">Ctrl + V</span>.</p>
                        </div>

                        <div style="margin-top: 20px;">
                            <span class="title title-info">Информация</span>
                        </div>
                        <p><span class="c-red">Помехи в голосовых каналах</span> - шумы, крики, громкие нажатия/дыхание, стоны от участника.</p>
                        <p>Не стоит спешить наказывать, для начала попросите перестать создавать помехи, возможно человек не знает об этом.</p>
                        <p>Если же пользователь осведомлен и продолжает это делать - выдаете <span class="c-red">красный микрофон</span> на минуту, не помогает - <span class="c-orange"> выдаете наказание</span>.</p>
                        `
                },
                {
                    title: "1.15. Запрещено использовать программы для изменения голоса/транслировать музыку или громкие звуки.",
                    content: `
                        <div>
                            <span class="title title-penalty">Наказание</span>
                        </div><br>
                        <table class="table-punishments-transitions">
                            <thead>
                                <tr>
                                    <th>Первый случай</th>
                                    <th>Повторные нарушения</th>
                                    <th>Постоянные нарушения</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><div class="punishment-item">Бан <span  class="penalty">2ч<span/></div></td>
                                    <td><div class="punishment-item punishment-repeat">Бан <span  class="penalty">3ч<span/></div></td>
                                    <td><div class="punishment-item punishment-permanent">Бан <span  class="color-red">30д</span></div></td>
                                </tr>
                            </tbody>
                        </table>
                        <div>
                            <p><span class="color-blue">Первый случай</span> - минимальное наказание, пользователь нарушил впервые.</p>
                            <p><span class="color-blue">Повторные нарушения</span> - увеличенное наказание, пользователь нарушает второй или более раз.</p>
                            <p><span class="color-blue">Постоянные нарушения</span> - более жесткие меры, пользователь систематически нарушает правила. Применяется по согласованию с <span class="color-red">старшим составом</span>.</p>
                            <p><span class="title-primer">Как проверить?</span></p>
                            <p class="tab-indent">1. Копируем <span class="grey-bg">ID</span> пользователя.</p>
                            <p class="tab-indent">2. Переходим в канал <span class="bg-color-channels"> # ⚪┇logs-closemod</span>.</p>
                            <p class="tab-indent">3. Используем комбинации <span class="grey-bg">Ctrl + F</span> и <span class="grey-bg">Ctrl + V</span>.</p>
                        </div>

                        <div style="margin-top: 20px;">
                            <span class="title title-info">Информация</span>
                        </div>
                        <p><span class="c-red">Трансляция громких звуков</span> - Soundpad и программы на тему трансляции звуков при общении.</p>
                        <p>Важно заметить, если музыка транслируется не с компьютера участника, а, например, играет у него с помощью колонки на заднем фоне, то нарушение рассматривается по пункту <span class="c-red">1.14</span>.</p>
                        <p class="c-red">Изменение голоса:</p>
                        <p>Важно понимать, что если вы не уверены, что человек изменяет голос через программы, то вы должны его проверить на наличие программ для изменения голоса. В случае, если вы ничего не находите, то наказание вы не выдаёте. Так же важно понимать, что если человек меняет голос не через программу, то наказание вы ему не выдаете, а просите не перебарщивать с изменением. Если человек после вашего предупреждения продолжает самостоятельно изменять голос не через программы, то выдаётся наказание по пункту <span class="c-red">2.3 (обращение к старшей администрации)</span>.</p><br><br>
                        `
                },
                {
                    title: "1.16. Запрещено отправлять жалобы, не несущие никакого смысла, а также флуд жалобами.",
                    content: `
                        <div>
                            <span class="title title-penalty">Наказание</span>
                        </div><br>
                        <table class="table-punishments-transitions">
                            <thead>
                                <tr>
                                    <th>Первый случай</th>
                                    <th>Повторные нарушения</th>
                                    <th>Постоянные нарушения</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><div class="punishment-item">Бан <span  class="penalty">30м<span/></div></td>
                                    <td><div class="punishment-item punishment-repeat">Бан <span  class="penalty">1ч<span/></div></td>
                                    <td><div class="punishment-item punishment-permanent">Бан <span  class="color-red">5д</span></div></td>
                                </tr>
                            </tbody>
                        </table>
                        <div>
                            <p><span class="color-blue">Первый случай</span> - минимальное наказание, пользователь нарушил впервые.</p>
                            <p><span class="color-blue">Повторные нарушения</span> - увеличенное наказание, пользователь нарушает второй или более раз.</p>
                            <p><span class="color-blue">Постоянные нарушения</span> - более жесткие меры, пользователь систематически нарушает правила. Применяется по согласованию с <span class="color-red">старшим составом</span>.</p>
                            <p><span class="title-primer">Как проверить?</span></p>
                            <p class="tab-indent">1. Копируем <span class="grey-bg">ID</span> пользователя.</p>
                            <p class="tab-indent">2. Переходим в канал <span class="bg-color-channels"> # ⚪┇logs-closemod</span>.</p>
                            <p class="tab-indent">3. Используем комбинации <span class="grey-bg">Ctrl + F</span> и <span class="grey-bg">Ctrl + V</span>.</p>
                        </div>

                        <div style="margin-top: 20px;">
                            <span class="title title-info">Информация</span>
                        </div>
                        <p><span class="c-red">Бессмысленные жалобы</span> - жалобы которые не несут никакого смысла или не имеют конкретной идеи.</p>
                        <p class="tab-indent"><span class="c-red">Примеры:</span></p>
                        <p class="tab-indent"><span class="grey-bg">Забаньте его!</span>, <span class="grey-bg">Кто он такой??</span>, <span class="grey-bg">Привет!</span></p>
                        <p><span class="c-red">Флуд жалобами</span> - отправка однотипных жалоб, а так же НЕ НЕСУЩИХ СМЫСЛА, в том числе паст.</p>
                        <p class="tab-indent"><span class="c-red">Примеры:</span></p>
                        <p class="tab-indent">Три  жалобы - <span class="grey-bg">У него ВХ!</span>, и подобные случаи.</p><br>
                        `
                },
                {
                    title: "2.1. Запрещено выдавать себя за клозмод сервера, если вы таковой не являетесь.",
                    content: `
                        <div>
                            <span class="title title-penalty">Наказание</span>
                        </div><br>
                        <table class="table-punishments-transitions">
                            <thead>
                                <tr>
                                    <th>Первый случай</th>
                                    <th>Повторные нарушения</th>
                                    <th>Постоянные нарушения</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><div class="punishment-item">Бан <span  class="penalty">3ч<span/></div></td>
                                    <td><div class="punishment-item punishment-repeat">Бан <span  class="penalty">1д<span/></div></td>
                                    <td><div class="punishment-item punishment-permanent">Бан <span  class="color-red">14д</span></div></td>
                                </tr>
                            </tbody>
                        </table>
                        <div>
                            <p><span class="color-blue">Первый случай</span> - минимальное наказание, пользователь нарушил впервые.</p>
                            <p><span class="color-blue">Повторные нарушения</span> - увеличенное наказание, пользователь нарушает второй или более раз.</p>
                            <p><span class="color-blue">Постоянные нарушения</span> - более жесткие меры, пользователь систематически нарушает правила. Применяется по согласованию с <span class="color-red">старшим составом</span>.</p>
                            <p><span class="title-primer">Как проверить?</span></p>
                            <p class="tab-indent">1. Копируем <span class="grey-bg">ID</span> пользователя.</p>
                            <p class="tab-indent">2. Переходим в канал <span class="bg-color-channels"> # ⚪┇logs-closemod</span>.</p>
                            <p class="tab-indent">3. Используем комбинации <span class="grey-bg">Ctrl + F</span> и <span class="grey-bg">Ctrl + V</span>.</p>
                            <p><span class="color-yellow">Дополнительно:</span> Сообщить <span class="color-red">модерации</span> о нарушении в нашем общем канале <span class="bg-color-channels"> # 🟢┇чат</span>.</p>
                            <p>При необходимости показать откат с ситуацией в одном из голосовых каналов <span class="bg-color-channels"> 🔊 🟢 Приват #1-3</span>.</p>
                        </div>

                        <div style="margin-top: 20px;">
                            <span class="title title-info">Информация</span>
                        </div>
                        <p>Не выдавайте себя за модератора/ведущего клоза. Это может вводить в заблуждение других игроков.</p>
                        <p class="tab-indent"><span class="c-red">Примеры:</span></p>
                            <p class="tab-indent"><span class="c-orange">Вариант 1:</span> Я ведущий клоза, я решаю.</p>
                            <p class="tab-indent"><span class="c-orange">Вариант 2:</span> Я клозмейкер, делай так.</p>
                            <p class="tab-indent"><span class="c-orange">Вариант 3:</span> Да ты кто такой? Я вот клозер!</p>
                            <p class="tab-indent"> Ники в виде <span class="c-orange">"Я ведущий/клозмейкер"</span> не являются нарушением правила, за исключением, когда человек это <span class="c-orange">агитирует</span>, что он таковым является на нашем сервере.</p><br>
                    `
                },
                {
                    title: "2.2. Запрещены насмешки прямым или косвенным образом, оскорбляющие клозмод сервера.",
                    content: `
                        <div>
                            <span class="title title-penalty">Наказание</span>
                        </div><br>
                        <table class="table-punishments-transitions">
                            <thead>
                                <tr>
                                    <th>Первый случай</th>
                                    <th>Повторные нарушения</th>
                                    <th>Постоянные нарушения</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><div class="punishment-item"><span  class="color-yellow">Пред<span/></div></td>
                                    <td><div class="punishment-item punishment-repeat">Бан <span  class="penalty">1ч<span/></div></td>
                                    <td><div class="punishment-item punishment-permanent">Бан <span  class="color-red">30д</span></div></td>
                                </tr>
                            </tbody>
                        </table>
                        <div>
                            <p><span class="color-yellow">Пред</span> - словестное предупреждение, убедитесь, что вы были услышаны.</p>
                            <p><span class="color-blue">Первый случай</span> - минимальное наказание, пользователь нарушил впервые.</p>
                            <p><span class="color-blue">Повторные нарушения</span> - увеличенное наказание, пользователь нарушает второй или более раз.</p>
                            <p><span class="color-blue">Постоянные нарушения</span> - более жесткие меры, пользователь систематически нарушает правила. Применяется по согласованию с <span class="color-red">старшим составом</span>.</p>
                            <p><span class="title-primer">Как проверить?</span></p>
                            <p class="tab-indent">1. Копируем <span class="grey-bg">ID</span> пользователя.</p>
                            <p class="tab-indent">2. Переходим в канал <span class="bg-color-channels"> # ⚪┇logs-closemod</span>.</p>
                            <p class="tab-indent">3. Используем комбинации <span class="grey-bg">Ctrl + F</span> и <span class="grey-bg">Ctrl + V</span>.</p>
                            <p><span class="color-yellow">Дополнительно:</span> Сообщить <span class="color-red">модерации</span> о нарушении в нашем общем канале <span class="bg-color-channels"> # 🟢┇чат</span>.</p>
                            <p>При необходимости показать откат с ситуацией в одном из голосовых каналов <span class="bg-color-channels"> 🔊 🟢 Приват #1-3</span>.</p>
                        </div>

                        <div style="margin-top: 20px;">
                            <span class="title title-info">Информация</span>
                        </div>
                        <p>При выдаче данного пункта правил, вы должны понимать, что одним из главных моментов, который вы должны сделать - предупредить участника, который вас начинает оскорблять, о существование такого правила как <span class="c-red">2.2</span>.</p>
                        <p class="tab-indent"><span class="c-red">Один из примеров, что вы можете сказать:</span></p>
                        <p class="tab-indent"> <span class="grey-bg">Попрошу вас уважительнее обращаться со мной, так как я здесь в первую очередь для того, чтобы помочь вам.</span></p>
                        <p class="tab-indent">Если участник продолжит оскорблять вас, вы выдаете ему наказание.</p>
                        <p class="tab-indent"><span class="c-red">Важно:</span></p>
                        <p class="tab-indent">Нельзя применять к ситуациям в игре, следует использовать <span class="c-red">1.1</span>, так же не забываем об игровых моментах.</p><br>
                    `
                },
                {
                    title: "2.3. Запрещено несоблюдение прочих правил матча, указанных клозмодом сервера в частном порядке.",
                    content: `
                        <div>
                            <span class="title title-penalty">Наказание</span>
                        </div><br>
                        <table class="table-punishments-transitions">
                            <thead>
                                <tr>
                                    <th>Первый случай</th>
                                    <th>Повторные нарушения</th>
                                    <th>Постоянные нарушения</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><div class="punishment-item">Бан <span  class="penalty">1ч<span/></div></td>
                                    <td><div class="punishment-item punishment-repeat">Бан <span  class="penalty">2ч<span/></div></td>
                                    <td><div class="punishment-item punishment-permanent">Бан <span  class="color-red">5д</span></div></td>
                                </tr>
                            </tbody>
                        </table>
                        <div>
                            <p><span class="color-blue">Первый случай</span> - минимальное наказание, пользователь нарушил впервые.</p>
                            <p><span class="color-blue">Повторные нарушения</span> - увеличенное наказание, пользователь нарушает второй или более раз.</p>
                            <p><span class="color-blue">Постоянные нарушения</span> - более жесткие меры, пользователь систематически нарушает правила. Применяется по согласованию с <span class="color-red">старшим составом</span>.</p>
                            <p><span class="title-primer">Как проверить?</span></p>
                            <p class="tab-indent">1. Копируем <span class="grey-bg">ID</span> пользователя.</p>
                            <p class="tab-indent">2. Переходим в канал <span class="bg-color-channels"> # ⚪┇logs-closemod</span>.</p>
                            <p class="tab-indent">3. Используем комбинации <span class="grey-bg">Ctrl + F</span> и <span class="grey-bg">Ctrl + V</span>.</p>
                            <p><span class="color-yellow">Дополнительно:</span> Сообщить <span class="color-red">модерации</span> о нарушении в нашем общем канале <span class="bg-color-channels"> # 🟢┇чат</span>.</p>
                            <p>При необходимости показать откат с ситуацией в одном из голосовых каналов <span class="bg-color-channels"> 🔊 🟢 Приват #1-3</span>.</p>
                        </div>

                        <div style="margin-top: 20px;">
                            <span class="title title-info">Информация</span>
                        </div>
                        <p>Правило <span class="c-red">2.3</span> покрывает все оставшиеся случаи, которые не попадают под список стандартных.</p>
                        <p>Использовать правило можно когда вы не уверены нарушают ли что то действия участника - в таких случаях вы можете попросить его больше не делать "подобных" действий.</p>
                        <p class="tab-indent"><span class="c-red">Примеры, при которых мы применяем 2.3:</span> </p>
                        <p class="tab-indent">1. Намеренный дизбаланс в командах (для капитанов).</p>
                        <p class="tab-indent">2. Капитан должен придерживаться мнения команды в выборе карты.</p>
                        <p class="tab-indent">3. Помехи в ожидании через разговоры (не по клозу), трансляцию своей игры (и комментирование своих действий) не участниками клоза (третьими лицами).</p>
                        <p class="tab-indent">4. Запрещено снимать красный микрофон полученый от Клозмода путем захода в приватные румы или иным другим обходным путем (если пользователь после этих действий возвращается в клоз канал).</p>
                        <p class="tab-indent">5. Добавление бота в канал <span class="bg-color-channels">🔊 ⏳ • ожидание</span> / <span class="bg-color-channels">🔊 🅰/🅱 • Team</span>.</p>
                        <p class="tab-indent">6. Намеренное изменения голоса для ввода в заблуждение.<br><br><span class="color-red">Важно понимать</span>, что если вы не уверены, что человек изменяет голос через программы, то вы должны его проверить на наличие программ для изменения голоса. В случае, если вы ничего не находите, то наказание вы не выдаёте. Так же важно понимать, что если человек меняет голос не через программу, то наказание вы ему не выдаете, а просите не перебарщивать с изменением. Если человек после вашего предупреждения продолжает самостоятельно изменять голос не через программы, то выдаётся наказание по пункту <span class="color-red">2.3 (обращение к старшей администрации)</span>.</p>
                        <p class="tab-indent">7. Игнорирование примечания №2 правил клозов (о том, что клоз это дружеский матч).</p>
                        <div class="bg-notes-frame">
                            <span class="title-notes">Примечание:</span><br>При нарушении одного из примеров вы выдаёте <span class="c-orange">блокировку на 4 часа</span>, во всех остальных случаях когда вы считаете, что данное правило было нарушено - вы направляетесь к <span class="c-red">старшей администрации</span> за получением дальнейшей информации.
                        </div></br>
                        `
                },
                {
                    title: "2.4. Запрещено обманывать клозмод сервера (введение в заблуждение/дезинфо/фейк report и т.п.).",
                    content: `
                        <div>
                            <span class="title title-penalty">Наказание</span>
                        </div><br>
                        <table class="table-punishments-transitions">
                            <thead>
                                <tr>
                                    <th>Первый случай</th>
                                    <th>Повторные нарушения</th>
                                    <th>Постоянные нарушения</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><div class="punishment-item">Бан <span  class="penalty">3д<span/></div></td>
                                    <td><div class="punishment-item punishment-repeat">Бан <span  class="penalty">14д<span/></div></td>
                                    <td><div class="punishment-item punishment-permanent">Бан <span  class="color-red">60д</span></div></td>
                                </tr>
                            </tbody>
                        </table>
                        <div>
                            <p><span class="color-blue">Первый случай</span> - минимальное наказание, пользователь нарушил впервые.</p>
                            <p><span class="color-blue">Повторные нарушения</span> - увеличенное наказание, пользователь нарушает второй или более раз.</p>
                            <p><span class="color-blue">Постоянные нарушения</span> - более жесткие меры, пользователь систематически нарушает правила. Применяется по согласованию с <span class="color-red">старшим составом</span>.</p>
                            <p><span class="title-primer">Как проверить?</span></p>
                            <p class="tab-indent">1. Копируем <span class="grey-bg">ID</span> пользователя.</p>
                            <p class="tab-indent">2. Переходим в канал <span class="bg-color-channels"> # ⚪┇logs-closemod</span>.</p>
                            <p class="tab-indent">3. Используем комбинации <span class="grey-bg">Ctrl + F</span> и <span class="grey-bg">Ctrl + V</span>.</p>
                            <p><span class="color-yellow">Дополнительно:</span> Сообщить <span class="color-red">модерации</span> о нарушении в нашем общем канале <span class="bg-color-channels"> # 🟢┇чат</span>. При необходимости показать откат с ситуацией в одном из голосовых каналов <span class="bg-color-channels"> 🔊 🟢 Приват #1-3</span>.</p>
                        </div>

                        <div style="margin-top: 20px;">
                            <span class="title title-info">Информация</span>
                        </div>
                        <p>Выдача данного пункта правил происходит в случаях когда игрок старается вас запутать/обмануть в ситуации.</p>
                        <p>Данные ситуации можно разделить на <span class="c-red">Намеренно</span> и <span class="c-orange">Случайно</span>.</p>
                        <p><span class="c-red">Намеренно</span> - выдается наказание в 100% случаях. В зависимости от силы обмана.</p>
                        <p class="tab-indent"><span class="c-red">Примеры:</span></p>
                        <p class="tab-indent">Игрок жалуется и утверждает что у него есть откат, но он его ищет, но так ничего и не показывает, бесконечно тянет время, отнекивается</p>
                        <p class="tab-indent">В данном случае можно выдать <span class="c-red">блокировку на 2-4 часа</span>.</p>
                        <p class="tab-indent">Игрок единственный из команды утверждает, что другой нарушил пункт правил, но отката у него нет и требует выдать блокировку лишь на основании его слов.</p>
                        <p class="tab-indent">В данном случае можно выдать <span class="c-red">блокировку на 4 часа</span>  и более, в зависимости от ситуации.</p>
                        <p class="tab-indent"><span class="c-orange">Случайно</span> - чаще <span class="c-orange">наказание не выдается</span>:</p>
                        <p class="tab-indent">Игрок перепутал ники игроков, и утверждал что игрок нарушил пункт правил, хотя его нарушил другой.</p>
                        <p class="tab-indent">В данном случае <span class="c-orange">наказание не выдаем</span>.</p><br>
            `
                },
                /*
                Другие правила
                */
            ];

            openModal(rules[index].title, rules[index].content);
        });
    });

    // Обработчик для кнопок в карточках .note
    document.querySelectorAll(".note button").forEach((button, index) => {
        button.addEventListener("click", () => {
            const notes = [
                {
                    title: "№1 На клозах действуют все правила проекта.",
                    content: `
                        <p>Общие правила проекта распространяются на клозы, вне зависимости от ваших желаний. Участники клоза должны следовать им, чтобы избежать наказаний.</p>
                        <p>Общие правила проекта распространяются так же и на вас как  <span class="bg-color-closemaker">@• Клозмейкеров</span>, любое нарушение правил влечет за собой наказание от  <span class="color-vugovor">🔴 выговора</span> до  <span class="color-red">блокировки</span> на сервере.</p>
                    `
                },
                {
                    title: "№2 Клоз - это дружеский матч.",
                    content: `
                        <p>Пункты правил <span class="color-red">1.1</span> и <span class="color-red">1.8</span> из категории «Общее» распространяются на <span class="color-blue">текстовый</span> / <span class="color-blue">голосовой чат</span> в <span class="color-blue">CS2</span>.</p>
                        <p><span class="color-blue">Клоз — это дружеский матч</span>, который проводится для улучшения навыков, общения и укрепления командного духа. Несмотря на то, что такие матчи не являются официальными соревнованиями, важно помнить, что они всё равно должны быть проведены в духе уважения и честности.</p>
                        <p>Взаимодействие и адекватное поведение являются неотъемлемыми составляющими клоза. Важно общаться с другими участниками корректно, без агрессии и провокаций. Это способствует созданию положительной атмосферы, где каждый может учиться и развиваться, а не переживать из-за неуважительного отношения.</p>
                        <p class="title-primer">Вот несколько ключевых моментов, на которые стоит обратить внимание:</p>
                        <p class="tab-indent"><span class="color-blue">Уважение к другим участникам:</span> Даже если в ходе игры происходят спорные моменты или ошибки, важно относиться к ним с пониманием и терпимостью. Игроки, участвующие в клозах, должны помнить, что все пришли с одной целью — улучшить свои навыки и наслаждаться процессом.</p>
                        <p class="tab-indent"><span class="color-blue">Корректность в общении:</span> Использование нецензурной лексики, оскорблений или угроз может не только испортить настроение другим участникам, но и привести к нарушению правил. Всегда выбирайте слова, которые будут способствовать улучшению атмосферы.</p>
                        <p class="tab-indent"><span class="color-blue">Командный дух:</span> Клоз — это возможность работать в команде и улучшать взаимопонимание. Важно поддерживать друг друга и давать конструктивные советы, чтобы каждый мог извлечь уроки из игры.</p>
                        <p class="tab-indent"><span class="color-blue">Решение конфликтов мирным путем:</span> Если возникли недоразумения или конфликты, лучше решить их без негативных эмоций. Важно находить компромиссы и избегать эскалации ситуаций.</p>
                        <p class="tab-indent"><span class="color-blue">Ответственность:</span> Каждый участник клоза должен проявлять ответственность, следить за своим поведением и соблюдением правил. Поведение, нарушающее нормы уважения, может привести к последствиям, включая временные или постоянные ограничения на участие в матчах.</p>
                        <p>Таким образом, клоз — это не только игровая практика, но и возможность продемонстрировать свою зрелость, уважение и желание улучшать не только свои игровые навыки, но и навыки взаимодействия с другими людьми.</p>
        
                    `
                },
                {
                    title: "№3 Категория «Клозмод» модерируются в личных сообщениях.",
                    content: `
                       <p>Все пункты правил из категории <span class="color-blue">«Клозмод»</span> клоз правил, а так же правила из категории <span class="color-blue">«Администрация»</span> общих правил модерируются в личных сообщениях с представителями <span class="color-blue">Closemod</span>.</p>
                       <p>Нарушения могут и будут пресечены, стоит лишь обратиться к <span class="color-red">модерации сервера</span> в нашем общем канале <span class="bg-color-channels"> # 🟢┇чат</span></p>
                       <p>При необходимости показать откат с ситуацией в одном из голосовых каналов <span class="bg-color-channels"> 🔊 🟢 Приват #1-3</span>.</p>
                       `
                },
                {
                    title: "№4 Closemod оставляет за собой право применить к вам любые ограничения на свое усмотрение.",
                    content: `
                        <p>Клозмейкеры/ведущие клоза могут вводить ограничения в зависимости от ситуации, исходя из правил и интересов сообщества <b>(в рамках разумного)</b>.</p>
                        <p class="tab-indent"><span class="c-red">Примеры как делать запрещено (для 🛡️ Closemod):</span></p>
                        <p class="tab-indent">Блокировка, кик/удаление из записи без причины.</p>
                        <p class="tab-indent">Красный микрофон/наушники без причины.</p>
                        <p class="tab-indent">И любые другие действия притесняющие пользователей.</p>
                        <p><span class="c-orange">Исключением</span> является ситуации в которых присутвуют непонимающие/неадекватные пользователи, которые не воспринимают словестной просьбы прекратить делать то или иное действие.</br><span class="c-orange">Но не забываем</span>, <b>первое</b> - словестное предупреждение о нарушении того или иного правила/человеческих норм, <b>второе</b> - красный микрофон как предупреждение секунд до 30, далее <b>третье</b> - <span class="c-red">выдаем наказание</span>.</p>
                        <p class="c-red">ОЧЕНЬ ВАЖНО!!!:</p>
                        <p>Это не означает, что на своём клозе вы обладаете абсолютной властью, принимая решения в одиночку. Важно помнить о пределах разумного. Ваши действия должны быть обоснованными, направленными на создание качественного клоза, который в первую очередь будет интересен и удобен для пользователей.</p>
                        <p><span class="c-orange">Исключением</span> является приватный клоз, в котором учавтвует заранее оговоренный стак игроков <b>от 7 человек</b>. Но стоит понимать, что нельзя делать постоянно лишь приватные клозы с полностью "вашими" правилами и законами.</p>
                        <p><span class="c-red">Злоупотребление</span> данным действием будет влеч за собой последствия для Ведущего/Клозмейкера(в целом, не конкретная роль). В плоть до вычета количеств "приватных клозов" из общей статистики клозера.</p>
                    `
                },
                {
                    title: "№5 Closemod оставляет за собой право редактировать и изменять правила отдельного матча на свое усмотрение. Если это не перечит правилам проекта.",
                    content: `
                        <p>Клозмейкеры/ведущие клозов могут вводить ограничения в зависимости от ситуации, исходя из правил и интересов сообщества <b>(в рамках разумного)</b>.</p>
                        <p class="tab-indent"><span class="c-red">Примеры как делать запрещено (для 🛡️ Closemod):</span></p>
                        <p class="tab-indent">Редактировать, изменять следующие пункты из правил <span class="c-red">1.4, 1.8, 1.9, 1.10 и 1.11</span> строго запрещено!</p>
                        <p><span class="c-red">Нарушение</span> данного пункта влечет за собой серьезные последствия, от клоз-наказания до понижения/снятия*.</p>
                        <p>*Все зависит от тяжкости нарушения, а так же количества активных предупреждений и роли клозмейкера.</p>
                    `
                },
                {
                    title: "№6 Приоритеты на слоты в клозах.",
                    content: `
                       <p>Все участники клоза, который был завершён или перерегистрирован, сохраняют свои места, если они этого пожелают. Изменения в составе могут быть внесены только при добровольном освобождении слота одним из игроков. В приоритете на освободившийся слот идут забронированные игроки или те, кто дольше всех находится в списке "Ожидание" и ранее проявляли интерес к игре, а затем все остальные пользователи.</p>
                       <p>Игрок сыгравший 3 игры подряд теряет свой приоритет, Ведущий в праве заменить игрока на человека из брони. Игры которые были перезапущены или отменены по своим причинам не считаются, в счет идут лишь завершенные матчи.</p>
                       `
                },
                {
                    title: "Путеводитель по важным каналам.",
                    content: `
                        <h4>Важные каналы для вас:</h4>
                        <div class="tab-indent">
                            <strong>⌵ Администрация:</strong>
                            <div class="tab-indent">
                                <p><span class="bg-color-channels"> # 💻┇проверка-на-читы</span> — канал для отправки на проверку, просмотр о статуса проверки.</p>
                                <p><span class="bg-color-channels"> # 💻┇база-нарушений</span> — канал для информации о пользователях сервера <span class="italic">(читаем закреп канала)</span>.</p>
                                <p><span class="bg-color-channels"> # ⚪┇logs</span> — канал с основными логами сервера. <b>Доступен от роли</b> <span class="bg-color-master">@• Мастер</span>.</p>

                                <!--
                                <p><span class="bg-color-channels"> # </span></p>
                                -->
            
                            </div>

                            <strong>⌵ Staff-Общий:</strong>
                            <div class="tab-indent">
                                <p><span class="bg-color-channels"> # 🟢┇чат</span> — общий чат с модерацией сервера. Используется для передачи нарушений и прочих нужд.</p>
                                <p><span class="bg-color-channels"> # 🔊 🟢 Приват #1</span> — общий голосовой канал с модерацией сервера. Используется для передачи жалоб/демонстрации откатов нарушений.</p>
                                <p><span class="bg-color-channels"> # 🔊 🟢 Приват #2</span> — общий голосовой канал с модерацией сервера. Используется для передачи жалоб/демонстрации откатов нарушений.</p>
                                <p><span class="bg-color-channels"> # 🔊 🟢 Приват #3</span> — общий голосовой канал с модерацией сервера. Используется для передачи жалоб/демонстрации откатов нарушений.</p>

                                <!--
                                <p><span class="bg-color-channels"> # </span></p>
                                -->
            
                            </div>

                            <strong>⌵ Closemod:</strong>
                            <div class="tab-indent">
                                <p><span class="bg-color-channels"> # 📁┇архив-проверок</span> — канал для хранения ифнормации о проверках на читы (отдел проверок).</p>
                                <p><span class="bg-color-channels"> # ⚪┇logs-closemod</span> — канал со всеми логами связанными с клоз ботом.</p>
                                <p><span class="bg-color-channels"> # ⌚┇объявления</span> — канал для публикации важной информации, анонсов грядущих собраний.</p>
                                <p><span class="bg-color-channels"> # 📘┇информация</span> — информация о ролях, обязаностях и запретах, а так же ссылки на важные админ ресурсы.</p>
                                <p><span class="bg-color-channels"> # 📙┇команды</span> — список всех административных команд с указанием минимальной роли, необходимой для их использования.</p>
                                <p><span class="bg-color-channels"> # 📝┇whitelist</span> — заявки на снятие игровых ограничений для тех, кто не полностью соответствует установленным требованиям.</p>
                                <p><span class="bg-color-channels"> # 👥┇чат</span> — чат для общения, обсуждения, помощи и т.д. <span class="italic">(читаем закреп канала)</span>.</p>
                                <p><span class="bg-color-channels">╰ Важные сообщения</span> — ветка в которой собрана важная информация, изменения и т.д <b>(рекомендуется проверять)</b>.</p>
                                <p><span class="bg-color-channels"> # 🤖┇обновления-бота</span> — канал с публикацией мелких и важных изменений в функционале бота, правок на серверах и т.д.</p>
                                <p>Канал <span class="bg-color-channels"> # 📝┇whitelist</span> доступен от роли <span class="bg-color-nastavnik">@• Наставник</span>, при необходимости обращаться к вышестоящему составу в канале <span class="bg-color-channels"> # 👥┇чат</span>.</p>
                                <!--
                                <p><span class="bg-color-channels"> # </span></p>
                                -->
            
                            </div>

                            <strong>⌵ Close:</strong>
                            <div class="tab-indent">
                                <p><span class="bg-color-channels"> # ➕┇создать</span> — канал для создания клоза.</p>
                                <p><span class="bg-color-channels"> # 🎮┇правила</span> — канал для быстрого просмотра провил клозов.</p>
                                <p><span class="bg-color-channels"> # 🏆┇итоги</span> — канал со всеми игровыми итогами, можно использовать для проверки победителей клозов (если просят роль).</p>
                                <p><span class="bg-color-channels"> # 🔥┇дуэли</span> — канал для игры <b>1x1</b>, простыми словами дуэльки, <span class="c-orange">требуется модерация</span>.</p>
                                <p><span class="c-orange">Модерация канала</span> состоит в удалении оффтопа, а то есть любых сообщений от пользователей.</br>Все нарушители получают <span class="c-red">блокировку на 30мин</span> с причиной <span class="c-orange">"Оффтоп"</span>.</p>

                                <!--
                                <p><span class="bg-color-channels"> # </span></p>
                                -->
            
                            </div>

                        </div>
                    `
                },
                {
                    title: "Список запретов для представителей Closemod.",
                    content: `

                        <p> Список главных запретов для каждого Клозмейкера либо же ведущего клоза. Стоит помнить, что общие правила сервера также распространяются на клозы. Нарушения правил будут караться в соответствии с общими мерами наказания.</p>

                        <div>
                            <h2>⛔ Запреты:</h2>
                            <p class="tab-indent">• Нарушать правила сервера.</p>
                            <p class="tab-indent">• Превышение полномочий.</p>
                            <p class="tab-indent">• Использовать статус "не беспокоить".</p>
                            <p class="tab-indent">• Использовать полномочия в личных целях.</p>
                            <p class="tab-indent">• Распространение любой админ информации.*</p>
                            <p class="tab-indent">• Игнорировать нарушения своих коллег.</p>
                            <p class="tab-indent">• Игнорировать нарушения пользователей.</p>
                            <p class="tab-indent">• Пропускать собрания без уважительной причины.</p>
                            <p class="tab-indent">• Выдавать наказания вне ветки.</p>

                            <!--
                            <p class="tab-indent"> </p>
                            -->

                            <div class="bg-notes-frame">
                                <span class="title-notes">Примечание:</span><br>Запрещено распространять информацию из категории клозмода или среди участников клозмода лицам, которым эта информация не предназначена.
                            </div></br>
                            <p">Нарушение запретов ведет к наказанию начиная от <span class="color-vugovor">🔴 выговора</span> и заканчивая <span class="color-red">баном</span> на сервере.</p>
                            <div class="divider"></div>
                            <h2>🛑 Прочие запреты:</h2>
                            <p class="tab-indent">• Пинговать роль <span class="bg-color-close">@Close</span> в <span class="bg-color-channels"># ✏・запись</span> чаще, чем раз в <b>30 минут</b>.*</p>
                            <p class="tab-indent">• Пинговать роль <span class="bg-color-close">@Close</span> в <span class="bg-color-channels"># ✏・запись</span>, когда нужен <b>+1</b>.*</p>
                            <p class="tab-indent"> <span class="c-orange">Исключение:</span> Если роль <span class="bg-color-close">@Close</span> не пинговалась более <b>60 минут</b> с последнего раза.</p>
                            <p class="tab-indent">• Пинговать роль <span class="bg-color-close">@Close</span> в <span class="bg-color-channels"># 💬┇общение</span> чаще, чем раз в <b>60 минут</b>.*</p>
                            <p class="tab-indent">• Приглашать людей в <span class="bg-color-channels"># 💬┇общение</span> на клоз без пинга роли <span class="bg-color-close">@Close</span> чаще, чем раз в <b>30 минут</b>.</p>
                            <p class="tab-indent">• Использовать команду <span class="bg-color-commands">/клоз</span> чаще, чем раз в <b>30 минут</b>. Так же недопускаем два embed сообщения с клозом подряд.</p>
                            <p class="tab-indent"> <span class="c-orange">Совет:</span> Вы можете удалить старое сообщение, если оно висит более <b>30 минут</b>.</p>

                            <!--
                            <p class="tab-indent">•  </p>
                            -->

                            <p>*При необходимости лучше обратиться в канал <span class="bg-color-channels"># 💬┇общение</span> с сообщением - <span class="grey-bg">+2</span> в <span class="bg-color-channels"># ✏・запись</span>, но так же соблюдая кд.</p>
                            <p">За неоднократное нарушение вы можете получить <span class="color-pred">🟠 предупреждение</span> или <span class="color-vugovor">🔴 выговор</span> с причиной <b>"нарушение прочих запретов"</b>.</p>
                        </div>
                        `
                        },
        ];

        openModal(notes[index].title, notes[index].content);
    });
});
});

document.addEventListener("DOMContentLoaded", () => {
    const modalOverlay = document.querySelector(".custom-modal-overlay");
    const searchModal = document.getElementById("rules-search-modal");
    const searchCloseButton = document.querySelector("#rules-search-modal .custom-close-button");
    const modals = document.querySelectorAll(".custom-modal");

    // Закрытие всех модальных окон
    function closeAllModals() {
        modals.forEach((modal) => {
            modal.classList.remove("active"); // Убираем класс active
        });
        modalOverlay.classList.remove("active"); // Убираем класс active с overlay
        document.body.classList.remove("no-scroll");
    }

    // Закрытие модального окна поиска
    searchCloseButton.addEventListener("click", () => {
        closeAllModals();
    });

    // Обработка открытия модального окна поиска
    document.getElementById("rules-search").addEventListener("click", () => {
        searchModal.classList.add("active"); // Добавляем класс active
        modalOverlay.classList.add("active"); // Добавляем класс active на overlay
        document.body.classList.add("no-scroll");
    });

    // Закрытие модального окна при клике по overlay
    modalOverlay.addEventListener("click", () => {
        closeAllModals();
    });

    // Пример обработки открытия других модальных окон через выбор правила
    document.querySelectorAll(".rule-select-button").forEach((button) => {
        button.addEventListener("click", () => {
            const targetModalId = button.dataset.modalId;
            const targetModal = document.getElementById(targetModalId);

            if (targetModal) {
                closeAllModals(); // Закрываем все открытые модальные окна
                targetModal.classList.add("active"); // Открываем нужное окно
                modalOverlay.classList.add("active"); // Включаем затемнение
                document.body.classList.add("no-scroll"); // Отключаем прокрутку
            }
        });
    });
});





// Открытие модального окна поиска
const searchField = document.getElementById("rules-search");
const rulesSearchModal = document.getElementById("rules-search-modal");
const rulesSearchInput = document.getElementById("rules-search-input");
const rulesSearchResults = document.getElementById("rules-search-results");
const closeSearchButton = document.querySelector(".custom-close-button");
const hiddenRulesList = document.getElementById("hidden-rules-list");

// Открытие модального окна при клике на поле поиска
searchField.addEventListener("click", () => {
  rulesSearchModal.style.display = "block";
  rulesSearchInput.value = ""; // Очистить поле ввода
  rulesSearchResults.innerHTML = ""; // Очистить результаты
  rulesSearchInput.focus(); // Установить фокус на поле ввода
});

// Закрытие модального окна поиска
closeSearchButton.addEventListener("click", () => {
  rulesSearchModal.style.display = "none";
});

// Закрытие при клике вне содержимого
window.addEventListener("click", (e) => {
  if (e.target === rulesSearchModal) {
    rulesSearchModal.style.display = "none";
  }
});

// Логика поиска правил
rulesSearchInput.addEventListener("input", () => {
  const query = rulesSearchInput.value.toLowerCase();
  rulesSearchResults.innerHTML = ""; // Очистить предыдущие результаты

  if (query.trim() === "") return; // Если поле ввода пустое, ничего не отображать

  // Перебираем правила из скрытого списка
  const rules = hiddenRulesList.querySelectorAll("li");
  rules.forEach((rule) => {
    const ruleText = rule.textContent.toLowerCase();
    const ruleNumber = rule.dataset.rule;

    if (ruleText.includes(query)) {
      const listItem = document.createElement("li");
      listItem.textContent = `${ruleNumber} ${rule.textContent}`;
      listItem.dataset.ruleNumber = ruleNumber;

      // Добавляем событие на выбор правила
      listItem.addEventListener("click", () => {
        // Находим соответствующую кнопку "Подробнее"
        const detailsButton = document.querySelector(
          `.rule button[data-rule="${ruleNumber}"]`
        );

        if (detailsButton) {
          detailsButton.click(); // Эмулируем нажатие
        } else {
          console.error(`Кнопка "Подробнее" для правила ${ruleNumber} не найдена.`);
        }

        rulesSearchModal.style.display = "none"; // Закрыть окно поиска
      });

      rulesSearchResults.appendChild(listItem);
    }
  });

  if (!rulesSearchResults.innerHTML) {
    rulesSearchResults.innerHTML = "<li>Ничего не найдено.</li>";
  }
});

function setTheme(theme) {
    // Удаляем все предыдущие темы
    document.body.classList.remove('dark-theme', 'blue-theme');
    
    // Добавляем выбранную тему
    if (theme) {
      document.body.classList.add(theme);
    }

    // Сохраняем выбор темы в localStorage
    localStorage.setItem('theme', theme);
  }

  // Проверка сохраненной темы в localStorage
  window.onload = function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }

  // Пример кнопок для смены темы
  document.getElementById('light-theme').addEventListener('click', () => setTheme(''));
  document.getElementById('dark-theme').addEventListener('click', () => setTheme('dark-theme'));
  document.getElementById('blue-theme').addEventListener('click', () => setTheme('blue-theme'));


  document.addEventListener("DOMContentLoaded", () => {
    const searchModal = document.getElementById("rules-search-modal");
    const overlay = document.getElementById("custom-modal-overlay");
    const searchInput = document.getElementById("rules-search-input");
    const closeButton = document.querySelector(".custom-close-button");
  
    // Открытие модального окна поиска
    document.getElementById("rules-search").addEventListener("click", () => {
      searchModal.style.display = "block";
      overlay.style.display = "block";
      searchInput.focus(); /* отключаем авто активацию клавиатуры на нажатие на поиск */
      document.body.classList.add("no-scroll"); // Запрещаем прокрутку
    });
  
    // Закрытие модального окна поиска
    closeButton.addEventListener("click", () => {
      searchModal.style.display = "none";
      overlay.style.display = "none";
      document.body.classList.remove("no-scroll"); // Включаем прокрутку
    });
  
    // Клик по overlay не закрывает модальное окно
    overlay.addEventListener("click", (event) => {
      event.stopPropagation();
    });
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");
    const categories = document.querySelectorAll(".category h2");
    const ruleButtons = document.querySelectorAll(".rule button");
    const ruleHoverButtons = document.querySelectorAll(".rule button:hover");
    const penalties = document.querySelectorAll(".rule .penalty");
    const ruleCards = document.querySelectorAll(".rule");
    const noteCards = document.querySelectorAll(".note"); // Добавляем карточки примечаний
    const noteButtons = document.querySelectorAll(".note button"); // добавим кнопки примечаний
    const noteHoverButtons = document.querySelectorAll(".note button:hover");
    const titleColor = document.querySelectorAll(".title-color");
    const rulesSearch = document.querySelectorAll("#rules-search");
    const modal = document.querySelectorAll(".modal");
    const modalHeader = document.querySelectorAll(".modal-header");
    const customModal = document.querySelectorAll(".custom-modal");
    const customModalHeader = document.querySelectorAll(".custom-modal-header");
    const customModalContent = document.querySelectorAll(".custom-modal-content");
    const customModalOverlay = document.querySelectorAll(".custom-modal-overlay");
    const rulesSearchResults = document.querySelector("#rules-search-results"); // Контейнер результатов поиска
    const tablePunishmentsTransitions = document.querySelectorAll(".table-punishments-transitions");

    const themeButtons = document.querySelectorAll(".theme-buttons button");

    // Функция смены темы
    function setTheme(theme) {
        // Отладка
        console.log(`Применяем тему: ${theme}`);

        // Устанавливаем класс темы для элементов
        body.className = theme;
        header.className = theme;
        footer.className = theme;

        categories.forEach((category) => {
            category.className = theme;
        });

        ruleButtons.forEach((button) => {
            button.className = theme;
        });

        ruleHoverButtons.forEach((button) => {
            button.className = theme;
        });

        penalties.forEach((penalty) => {
            penalty.className = `penalty ${theme}`;
        });

        ruleCards.forEach((rule) => {
            rule.className = `rule ${theme}`; // Сохраняем базовый класс `rule`
        });

        noteCards.forEach((note) => {
            note.className = `note ${theme}`; // Сохраняем базовый класс `note`
        });

        noteButtons.forEach((button) => {
            button.className = theme;
        });

        noteHoverButtons.forEach((button) => {
            button.className = theme;
        });

        titleColor.forEach((titleColor) => {
            titleColor.className = `title-color ${theme}`;
        });

        rulesSearch.forEach((rulesSearch) => {
            rulesSearch.className = `#rules-search ${theme}`;
        });

        modal.forEach((modal) => {
            modal.className = `modal ${theme}`;
        });

        modalHeader.forEach((modalHeader) => {
            modalHeader.className = `modal-header ${theme}`;
        });

        customModal.forEach((customModal) => {
            customModal.className = `custom-modal ${theme}`;
        });

        customModalHeader.forEach((customModalHeader) => {
            customModalHeader.className = `custom-modal-header ${theme}`;
        });

        customModalContent.forEach((customModalContent) => {
            customModalContent.className = `custom-modal-content ${theme}`;
        });

        customModalOverlay.forEach((customModalOverlay) => {
            customModalOverlay.className = `custom-modal-overlay ${theme}`;
        });
        // Применяем тему к #rules-search-results и его <li>
        if (rulesSearchResults) {
            // Применяем класс к контейнеру
            rulesSearchResults.className = `rules-search-results ${theme}`;

            // Применяем класс к дочерним элементам списка
            const resultsItems = rulesSearchResults.querySelectorAll("li");
            resultsItems.forEach((li, index) => {
                li.className = theme;
                console.log(`Элемент ${index + 1}: класс ${li.className}`);
            });
        } else {
            console.warn("#rules-search-results не найден!");
        }

        tablePunishmentsTransitions.forEach((tablePunishmentsTransitions) => {
            tablePunishmentsTransitions.className = `table-punishments-transitions ${theme}`;
        });

        // Обновляем кнопки тем
        themeButtons.forEach((btn) => btn.classList.remove("active")); // Снимаем выделение
        const activeButton = document.getElementById(`${theme || "blue"}-theme`); // Для основной темы
        if (activeButton) {
            activeButton.classList.add("active");
        }
    }

    // Обработчики для кнопок тем
    document.getElementById("light-theme").addEventListener("click", () => {
        setTheme("light");
    });

    document.getElementById("dark-theme").addEventListener("click", () => {
        setTheme("dark");
    });

    document.getElementById("blue-theme").addEventListener("click", () => {
        setTheme(""); // Темно-синяя тема по умолчанию
    });
});




document.addEventListener("DOMContentLoaded", () => {
    const themeButtons = document.querySelectorAll(".theme-buttons button");
  
    function setTheme(theme) {
      document.body.className = theme; // Устанавливаем тему
      themeButtons.forEach((btn) => btn.classList.remove("active"));
      document.getElementById(`${theme || "blue"}-theme`).classList.add("active");
    }
  
    // Привязка кнопок к темам
    document.getElementById("light-theme").addEventListener("click", () => setTheme("light"));
    document.getElementById("dark-theme").addEventListener("click", () => setTheme("dark"));
    document.getElementById("blue-theme").addEventListener("click", () => setTheme("")); // Основная тема
  });

  // Получаем кнопки
const lightThemeButton = document.getElementById('light-theme');
const darkThemeButton = document.getElementById('dark-theme');

// Функция для применения темы
function applyTheme(theme) {
  document.body.className = theme; // Устанавливаем класс для body
  localStorage.setItem('theme', theme); // Сохраняем выбор в localStorage
}

// Проверяем сохраненную тему при загрузке страницы
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  applyTheme(savedTheme); // Применяем сохраненную тему
} else {
  applyTheme('light'); // По умолчанию светлая тема
}

// Назначаем обработчики кликов
lightThemeButton.addEventListener('click', () => applyTheme('light'));
darkThemeButton.addEventListener('click', () => applyTheme('dark'));


const scrollBtn = document.querySelector('.Btn');
const footer = document.querySelector('.footer');

window.addEventListener('scroll', () => {
    const footerRect = footer.getBoundingClientRect(); // Получаем координаты футера
    const windowHeight = window.innerHeight; // Высота окна браузера

    // Показываем кнопку, если прокрутили вниз на 100px
    if (window.scrollY > 50) {
        scrollBtn.classList.add('show');
    } else {
        scrollBtn.classList.remove('show');
    }

    // Регулируем положение кнопки выше футера
    if (footerRect.top < windowHeight) {
        scrollBtn.style.bottom = `${windowHeight - footerRect.top + 20}px`; // Поднимаем кнопку
    } else {
        scrollBtn.style.bottom = '20px'; // Стандартное положение
    }
});

// Прокрутка наверх при клике
scrollBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const upButton = document.getElementById("up-button");

    const themes = {
        "light-theme": "linear-gradient(to right, rgb(223 203 175), #966944)",
        "dark-theme": "linear-gradient(to right, #7c8ca3, rgb(25 33 45))",
        "blue-theme": "linear-gradient(to right, #537ec0, #0f0c36)",
    };

    // Функция для обновления цвета кнопки
    function updateButtonColor(themeId) {
        if (themes[themeId]) {
            upButton.style.background = themes[themeId];
        }
    }

    // При изменении темы
    document.querySelectorAll(".theme-buttons button").forEach(button => {
        button.addEventListener("click", () => {
            const themeId = button.id;
            localStorage.setItem("selectedTheme", themeId); // Сохраняем тему
            updateButtonColor(themeId); // Применяем цвет кнопки
        });
    });

    // Проверяем сохраненную тему при загрузке
    const savedTheme = localStorage.getItem("selectedTheme");
    if (savedTheme) {
        updateButtonColor(savedTheme); // Применяем цвет кнопки при загрузке
    }
});

