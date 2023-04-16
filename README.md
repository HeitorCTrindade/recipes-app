# Boas-vindas ao repositório do projeto App de Receitas!

# Descrição

 Olá, esse é o README do projeto App de Receitas (Recipes App). O projeto consiste em criar um aplicativo web que disponibilize receitas de comidas e de bebidas e muito mais! 

 O projeto foi implementado utilizando o que há de mais moderno dentro do ecossistema React: Hooks e Context API!

  Nele é possível: ver, buscar, filtrar, favoritar e acompanhar o progresso de preparação de receitas !

  ⚠️ A base de dados é importada de duas APIs distintas, uma para comidas e outra para bebidas.

  O layout tem como foco dispositivos móveis e desktop, sendo reponsivo ao tamanho da tela.  

O projeto foi realizado em <a href="#equipe-de-desenvolvimento">equipe</a>, com a adoção da metodologia ágil e dos frameworks Scrum e Kanban. O Scrum foi utilizado para gerenciar o projeto, enquanto o Kanban acompanhava as tarefas e permitia uma visualização das atividades.

![image](/RECIPES-APP.gif)

---

# Sumário
- [Descrição](#descrição)
- [Time de desenvlvimento](#time-de-desenvolvimento)
- [Habilidades](#habilidades-requeridas)
- [Tecnologias utilizadas](#tecnologias-utilizadas)
- [Demonstração da aplicação](#demonstração-da-aplicação)
- [ANTES DE INICIALIZAR A APLICAÇÃO](#para-inicializar-a-aplicação)
- [Linter](#linter)
- [APIs](#apis)
  - [TheMealDB API](#themealdb-api)
  - [The CockTailDB API](#the-cocktaildb-api)

- [Usando o Trello como ferramenta kanban](#usando-o-trello-como-ferramenta-kanban)

- [Observações técnicas](#observações-técnicas)
  - [Rotas](#rotas)

- [Contato](#contato)
  - [Rotas](#rotas)

---

# Time de desenvolvimento

Esse é um projeto que foi desenvolvido e realizado em grupo. Sendo o grupo composto por:

 - [Gabriel](https://www.linkedin.com/in/gabriel-alves-a66b63213/)
 - [Geomarcia](https://www.linkedin.com/in/georamos/)
 - [Guilherme](https://www.linkedin.com/in/guilhermegabriellisboadasilva/)
 - [Heitor](https://www.linkedin.com/in/heitor-catarino-trindade/)
 - [Hugo](https://www.linkedin.com/in/hugo-leop/)

# Habilidades requeridas

  - Utilizar _Redux_ para gerenciar estado
  - Utilizar a biblioteca _React-Redux_
  - Utilizar a Context API do _React_ para gerenciar estado
  - Utilizar o _React Hook useState_
  - Utilizar o _React Hook useContext_
  - Utilizar o _React Hook useEffect_
  - Criar Hooks customizados
  - Utilizar o LocalStorage para salvar o status das receitas (favoritas, em andamendo com o seu passo a passo realizado e finalizadas)
  - Utilizar o LocalStorage para salvar os dados dos usuários relacionadas as receitas
  - implementar testes para a aplicação
  - estilização com bootstrap

---

## Tecnologias utilizadas

- [HTML5][html5-url]
- [CSS3][css3-url]
- [JavaScript][javascript-url]
- [Bootstrap][bootstrap-url]
- [React.js][react-url]
- [React Router][react-router-url]
- [Contex-Api][redux-url]

---

## PARA INICIALIZAR A APLICAÇÃO:

Para rodar o projeto localmente, siga os passos abaixo.

1. Clone o repositório;

```
git clone git@github.com:garciaagui/perfecto-recipes-app.git
```

2. Navegue até a raiz do projeto;

```
cd perfecto-recipes-app/
```

3. Instale as dependências;

```
npm install
```

4. Inicialize o projeto;

```
npm run start
```

5. Para executar os testes, utilize o comando abaixo.

```
npm run test-coverage
```
---

## Linter

Para garantir a qualidade do código de forma a tê-lo mais legível, de mais fácil manutenção e seguindo as boas práticas de desenvolvimento foi utilizado neste projeto o linter `ESLint`. Para rodar o linter localmente execute o comando abaixo:

```bash
npm run lint
```
---

## Usando o Trello como ferramenta kanban

Na organização das tarefas foi utilizado o modelo kanban, através da ferramenta "Trello", para garantir que todos tivessem suas tarefas bem definidas e que a qualidade e a organização do projeto como um todo se mantivesse. Além de fazer com que o proceso de desenvolvimento fosse mais ágil e acertivo.

---

## APIs

#### TheMealDB API

O [TheMealDB](https://www.themealdb.com/) é um banco de dados aberto, mantido pela comunidade, com receitas e ingredientes de todo o mundo.

Os end-points são bastante ricos, você pode [vê-los aqui](https://www.themealdb.com/api.php)

O modelo de resposta para uma `meal` é o seguinte:
  <details>
    <summary>Ver modelo de resposta para uma meal</summary>

  ```json
    {
      "meals":[
          {
            "idMeal":"52882",
            "strMeal":"Three Fish Pie",
            "strDrinkAlternate":null,
            "strCategory":"Seafood",
            "strArea":"British",
            "strInstructions":"Preheat the oven to 200C\/400F\/Gas 6 (180C fan).\r\nPut the potatoes into a saucepan of cold salted water. Bring up to the boil and simmer until completely tender. Drain well and then mash with the butter and milk. Add pepper and taste to check the seasoning. Add salt and more pepper if necessary.\r\nFor the fish filling, melt the butter in a saucepan, add the leeks and stir over the heat. Cover with a lid and simmer gently for 10 minutes, or until soft. Measure the flour into a small bowl. Add the wine and whisk together until smooth.\r\nAdd the milk to the leeks, bring to the boil and then add the wine mixture. Stir briskly until thickened. Season and add the parsley and fish. Stir over the heat for two minutes, then spoon into an ovenproof casserole. Scatter over the eggs. Allow to cool until firm.\r\nSpoon the mashed potatoes over the fish mixture and mark with a fork. Sprinkle with cheese.\r\nBake for 30-40 minutes, or until lightly golden-brown on top and bubbling around the edges.",
            "strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/spswqs1511558697.jpg",
            "strTags":"Fish,Seafood,Dairy,Pie",
            "strYoutube":"https:\/\/www.youtube.com\/watch?v=Ds1Jb8H5Sg8",
            "strIngredient1":"Potatoes",
            "strIngredient2":"Butter",
            "strIngredient3":"Milk",
            "strIngredient4":"Gruy\u00e8re",
            "strIngredient5":"Butter",
            "strIngredient6":"Leek",
            "strIngredient7":"Plain Flour",
            "strIngredient8":"White Wine",
            "strIngredient9":"Milk",
            "strIngredient10":"Parsley",
            "strIngredient11":"Salmon",
            "strIngredient12":"Haddock",
            "strIngredient13":"Smoked Haddock",
            "strIngredient14":"Eggs",
            "strIngredient15":"",
            "strIngredient16":"",
            "strIngredient17":"",
            "strIngredient18":"",
            "strIngredient19":"",
            "strIngredient20":"",
            "strMeasure1":"1kg",
            "strMeasure2":"Knob",
            "strMeasure3":"Dash",
            "strMeasure4":"50g",
            "strMeasure5":"75g",
            "strMeasure6":"2 sliced",
            "strMeasure7":"75g",
            "strMeasure8":"150ml",
            "strMeasure9":"568ml",
            "strMeasure10":"2 tbs chopped",
            "strMeasure11":"250g",
            "strMeasure12":"250g",
            "strMeasure13":"250g",
            "strMeasure14":"6",
            "strMeasure15":"",
            "strMeasure16":"",
            "strMeasure17":"",
            "strMeasure18":"",
            "strMeasure19":"",
            "strMeasure20":"",
            "strSource":"https:\/\/www.bbc.co.uk\/food\/recipes\/three_fish_pie_58875",
            "dateModified":null
          }
      ]
    }
  ```
  </details>

---

Os ingredientes seguem uma ordem lógica onde o nome dele (`strIngredient1`) e a quantidade (`strMeasure1`) tem o mesmo número no final (1, nesse caso).

É possível listar todas as `categorias`, `nacionalidades` (vindas da API como "areas") e `ingredientes`:

```
categorias: https://www.themealdb.com/api/json/v1/1/list.php?c=list
nacionalidades: https://www.themealdb.com/api/json/v1/1/list.php?a=list
ingredientes: https://www.themealdb.com/api/json/v1/1/list.php?i=list
```

As fotos dos ingredientes vêm de um end-point padronizado com a seguinte lógica:

```
https://www.themealdb.com/images/ingredients/{nome-do-ingrediente}-Small.png
// exemplo com "Lime"
https://www.themealdb.com/images/ingredients/Lime-Small.png
```

#### The CockTailDB API

Bem similar (inclusive mantida pela mesma entidade) a TheMealDB API, só que focado em bebidas.

Os end-points também são bastante ricos, você pode [vê-los aqui](https://www.thecocktaildb.com/api.php)

As respostas seguem a mesma estrutura, com algumas particularidades relativas às bebidas (como ser ou não alcoólica, por exemplo)

  <details>
    <summary>Ver modelo de resposta para drinks</summary>

  ```json
    {
      "drinks":[
          {
            "idDrink":"17256",
            "strDrink":"Martinez 2",
            "strDrinkAlternate":null,
            "strDrinkES":null,
            "strDrinkDE":null,
            "strDrinkFR":null,
            "strDrinkZH-HANS":null,
            "strDrinkZH-HANT":null,
            "strTags":null,
            "strVideo":null,
            "strCategory":"Cocktail",
            "strIBA":null,
            "strAlcoholic":"Alcoholic",
            "strGlass":"Cocktail glass",
            "strInstructions":"Add all ingredients to a mixing glass and fill with ice.\r\n\r\nStir until chilled, and strain into a chilled coupe glass.",
            "strInstructionsES":null,
            "strInstructionsDE":"Alle Zutaten in ein Mischglas geben und mit Eis f\u00fcllen. Bis zum Abk\u00fchlen umr\u00fchren und in ein gek\u00fchltes Coup\u00e9glas abseihen.",
            "strInstructionsFR":null,
            "strInstructionsZH-HANS":null,
            "strInstructionsZH-HANT":null,
            "strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/fs6kiq1513708455.jpg",
            "strIngredient1":"Gin",
            "strIngredient2":"Sweet Vermouth",
            "strIngredient3":"Maraschino Liqueur",
            "strIngredient4":"Angostura Bitters",
            "strIngredient5":null,
            "strIngredient6":null,
            "strIngredient7":null,
            "strIngredient8":null,
            "strIngredient9":null,
            "strIngredient10":null,
            "strIngredient11":null,
            "strIngredient12":null,
            "strIngredient13":null,
            "strIngredient14":null,
            "strIngredient15":null,
            "strMeasure1":"1 1\/2 oz",
            "strMeasure2":"1 1\/2 oz",
            "strMeasure3":"1 tsp",
            "strMeasure4":"2 dashes",
            "strMeasure5":null,
            "strMeasure6":null,
            "strMeasure7":null,
            "strMeasure8":null,
            "strMeasure9":null,
            "strMeasure10":null,
            "strMeasure11":null,
            "strMeasure12":null,
            "strMeasure13":null,
            "strMeasure14":null,
            "strMeasure15":null,
            "strCreativeCommonsConfirmed":"No",
            "dateModified":"2017-12-19 18:34:15"
          }
      ]
    }
  ```
  </details>

---

Os ingredientes seguem uma ordem lógica onde o nome dele (`strIngredient1`) e a quantidade (`strMeasure1`) tem o mesmo número no final (1, nesse caso).

---

## Observações técnicas

### Rotas

As rotas utilizadas na aplicação são as seguintes:

* Tela de login: `/`;
* Tela principal de receitas de comidas: `/foods`;
* Tela principal de receitas de bebidas: `/drinks`;
* Tela de detalhes de uma receita de comida: `/foods/{id-da-receita}`;
* Tela de detalhes de uma receita de bebida: `/drinks/{id-da-receita}`;
* Tela de receita em progresso de comida: `/foods/{id-da-receita}/in-progress`;
* Tela de receita em progresso de bebida: `/drinks/{id-da-receita}/in-progress`;
* Tela de explorar: `/explore`;
* Tela de explorar comidas: `/explore/foods`;
* Tela de explorar bebidas: `/explore/drinks`;
* Tela de explorar comidas por ingrediente: `/explore/foods/ingredients`;
* Tela de explorar bebidas por ingrediente: `/explore/drinks/ingredients`;
* Tela de explorar comidas por nacionalidade: `/explore/foods/nationalities`;
* Tela de perfil: `/profile`;
* Tela de receitas feitas: `/done-recipes`;
* Tela de receitas favoritas: `/favorite-recipes`.

## Contato
Projeto desenvolvido por Heitor C. Trindade :robot:.

[![Gmail][gmail-badge]][gmail-url] [![Linkedin][linkedin-badge]][linkedin-url] [![GitHub][github-badge]][github-url]

<!-- MARKDOWN LINKS & IMAGES -->
[gmail-badge]: https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white
[gmail-url]: mailto:heitorct.dev@gmail.com
[linkedin-badge]: https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white
[linkedin-url]: https://www.linkedin.com/in/heitor-catarino-trindade
[github-badge]: https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white
[github-url]: https://github.com/HeitorCTrindade/
[bootstrap-url]: https://getbootstrap.com/
[css3-url]: https://developer.mozilla.org/en-US/docs/Web/CSS
[eslint-url]: https://eslint.org/
[html5-url]: https://developer.mozilla.org/en-US/docs/Web/HTML
[javascript-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript
[jest-url]: https://jestjs.io/
[react-url]: https://reactjs.org/
[react-router-url]: https://reactrouter.com/en/main
[redux-url]: https://redux.js.org/
[rtl-url]: https://testing-library.com/docs/react-testing-library/intro/
[stylelint-url]: https://stylelint.io/
