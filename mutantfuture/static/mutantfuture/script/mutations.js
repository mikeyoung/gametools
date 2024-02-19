const RULEBOOK_PATH = '/static/mutantfuture/json/rulebook.json';

const get_mutation_by_pk = (rulebook, mutation_id) => {
    let filtered_mutations = rulebook.mutations.filter(mutation => mutation.pk == mutation_id);
    return filtered_mutations[0];
};

const mutations_main = async () => {
    const rulebook = await get_rulebook(RULEBOOK_PATH);

    mutations = rulebook.mutations.sort((a, b) => {
        let aName = a.fields.name;
        let bName = b.fields.name;
        return aName.localeCompare(bName);
    });

    for (mutation of mutations) {
        const liHtml = `<li><a id="mulink${mutation.pk}" class="mutation-link" href="javascript:void(0)" data-muid="${mutation.pk}">${mutation.fields.name} (${mutation.fields.type})</a></li>`;
        document.querySelector('#mutations-list').innerHTML += liHtml;
    }

    document.querySelectorAll('.mutation-link').forEach((link) => {
        link.addEventListener('click', (el) => {
            





            // instanciate new modal
            let modal = new tingle.modal({
                closeMethods: ['overlay', 'button', 'escape'],
                closeLabel: "Close",
                cssClass: ['custom-class-1']
            });

            let mutation = get_mutation_by_pk(rulebook, el.target.dataset.muid);
            let modalContent = `<article>`;
            modalContent += `<h3>${mutation.fields.name}</h3>`;
            modalContent += mutation.fields.description;
            modalContent = modalContent.replace(/<br\s*\/?>/gi, " ");
            modalContent += `</article>`;
            modal.setContent(modalContent);

            modal.open();





        });
    })
}

document.addEventListener('DOMContentLoaded', mutations_main);

const get_rulebook = async (url) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data[0];
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
};