![BrightCoders Logo](img/logo-bc.png)

# Kata El Juego de la Vida
![cover](img/cover.jpg)
<span>Photo by <a href="https://unsplash.com/@anubhav?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Anubhav Saxena</a> on <a href="https://unsplash.com/s/photos/life?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>

## Pre-requisitos
- [Instalar y utilizar ESLint para mantener tu codigo consistente e identificar posibles problemas](https://eslint.org/)
- 🆕 Integrar [CodeClimate](https://codeclimate.com/) CodeClimate a tu repositorio, para que cada vez que envíes una actualización se ejecute el análisis de tu código.  Esta herramienta evalua diferentes aspectos de tu código y te genera análisis junto con una calificación que determina la calidad de tu código. **Deberás asegurarte de que la calificación obtenida en esta herramienta sea A**.
- Tu solución debe ser orientada a objetos y debes incluir [pruebas unitarias](https://builtin.com/software-engineering-perspectives/what-is-unit-testing) utilizando [JEST](https://jestjs.io/es-ES/)

## Requerimientos Funcionales
Addapted from [Coding Dojo](https://codingdojo.org)

The Game of Life is not your typical computer game. It is a 'cellular automaton', and was invented by Cambridge mathematician John Conway.

This game became widely known when it was mentioned in an article published by Scientific American in 1970. It consists of a collection of cells which, based on a few mathematical rules, can live, die or multiply. Depending on the initial conditions, the cells form various patterns throughout the course of the game.

This Kata is about calculating the next generation of Conway’s game of life, given any starting position. 

You start with a two dimensional grid of cells, where each cell is either alive or dead. In this version of the problem, the grid is finite, and no life can exist off the edges. When calcuating the next generation of the grid, follow these rules:

1. Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
2. Any live cell with more than three live neighbours dies, as if by overcrowding.
3. Any live cell with two or three live neighbours lives on to the next generation.
4. Any dead cell with exactly three live neighbours becomes a live cell.

You should write a program that can accept an arbitrary grid of cells, and will output a similar grid showing the next generation.

### Clues
The input starting position could be a text file that looks like this:
```
Generation 1:
4 8
........
....*...
...**...
........
```
And the output could look like this:
```
Generation 2:
4 8
........
...**...
...**...
........
```
## Requerimientos no funcionales
- Calidad
  - Utilizar estilo de código definido por la comunidad (apoyarse en ESLint)
  - Puntuación **A** obtenida en CodeClimate
  - Incluir pruebas unitarias
- Desempeño y escalabilidad
  - Puede ejecutarse desde la linea de comandos y mostrar la salida en consola
- Código fuente
  - Orientado a Objetos
  - Métodos Pequeños
  - Aplicar los principios [SOLID](https://medium.com/backticks-tildes/the-s-o-l-i-d-principles-in-pictures-b34ce2f1e898)

## Tecnologías
- Lenguaje de programación Javascript
- Línea de comando / consola

## Entregable
- Código fuente en Github (1 por equipo)

## Resources
- [Learn Javascript - Interactive tutorial](https://www.learn-js.org/)
- [Learn JavaScript (Step-By-Step)](https://learnjavascript.online/)
- [JavaScript Garden](https://bonsaiden.github.io/JavaScript-Garden/)
- [Eloquent JavaScript](https://eloquentjavascript.net/)
- [Try JavaScript](https://www.javascript.com/try)
- [JavaScript (ES2015+) Enlightenment](https://frontendmasters.com/books/javascript-enlightenment/)
- [JavaScript Fundamentals for ES6](https://www.pluralsight.com/courses/javascript-fundamentals-es6)
- [An intro to object-oriented programming in JavaScript: objects, prototypes, and classes](https://www.freecodecamp.org/news/an-intro-to-object-oriented-programming-in-javascript-objects-prototypes-and-classes-5d135e7361b1/)
- [JavaScript — Principios SOLID](https://medium.com/@mauriciogc/javascript-principios-solid-e93a17e950bb)
- [Understanding SOLID Principles in JavaScript](https://hackernoon.com/understanding-solid-principles-in-javascript-w1cx3yrv)
- [The Absolute Beginner’s Guide to Test Driven Development, with a Practical Example](https://medium.com/@bethqiang/the-absolute-beginners-guide-to-test-driven-development-with-a-practical-example-c39e73a11631) 
- [Learn Test Driven Development (TDD)](https://github.com/dwyl/learn-tdd)
- [Fundamentals of TDD](https://thoughtbot.com/upcase/fundamentals-of-tdd)
- [Getting Started](https://jestjs.io/docs/en/getting-started)
- [Getting Started With Jest](https://www.valentinog.com/blog/jest/) 
- [Testing JavaScript with Jest](https://flaviocopes.com/jest/)

