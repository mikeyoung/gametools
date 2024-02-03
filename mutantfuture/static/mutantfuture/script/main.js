const RULEBOOK_PATH = 'json/rulebook.json'
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


const main = () => {
        const characters = [];

        for (let i=0; i < SPLAT_COUNT; i++) {
            let new_character = get_random_character();
            characters.push(new_character);
        }

        create_characters_file(characters);
};


const get_random_character = () => {
    rulebook = get_rulebook(RULEBOOK_PATH);
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
    character.feats = random.choice(rulebook.feats).fields;

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
    const filtered_races = rulebook.races.filter((race) => {!race.fields.name.toLowerCase().includes('(base)')});
    return random.choice(filtered_races).fields;
};

const get_mutation_by_pk = (rulebook, mutation_id) => {
    return rulebook.mutations.filter((mutation) => {mutation.pk == mutation_id})[0];
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
                    d100_roll = random.randint(1, 100);
                    mutation_row = table.filter((row) => {d100_roll == row.fields.roll})[0];
                    new_mutation_pk = mutation_row.fields.advanced_result;
                    mutation = get_mutation_by_pk(rulebook, new_mutation_pk);
                    break;

                case 'physical':
                    table = rulebook.physicalMutationRolls;
                    d100_roll = random.randint(1, 100);
                    mutation_row = table.filter((row) => {d100_roll == row.fields.roll})[0];
                    new_mutation_pk = mutation_row.fields.advanced_result;
                    mutation = get_mutation_by_pk(rulebook, new_mutation_pk);
                    break;

                case 'plant':
                    table = rulebook.plantMutationRolls;
                    d100_roll = random.randint(1, 100);
                    mutation_row = table.filter((row) => {d100_roll == row.fields.roll})[0];
                    new_mutation_pk = mutation_row.fields.advanced_result;
                    mutation = get_mutation_by_pk(rulebook, new_mutation_pk);
                    break;

                case 'human_animal':
                    table = randomChoice([rulebook.mentalMutationRolls, rulebook.physicalMutationRolls]);
                    d100_roll = random.randint(1, 100);
                    mutation_row = table.filter((row) => {d100_roll == row.fields.roll})[0];
                    new_mutation_pk = mutation_row.fields.advanced_result;
                    mutation = get_mutation_by_pk(rulebook, new_mutation_pk);
                    break;

                case 'any_beneficial':
                    while (true) {
                        table = randomChoice([rulebook.mentalMutationRolls, rulebook.physicalMutationRolls, rulebook.plantMutationRolls]);
                        d100_roll = random.randint(1, 100);
                        mutation_row = table.filter((row) => {d100_roll == row.fields.roll})[0];
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
                        d100_roll = random.randint(1, 100);
                        mutation_row = table.filter((row) => {d100_roll == row.fields.roll})[0];
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
                        d100_roll = random.randint(1, 100);
                        mutation_row = table.filter((row) => {d100_roll == row.fields.roll})[0];
                        new_mutation_pk = mutation_row.fields.advanced_result;
                        mutation = get_mutation_by_pk(rulebook, new_mutation_pk);
                        if (mutation.fields.effect_type == 'drawback') {
                            break;
                        }
                    }

                    break;

                case 'any':
                    table = random.choice([rulebook.mentalMutationRolls, rulebook.physicalMutationRolls, rulebook.plantMutationRolls])
                    d100_roll = random.randint(1, 100);
                    mutation_row = table.filter((row) => {d100_roll == row.fields.roll})[0];
                    new_mutation_pk = mutation_row.fields.advanced_result;
                    mutation = get_mutation_by_pk(rulebook, new_mutation_pk);
            }

            mutation_name = get_full_mutation_name(mutation)
            if (!character_mutations.has(mutation_name) && mutation.fields.pc_eligible == true) {
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
        if (!character_mutations.has(mutation_name) && random_mutation.fields.pc_eligible == true) {
            character_mutations.push(mutation_name)
            mutation_count += 1
        }
    }

    return character_mutations
};

// def get_full_mutation_name(mutation):
//     return f"{mutation.fields..name.} ({mutation.fields..type.}, {mutation.fields..effect_type.}, {mutation.fields..page_number.})"


// def roll_dice(roll_str):
//     if 'd' in roll_str.lower():
//         total = 0
//         num_dice, num_sides = roll_str.split('d')
//         num_dice = int(num_dice)
//         num_sides = int(num_sides)

//         for _ in range(1, num_dice+1):
//             total += random.randint(1,num_sides)
        
//         return total
//     else:
//         return int(roll_str)
    

// def get_rulebook(json_file_path):
//     try:
//         with open(json_file_path, 'r') as f:
//             data = json.load(f)
//             return data[0]
//     except FileNotFoundError:
//         raise


// def get_mod_by_attr_value(attribute_table, mod_name, value):
//     value_row = list(filter(lambda row : row.fields..value. == value, attribute_table))[0]
//     return value_row.fields.[mod_name]


