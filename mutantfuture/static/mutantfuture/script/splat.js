const ALIGNMENTS = ['Lawful', 'Neutral', 'Chaotic'];
const IRRADIATED_DISALLOWED_MUTATIONS = ['regenerative capability', 'natural vampiric weapon', 'acute hyper healing'];
const ANIMALS = ["Dog", "Cat", "Cow", "Horse", "Sheep", "Pig", "Chicken", "Duck", "Rabbit", "Deer", "Mouse", "Rat", "Squirrel", "Fox", "Bear", "Lion", "Tiger", "Elephant", "Giraffe", "Zebra", "Monkey", "Gorilla", "Kangaroo", "Koala", "Penguin", "Ostrich", "Eagle", "Hawk", "Parrot", "Pigeon", "Sparrow", "Owl", "Crow", "Peacock", "Swan", "Dolphin", "Whale", "Shark", "Octopus", "Jellyfish", "Crab", "Lobster", "Starfish", "Stingray", "Trout", "Salmon", "Tuna", "Goldfish", "Carp", "Clam", "Snail", "Frog", "Toad", "Turtle", "Snake", "Lizard", "Alligator", "Crocodile", "Dinosaur", "Bat", "Hyena", "Cheetah", "Leopard", "Hippopotamus", "Rhinoceros", "Buffalo", "Antelope", "Gazelle", "Moose", "Beaver", "Otter", "Skunk", "Raccoon", "Badger", "Hedgehog", "Porcupine", "Platypus", "Wombat", "Opossum", "Armadillo", "Sloth", "Ant", "Bee", "Butterfly", "Ladybug", "Spider", "Mosquito", "Fly", "Grasshopper", "Cockroach", "Dragonfly", "Hummingbird", "Woodpecker", "Flamingo", "Pelican", "Albatross", "Seagull", "Finch", "Canary", "Toucan", "Puma", "Lynx"];
const PLANTS = [ "Rose Plant", "Lily Plant", "Tulip Plant", "Daffodil Plant", "Marigold Plant", "Petunia Plant", "Begonia Plant", "Iris Plant", "Dahlia Plant", "Hydrangea Plant", "Tomato Plant", "Cucumber Plant", "Carrot Plant", "Lettuce Plant", "Spinach Plant", "Pepper Plant", "Radish Plant", "Pea Plant", "Bean Plant", "Zucchini Plant", "Spider Plant", "Snake Plant", "Pothos Plant", "Aloe Vera Plant", "Jade Plant", "Peace Lily Plant", "Rubber Plant", "Fiddle Leaf Fig Plant", "Boston Fern Plant", "Philodendron Plant", "Dieffenbachia Plant", "ZZ Plant", "Schefflera Plant", "Parlor Palm Plant", "Yucca Plant", "Dracaena Plant", "Croton Plant", "Aglaonema Plant", "Kentia Palm Plant", "Bird of Paradise Plant", "Monstera Deliciosa Plant", "Chinese Money Plant", "Calathea Plant", "Anthurium Plant", "Begonia Maculata Plant", "Hoya Plant", "String of Pearls Plant", "Prayer Plant", "English Ivy Plant", "Pilea Peperomioides Plant", "Oak Tree", "Maple Tree", "Pine Tree", "Willow Tree", "Birch Tree", "Cherry Tree", "Apple Tree", "Magnolia Tree", "Elm Tree", "Cedar Tree", "Spruce Tree", "Redwood Tree", "Palm Tree", "Beech Tree", "Bonsai Tree", "Cypress Tree", "Fir Tree", "Walnut Tree", "Ash Tree", "Poplar Tree", "Button Mushroom", "Portobello Mushroom", "Shiitake Mushroom", "Oyster Mushroom", "Cremini Mushroom", "Porcini Mushroom", "Chanterelle Mushroom", "Morel Mushroom", "Enoki Mushroom", "Maitake Mushroom", "Kelp Plant", "Seagrass Plant", "Coral Plant", "Algae Plant", "Seaweed Plant", "Dulse Plant", "Eelgrass Plant", "Sea Lettuce Plant", "Sea Palm Plant", "Rockweed Plant", "Wheat Plant", "Corn Plant", "Rice Plant", "Barley Plant", "Soybean Plant", "Potato Plant", "Cabbage Plant", "Onion Plant", "Garlic Plant", "Pumpkin Plant"];
const INSECTS = ["Fire Ant", "Carpenter Ant", "Bulldog Ant", "Army Ant", "Leafcutter Ant", "Harvester Ant", "Pharaoh Ant", "Pavement Ant", "Argentine Ant", "Odorous House Ant", "Ladybug", "Longhorn Beetle", "Weevil", "Ground Beetle", "Dung Beetle", "Rhinoceros Beetle", "Stag Beetle", "Colorado Potato Beetle", "Click Beetle", "Firefly", "Housefly", "Fruit Fly", "Tsetse Fly", "Horse Fly", "Deer Fly", "Water Strider", "Backswimmer", "Water Boatman", "Giant Water Bug", "Water Scorpion", "Mosquito Larva", "Dragonfly Nymph", "Damselfly Nymph", "Mayfly Nymph", "Caddisfly Larva", "Bee", "Butterfly", "Moth", "Cockroach", "Mosquito", "Dragonfly", "Grasshopper", "Cricket", "Termite", "Aphid", "Cicada", "Mantis", "Wasp", "Hornet", "Bedbug", "Flea", "Tick", "Spider", "Scorpion", "Centipede", "Millipede", "Louse", "Silverfish", "Earwig", "Mayfly", "Sandfly", "Blowfly", "Botfly", "Snipe Fly", "Flesh Fly", "Hoverfly", "Damselfly", "Stonefly", "Whitefly", "Greenfly", "Blackfly", "Sawfly", "Caddisfly", "Dobsonfly", "Snakefly", "Lacewing", "Antlion", "Doodlebug", "Thrips", "Leafhopper", "Treehopper", "Planthopper", "Froghopper", "Cicada Killer", "Yellowjacket"];
let splat_count = urlParams.get('count');
splat_count = splat_count ? splat_count : 20;

