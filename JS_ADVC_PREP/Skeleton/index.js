function solve() {
    const form = document.querySelectorAll('.form-control input');
    const lecture = form[0];
    const date = form[1];
    const moduleName = document.querySelector('select');
    const moduleOutput = document.querySelector('.modules')
let state = {}
    function add(e) {
        e.preventDefault();
        if (lecture.value === '' || date.value === '' || moduleName.value === 'Select module') {
            return;
        }
        const textForH4 = `${lecture.value} - ${date.value.split('-').join('/').split('T').join(' - ')}`
        let h4 = createElement('h4', textForH4)
        let delButton = createElement('button', 'Del', ['class=red'])
        let li = createElement('li', undefined, ['class=flex'])
        let ul;
        let h3;
        let div;
       
        li.appendChild(h4)
        li.appendChild(delButton)
        
        if(!state[moduleName.value]){
            
            ul = createElement('ul');
            h3=  createElement('h3',`${moduleName.value.toUpperCase()}-MODULE`);
            div = createElement('div',undefined,['class=module']);
            div.appendChild(h3)
            state[moduleName.value]={div,ul, lis: []};
            
        }
        else{
            ul=state[moduleName.value].ul;
            div=state[moduleName.value].div;
        }
        state[moduleName.value].lis.push({li, date:date.value})
        state[moduleName.value].lis.sort((a,b) => a.date.localeCompare(b.date)).forEach(li =>  ul.appendChild(li.li))
       
        div.appendChild(ul)
        
        moduleOutput.appendChild(div)


    };
    function deleteEl(e) {
        e.preventDefault();
       let li= e.target.parentNode;
       let ul = li.parentNode;
       let div = ul.parentNode;
       li.remove();
       
        if(ul.children.length==0){
           
            div.remove();
        }
        
    };

    function createElement(type, text, attributes = []) {
        let element = document.createElement(type)
        if (text) {
            element.textContent = text;
        }
        attributes.map(attr => attr.split('=')).forEach(([name, value]) => {
            element.setAttribute(name, value)
        });
        return element;
    }

    document.getElementsByTagName('main')[0].addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            if (e.target.textContent === 'Add') {

                add(e)

            }
            else if(e.target.textContent === 'Del'){
                deleteEl(e)
            }
        }
    });

};