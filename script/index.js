var h = maquette.h;
var projector = maquette.createProjector();

function renderTitle(){
    return h('div.title-container', [
        h('div.menu', [
            h('ul', [
                h('li', [
                    h('a', ['Home2'])
                ]),
                h('li', [
                    h('a', ['About2'])
                ]),
                h('li', [
                    h('a', ['Work2'])
                ]),
                h('li', [
                    h('a', ['Contact2'])
                ]),
            ])
        ]),
        h('div.title', [
            h('h1', ['Rick Hoving'])
        ])
    ]);
};

function renderAbout(){
    return h('div.about-container', [
        h('div.about', [
            h('div.about-title', [
                h('h2', ['about'])
            ])
        ])
    ]);
}

function renderMaquette() {
  return h('div.content-page', [
    renderTitle(),
    renderAbout()
  ]);
}

// Initializes the projector 
document.addEventListener('DOMContentLoaded', function () {
  projector.append(document.body, renderMaquette);
});