let ruleset = document.querySelector('#ruleset').value;

// TODO: set up base rules
// * give mutant animals natural weapon
// * filter races to base races
// * remove backgrounds
// * remove feat
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

    // feat
    #feat;
    get feat() {
        return this.#feat;
    }
    set feat(value) {
        this.#feat = value;
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
    
    // Backgrounds
    #backgrounds;
    get backgrounds() {
        return this.#backgrounds;
    }
    set backgrounds(value) {
        this.#backgrounds = value;
    }

}   

const render_content = async () => {
    let rulebook = global_rulebook || await get_rulebook(RULEBOOK_PATH);
    ruleset = document.querySelector('#ruleset').value;

    if (global_rulebook === null) {
        global_rulebook = rulebook;
    }

    const characters = [];

    for (let i=0; i < splat_count; i++) {
        let new_character = await get_random_character();
        characters.push(new_character);
    }

    print_character_list(characters, rulebook);
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

const get_random_character = () => {
    character = new CharacterBase();

    // strength
    character.strength = roll_dice('3d6');

    // dexterity
    character.dexterity = roll_dice('3d6');

    // constitution
    character.constitution = roll_dice('3d6');

    // intelligence
    character.intelligence = roll_dice('3d6');

    // willpower
    character.willpower = roll_dice('3d6');

    // charisma
    character.charisma = roll_dice('3d6');

    // saves
    character.energySave = 15;
    character.poisonDeathSave = 12;
    character.stunSave = 14;
    character.radiationSave = 13;

    // alignment
    character.alignment = get_random_alignment();

    // race
    character.race = get_random_race(global_rulebook);

    // mutations
    character.mutations = get_character_mutations(global_rulebook, character.race);

    // feat
    if (ruleset === 'advanced') {
        character.feat = get_random_feat(global_rulebook, character.race);
    }

    // backgrounds
    if (ruleset === 'advanced') {
        character.backgrounds = get_random_backgrounds(global_rulebook, 2);
    }

    // thac0
    character.thac0 = 19;

    // gold
    character.gold = 10 * roll_dice('3d8');

    // hit points
    character.hitPoints = roll_dice(`${character.constitution}d${character.race.fields.hit_dice_sides}`);

    character = applyRacialMods(character);
    character = applyMutationMods(character);
    character = applyAbilityMods(character);
    
    return character;
};

const get_random_feat = (rulebook, race) => {
    let selected_feat = null;
    while (selected_feat === null) {
        let random_feat = randomChoice(global_rulebook.feats.filter(feat => feat.fields.pc_eligible));
        const bonus_mutations_ineligible_races = [
            'pure human (base)',
            'pure human (advanced)',
            'basic android',
            'synthetic android',
            'replicant android',
            'pure cyborg'
        ];

        if (random_feat.fields.name.toLowerCase().startsWith('bonus mutation') && bonus_mutations_ineligible_races.includes(race.fields.name.toLowerCase())) {
            continue;
        }
        selected_feat = random_feat;
    }

    return selected_feat;
}

const applyAbilityMods = (character) => {
    // strength
    character.strengthMod = get_mod_by_attr_value(global_rulebook.strengthModSets, 'str_mod', character.strength);
    character.damageMod = get_mod_by_attr_value(global_rulebook.strengthModSets, 'dmg_mod', character.strength);

    // dexterity
    character.acMod = get_mod_by_attr_value(global_rulebook.dexterityModSets, 'ac_mod', character.dexterity);
    character.missileMod = get_mod_by_attr_value(global_rulebook.dexterityModSets, 'missile_mod', character.dexterity);
    character.initMod = get_mod_by_attr_value(global_rulebook.dexterityModSets, 'init_mod', character.dexterity);

    // constitution
    character.poisonDeathMod = get_mod_by_attr_value(global_rulebook.constitutionModSets, 'poison_death_mod', character.constitution);
    character.radiationMod = get_mod_by_attr_value(global_rulebook.constitutionModSets, 'radiation_mod', character.constitution);

    // intelligence
    character.technologyMod = get_mod_by_attr_value(global_rulebook.intelligenceModSets, 'tech_mod', character.intelligence);

    // charisma
    character.reactionMod = get_mod_by_attr_value(global_rulebook.charismaModSets, 'reaction_mod', character.charisma);
    character.retainers = get_mod_by_attr_value(global_rulebook.charismaModSets, 'retainers', character.charisma);
    character.retainerMorale = get_mod_by_attr_value(global_rulebook.charismaModSets, 'retainer_morale', character.charisma);

    return character;
}

const applyRacialMods = (character) => {
    const character_race_lower = character.race.fields.name.toLowerCase();
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
    for (let i = 0; i < character.mutations.length; i++) {
        if (character.mutations[i].fields.name.toLowerCase().startsWith('attractive')) {
            character.reactionMod -= 2;
            continue;
        }

        if (character.mutations[i].fields.name.toLowerCase().startsWith('eye-catching appearance')) {
            character.reactionMod += 2;
            continue;
        }

        if (character.mutations[i].fields.name.toLowerCase().startsWith('physical immaturity')) {
            character.strength -= 2;
            character.constitution -= 2;
            continue;
        }

        if (character.mutations[i].fields.name.toLowerCase().startsWith('degeneration')) {
            let ability = character.mutations[i].fields.name.slice(character.mutations[i].fields.name.indexOf('> ') + 2, character.mutations[i].fields.name.indexOf(' ['));
            ability = ability.toLowerCase();
            character[ability] -= 1;
            continue;
        }

        if (character.mutations[i].fields.name.toLowerCase().startsWith('weak will')) {
            character.willpower = 3;
            continue;
        }

        // put this at end after any mutations that could affect constitution score
        if (character.mutations[i].fields.name.toLowerCase().startsWith('petrified')) {
            character.hitPoints = character.constitution * 10;
            continue;
        }
    }

    return character;
}

const get_random_poison_class = (rulebook) => {
    table = rulebook.poisonClassRolls;
    d100_roll = roll_dice('1d100');
    poison_class_row = table.filter(row => d100_roll === row.fields.roll);
    poison_class_row = poison_class_row[0];
    return poison_class_row.fields.poison_class
}

const numPad = (num, size) => {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
}

const randomChoice = (arr) => {
    if (arr.length > 0) {
        let index = Math.floor(Math.random() * arr.length);
        return arr[index];
    } else {
        return null;
    }
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
    let filtered_races = null;
    if (ruleset === 'advanced') {
        filtered_races = rulebook.races.filter(race => !race.fields.name.toLowerCase().includes(`(base)`));
    } else {
        filtered_races = rulebook.races.filter(race => race.fields.source === 'base');
    }
    return randomChoice(filtered_races);;
};

const get_mutation_by_pk = (rulebook, mutation_id) => {
    let filtered_mutations = rulebook.mutations.filter(mutation => mutation.pk == mutation_id);
    return filtered_mutations[0];
};

const get_character_mutations = (rulebook, character_race) => {
    let character_mutations = [];

    // mental mutations
    total_new_mutations = roll_dice(character_race.fields.mental_mutations_roll_str);
    if (total_new_mutations > 0) {
        character_mutations = append_table_mutations(rulebook, character_mutations, total_new_mutations, 'mental', character_race);
    }

    // physical mutations
    total_new_mutations = roll_dice(character_race.fields.physical_mutations_roll_str);
    if (total_new_mutations > 0) {
        character_mutations = append_table_mutations(rulebook, character_mutations, total_new_mutations, 'physical', character_race);
    }

    // plant_mutations
    total_new_mutations = roll_dice(character_race.fields.plant_mutations_roll_str);
    if (total_new_mutations > 0) {
        character_mutations = append_table_mutations(rulebook, character_mutations, total_new_mutations, 'plant', character_race);
    }

    // human_animal_mutations
    total_new_mutations = roll_dice(character_race.fields.random_human_animal_roll_str);
    if (total_new_mutations > 0) {
        character_mutations = append_table_mutations(rulebook, character_mutations, total_new_mutations, 'human_animal', character_race);
    }

    // beneficial_any_mutations
    total_new_mutations = roll_dice(character_race.fields.random_beneficial_any_roll_str);
    if (total_new_mutations > 0) {
        character_mutations = append_table_mutations(rulebook, character_mutations, total_new_mutations, 'any_beneficial', character_race);
    }

    // mental_drawback_mutations
    total_new_mutations = roll_dice(character_race.fields.mental_drawback_roll_str);
    if (total_new_mutations > 0) {
        character_mutations = append_table_mutations(rulebook, character_mutations, total_new_mutations, 'mental_drawback', character_race);
    }

    // physical_drawback_mutations
    total_new_mutations = roll_dice(character_race.fields.physical_drawback_roll_str);
    if (total_new_mutations > 0) {
        character_mutations = append_table_mutations(rulebook, character_mutations, total_new_mutations, 'physical_drawback', character_race);
    }

    // any_mutations
    total_new_mutations = roll_dice(character_race.fields.random_any_roll_str);
    if (total_new_mutations > 0) {
        character_mutations = append_table_mutations(rulebook, character_mutations, total_new_mutations, 'any', character_race);
    }

    // special_animal_mutations
    total_new_mutations = roll_dice(character_race.fields.special_animal_roll_str);
    if (total_new_mutations > 0) {
        character_mutations = append_random_special_mutations(character_mutations, total_new_mutations, rulebook.specialAnimalMutationRolls, rulebook, character_race);
    }

    // special_insect_mutations
    total_new_mutations = roll_dice(character_race.fields.special_insect_roll_str);
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
            let new_mutation = null;

            switch (mutation_table) {
                case 'mental':
                    table = rulebook.mentalMutationRolls;
                    d100_roll = roll_dice('1d100');
                    mutation_row = table.filter(row => d100_roll === row.fields.roll);
                    mutation_row = mutation_row[0];
                    new_mutation_pk = mutation_row.fields[`${ruleset}_result`];
                    new_mutation = get_mutation_by_pk(rulebook, new_mutation_pk);
                    break;

                case 'physical':
                    table = rulebook.physicalMutationRolls;
                    d100_roll = roll_dice('1d100');
                    mutation_row = table.filter(row => d100_roll === row.fields.roll);
                    mutation_row = mutation_row[0];
                    new_mutation_pk = mutation_row.fields[`${ruleset}_result`];
                    new_mutation = get_mutation_by_pk(rulebook, new_mutation_pk);
                    break;

                case 'plant':
                    table = rulebook.plantMutationRolls;
                    d100_roll = roll_dice('1d100');
                    mutation_row = table.filter(row => d100_roll === row.fields.roll);
                    mutation_row = mutation_row[0];
                    new_mutation_pk = mutation_row.fields[`${ruleset}_result`];
                    new_mutation = get_mutation_by_pk(rulebook, new_mutation_pk);
                    break;

                case 'human_animal':
                    table = randomChoice([rulebook.mentalMutationRolls, rulebook.physicalMutationRolls]);
                    d100_roll = roll_dice('1d100');
                    mutation_row = table.filter(row => d100_roll === row.fields.roll);
                    mutation_row = mutation_row[0];
                    new_mutation_pk = mutation_row.fields[`${ruleset}_result`];
                    new_mutation = get_mutation_by_pk(rulebook, new_mutation_pk);
                    break;

                case 'any_beneficial':
                    while (true) {
                        table = randomChoice([rulebook.mentalMutationRolls, rulebook.physicalMutationRolls, rulebook.plantMutationRolls]);
                        d100_roll = roll_dice('1d100');
                        mutation_row = table.filter(row => d100_roll === row.fields.roll);
                        mutation_row = mutation_row[0];
                        new_mutation_pk = mutation_row.fields[`${ruleset}_result`];
                        new_mutation = get_mutation_by_pk(rulebook, new_mutation_pk);
                        if (new_mutation.fields.effect_type == 'benefit') {
                            break;
                        }
                    }

                    break;

                case 'mental_drawback':
                    table = rulebook.mentalMutationRolls;
                    while (true) {
                        d100_roll = roll_dice('1d100');
                        mutation_row = table.filter(row => d100_roll === row.fields.roll);
                        mutation_row = mutation_row[0];
                        new_mutation_pk = mutation_row.fields[`${ruleset}_result`];
                        new_mutation = get_mutation_by_pk(rulebook, new_mutation_pk);
                        if (new_mutation.fields.effect_type == 'drawback') {
                            break;
                        }
                    }

                    break;

                case 'physical_drawback':
                    table = rulebook.physicalMutationRolls;
                    while (true) {
                        d100_roll = roll_dice('1d100');
                        mutation_row = table.filter(row => d100_roll === row.fields.roll);
                        mutation_row = mutation_row[0];
                        new_mutation_pk = mutation_row.fields[`${ruleset}_result`];
                        new_mutation = get_mutation_by_pk(rulebook, new_mutation_pk);
                        if (new_mutation.fields.effect_type == 'drawback') {
                            break;
                        }
                    }

                    break;

                case 'any':
                    new_mutation = get_any_random_mutation(rulebook);
                    break;
            }
            
            let mutation_already_present = false;
            for (mutation of character_mutations) {
                if (mutation.fields.name === new_mutation.fields.name) {
                    mutation_already_present = true;
                }
            }
            if (mutation_already_present) {
                continue;
            }
    
            if (new_mutation.fields.pc_eligible === false) {
                continue;
            }

            if (character_race.fields.name.toLowerCase() == 'irradiated' && IRRADIATED_DISALLOWED_MUTATIONS.includes(new_mutation.fields.name)) {
                continue;
            }
    
            character_mutations.push(new_mutation);
            mutation_count += 1;
        }

        return character_mutations
};

