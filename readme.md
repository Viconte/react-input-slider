## React Input Slider

![](https://i.postimg.cc/Dwv1kgZw/2023-10-19-17-10-31.png)

## Usage

```jsx
    <Slider defaultValue={10} isShowLegend maxValue={100} minValue={0} onChange={() => {}} />
```

## API

#### className: string
Стилевой класс контейнера слайдера

#### classNameTrack: string
Стилевой класс трека

#### classNameActiveTrack: string
Стилевой класс активного трека

#### classNameSlider: string
Стилевой класс бегунка

#### minValue: number
Минимальное значение

#### maxValue: number
Максимальное значение

#### defaultValue: number
Начальное значение

#### step: number
Шаг

#### isShowLegend: boolean
Флаг отображения легенды

#### onChange: (value: number): void
Обработчик изменний
