let category = urlParams.get('cat');
category = category ? category : 'mutations';
category = category.toLocaleLowerCase();

document.querySelector('#main-header').innerHTML = `${category} Reference`;

const get_item_by_pk = (rulebook, item_pk) => {
    let filtered_items = rulebook[category].filter(item => item.pk == item_pk);
    return filtered_items[0];
};

const items_main = async () => {
    const rulebook = await get_rulebook(RULEBOOK_PATH);

    let items = rulebook[category].sort((a, b) => {
        let aName = a.fields.name;
        let bName = b.fields.name;
        return aName.localeCompare(bName);
    });

    for (item of items) {
        let liHtml = `<li><a id="mulink${item.pk}" class="item-link" href="javascript:void(0)" data-muid="${item.pk}">${item.fields.name}`;
        if (category === 'mutations') {
            liHtml += ` (${item.fields.type})</a></li>`;
        } 
        document.querySelector('#items-list').innerHTML += liHtml;
    }

    document.querySelectorAll('.item-link').forEach((link) => {
        link.addEventListener('click', (el) => {
            
            // instanciate new modal
            let modal = new tingle.modal({
                closeMethods: ['overlay', 'button', 'escape'],
                closeLabel: "Close",
                cssClass: ['custom-class-1']
            });

            let items = get_item_by_pk(rulebook, el.target.dataset.muid);
            let modalContent = `<article>`;
            modalContent += `<h3>${items.fields.name}</h3>`;
            modalContent += items.fields.description;
            modalContent = modalContent.replace(/<br\s*\/?>/gi, " ");
            modalContent += `</article>`;
            modal.setContent(modalContent);

            modal.open();
        });
    })
}

document.addEventListener('DOMContentLoaded', items_main);
