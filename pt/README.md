# electron-crud-bs
Projeto inicial: CRUD com Electron, JSON e Bootstrap 4

![electron-crud-bs](assets/electron.png "electron-crud-bs")

## Sobre

Um projeto inicial para mostrar como ter o [Electron](https://electronjs.org/) e Bootstrap 4 rodando juntos. 

### Features
- Bootstrap 4
- ES6
- Components architecture
- Simple reactive behaviour (without React, Angular etc.)
- Font-Awesome 5 integration
- CRUD example with JSON storage in file
- Settings component with persistent storage

## Instalação e execução

Clonar o o fonte e executar:

```
npm install
```

## Running

```
npm start
```

## If recommended

```
npm audit fix
```

## Persistência

Usamos o pacote electron-json-storage

O Electron carece de uma maneira fácil de persistir e ler informações. O pacote electron-json-storage implementa uma API semelhante ao localStorage para escrever e ler objetos JSON de e para o diretório de dados do aplicativo do sistema operacional, conforme definido por app.getPath ('userData').


