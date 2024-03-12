## React Input Slider

![](https://i.postimg.cc/Dwv1kgZw/2023-10-19-17-10-31.png)

## Demo
[Demo](https://viconte.github.io/react-input-slider/)

## Usage

```jsx
<Slider
  defaultValue={10}
  isShowLegend
  maxValue={100}
  minValue={0}
  onChange={() => {}}
/>
```

## API

| Название             | Тип      | Описание                                     |
|----------------------|----------|----------------------------------------------|
| className            | string   | Устанавливает стиль контейнера слайдера      |
| classNameTrack       | string   | Устанавливает стиль трека слайдера           |
| classNameActiveTrack | string   | Устанавливает стиль активного трека слайдера |
| classNameSlider      | string   | Устанавливает стиль бегунка слайдера         |
| minValue             | number   | Устанавливает минимальное значение           |
| maxValue             | number   | Устанавливает максимальное значение          |
| defaultValue         | number   | Устанавливает значение по умолчанию          |
| step                 | number   | Устанавливает шаг                            |
| isShowLegend         | boolean  | Флаг отображения легенды                     |
| onChange             | function | Обработчик значений                          |
