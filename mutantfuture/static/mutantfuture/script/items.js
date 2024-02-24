const render_content = async () => {
    let rulebook = global_rulebook || await get_rulebook(RULEBOOK_PATH);
    ruleset = document.querySelector('#ruleset').value;

    if (global_rulebook === null) {
        global_rulebook = rulebook;
    }
    
    document.querySelector('#main-header').innerHTML = `${CATEGORY} Reference`;

    let items = null;

    if (CATEGORY.toLowerCase() !== 'feats') {
        items = rulebook[CATEGORY].filter(item => {
            // advanced ruleset accepts feats (no source) and advanced mutations and races
            if (ruleset === 'advanced') {
                if (item.fields.name.toLowerCase().includes('(base)')) {
                    return false
                }
            }
    
            // base ruleset accepts no feats nor advanced mutations and races
            if ((typeof item.fields.source === 'undefined' || item.fields.source == 'advanced') && ruleset === 'base') {
                return false;
            }
    
            // filters applied, return the rest
            return true;
        });
    } else {
        items = rulebook[CATEGORY];
    }

    items = items.sort((a, b) => {
        let aName = a.fields.name;
        let bName = b.fields.name;
        return aName.localeCompare(bName);
    });

    document.querySelector('#items-list').innerHTML = '';

    for (item of items) {
        let liHtml = `<li><a class='item-link' href='javascript:void(0)' data-itemid='${item.pk}'>${item.fields.name}`;
        if (CATEGORY === 'mutations') {
            liHtml += ` (${item.fields.type})</a></li>`;
        } 
        document.querySelector('#items-list').innerHTML += liHtml;
    }

    attach_item_event_handlers(rulebook);
};

document.addEventListener('DOMContentLoaded', render_content);