const get_any_random_mutation = (rulebook) => {
    table = randomChoice([rulebook.mentalMutationRolls, rulebook.physicalMutationRolls, rulebook.plantMutationRolls]);
    d100_roll = roll_dice('1d100');
    mutation_row = table.filter(row => d100_roll === row.fields.roll);
    mutation_row = mutation_row[0];
    new_mutation_pk = mutation_row.fields[`${ruleset}_result`];
    mutation = get_mutation_by_pk(rulebook, new_mutation_pk);
    return mutation;
}

const select_beneficial_mutation = (mutationList) => {
    const beneficialMutations = mutationList.filter(mutation => mutation.fields.effect_type.toLowerCase() === 'benefit');
    return randomChoice(beneficialMutations);
}

const append_random_special_mutations = (character_mutations, total_new_mutations, mutation_list, rulebook, character_race) => {
    let mutation_count = 0;
    while (mutation_count < total_new_mutations) {
        let mutation_pk = randomChoice(mutation_list).fields.mutation;
        let new_mutation = get_mutation_by_pk(rulebook, mutation_pk);

        let mutation_already_present = false;
        for (mutation of character_mutations) {
            if (mutation.fields.name === new_mutation.fields.name) {
                mutation_already_present = true;
            }
        }
        if (mutation_already_present) {
            continue;
        }

        if (new_mutation.fields.pc_eligible === false) {
            continue;
        }

        if (character_race.fields.name.toLowerCase() == 'irradiated' && IRRADIATED_DISALLOWED_MUTATIONS.includes(new_mutation.fields.name)) {
            continue;
        }

        character_mutations.push(new_mutation)
        mutation_count += 1
    }

    return character_mutations;
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

const get_full_mutation_name = (mutation, rulebook) => {
    const mutation_form = get_mutation_form(mutation);
    let formatted_form = null;

    if (mutation.fields.name.toLowerCase() === 'mutagenic touch') {
        const inflicted_mutation = get_any_random_mutation(rulebook).fields.name;
        formatted_form = ` > ${inflicted_mutation}`;
    } else if (['projectile thorns', 'injected poison sap', 'dermal poison slime'].includes(mutation.fields.name.toLowerCase())) {
        const random_poison_class = get_random_poison_class(rulebook);
        formatted_form = ` > Poison Class ${random_poison_class}`;
    } else if (mutation.fields.name.toLowerCase() === 'carnivore') {
        const mouth_count = roll_dice('1d12');
        formatted_form = ` > ${mouth_count} Mouths`;
    } else if (mutation.fields.name.toLowerCase() === 'dwarfism') {
        const height = 6 - (roll_dice('1d4') + 1);
        if (height > 1) {
            formatted_form = ` (${height} Feet Tall)`;
        } else {
            formatted_form = ` (1 Foot Tall)`;
        }
    } else if (mutation.fields.name.toLowerCase() === 'gigantism') {
        const height = 6 + roll_dice('3d6');
        formatted_form = ` (${height} Feet Tall)`;
    } else if (mutation.fields.name.toLowerCase() === 'aberrant form') {
        const lower_mutation_form = mutation_form.toLowerCase();
        switch (lower_mutation_form) {
            case 'enlarged parts':
                formatted_form = ` > ${mutation_form} > Consult ML`;
                break;

            case 'xenomorphism':
                const natural_weapon = roll_dice('1d2') === 1 ? 'w/ Natural Weapon' : 'w/o Natural Weapon';
                formatted_form = ` > ${mutation_form} ${natural_weapon} > Consult ML`;
                break;

            case 'extra parts':
                formatted_form = ` > ${mutation_form} > Consult ML`;
                break;

            case 'natural weapon':
                const damage_die_roll = roll_dice('1d4');
                let damage_die = null;
                switch (damage_die_roll) {
                    case 1:
                        damage_die = '1d4';
                        break;
                    case 2:
                        damage_die = '1d6';
                        break;
                    case 3:
                        damage_die = '1d8';
                        break;
                    case 4:
                        damage_die = '1d10';
                        break;
                }

                const toxicity = roll_dice('1d4') === 1 ? `Toxic: Poison Class ${get_random_poison_class(rulebook)}` : 'Non-Toxic';

                formatted_form = ` > ${mutation_form} ${damage_die}, ${toxicity}`;
                break;
        }
    } else {
        formatted_form = mutation_form ? ` > ${mutation_form}` : '';
    }

    return `${mutation.fields.name}${formatted_form} [${mutation.fields.type} ${mutation.fields.effect_type}, ${mutation.fields.page_number}]`;
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

        let character_race_detail = character.race.fields.name;
        character_race_detail = character_race_detail.replace('Animal', `Animal (${randomChoice(ANIMALS)})`);
        character_race_detail = character_race_detail.replace('Plant', `Plant (${randomChoice(PLANTS)})`);
        character_race_detail = character_race_detail.replace('Insect', `Insect (${randomChoice(INSECTS)})`);

        let character_race_title = character_race_detail.replace(' (Advanced)','');
        character_race_title = character_race_detail.replace(' (Base)','');
        character_race_title = character_race_title.replace('(','');
        character_race_title = character_race_title.replace(')','');
        character_race_title = character_race_title.replace('Animal','');
        character_race_title = character_race_title.replace('Plant','');
        character_race_title = character_race_title.replace('Insect','');

        splat_sheet_contents += `${character.alignment} ${character_race_title}`;

        if (ruleset === 'advanced') {       
            backgrounds_set = new Set(character.backgrounds);
            for (let background of backgrounds_set) {
                splat_sheet_contents += ` ${background}`;
            }
        }

        splat_sheet_contents += `</h3>`;

        splat_sheet_contents += `Race: <a href='javascript:void(0);' class='item-link splat-item-link' data-category='races' data-itemid='${character.race.pk}'>${character_race_detail}</a> (${character.race.fields.page_number})<br>`;

        if (ruleset === 'advanced') {
            splat_sheet_contents += `Backgrounds:<br>`;
            for (let background of backgrounds_set) {
                const rank = character.backgrounds.reduce((acc, str) => str === background ? acc + 1 : acc, 0)
                splat_sheet_contents += `--${background}: ${rank}<br>`;
            }    
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

            if (character.race.fields.name.toLowerCase() === 'irradiated') {
                splat_sheet_contents += `--<a href='javascript:void(0)' class='irradiated-sense-link'>Unique Sense > Radiation [race mutation, A4]</a><br>`;
            }

            let hasDwarfism = false;
            let hasGigantism = false;

            let mutationNames = [];

            for (let mutation of character.mutations) {
                mutationNames.push(mutation.fields.name);

                if (mutation.fields.name.toLowerCase().startsWith('dwarfism')) {
                    hasDwarfism = true;
                }
                if (mutation.fields.name.toLowerCase().startsWith('gigantism')) {
                    hasGigantism = true;
                }


                if (mutation.fields.name.toLowerCase().startsWith('unreliable mutation')) {
                    let unreliable_description = get_full_mutation_name(mutation);
                    let affected_mutation = select_beneficial_mutation(character.mutations);
                    
                    if (affected_mutation) {
                        let mutation_name = get_full_mutation_name(affected_mutation, global_rulebook);

                        if (mutation_name.includes('>')) {
                            mutation_name = mutation_name.slice(0, mutation_name.indexOf(' >'));
                        } else {
                            mutation_name = mutation_name.slice(0, mutation_name.indexOf(' ['));
                        }

                        unreliable_description = unreliable_description.replace('Unreliable Mutation', `Unreliable Mutation > ${mutation_name}`);
                    } else {
                        unreliable_description = unreliable_description.replace('Unreliable Mutation', `Unreliable Mutation > None`);
                    }

                    splat_sheet_contents += `--<a href='javascript:void(0);' class='item-link splat-item-link' data-category='mutations' data-itemid='${mutation.pk}'>${unreliable_description}</a><br>`;
                } else {
                    splat_sheet_contents += `--<a href='javascript:void(0);' class='item-link splat-item-link' data-category='mutations' data-itemid='${mutation.pk}'>${get_full_mutation_name(mutation, global_rulebook)}</a><br>`;
                }
            }

            if (hasDwarfism && hasGigantism) {
                splat_sheet_contents += 'NOTE: The combination of dwarfism and gigantism entirely negates the effects of both mutations.  Character is 6 feet tall.<br>';
            }
        } else {
            splat_sheet_contents += `Mutations: None<br>`;
        }

        if (ruleset === 'advanced') {
            splat_sheet_contents += `<br>`;
            splat_sheet_contents += `Feat: <a href='javascript:void(0);' class='item-link splat-item-link' data-category='feats' data-itemid='${character.feat.pk}'>${character.feat.fields.name}</a> (${character.feat.fields.page_number})<br>`;
        }

        splat_sheet_contents += `<br>`;
        splat_sheet_contents += `Saving Throws<br>`;
        splat_sheet_contents += `--Energy Save: ${character.energySave}<br>`;
        splat_sheet_contents += `--Poison/Death Save: ${character.poisonDeathSave}<br>`;
        splat_sheet_contents += `--Stun Save: ${character.stunSave}<br>`;
        splat_sheet_contents += `--Radiation Save: ${character.radiationSave}<br>`;
        splat_sheet_contents += `<br>`;
        splat_sheet_contents += `Gold: ${character.gold}<br>`;
        splat_sheet_contents += `<br>`;

        if (ruleset === 'advanced') {
            splat_sheet_contents += `<br>`;
            splat_sheet_contents += `Player applies feat after selecting character.`;
        }

        splat_sheet_contents += `<br>`;
        splat_sheet_contents += `<aside><a href='javascript:void(0)' data-char_id='${chararacter_number}' class='print-button'>[PRINT]</a></aside>`;
        splat_sheet_contents += `  </article>`;
        splat_sheet_contents += `</li>`;
        chararacter_number += 1;
    }

    return splat_sheet_contents
};

const print_character_list = (characters, rulebook) => {
    document.querySelector('#character-list').innerHTML = get_splat_sheet_string(characters);
    attach_item_event_handlers(rulebook);
    document.querySelectorAll('.irradiated-sense-link').forEach((el) => {
        el.addEventListener('click', () => {
            display_irradiated_bonus();
        });
    })
};



const display_irradiated_bonus = () => {
    // instanciate new modal
    let modal = new tingle.modal({
        closeMethods: ['overlay', 'button', 'escape'],
        closeLabel: "Close",
        cssClass: ['custom-class-1']
    });

    let modalContent = `<article>`;
    modalContent += `<h3>Unique Sense (Radiation)</h3>`;
    modalContent += `The irradiated can detect concentrations of radiation. All irradiated gain the mutation Unique Sense (Radiation) as a bonus. They can sense radiation fields 1 mile or larger in diameter at a distance of up to 10 miles.`;
    modalContent += `</article>`;
    modal.setContent(modalContent);

    modal.open();
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#new-splat-link').addEventListener('click', render_content);
    render_content();
});