// def get_hit_points(race, constitution_value):
//     fixed_hp_races = .synthetic android', 'basic android.
//     if race.name..lower() in fixed_hp_races:
//         return 50
//     else:
//         sides = race.hit_dice_sides.
//         return roll_dice(f'{constitution_value}d{sides}')
    

// def get_splat_sheet_string(characters, player_name='', for_html=False):
//     splat_sheet_contents = 'MUTANT FUTURE CHARACTER SPLAT'
//     if player_name != '':
//         splat_sheet_contents += f' FOR PLAYER {player_name.upper()}'
//     splat_sheet_contents += '\n\n'

//     chararacter_number = 1
//     for character in characters:
//         splat_sheet_contents += f'---------------start record {chararacter_number:02d} of {len(characters):02d}---------------\n'
//         splat_sheet_contents += f'{character.alignment} {character.race["name"].replace(" (Advanced)","")}'

//         for background in character.backgrounds:
//             splat_sheet_contents += f' {background["name"]}'
//         splat_sheet_contents += f'\n\n'

//         splat_sheet_contents += f'Race: {character.race["name"]} ({character.race["page_number"]})\n\n'

//         splat_sheet_contents += f'Backgrounds:\n'
//         for background in character.backgrounds:
//             splat_sheet_contents += f'--{background["name"]}: 1\n'
            
//         splat_sheet_contents += f'\n'
//         splat_sheet_contents += f'Alignment: {character.alignment}\n'

//         splat_sheet_contents += '\n'
//         splat_sheet_contents += f'Strength: {character.strength}\n'
//         splat_sheet_contents += f'--Strength Mod: {character.strength_mod}\n'
//         splat_sheet_contents += f'--Damage Mod: {character.damage_mod}\n'
//         splat_sheet_contents += '\n'
//         splat_sheet_contents += f'Dexterity: {character.dexterity}\n'
//         splat_sheet_contents += f'-- AC Mod: {character.ac_mod}\n'
//         splat_sheet_contents += f'-- Missile Mod: {character.missile_mod}\n'
//         splat_sheet_contents += f'-- Init Mod: {character.init_mod}\n'
//         splat_sheet_contents += '\n'
//         splat_sheet_contents += f'Constitution: {character.constitution}\n'
//         splat_sheet_contents += f'--Poison Save Mod: {character.poison_death_mod}\n'
//         splat_sheet_contents += f'--Radiation Save Mod: {character.radiation_mod}\n'
//         splat_sheet_contents += '\n'
//         splat_sheet_contents += f'Intelligence: {character.intelligence}\n'
//         splat_sheet_contents += f'--Technology Mod: {character.technology_mod}\n'
//         splat_sheet_contents += '\n'
//         splat_sheet_contents += f'Willpower: {character.willpower}\n'
//         splat_sheet_contents += '\n'
//         splat_sheet_contents += f'Charisma: {character.charisma}\n'
//         splat_sheet_contents += f'--Reaction Mod: {character.reaction_mod}\n'
//         splat_sheet_contents += f'--Retainers: {character.retainers}\n'
//         splat_sheet_contents += f'--Retainer Morale: {character.retainer_morale}\n'
//         splat_sheet_contents += '\n'
//         splat_sheet_contents += f'Hit Points: {character.hit_points}\n'
//         splat_sheet_contents += '\n'

//         if len(character.mutations) > 0:
//             splat_sheet_contents += f'Mutations:\n'
//             for mutation in character.mutations:
//                 splat_sheet_contents += f'--{mutation}\n'
//         else:
//             splat_sheet_contents += f'Mutations: None\n'

//         splat_sheet_contents += '\n'
//         splat_sheet_contents += f'Feat: {character.feats["name"]} ({character.feats["page_number"]})\n'
//         splat_sheet_contents += f'\n'
//         splat_sheet_contents += f'Gold: {character.gold}\n'
//         splat_sheet_contents += f'\n'
//         splat_sheet_contents += f'Saving Throws\n'
//         splat_sheet_contents += f'--Energy Save: {character.energy_save}\n'
//         splat_sheet_contents += f'--Poison/Death Save: {character.poison_death_save}\n'
//         splat_sheet_contents += f'--Stun Save: {character.stun_save}\n'
//         splat_sheet_contents += f'--Radiation Save: {character.radiation_save}\n'
//         splat_sheet_contents += f'\n'
//         splat_sheet_contents += f'----------------end record {chararacter_number:02d} of {len(characters):02d}----------------\n'
//         splat_sheet_contents += f'\n'
//         chararacter_number += 1

//     if for_html:
//         splat_sheet_contents = splat_sheet_contents.replace('\n','<br>')

//     return splat_sheet_contents
        

// def create_characters_file(characters, player_name):
//     with open(f'splat_sheets/characters_splat_{player_name}_{datetime.now():%Y-%m-%d_%H-%m-%d}.txt', 'w') as text_file:
//         text_file_contents = get_splat_sheet_string(characters)
//         text_file.write(text_file_contents)


// if __name__ == '__main__':
//     main()
