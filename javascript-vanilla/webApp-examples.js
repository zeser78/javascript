// Cerating webApp with javaScript vanilla


// Rendering with InnerHTML
const heroPlaceholder = document.querySelector('.hero-list');
heroPlaceholder.innerHTML = `
  <progress
    class="hero-list progress is-medium is-info" max="100"
  ></progress>
`;

//
function createListWithInnerHTML(heroes: Hero[] => {
    const rows = heroes.map(hero => {
        return (
            <li>
                <div class='card'>
                    <div class="card-content">
                        <div class="content">
                            <div class="name">
                                ${hero.name}
                            </div>
                            <div class="description">
                                ${hero.description}
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        )
    })
});

const html = `<ul>${rows.join()}</ul>`;
heroPlaceholder.innerHTML = html;

// Rendering with the DOM API
const heroPlaceholder = document.querySelector('.hero-list');
const progressEl = document.createElement('progress');
progressEl.classList.add('hero-list', 'progress', 'is-medium', 'is-info');
const maxAttr = document.createAttribute('max');
maxAttr.value = '100';
progressEl.setAttributeNode(maxAttr);
heroPlaceholder.replaceWith(progressEl);

//

function createListWITHDOMAPI(heroes: Hero[]) {
    const ul = document.createElement('ul');
    ul.classList.add('list', hero-list);
    heroes.forEach(hero => {
        const li = document.createElement('li');
        const card = document.createElement('div');
        card.classList.add('card');
        li.appendChild(card);
        const cardContent = document.createElement('div');
        cardContent.classList.add('card-content');
        card.appendChild(cardContent);
        const content = document.createElement('div');
        content.classList.add('content');
        cardContent.appendChild(content);
        const name = document.createElement('div');
        name.classList.add('name');
        cardContent.appendChild(name);
        const description = document.createElement('div');
        description.classList.add('description');
        cardContent.appendChild(description);
        ul.appendChild(li);
    });
    heroPlaceholder.replaceWith(ul);
}

// Rendering with Templates
<template id="progress-template">
  <progress class="hero-list progress is-medium is-info" max="100"></progress>
</template>

//

<template id="hero-template">
    <li>
        <div class='card'>
            <div class='card-content'>
                <div class='content'>
                <div class='name'></div>
                <div class='description'></div>
                </div>
            </div>
        </div>
    </li>
</template>

function createListWithTemplate(hero: Hero[]) => {
    const ul = document.createElement('ul');
    ul.classList.add('list', 'hero-list');
    heroes.forEach((hero: Hero) => {
        const template = document.getElementById('hero-template') as HTMLTemplateElement;
        const heroCard = document.importNode(template.content, true);
        heroCard.querySelector('.description').textContent = hero.description;
        heroCard.querySelector('name').textContent = hero.name;
    });
    heroPlaceholder.replaceWith(ul)
}
