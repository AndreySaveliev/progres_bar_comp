# Круговой индикатор прогресса

![Внешний вид компонента](1_screen.png)

## Функционал

- Установка значения прогресса (0-100)
- Включение анимации
- Скрытие индикатора прогресса

## Как использовать

1. Скопировать template в свой html файл проекта

```html
    <template id="progress_template">
        <div class="bar">
          <div class="progress-bar"></div>
          <div class="options">
            <div class="option">
              <input class="input_number" type="number" max="100" min="0" maxlength="3"/>
              <label>Value</label>
            </div>
            <div class="option">
              <input class="input_checkbox input_animate" type="checkbox" />
              <div class="slider"></div>
              <label>Animate</label>
            </div>
            <div class="option">
              <input class="input_checkbox input_hide" type="checkbox" />
              <div class="slider"></div>
              <label>Hide</label>
            </div>
          </div>
        </ul>
      </div>
    </template>
```

2.

```js
const template = document.querySelector("#progress_template"); //Выбираем template
const clone = template.content.cloneNode(true); // Копируем содержимое внутри тегов <template><template/>
const progress = new ProgressBar(clone); // Вызываем класс с клонированным содержимым тегов <template><template/>
const barEl = progress.generateBar(); // Вызываем метод generateBar
document.querySelector("#app").appendChild(barEl); // Вставляем результат generateBar в html
```
