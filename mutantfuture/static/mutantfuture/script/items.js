document.addEventListener('DOMContentLoaded', async () => {
    const rulebook = await get_rulebook(RULEBOOK_PATH);
    
    document.querySelector('#main-header').innerHTML = `${CATEGORY} Reference`;

    let items = rulebook[CATEGORY].sort((a, b) => {
        let aName = a.fields.name;
        let bName = b.fields.name;
        return aName.localeCompare(bName);
    });

    for (item of items) {
        let liHtml = `<li><a class='item-link' href='javascript:void(0)' data-itemid='${item.pk}'>${item.fields.name}`;
        if (CATEGORY === 'mutations') {
            liHtml += ` (${item.fields.type})</a></li>`;
        } 
        document.querySelector('#items-list').innerHTML += liHtml;
    }

    attach_item_event_handlers(rulebook);
});
