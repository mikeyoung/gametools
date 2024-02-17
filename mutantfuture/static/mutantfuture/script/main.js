const RULEBOOK_PATH = '/static/mutantfuture/json/rulebook.json'
const ALIGNMENTS = ['Lawful', 'Neutral', 'Chaotic']
const SPLAT_COUNT = 20
const IRRADIATED_DISALLOWED_MUTATIONS = ['regenerative capability', 'natural vampiric weapon', 'acute hyper healing'];

let ruleset = 'advanced';

// TODO: set up base rules
// * give mutant animals natural weapon
// * filter races to base races
// * remove feats
// * remove backgrounds
// * set calls to mutation tables to use the base column


class CharacterBase {

    static formatMod(modValue) {
        if (modValue > 0) {
            return `+${modValue}`;
        } else {
            return `${modValue}`;
        }
    }

    static getBoundValue(abilityScore) {
        if (abilityScore < 3) {
            return 3;
        }

        if (abilityScore > 21) {
            return 21;
        }

        return abilityScore;
    }

    // Race   
    #race;
    get race() {
        return this.#race;
    }
    set race(value) {
        this.#race = value;
    }

    // Alignment   
    #alignment;
    get alignment() {
        return this.#alignment;
    }
    set alignment(value) {
        this.#alignment = value;
    }

    // Hit Points   
    #hitPoints;
    get hitPoints() {
        return this.#hitPoints;
    }
    set hitPoints(value) {
        this.#hitPoints = value;
    }

    // Armor Class   
    #armorClass;
    get armorClass() {
        return this.#armorClass;
    }
    set armorClass(value) {
        this.#armorClass = value;
    }

    // Strength   
    #strength;
    get strength() {
        return this.#strength;
    }
    set strength(value) {
        this.#strength = CharacterBase.getBoundValue(value);
    }

