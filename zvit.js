// Визначаємо функції displayContent та createSubMenu у глобальному контексті
function displayContent(labNumber) {
    console.log("Функція displayContent викликається з номером роботи:", labNumber);

    // Очистити попередній вміст
    document.getElementById("info-display").innerHTML = "";
    document.getElementById("lab-content").innerHTML = "";

    // Змінна для збереження змісту лабораторної роботи
    let labContent = "";

    // Визначити зміст в залежності від номера лабораторної роботи
    if (labNumber === 1) {
        // Встановити зміст лабораторної роботи для першої роботи
        labContent = `
            <h3>Лабораторна робота № 1</h3>
            <p>Скористайтесь меню змісту звіту</p> 
        `;
        // Створити меню змісту для першої роботи
        createSubMenu(1);
    }
    if (labNumber === 2) {
        // Встановити зміст лабораторної роботи для першої роботи
        labContent = `
            <h3>Лабораторна робота № 2</h3>
            <p>Скористайтесь меню змісту звіту</p> 
        `;
        // Створити меню змісту для першої роботи
        createSubMenu(2);
    }
    // Вивести зміст лабораторної роботи в відповідний блок
    document.getElementById("lab-content").innerHTML = labContent;

    // Після створення меню змісту налаштовуємо розміри кнопок
    adjustButtonSizes();
}

function createSubMenu(labNumber) {
    let menu = document.createElement("div");
    menu.className = "lab-menu";
    let infoDisplay = document.getElementById("info-display");
    infoDisplay.appendChild(menu);

    // Тут можна додати кнопки для меню змісту
    if (labNumber === 1) {

    let button1 = document.createElement("button");
    button1.textContent = "Опис предметного середовища";
    button1.onclick = function() {
        displaySubMenuContent("Опис предметного середовища");
    };
    menu.appendChild(button1);

    let button2 = document.createElement("button");
    button2.textContent = "Тема Мета Місце розташування ЛР №1";
    button2.onclick = function() {
        displaySubMenuContent("Тема Мета Місце розташування ЛР №1");
    };
    menu.appendChild(button2);

    let button3 = document.createElement("button");
    button3.textContent = "СТРУКТУРА ДОКУМЕНТУ";
    button3.onclick = function() {
        displaySubMenuContent("СТРУКТУРА ДОКУМЕНТУ");
    };
    menu.appendChild(button3);

    let button4 = document.createElement("button");
    button4.textContent = "HTML-код ТАБЛИЦЬ";
    button4.onclick = function() {
        displaySubMenuContent("HTML-код ТАБЛИЦЬ");
    };
    menu.appendChild(button4);

    let button5 = document.createElement("button");
    button5.textContent = "HTML-код ФОРМИ";
    button5.onclick = function() {
        displaySubMenuContent("HTML-код ФОРМИ");
    };
    menu.appendChild(button5);

    let button6 = document.createElement("button");
    button6.textContent = "HTML-код ЗОБРАЖЕННЯ";
    button6.onclick = function() {
        displaySubMenuContent("HTML-код ЗОБРАЖЕННЯ");
    };
    menu.appendChild(button6);

    let button7 = document.createElement("button");
    button7.textContent = "ВИСНОВКИ";
    button7.onclick = function() {
        displaySubMenuContent("ВИСНОВКИ");
    };
    menu.appendChild(button7);
}

else if (labNumber === 2) {
    
    let button21 = document.createElement("button");
    button21.textContent = "Тема, мета ЛР №2. Місце розташування сайту, звіту";
    button21.onclick = function() {
        displaySubMenuContent("Тема, мета ЛР №2. Місце розташування сайту, звіту");
    };
    menu.appendChild(button21);

    let button22 = document.createElement("button");
    button22.textContent = "Способи підключення стилів";
    button22.onclick = function() {
        displaySubMenuContent("Способи підключення стилів");
    };
    menu.appendChild(button22);

    let button23 = document.createElement("button");
    button23.textContent = "СЕЛЕКТОРИ";
    button23.onclick = function() {
        displaySubMenuContent("СЕЛЕКТОРИ");
    };
    menu.appendChild(button23);

    let button24 = document.createElement("button");
    button24.textContent = "Селектори тегу";
    button24.onclick = function() {
        displaySubMenuContent("Селектори тегу");
    };
    menu.appendChild(button24);

    let button25 = document.createElement("button");
    button25.textContent = "Селектори класу";
    button25.onclick = function() {
        displaySubMenuContent("HTML-код ФОРМИ");
    };
    menu.appendChild(button25);

    let button26 = document.createElement("button");
    button26.textContent = "Селектори ідентифікаторів";
    button26.onclick = function() {
        displaySubMenuContent("Селектори ідентифікаторів");
    };
    menu.appendChild(button26);

    let button27 = document.createElement("button");
    button27.textContent = "Інші селектори";
    button27.onclick = function() {
        displaySubMenuContent("Інші селектори");
    };
    menu.appendChild(button27);

    let button28 = document.createElement("button");
    button28.textContent = "CSS: Шрифти. Текст. Таблиці. Фон. Контур. Списки. CSS просунутий";
    button28.onclick = function() {
        displaySubMenuContent("ІCSS: Шрифти. Текст. Таблиці. Фон. Контур. Списки. CSS просунутий");
    };
    menu.appendChild(button28);

    let button29 = document.createElement("button");
    button29.textContent = "ВИСНОВКИ до ЛР №2";
    button29.onclick = function() {
        displaySubMenuContent("ВИСНОВКИ до ЛР №2");
    };
    menu.appendChild(button29);
}
}
// Викликаємо функцію після завантаження сторінки
window.onload = function() {
    // Викликаємо функцію displayContent з номером 1 при завантаженні сторінки
    displayContent(1);
};

