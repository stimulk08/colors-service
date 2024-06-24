# Colors service
## Запуск
 1) docker-compose up db
 2) npm ci
 3) npm run build
 4) npm run start
## Примеры запросов
### Создание цвета
```
mutation {
  createColor(createColorInput: { name: "Red", hex: "#FF0000", rgb: "rgb (255, 0, 0)" }) {
    id
    c_name
    c_hex
    c_rgb
  }
}
```
### Получение всех цветов
```
{
  colors {
    id,
    c_name,
    c_hex,
    c_rgb
  }
}
```
### Получение цветом с пагинацией
```
{
  colors(page: 2) {
    id
  }
}
```
### Получение цвета по id
```
{
  findOne(id: 1) {
    id,
    c_name,
    c_hex,
    c_rgb
  }
}
```

### Получение цвета по id
```
{
  findOne(id: 1) {
    id,
    c_name,
    c_hex,
    c_rgb
  }
}
```

### Получение цвета по его названию
```
{
  colorsByName(name: "Red") {
    id
  }
}
```