    // Strength Modifier
    #strengthMod;
    get strengthMod() {
        return CharacterBase.formatMod(this.#strengthMod);
    }
    set strengthMod(value) {
        this.#strengthMod = value;
    }

    // Damage Modifier
    #damageMod;
    get damageMod() {
        return CharacterBase.formatMod(this.#damageMod);
    }
    set damageMod(value) {
        this.#damageMod = value;
    }

    // Dexterity   
    #dexterity;
    get dexterity() {
        return this.#dexterity;
    }
    set dexterity(value) {
        this.#dexterity = CharacterBase.getBoundValue(value);
    }

    // Armor Class Modifier
    #acMod;
    get acMod() {
        return CharacterBase.formatMod(this.#acMod);
    }
    set acMod(value) {
        this.#acMod = value;
    }

    // Missile Modifier
    #missileMod;
    get missileMod() {
        return CharacterBase.formatMod(this.#missileMod);
    }
    set missileMod(value) {
        this.#missileMod = value;
    }

    // Initiative Modifier
    #initMod;
    get initMod() {
        return CharacterBase.formatMod(this.#initMod);
    }
    set initMod(value) {
        this.#initMod = value;
    }

    // Constitution   
    #constitution;
    get constitution() {
        return this.#constitution;
    }
    set constitution(value) {
        if (value < 3) {
            this.#constitution = 3;
        } else if (value > 18) {
            this.#constitution = 18;
        } else {
            this.#constitution = value;
        }
    }

    // Poison/Death Save Modifier
    #poisonDeathMod;
    get poisonDeathMod() {
        return CharacterBase.formatMod(this.#poisonDeathMod);
    }
    set poisonDeathMod(value) {
        this.#poisonDeathMod = value;
    }

    // Radiation Save Modifier
    #radiationMod;
    get radiationMod() {
        return CharacterBase.formatMod(this.#radiationMod);
    }
    set radiationMod(value) {
        this.#radiationMod = value;
    }

    // Intelligence
    #intelligence;
    get intelligence() {
        return this.#intelligence;
    }
    set intelligence(value) {
        this.#intelligence = CharacterBase.getBoundValue(value);
    }

    // Technology Modifier
    #technologyMod;
    get technologyMod() {
        return CharacterBase.formatMod(this.#technologyMod);
    }
    set technologyMod(value) {
        this.#technologyMod = value;
    }

    // Willpower   
    #willpower;
    get willpower() {
        return this.#willpower;
    }
    set willpower(value) {
        this.#willpower = CharacterBase.getBoundValue(value);
    }

    // Charisma   
    #charisma;
    get charisma() {
        return this.#charisma;
    }
    set charisma(value) {
        this.#charisma = CharacterBase.getBoundValue(value);
    }

    // Reaction Modifier
    #reactionMod;
    get reactionMod() {
        return CharacterBase.formatMod(this.#reactionMod);
    }
    set reactionMod(value) {
        this.#reactionMod = value;
    }

    // Retainers
    #retainers;
    get retainers() {
        return this.#retainers;
    }
    set retainers(value) {
        this.#retainers = value;
    }
    
    // Retainer Morale
    #retainerMorale;
    get retainerMorale() {
        return this.#retainerMorale;
    }
    set retainerMorale(value) {
        this.#retainerMorale = value;
    }

    // Energy Saving Throw
    #energySave;
    get energySave() {
        return this.#energySave;
    }
    set energySave(value) {
        this.#energySave = value;
    }

    // Poison/Death Saving Throw
    #poisonDeathSave;
    get poisonDeathSave() {
        return this.#poisonDeathSave;
    }
    set poisonDeathSave(value) {
        this.#poisonDeathSave = value;
    }

    // Stun Saving Throw
    #stunSave;
    get stunSave() {
        return this.#stunSave;
    }
    set stunSave(value) {
        this.#stunSave = value;
    }

    // Radiation Saving Throw
    #radiationSave;
    get radiationSave() {
        return this.#radiationSave;
    }
    set radiationSave(value) {
        this.#radiationSave = value;
    }

    // THAC0
    #thac0;
    get thac0() {
        return this.#thac0;
    }
    set thac0(value) {
        this.#thac0 = value;
    }

    // Gold
    #gold;
    get gold() {
        return this.#gold;
    }
    set gold(value) {
        this.#gold = value;
    }

    // Mutations
    #mutations;
    get mutations() {
        return this.#mutations;
    }
    set mutations(value) {
        this.#mutations = value;
    }

    // Feats
    #feats;
    get feats() {
        return this.#feats;
    }
    set feats(value) {
        this.#feats = value;
    }
    
    // Backgrounds
    #backgrounds;
    get backgrounds() {
        return this.#backgrounds;
    }
    set backgrounds(value) {
        this.#backgrounds = value;
    }

}   

const main = async () => {
    const characters = [];

    for (let i=0; i < SPLAT_COUNT; i++) {
        let new_character = await get_random_character();
        characters.push(new_character);
    }

    print_character_list(characters);
    document.querySelectorAll('.print-button').forEach(el => {
        el.addEventListener('click', (e) => {
            document.querySelectorAll('.printarea').forEach( el => el.classList.remove('printarea'));
            document.querySelector(`li[data-char_id="${e.target.dataset.char_id}"]`).classList.add('printarea');
            print();
            document.querySelectorAll('.printarea').forEach( el => el.classList.remove('printarea'));
            document.querySelector(`ul`).classList.add('printarea');
        });
    });
};

const get_random_character = async () => {
    rulebook = await get_rulebook(RULEBOOK_PATH);
    character = new CharacterBase();

    // strength
    character.strength = roll_dice('3d6');
    character.strengthMod = get_mod_by_attr_value(rulebook.strengthModSets, 'str_mod', character.strength);
    character.damageMod = get_mod_by_attr_value(rulebook.strengthModSets, 'dmg_mod', character.strength);

    // dexterity
    character.dexterity = roll_dice('3d6');
    character.acMod = get_mod_by_attr_value(rulebook.dexterityModSets, 'ac_mod', character.dexterity);
    character.missileMod = get_mod_by_attr_value(rulebook.dexterityModSets, 'missile_mod', character.dexterity);
    character.initMod = get_mod_by_attr_value(rulebook.dexterityModSets, 'init_mod', character.dexterity);

    // constitution
    character.constitution = roll_dice('3d6');
    character.poisonDeathMod = get_mod_by_attr_value(rulebook.constitutionModSets, 'poison_death_mod', character.constitution);
    character.radiationMod = get_mod_by_attr_value(rulebook.constitutionModSets, 'radiation_mod', character.constitution);

    // intelligence
    character.intelligence = roll_dice('3d6');
    character.technologyMod = get_mod_by_attr_value(rulebook.intelligenceModSets, 'tech_mod', character.intelligence);

    // willpower
    character.willpower = roll_dice('3d6');

    // charisma
    character.charisma = roll_dice('3d6');
    character.reactionMod = get_mod_by_attr_value(rulebook.charismaModSets, 'reaction_mod', character.charisma);
    character.retainers = get_mod_by_attr_value(rulebook.charismaModSets, 'retainers', character.charisma);
    character.retainerMorale = get_mod_by_attr_value(rulebook.charismaModSets, 'retainer_morale', character.charisma);

    // saves
    character.energySave = 15;
    character.poisonDeathSave = 12;
    character.stunSave = 14;
    character.radiationSave = 13;

    // alignment
    character.alignment = get_random_alignment();

    // race
    character.race = get_random_race(rulebook);

    // mutations
    character.mutations = get_character_mutations(rulebook, character.race);

    // feats
    character.feats = randomChoice(rulebook.feats.filter(feat => feat.fields.pc_eligible)).fields;

    // backgrounds
    character.backgrounds = get_random_backgrounds(rulebook, 2);

    // thac0
    character.thac0 = 19;

    // gold
    character.gold = 10 * roll_dice('3d8');

    // hit points
    character.hitPoints = roll_dice(`${character.constitution}d${character.race.hit_dice_sides}`);

    character = applyRacialMods(character);

    character = applyMutationMods(character);
    
    return character;
};

const applyRacialMods = (character) => {
    const character_race_lower = character.race.name.toLowerCase();
    switch (character_race_lower) {
        case 'brainiac':
            if (character.constitution > 12) {
                character.constitution = 12;
            }
            break;
        
        case 'homo erectus':
            character.strength += 3;
            character.dexterity += 3;
            character.constitution += 3;
            character.intelligence -= 3;
            if (character.intelligence > 12) {
                character.intelligence = 12;
            }
            break;

        case 'basic android':
            character.hitPoints = 50;
            break;

        case 'synthetic android':
            character.hitPoints = 50;
            break;
        
        case 'pure human':
            character.charisma += 3;
            character.intelligence += 3;
            character.constitution += 3;
    }

    return character;
}

const applyMutationMods = (character) => {
    for (mutation of character.mutations) {
        if (mutation.toLowerCase().startsWith('attractive')) {
            character.reactionMod -= 2;
        }
    }

    return character;
}

const numPad = (num, size) => {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
}

const randomChoice = (arr) => {
    let index = Math.floor(Math.random() * arr.length);
    return arr[index];
};

const get_random_alignment = () => {
    return randomChoice(ALIGNMENTS);
};

const get_random_backgrounds = (rulebook, total_backgrounds) => {
    const background_list = [];
    
    while (background_list.length < total_backgrounds) {
        background_list.push(randomChoice(rulebook.backgrounds).fields.name);
    }

    return background_list;
};

const get_random_race = (rulebook) => {
    // filter out base versions for now
    const filtered_races = rulebook.races.filter(race => !race.fields.name.toLowerCase().includes('(base)'));
    const randomRace = randomChoice(filtered_races);
    return randomRace.fields;
};

const get_mutation_by_pk = (rulebook, mutation_id) => {
    let filtered_mutations = rulebook.mutations.filter(mutation => mutation.pk == mutation_id);
    return filtered_mutations[0];
};

const get_character_mutations = (rulebook, character_race) => {
    let character_mutations = [];

    if (character_race.name.toLowerCase() === 'irradiated') {
        character_mutations.push('Unique Sense > Radiation [race mutation, A4]');
    }

    // mental mutations
    total_new_mutations = roll_dice(character_race.mental_mutations_roll_str);
    if (total_new_mutations > 0) {
        character_mutations = append_table_mutations(rulebook, character_mutations, total_new_mutations, 'mental', character_race);
    }

    // physical mutations
    total_new_mutations = roll_dice(character_race.physical_mutations_roll_str);
    if (total_new_mutations > 0) {
        character_mutations = append_table_mutations(rulebook, character_mutations, total_new_mutations, 'physical', character_race);
    }

    // plant_mutations
    total_new_mutations = roll_dice(character_race.plant_mutations_roll_str);
    if (total_new_mutations > 0) {
        character_mutations = append_table_mutations(rulebook, character_mutations, total_new_mutations, 'plant', character_race);
    }

    // human_animal_mutations
    total_new_mutations = roll_dice(character_race.random_human_animal_roll_str);
    if (total_new_mutations > 0) {
        character_mutations = append_table_mutations(rulebook, character_mutations, total_new_mutations, 'human_animal', character_race);
    }

    // beneficial_any_mutations
    total_new_mutations = roll_dice(character_race.random_beneficial_any_roll_str);
    if (total_new_mutations > 0) {
        character_mutations = append_table_mutations(rulebook, character_mutations, total_new_mutations, 'any_beneficial', character_race);
    }

    // mental_drawback_mutations
    total_new_mutations = roll_dice(character_race.mental_drawback_roll_str);
    if (total_new_mutations > 0) {
        character_mutations = append_table_mutations(rulebook, character_mutations, total_new_mutations, 'mental_drawback', character_race);
    }

    // physical_drawback_mutations
    total_new_mutations = roll_dice(character_race.physical_drawback_roll_str);
    if (total_new_mutations > 0) {
        character_mutations = append_table_mutations(rulebook, character_mutations, total_new_mutations, 'physical_drawback', character_race);
    }

    // any_mutations
    total_new_mutations = roll_dice(character_race.random_any_roll_str);
    if (total_new_mutations > 0) {
        character_mutations = append_table_mutations(rulebook, character_mutations, total_new_mutations, 'any', character_race);
    }

    // special_animal_mutations
    total_new_mutations = roll_dice(character_race.special_animal_roll_str);
    if (total_new_mutations > 0) {
        character_mutations = append_random_special_mutations(character_mutations, total_new_mutations, rulebook.specialAnimalMutationRolls, rulebook, character_race);
    }

    // special_insect_mutations
    total_new_mutations = roll_dice(character_race.special_insect_roll_str);
    if (total_new_mutations > 0) {
        character_mutations = append_random_special_mutations(character_mutations, total_new_mutations, rulebook.specialInsectMutationRolls, rulebook, character_race)
    }

    return character_mutations
};

const append_table_mutations = (rulebook, character_mutations, total_new_mutations, mutation_table, character_race) => {
        let mutation_count = 0

        while (mutation_count < total_new_mutations) {
            let table = null;
            let d100_roll = null;
            let mutation_row = null;
            let new_mutation_pk = null;
            let mutation = null;
            let mutation_name = null;

            switch (mutation_table) {
                case 'mental':
                    table = rulebook.mentalMutationRolls;
                    d100_roll = randInt(1, 100);
                    mutation_row = table.filter(row => d100_roll === row.fields.roll);
                    mutation_row = mutation_row[0];
                    new_mutation_pk = mutation_row.fields.advanced_result;
                    mutation = get_mutation_by_pk(rulebook, new_mutation_pk);
                    break;

                case 'physical':
                    table = rulebook.physicalMutationRolls;
                    d100_roll = randInt(1, 100);
                    mutation_row = table.filter(row => d100_roll === row.fields.roll);
                    mutation_row = mutation_row[0];
                    new_mutation_pk = mutation_row.fields.advanced_result;
                    mutation = get_mutation_by_pk(rulebook, new_mutation_pk);
                    break;

                case 'plant':
                    table = rulebook.plantMutationRolls;
                    d100_roll = randInt(1, 100);
                    mutation_row = table.filter(row => d100_roll === row.fields.roll);
                    mutation_row = mutation_row[0];
                    new_mutation_pk = mutation_row.fields.advanced_result;
                    mutation = get_mutation_by_pk(rulebook, new_mutation_pk);
                    break;

                case 'human_animal':
                    table = randomChoice([rulebook.mentalMutationRolls, rulebook.physicalMutationRolls]);
                    d100_roll = randInt(1, 100);
                    mutation_row = table.filter(row => d100_roll === row.fields.roll);
                    mutation_row = mutation_row[0];
                    new_mutation_pk = mutation_row.fields.advanced_result;
                    mutation = get_mutation_by_pk(rulebook, new_mutation_pk);
                    break;

                case 'any_beneficial':
                    while (true) {
                        table = randomChoice([rulebook.mentalMutationRolls, rulebook.physicalMutationRolls, rulebook.plantMutationRolls]);
                        d100_roll = randInt(1, 100);
                        mutation_row = table.filter(row => d100_roll === row.fields.roll);
                        mutation_row = mutation_row[0];
                        new_mutation_pk = mutation_row.fields.advanced_result;
                        mutation = get_mutation_by_pk(rulebook, new_mutation_pk);
                        if (mutation.fields.effect_type == 'benefit') {
                            break;
                        }
                    }

                    break;

                case 'mental_drawback':
                    table = rulebook.mentalMutationRolls;
                    while (true) {
                        d100_roll = randInt(1, 100);
                        mutation_row = table.filter(row => d100_roll === row.fields.roll);
                        mutation_row = mutation_row[0];
                        new_mutation_pk = mutation_row.fields.advanced_result;
                        mutation = get_mutation_by_pk(rulebook, new_mutation_pk);
                        if (mutation.fields.effect_type == 'drawback') {
                            break;
                        }
                    }

                    break;

                case 'physical_drawback':
                    table = rulebook.physicalMutationRolls;
                    while (true) {
                        d100_roll = randInt(1, 100);
                        mutation_row = table.filter(row => d100_roll === row.fields.roll);
                        mutation_row = mutation_row[0];
                        new_mutation_pk = mutation_row.fields.advanced_result;
                        mutation = get_mutation_by_pk(rulebook, new_mutation_pk);
                        if (mutation.fields.effect_type == 'drawback') {
                            break;
                        }
                    }

                    break;

                case 'any':
                    table = randomChoice([rulebook.mentalMutationRolls, rulebook.physicalMutationRolls, rulebook.plantMutationRolls])
                    d100_roll = randInt(1, 100);
                    mutation_row = table.filter(row => d100_roll === row.fields.roll);
                    mutation_row = mutation_row[0];
                    new_mutation_pk = mutation_row.fields.advanced_result;
                    mutation = get_mutation_by_pk(rulebook, new_mutation_pk);
            }

            mutation_name = get_full_mutation_name(mutation);

            if (character_mutations.includes(mutation_name)) {
                continue;
            }

            if (mutation.fields.pc_eligible === false) {
                continue;
            }

            if (character_race.name.toLowerCase() == 'irradiated' && IRRADIATED_DISALLOWED_MUTATIONS.includes(mutation.fields.name)) {
                continue;
            }
    
            character_mutations.push(mutation_name);
            mutation_count += 1;
        }

        return character_mutations
};

const append_random_special_mutations = (character_mutations, total_new_mutations, mutation_list, rulebook, character_race) => {
    let mutation_count = 0;
    while (mutation_count < total_new_mutations) {
        let mutation_pk = randomChoice(mutation_list).fields.mutation;
        let mutation = get_mutation_by_pk(rulebook, mutation_pk);
        let mutation_name = get_full_mutation_name(mutation);

        if (character_race.name.toLowerCase() == 'irradiated' && IRRADIATED_DISALLOWED_MUTATIONS.includes(mutation.fields.name)) {
            continue;
        }

        if (character_mutations.includes(mutation_name)) {
            continue;
        }

        if (mutation.fields.pc_eligible === false) {
            continue;
        }

        if (!character_mutations.includes(mutation_name) && mutation.fields.pc_eligible == true) {
            character_mutations.push(mutation_name)
            mutation_count += 1
        }
    }

    return character_mutations
};

const get_mutation_form = (mutation) => {
    mutation.form = null;

    let possibleForms = [];
    for (i=1; i < 11; i++) {
        if (mutation.fields[`form${i}`] === null) {
            break;
        } else {
            possibleForms.push(mutation.fields[`form${i}`]);
        }
    }

    if (possibleForms.length > 0) {
        mutation.form = randomChoice(possibleForms);
    }

    return mutation.form;
}

const get_full_mutation_name = (mutation) => {
    const mutation_form = get_mutation_form(mutation);
    const formatted_form = mutation_form ? ` > ${mutation_form}` : ''; 
    return `${mutation.fields.name}${formatted_form} [${mutation.fields.type}, ${mutation.fields.effect_type}, ${mutation.fields.page_number}]`;
};

const roll_dice = (roll_str) => {
    if (roll_str.toLowerCase().includes('d')) {
        total = 0;
        roll_elements = roll_str.split('d');
        num_dice = roll_elements[0];
        num_sides = roll_elements[1];
        num_dice = parseInt(num_dice);
        num_sides = parseInt(num_sides);

        for (let i=0; i < num_dice; i++) {
            total += randInt(1,num_sides)
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

const get_mod_by_attr_value = (attribute_table, mod_name, value) => {
    const value_rows = attribute_table.filter(row => row.fields.value == value);
    const value_row = value_rows[0];
    return value_row.fields[mod_name];
};

const get_splat_sheet_string = (characters) => {
    splat_sheet_contents = '';

    chararacter_number = 1;
    for (let character of characters) {
        splat_sheet_contents += `<li data-char_id='${chararacter_number}'>`;
        splat_sheet_contents += `  <article>`;
        splat_sheet_contents += `<aside>${numPad(chararacter_number, 2)} of ${numPad(characters.length, 2)}</aside>`;

        splat_sheet_contents += `<h3>`;
        splat_sheet_contents += `${character.alignment} ${character.race.name.replace(" (Advanced)","")}`;

        backgrounds_set = new Set(character.backgrounds);
        for (let background of backgrounds_set) {
            splat_sheet_contents += ` ${background}`;
        }

        splat_sheet_contents += `</h3>`;

        splat_sheet_contents += `Race: ${character.race["name"]} (${character.race["page_number"]})<br><br>`;

        splat_sheet_contents += `Backgrounds:<br>`;
        for (let background of backgrounds_set) {
            const rank = character.backgrounds.reduce((acc, str) => str === background ? acc + 1 : acc, 0)
            splat_sheet_contents += `--${background}: ${rank}<br>`;
        }
            
        splat_sheet_contents += `<br>`;
        splat_sheet_contents += `Alignment: ${character.alignment}<br>`;

        splat_sheet_contents += `<br>`;
        splat_sheet_contents += `Strength: ${character.strength}<br>`;
        splat_sheet_contents += `--Strength Mod: ${character.strengthMod}<br>`;
        splat_sheet_contents += `--Damage Mod: ${character.damageMod}<br>`;
        splat_sheet_contents += `<br>`;
        splat_sheet_contents += `Dexterity: ${character.dexterity}<br>`;
        splat_sheet_contents += `-- AC Mod: ${character.acMod}<br>`;
        splat_sheet_contents += `-- Missile Mod: ${character.missileMod}<br>`;
        splat_sheet_contents += `-- Init Mod: ${character.initMod}<br>`;
        splat_sheet_contents += `<br>`;
        splat_sheet_contents += `Constitution: ${character.constitution}<br>`;
        splat_sheet_contents += `--Poison Save Mod: ${character.poisonDeathMod}<br>`;
        splat_sheet_contents += `--Radiation Save Mod: ${character.radiationMod}<br>`;
        splat_sheet_contents += `<br>`;
        splat_sheet_contents += `Intelligence: ${character.intelligence}<br>`;
        splat_sheet_contents += `--Technology Mod: ${character.technologyMod}<br>`;
        splat_sheet_contents += `<br>`;
        splat_sheet_contents += `Willpower: ${character.willpower}<br>`;
        splat_sheet_contents += `<br>`;
        splat_sheet_contents += `Charisma: ${character.charisma}<br>`;
        splat_sheet_contents += `--Reaction Mod: ${character.reactionMod}<br>`;
        splat_sheet_contents += `--Retainers: ${character.retainers}<br>`;
        splat_sheet_contents += `--Retainer Morale: ${character.retainerMorale}<br>`;
        splat_sheet_contents += `<br>`;
        splat_sheet_contents += `Hit Points: ${character.hitPoints}<br>`;
        splat_sheet_contents += `<br>`;

        if (character.mutations.length > 0) {
            splat_sheet_contents += `Mutations:<br>`;
            for (let mutation of character.mutations) {
                splat_sheet_contents += `--${mutation}<br>`;
            }
        } else {
            splat_sheet_contents += `Mutations: None<br>`;
        }

        splat_sheet_contents += `<br>`;
        splat_sheet_contents += `Feat: ${character.feats["name"]} (${character.feats["page_number"]})<br>`;
        splat_sheet_contents += `<br>`;
        splat_sheet_contents += `Saving Throws<br>`;
        splat_sheet_contents += `--Energy Save: ${character.energySave}<br>`;
        splat_sheet_contents += `--Poison/Death Save: ${character.poisonDeathSave}<br>`;
        splat_sheet_contents += `--Stun Save: ${character.stunSave}<br>`;
        splat_sheet_contents += `--Radiation Save: ${character.radiationSave}<br>`;
        splat_sheet_contents += `<br>`;
        splat_sheet_contents += `Gold: ${character.gold}<br>`;
        splat_sheet_contents += `<br>`;
        splat_sheet_contents += `<aside><a href='javascript:void(0)' data-char_id='${chararacter_number}' class='print-button'>[PRINT]</a></aside>`;
        splat_sheet_contents += `  </article>`;
        splat_sheet_contents += `</li>`;
        chararacter_number += 1
    }

    return splat_sheet_contents
};

const print_character_list = (characters) => {
    document.querySelector('#character-list').innerHTML = get_splat_sheet_string(characters);
};

const randInt = (a, b) => {
    return Math.floor(Math.random() * (b - a + 1)) + a;
}


main();