function adjustButtonSizes() {
    // Отримання всіх кнопок
    const buttons = document.querySelectorAll(".info-display button");

    // Знаходження максимальної ширини кнопки
    let maxWidth = 0;
    buttons.forEach(button => {
        const buttonWidth = button.offsetWidth;
        if (buttonWidth > maxWidth) {
            maxWidth = buttonWidth;
        }
    });

    // Застосування максимальної ширини до всіх кнопок
    buttons.forEach(button => {
        button.style.width = `${maxWidth}px`;
    });
}

function displaySubMenuContent(buttonText) {
    let contentHTML = ""; // Рядок, в якому буде зберігатися HTML-структура для вмісту

    // Відповідно до тексту кнопки створюємо відповідний вміст
    switch (buttonText) {
        case "Опис предметного середовища":
            contentHTML = `
                    <h2>Опис предметного середовища</h2>
                    <ol>
                        <li>Створення інтернет-магазину для здійснення господарської діяльності з продажу товарів з категорії жіночого одягу та задоволення попиту відповідної категорії споживачів.</li>
                        <li>Узагальнений опис функціоналу:</li>
                        <ol type="a">
                            <li>Реєстрація та вхід в обліковий запис</li>
                            <li>Навігація та пошук</li>
                            <li>Каталог товарів</li>
                            <li>Сторінки товарів (сторінка – товар)</li>
                            <li>Кошик покупця</li>
                            <li>Оформлення замовлення</li>
                            <li>Адміністративний розділ</li>
                            <li>Секція новин (гостьова)</li>
                            <li>Контактна інформація (зворотній зв’язок)</li>
                        </ol>
                    </ol>
                    <h3>Функціонал адміністратора:</h3>
                    <ol>
                        <li>Управління товарами:
                            <ul>
                                <li>Додавання, видалення та редагування товарів.</li>
                                <li>Додавання зображень, описів та цін до товарів.</li>
                                <li>Категоризація товарів для зручного пошуку.</li>
                            </ul>
                        </li>
                        <li>Управління замовленнями:
                            <ul>
                                <li>Перегляд та відстеження статусів замовлень.</li>
                                <li>Зміна статусів замовлень ("нове", "в обробці", "відправлене", "доставлене").</li>
                            </ul>
                        </li>
                        <li>Управління користувачами:
                            <ul>
                                <li>Реєстрація нових користувачів.</li>
                                <li>Перегляд та редагування інформації про користувачів.</li>
                                <li>Видалення користувачів або блокування їхніх облікових записів.</li>
                            </ul>
                        </li>
                        <li>Звіти та аналітика:
                            <ul>
                                <li>Перегляд статистики продажів та замовлень.</li>
                                <li>Генерація звітів за потрібними періодами часу або категоріями товарів.</li>
                            </ul>
                        </li>
                    </ol>
                    
                    <h3>Функціонал відвідувача:</h3>
                    <ol>
                        <li>Перегляд товарів:
                            <ul>
                                <li>Перегляд каталогу товарів із зображеннями, описами та цінами.</li>
                                <li>Фільтрація та сортування товарів за різними критеріями (ціна, розмір, категорія).</li>
                            </ul>
                        </li>
                        <li>Пошук товарів:
                            <ul>
                                <li>Пошук товарів за категорією або розміром.</li>
                            </ul>
                        </li>
                        <li>Додавання товарів до кошика:
                            <ul>
                                <li>Обрання товару; додавання обраних товарів до кошика.</li>
                            </ul>
                        </li>
                        <li>Оформлення замовлення:
                            <ul>
                                <li>Підтвердження оплати обраних товарів за кошиком.</li>
                                <li>Заповнення форми з контактною інформацією та адресою для оформлення замовлення.</li>
                                <li>Вибір способу доставки (Укрпошта, Нова пошта, самовивіз).</li>
                            </ul>
                        </li>
                        <li>Особистий кабінет:
                            <ul>
                                <li>Реєстрація нового користувача; вхід в особистий кабінет.</li>
                                <li>Перегляд статусу поточних замовлень; перегляд історії замовлень.</li>
                                <li>Змінення особистої інформації (реєстраційних даних).</li>
                            </ul>
                        </li>
                    </ol>             
            `;
            break;
        case "Тема Мета Місце розташування ЛР №1":
            contentHTML = `
                <h3>Тема</h3>
                <p>СТРУКТУРА HTML-ДОКУМЕНТА. ВИБІР ПРЕДМЕТНОЇ ГАЛУЗІ.РОБОТА З ПОСИЛАННЯМИ, ТАБЛИЦЯМИ, ЗОБРАЖЕННЯМИ, СПИСКАМИ в HTML-ДОКУМЕНТІ</p>

                <h3>Мета </h3>
                <p>Придбати практичні навички роботи  з HTML-документом, таблицями, зображеннями, посиланнями, списками, формами Створити шаблон звітного HTML-документом для відображення результатів роботи всіх лабораторних робіт.</p>

                <h3>Місце розташування ЛР №1</h3>
                <p>Розміщено на GitHub</p>
                <p><a href="https://github.com/mavi-fiot/zvitLR_html" target="_blank">Звіт.</a> <a href="https://mavi-fiot.github.io/zvitLR_html/" target="_blank">Сайт звіту.</a></p>
                <p><a href="https://github.com/mavi-fiot/webStream" target="_blank">Проект.</a> <a href="https://mavi-fiot.github.io/webStream/" target="_blank">Сайт проекту.</a></p>
                <p><a href="https://github.com/mavi-fiot/resume" target="_blank">Резюме.</a> <a href="https://mavi-fiot.github.io/resume/" target="_blank">Сайт резюме.</a></p>

            `;
            break;
        case "СТРУКТУРА ДОКУМЕНТУ":
            contentHTML = `
                <h3>СТРУКТУРА</h3>
                <p>HTML-код ТАБЛИЦЬ.</p>
                <p>HTML-код ФОРМИ.</p>
                <p>HTML-код ЗОБРАЖЕННЯ.</p>

            `;
            break;

            case "HTML-код ТАБЛИЦЬ":
                contentHTML = `
                    <table>
                        <caption>Таблиця товарів</caption>
                        <thead>
                            <tr>
                                <th>Назва товару</th>
                                <th>Ціна товару</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Сукня</td>
                                <td>500 грн</td>
                            </tr>
                            <tr>
                                <td>Блуза</td>
                                <td>300 грн</td>
                            </tr>
                        </tbody>
                    </table>

                    <h3>HTML-код ТАБЛИЦЬ</h3>
                        <pre>
                            <code>
                                &lt;!-- Таблиця --&gt;
                                    &lt;table&gt;
                                        &lt;caption&gt;Таблиця товарів&lt;/caption&gt;
                                        &lt;thead&gt;
                                            &lt;tr&gt;
                                                &lt;th&gt;Назва товару&lt;/th&gt;
                                                &lt;th&gt;Ціна товару&lt;/th&gt;
                                            &lt;/tr&gt;
                                        &lt;/thead&gt;
                                        &lt;tbody&gt;
                                            &lt;tr&gt;
                                                &lt;td&gt;Сукня&lt;/td&gt;
                                                &lt;td&gt;500 грн&lt;/td&gt;
                                            &lt;/tr&gt;
                                            &lt;tr&gt;
                                                &lt;td&gt;Блуза&lt;/td&gt;
                                                &lt;td&gt;300 грн&lt;/td&gt;
                                            &lt;/tr&gt;
                                        &lt;/tbody&gt;
                                    &lt;/table&gt;
                            </code>
                        </pre>
`;
break;
            
        case "HTML-код ФОРМИ":
            contentHTML = `
                    <form>
                        <label for="email">Електронна пошта:</label>
                        <input type="email" id="email" name="email" required>
                        <button type="submit">Підписатись</button>
                    </form>

                <h3>HTML-код ФОРМИ</h3>
                <pre> 
                    <code>
                        &lt;!-- Форма --&gt;
                            &lt;form&gt;
                                &lt;label for="email"&gt;Електронна пошта:&lt;/label&gt;
                                &lt;input type="email" id="email" name="email" required&gt;
                                &lt;button type="submit"&gt;Підписатись&lt;/button&gt;
                                &lt;/form&gt;
                    </code>
                </pre>
            `;
            /*Використовується елемент <pre> для збереження форматування тексту, і <code> 
                для позначення HTML-коду. Символи < та > замінюються на &lt; і &gt; 
                відповідно, щоб вони відображалися як текст у HTML. 
                Таким чином відображається HTML-код у вигляді тексту без його виконання .*/
            break;

        case "HTML-код ЗОБРАЖЕННЯ":
            contentHTML = `
                <div class="gallery">
                    <figure>
                        <img src="FASHION_WEEK.jpg" alt="FASHION_WEEK" width="300" height="300">
                        <figcaption>Модні тренди весна-літо 2024 — що будемо носити наступного сезону</figcaption>
                    </figure>
                    <figure>
                        <img src="Milano.jpg" alt="Milano" width="300" height="200">
                        <figcaption>Як українські дизайнери підкорювали Мілан за підтримки «ангела моди» Джен Сідарі</figcaption>
                    </figure>
                    <figure>
                        <img src="ПІДТРИМКА.jpeg" alt="ПІДТРИМКА" width="300" height="200">
                        <figcaption>Підтримка України на світових подіумах</figcaption>
                    </figure>
                    <figure>
                        <img src="LONDON.jpeg" alt="LONDON" width="300" height="200">
                        <figcaption>Тиждень моди в Лондоні - чим надихались митці</figcaption>
                    </figure>
                </div>

                <h3>Фото з описом</h3>
                <pre>
                    <code>
                        &lt;!-- Фото з описом --&gt;
                        &lt;div class="gallery"&gt;
                            &lt;figure&gt;
                                &lt;img src="FASHION_WEEK.jpg" alt="FASHION_WEEK"&gt;
                                &lt;figcaption&gt;Модні тренди весна-літо 2024 — що будемо носити наступного сезону&lt;/figcaption&gt;
                            &lt;/figure&gt;
                            &lt;figure&gt;
                                &lt;img src="Milano.jpg" alt="Milano"&gt;
                                &lt;figcaption&gt;Як українські дизайнери підкорювали Мілан за підтримки «ангела моди» Джен Сідарі&lt;/figcaption&gt;
                            &lt;/figure&gt;
                            &lt;figure&gt;
                                &lt;img src="ПІДТРИМКА.jpeg" alt="ПІДТРИМКА"&gt;
                                &lt;figcaption&gt;Підтримка України на світових подіумах&lt;/figcaption&gt;
                            &lt;/figure&gt;
                            &lt;figure&gt;
                                &lt;img src="LONDON.jpeg" alt="LONDON"&gt;
                                &lt;figcaption&gt;Тиждень моди в Лондоні - чим надихались митці&lt;/figcaption&gt;
                            &lt;/figure&gt;
                        &lt;/div&gt;
                    </code>
                </pre>
            `;
            break;

        case "ВИСНОВКИ":
            contentHTML = `
                <h3>ВИСНОВКИ</h3>
                <p>В ході виконання лабораторної роботи набуто практичні навички реалізації завдань  з HTML-документом, таблицями, зображеннями, посиланнями, списками, формами.</p>
                <p>Набуті знання та навички закріплено в шляхом створення шаблону звітного HTML-документу для відображення результатів роботи всіх лабораторних робіт.</p>
            `;
            break;

        case "Тема, мета ЛР №2. Місце розташування сайту, звіту":
            contentHTML = `
                <h3>Тема, мета ЛР №2. Місце розташування сайту, звіту</h3>
                <p>Тема: КАСКАДНІ ТАБЛИЦІ СТИЛІВ. СЕЛЕКТОРИ .ІДЕНТИФІКАТОРИ. СТИЛЬОВЕ ОФОРМЛЕННЯ ТЕКСТОВИХ ЕЛЕМЕНТІВ В HTML-ДОКУМЕНТАХ.</p>

                <p>Мета: придбати практичні навички роботи  з селекторами, ідентифікаторами, списками,  різноманітними властивостями кольору і фону,  
                зовнішними та внутрішними  відступами,  плаваючими елементами, оформленням текстових елементів.</p>

                <h3>Місце розташування ЛР №2</h3>
                <p>Розміщено на GitHub</p>
                <p><a href="https://github.com/mavi-fiot/zvitLR_html" target="_blank">Звіт.</a> <a href="https://mavi-fiot.github.io/zvitLR_html/" target="_blank">Сайт звіту.</a></p>
                <p><a href="https://github.com/mavi-fiot/webStream" target="_blank">Проект.</a> <a href="https://mavi-fiot.github.io/webStream/" target="_blank">Сайт проекту.</a></p>
                <p><a href="https://github.com/mavi-fiot/resume" target="_blank">Резюме.</a> <a href="https://mavi-fiot.github.io/resume/" target="_blank">Сайт резюме.</a></p>
                
            `;
            break;
        
        default:
            contentHTML = "<p>Тут має відображатися зміст вибраного пункту меню.</p>";
            break;
    }

    // Виведення змісту відповідного пункту меню в блок
    document.getElementById("lab-content").innerHTML = contentHTML;
}