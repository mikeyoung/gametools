const RULEBOOK_PATH = '/static/mutantfuture/json/rulebook.json'
const ALIGNMENTS = ['Lawful', 'Neutral', 'Chaotic']
const SPLAT_COUNT = 20


class CharacterBase {

    static format_mod(mod_value) {
        if (mod_value > 0) {
            return `+${mod_value}`;
        } else {
            return `${mod_value}`;
        }
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
        this.#strength = value;
    }

    // Strength Modifier
    #strengthMod;
    get strengthMod() {
        return CharacterBase.format_mod(this.#strengthMod);
    }
    set strengthMod(value) {
        this.#strengthMod = value;
    }

    // Damage Modifier
    #damageMod;
    get damageMod() {
        return CharacterBase.format_mod(this.#damageMod);
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
        this.#dexterity = value;
    }

    // Armor Class Modifier
    #acMod;
    get acMod() {
        return CharacterBase.format_mod(this.#acMod);
    }
    set acMod(value) {
        this.#acMod = value;
    }

    // Missile Modifier
    #missileMod;
    get missileMod() {
        return CharacterBase.format_mod(this.#missileMod);
    }
    set missileMod(value) {
        this.#missileMod = value;
    }

    // Initiative Modifier
    #initMod;
    get initMod() {
        return CharacterBase.format_mod(this.#initMod);
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
        this.#constitution = value;
    }

    // Poison/Death Save Modifier
    #poisonDeathMod;
    get poisonDeathMod() {
        return CharacterBase.format_mod(this.#poisonDeathMod);
    }
    set poisonDeathMod(value) {
        this.#poisonDeathMod = value;
    }

    // Radiation Save Modifier
    #radiationMod;
    get radiationMod() {
        return CharacterBase.format_mod(this.#radiationMod);
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
        this.#intelligence = value;
    }

    // Technology Modifier
    #technologyMod;
    get technologyMod() {
        return CharacterBase.format_mod(this.#technologyMod);
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
        this.#willpower = value;
    }

    // Charisma   
    #charisma;
    get charisma() {
        return this.#charisma;
    }
    set charisma(value) {
        this.#charisma = value;
    }

    // Reaction Modifier
    #reactionMod;
    get reactionMod() {
        return CharacterBase.format_mod(this.#reactionMod);
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
        this.#reactionMod = value;
    }
    
    // Retainer Morale
    #retainerMorale;
    get retainerMorale() {
        return this.#retainerMorale;
    }
    set retainerMorale(value) {
        this.#reactionMod = value;
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
};

const get_random_character = async () => {
    rulebook = await get_rulebook(RULEBOOK_PATH);
    character = new CharacterBase();

    // strength
    character.strength = roll_dice('3d6');
    character.strength_mod = get_mod_by_attr_value(rulebook.strengthModSets, 'str_mod', character.strength);
    character.damage_mod = get_mod_by_attr_value(rulebook.strengthModSets, 'dmg_mod', character.strength);

    // dexterity
    character.dexterity = roll_dice('3d6');
    character.ac_mod = get_mod_by_attr_value(rulebook.dexterityModSets, 'ac_mod', character.dexterity);
    character.missile_mod = get_mod_by_attr_value(rulebook.dexterityModSets, 'missile_mod', character.dexterity);
    character.init_mod = get_mod_by_attr_value(rulebook.dexterityModSets, 'init_mod', character.dexterity);

    // constitution
    character.constitution = roll_dice('3d6');
    character.poison_death_mod = get_mod_by_attr_value(rulebook.constitutionModSets, 'poison_death_mod', character.constitution);
    character.radiation_mod = get_mod_by_attr_value(rulebook.constitutionModSets, 'radiation_mod', character.constitution);

    // intelligence
    character.intelligence = roll_dice('3d6');
    character.technology_mod = get_mod_by_attr_value(rulebook.intelligenceModSets, 'tech_mod', character.intelligence);

    // willpower
    character.willpower = roll_dice('3d6');

    // charisma
    character.charisma = roll_dice('3d6');
    character.reaction_mod = get_mod_by_attr_value(rulebook.charismaModSets, 'reaction_mod', character.charisma);
    character.retainers = get_mod_by_attr_value(rulebook.charismaModSets, 'retainers', character.charisma);
    character.retainer_morale = get_mod_by_attr_value(rulebook.charismaModSets, 'retainer_morale', character.charisma);

    // saves
    character.energy_save = 15;
    character.poison_death_save = 12;
    character.stun_save = 14;
    character.radiation_save = 13;

    // alignment
    character.alignment = get_random_alignment();

    // race
    character.race = get_random_race(rulebook);

    // mutations
    character.mutations = get_character_mutations(rulebook, character.race);

    // feats
    character.feats = randomChoice(rulebook.feats).fields;

    // backgrounds
    character.backgrounds = get_random_backgrounds(rulebook, 2);

    // thac0
    character.thac0 = 19;

    // gold
    character.gold = 10 * roll_dice('3d8');

    // hit points
    character.hit_points = get_hit_points(character.race, character.constitution);
    
    return character;
};

const randomChoice = (arr) => {
    let index = Math.floor(Math.random() * arr.length);
    return arr[index];
};

const get_random_alignment = () => {
    return randomChoice(ALIGNMENTS);
};

const get_random_backgrounds = (rulebook, total_backgrounds) => {
    background_name_set = new Set();
    background_list = [];
    
    while (background_list.length < total_backgrounds) {
        random_background = randomChoice(rulebook.backgrounds).fields;
        if (!background_name_set.has(random_background.name)) {
            background_name_set.add(random_background.name);
            background_list.push(random_background);
        }
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

    // mental mutations
    total_new_mutations = roll_dice(character_race.mental_mutations_roll_str);
    if (total_new_mutations > 0) {
        character_mutations = append_table_mutations(rulebook, character_mutations, total_new_mutations, 'mental');
    }

    // physical mutations
    total_new_mutations = roll_dice(character_race.physical_mutations_roll_str);
    if (total_new_mutations > 0) {
        character_mutations = append_table_mutations(rulebook, character_mutations, total_new_mutations, 'physical');
    }

    // plant_mutations
    total_new_mutations = roll_dice(character_race.plant_mutations_roll_str);
    if (total_new_mutations > 0) {
        character_mutations = append_table_mutations(rulebook, character_mutations, total_new_mutations, 'plant');
    }

    // human_animal_mutations
    total_new_mutations = roll_dice(character_race.random_human_animal_roll_str);
    if (total_new_mutations > 0) {
        character_mutations = append_table_mutations(rulebook, character_mutations, total_new_mutations, 'human_animal');
    }

    // beneficial_any_mutations
    total_new_mutations = roll_dice(character_race.random_beneficial_any_roll_str);
    if (total_new_mutations > 0) {
        character_mutations = append_table_mutations(rulebook, character_mutations, total_new_mutations, 'any_beneficial');
    }

    // mental_drawback_mutations
    total_new_mutations = roll_dice(character_race.mental_drawback_roll_str);
    if (total_new_mutations > 0) {
        character_mutations = append_table_mutations(rulebook, character_mutations, total_new_mutations, 'mental_drawback');
    }

    // physical_drawback_mutations
    total_new_mutations = roll_dice(character_race.physical_drawback_roll_str);
    if (total_new_mutations > 0) {
        character_mutations = append_table_mutations(rulebook, character_mutations, total_new_mutations, 'physical_drawback');
    }

    // any_mutations
    total_new_mutations = roll_dice(character_race.random_any_roll_str);
    if (total_new_mutations > 0) {
        character_mutations = append_table_mutations(rulebook, character_mutations, total_new_mutations, 'any');
    }

    // special_animal_mutations
    total_new_mutations = roll_dice(character_race.special_animal_roll_str);
    if (total_new_mutations > 0) {
        character_mutations = append_random_special_mutations(character_mutations, total_new_mutations, rulebook.specialAnimalMutationRolls, rulebook);
    }

    // special_insect_mutations
    total_new_mutations = roll_dice(character_race.special_insect_roll_str);
    if (total_new_mutations > 0) {
        character_mutations = append_random_special_mutations(character_mutations, total_new_mutations, rulebook.specialInsectMutationRolls, rulebook)
    }

    return character_mutations
};

const append_table_mutations = (rulebook, character_mutations, total_new_mutations, mutation_table) => {
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

            console.log(character_mutations);

            if (!character_mutations.includes(mutation_name) && mutation.fields.pc_eligible == true) {
                character_mutations.push(mutation_name);
                mutation_count += 1;
            }
        }

        return character_mutations
};

const append_random_special_mutations = (character_mutations, total_new_mutations, mutation_list, rulebook) => {
    let mutation_count = 0;
    while (mutation_count < total_new_mutations) {
        let random_mutation_pk = randomChoice(mutation_list).fields.mutation;
        let random_mutation = get_mutation_by_pk(rulebook, random_mutation_pk);
        let mutation_name = get_full_mutation_name(random_mutation);

        console.log(character_mutations);

        if (!character_mutations.includes(mutation_name) && random_mutation.fields.pc_eligible == true) {
            character_mutations.push(mutation_name)
            mutation_count += 1
        }
    }

    return character_mutations
};

const get_full_mutation_name = (mutation) => {
    return `${mutation.fields.name} (${mutation.fields.type}, ${mutation.fields.effect_type}, ${mutation.fields.page_number})`
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

const get_hit_points = (race, constitution_value) => {
    fixed_hp_races = ['synthetic android', 'basic android'];
    if (fixed_hp_races.includes(race.name.toLowerCase())) {
        return 50;
    } else {
        sides = race.hit_dice_sides;
        return roll_dice(`${constitution_value}d${sides}`);
    }
};

const get_splat_sheet_string = (characters) => {
    splat_sheet_contents = 'MUTANT FUTURE CHARACTER SPLAT';

    // console.log('--------------------------------------');
    // console.log(characters);
    // console.log('--------------------------------------');

    chararacter_number = 1;
    for (let character of characters) {
        splat_sheet_contents += `---------------start record ${chararacter_number} of ${characters.length}---------------<br>`;
        splat_sheet_contents += `${character.alignment} ${character.race.name.replace(" (Advanced)","")}`;

        for (let background of character.backgrounds) {
            splat_sheet_contents += ` ${background.name}`;
        }

        splat_sheet_contents += `<br><br>`;

        splat_sheet_contents += `Race: ${character.race["name"]} (${character.race["page_number"]})<br><br>`;

        splat_sheet_contents += `Backgrounds:<br>`;
        for (let background of character.backgrounds) {
            splat_sheet_contents += `--${background["name"]}: 1<br>`;
        }
            
        splat_sheet_contents += `<br>`;
        splat_sheet_contents += `Alignment: ${character.alignment}<br>`;

        splat_sheet_contents += `<br>`;
        splat_sheet_contents += `Strength: ${character.strength}<br>`;
        splat_sheet_contents += `--Strength Mod: ${character.strength_mod}<br>`;
        splat_sheet_contents += `--Damage Mod: ${character.damage_mod}<br>`;
        splat_sheet_contents += `<br>`;
        splat_sheet_contents += `Dexterity: ${character.dexterity}<br>`;
        splat_sheet_contents += `-- AC Mod: ${character.ac_mod}<br>`;
        splat_sheet_contents += `-- Missile Mod: ${character.missile_mod}<br>`;
        splat_sheet_contents += `-- Init Mod: ${character.init_mod}<br>`;
        splat_sheet_contents += `<br>`;
        splat_sheet_contents += `Constitution: ${character.constitution}<br>`;
        splat_sheet_contents += `--Poison Save Mod: ${character.poison_death_mod}<br>`;
        splat_sheet_contents += `--Radiation Save Mod: ${character.radiation_mod}<br>`;
        splat_sheet_contents += `<br>`;
        splat_sheet_contents += `Intelligence: ${character.intelligence}<br>`;
        splat_sheet_contents += `--Technology Mod: ${character.technology_mod}<br>`;
        splat_sheet_contents += `<br>`;
        splat_sheet_contents += `Willpower: ${character.willpower}<br>`;
        splat_sheet_contents += `<br>`;
        splat_sheet_contents += `Charisma: ${character.charisma}<br>`;
        splat_sheet_contents += `--Reaction Mod: ${character.reaction_mod}<br>`;
        splat_sheet_contents += `--Retainers: ${character.retainers}<br>`;
        splat_sheet_contents += `--Retainer Morale: ${character.retainer_morale}<br>`;
        splat_sheet_contents += `<br>`;
        splat_sheet_contents += `Hit Points: ${character.hit_points}<br>`;
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
        splat_sheet_contents += `Gold: ${character.gold}<br>`;
        splat_sheet_contents += `<br>`;
        splat_sheet_contents += `Saving Throws<br>`;
        splat_sheet_contents += `--Energy Save: ${character.energy_save}<br>`;
        splat_sheet_contents += `--Poison/Death Save: ${character.poison_death_save}<br>`;
        splat_sheet_contents += `--Stun Save: ${character.stun_save}<br>`;
        splat_sheet_contents += `--Radiation Save: ${character.radiation_save}<br>`;
        splat_sheet_contents += `<br>`;
        splat_sheet_contents += `----------------end record ${chararacter_number} of ${characters.length}----------------<br>`;
        splat_sheet_contents += `<br>`;
        chararacter_number += 1
    }

    return splat_sheet_contents
};       

const create_characters_file = (characters) => {
    // TODO: Write JS to return txt file

    // with open(`splat_sheets/characters_splat_{player_name}_{datetime.now():%Y-%m-%d_%H-%m-%d}.txt', 'w') as text_file:
    //     text_file_contents = get_splat_sheet_string(characters)
    //     text_file.write(text_file_contents)
};

const print_character_list = (characters) => {
    document.querySelector('#character-list').innerHTML = get_splat_sheet_string(characters);
};

const randInt = (a, b) => {
    return Math.floor(Math.random() * (b - a + 1)) + a;
}


main();