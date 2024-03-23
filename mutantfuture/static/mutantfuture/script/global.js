const RULEBOOK_PATH = '/static/mutantfuture/json/rulebook.json';
const urlParams = new URLSearchParams(window.location.search);

let global_rulebook = null;

let category_param = urlParams.get('cat');
category_param = category_param ? category_param : 'mutations';
const CATEGORY = category_param.toLowerCase();

const roll_dice = (roll_str) => {
    if (roll_str.toLowerCase().includes('d')) {
        total = 0;
        roll_elements = roll_str.split('d');
        num_dice = roll_elements[0];
        num_sides = roll_elements[1];
        num_dice = parseInt(num_dice);
        num_sides = parseInt(num_sides);

        for (let i=0; i < num_dice; i++) {
            total += Math.floor(Math.random() * num_sides) + 1;
        }
        
        return total;
        
    } else {
        return parseInt(roll_str)
    }
};

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

const get_item_by_pk = (rulebook, item_pk, item_category) => {
    item_category = item_category ? item_category : CATEGORY;
    let filtered_items = rulebook[item_category].filter(item => item.pk == item_pk);
    return filtered_items[0];
};

const attach_item_event_handlers = (rulebook) => {
    document.querySelectorAll('.item-link').forEach((link) => {
        link.addEventListener('click', (e) => {
            
            // instanciate new modal
            let modal = new tingle.modal({
                closeMethods: ['overlay', 'button', 'escape'],
                closeLabel: "Close",
                cssClass: ['custom-class-1']
            });

            let items = null;
            if (e.target.classList.contains('splat-item-link')) {
                items = get_item_by_pk(rulebook, e.target.dataset.itemid, e.target.dataset.category);
            } else {
                items = get_item_by_pk(rulebook, e.target.dataset.itemid);
            }
            let modalContent = `<article>`;
            modalContent += `<h3>${items.fields.name}</h3>`;

            modalContent += '<hr>';

            if (typeof items.fields.type !== 'undefined') {
                modalContent += `<h4>${items.fields.type} ${items.fields.effect_type} (${items.fields.page_number})</h4>`;
            } else {
                modalContent += `<h4>(${items.fields.page_number})</h4>`;
            }

            modalContent += items.fields.description;
            modalContent = modalContent.replace(/<br\s*\/?>/gi, " ");
            modalContent += `</article>`;
            modal.setContent(modalContent);
    
            modal.open();
        });
    });    
};
