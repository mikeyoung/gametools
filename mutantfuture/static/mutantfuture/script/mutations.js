const RULEBOOK_PATH = '/static/mutantfuture/json/rulebook.json';

const mutations_main = async () => {
    const rulebook = await get_rulebook(RULEBOOK_PATH);

    mutations = rulebook.mutations.sort((a, b) => {
        let aName = a.fields.name;
        let bName = b.fields.name;
        return aName.localeCompare(bName);
    });

    for (mutation of mutations) {
        const liHtml = `<li><a id="mulink${mutation.pk}" href="javascript:void(0)" data-muid="${mutation.pk}">${mutation.fields.name} (${mutation.fields.type})</a></li>`;
        document.querySelector('#mutations-list').innerHTML += liHtml;

        document.querySelector(`#mulink${mutation.pk}`).addEventListener('click', () => {
            console.log(111);
        });
    }
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