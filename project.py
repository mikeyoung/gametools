from mutantfuture.characters import CharacterBase
import random
import json
from config import RULEBOOK_PATH, ALIGNMENTS, SPLAT_COUNT
from datetime import datetime
import sys


def main():
    player_name = None

    while True:
        while True:
            player_name = input('Provide player name or [ENTER] to quit: ').strip()
            if player_name == '':
                print('Goodbye\n')
                sys.exit(0)

            if len(player_name) > 12:
                print('Max 12 characters for player name please.\n')
                continue
                
            if not player_name.isalnum():
                print('Alphanumeric characters only please.\n')
                continue

            break

        characters = []

        for _ in range(0, SPLAT_COUNT):
            new_character = get_random_character()
            characters.append(new_character)

        create_characters_file(characters, player_name)


def get_random_character():
    rulebook = get_rulebook(RULEBOOK_PATH)
    character = CharacterBase()

    #strength
    character.strength = roll_dice('3d6')
    character.strength_mod = get_mod_by_attr_value(rulebook['strengthModSets'], 'str_mod', character.strength)
    character.damage_mod = get_mod_by_attr_value(rulebook['strengthModSets'], 'dmg_mod', character.strength)

    #dexterity
    character.dexterity = roll_dice('3d6')
    character.ac_mod = get_mod_by_attr_value(rulebook['dexterityModSets'], 'ac_mod', character.dexterity)
    character.missile_mod = get_mod_by_attr_value(rulebook['dexterityModSets'], 'missile_mod', character.dexterity)
    character.init_mod = get_mod_by_attr_value(rulebook['dexterityModSets'], 'init_mod', character.dexterity)

    #constitution
    character.constitution = roll_dice('3d6')
    character.poison_death_mod = get_mod_by_attr_value(rulebook['constitutionModSets'], 'poison_death_mod', character.constitution)
    character.radiation_mod = get_mod_by_attr_value(rulebook['constitutionModSets'], 'radiation_mod', character.constitution)

    #intelligence
    character.intelligence = roll_dice('3d6')
    character.technology_mod = get_mod_by_attr_value(rulebook['intelligenceModSets'], 'tech_mod', character.intelligence)

    #willpower
    character.willpower = roll_dice('3d6')

    #charisma
    character.charisma = roll_dice('3d6')
    character.reaction_mod = get_mod_by_attr_value(rulebook['charismaModSets'], 'reaction_mod', character.charisma)
    character.retainers = get_mod_by_attr_value(rulebook['charismaModSets'], 'retainers', character.charisma)
    character.retainer_morale = get_mod_by_attr_value(rulebook['charismaModSets'], 'retainer_morale', character.charisma)

    #saves
    character.energy_save = 15
    character.poison_death_save = 12
    character.stun_save = 14
    character.radiation_save = 13

    #alignment
    character.alignment = get_random_alignment()

    #race
    character.race = get_random_race(rulebook)

    #mutations
    character.mutations = get_character_mutations(rulebook, character.race)

    #feats
    character.feats = random.choice(rulebook['feats'])['fields']

    #backgrounds
    character.backgrounds = get_random_backgrounds(rulebook, 2)

    #thac0
    character.thac0 = 19

    #gold
    character.gold = 10 * roll_dice('3d8')

    #hit points
    character.hit_points = get_hit_points(character.race, character.constitution)
    
    return character


def get_random_alignment():
    return random.choice(ALIGNMENTS)

def get_random_backgrounds(rulebook, total_backgrounds):
    background_name_set = set()
    background_list = []
    
    while len(background_list) < total_backgrounds:
        random_background = random.choice(rulebook['backgrounds'])['fields']
        if (random_background['name'] not in background_name_set):
            background_name_set.add(random_background['name'])
            background_list.append(random_background)

    return background_list


def get_random_race(rulebook):
    #filter out base versions for now
    filtered_races = list(filter(lambda race : '(base)' not in race['fields']['name'].lower(), rulebook['races']))
    return random.choice(filtered_races)['fields']


def get_mutation_by_pk(rulebook, mutation_id):
    all_mutations = rulebook['mutations']
    return list(filter(lambda mutation: mutation['pk'] == mutation_id, all_mutations))[0]


def get_character_mutations(rulebook, character_race):
    character_mutations = []

    #mental mutations
    total_new_mutations = roll_dice(character_race['mental_mutations_roll_str'])
    if (total_new_mutations > 0):
        character_mutations = append_table_mutations(rulebook, character_mutations, total_new_mutations, 'mental')

    #physical mutations
    total_new_mutations = roll_dice(character_race['physical_mutations_roll_str'])
    if (total_new_mutations > 0):
        character_mutations = append_table_mutations(rulebook, character_mutations, total_new_mutations, 'physical')

    #plant_mutations
    total_new_mutations = roll_dice(character_race['plant_mutations_roll_str'])
    if (total_new_mutations > 0):        
        character_mutations = append_table_mutations(rulebook, character_mutations, total_new_mutations, 'plant')

    #human_animal_mutations
    total_new_mutations = roll_dice(character_race['random_human_animal_roll_str'])
    if (total_new_mutations > 0):        
        character_mutations = append_table_mutations(rulebook, character_mutations, total_new_mutations, 'human_animal')

    #beneficial_any_mutations
    total_new_mutations = roll_dice(character_race['random_beneficial_any_roll_str'])
    if (total_new_mutations > 0):        
        character_mutations = append_table_mutations(rulebook, character_mutations, total_new_mutations, 'any_beneficial')

    #mental_drawback_mutations
    total_new_mutations = roll_dice(character_race['mental_drawback_roll_str'])
    if (total_new_mutations > 0):
        character_mutations = append_table_mutations(rulebook, character_mutations, total_new_mutations, 'mental_drawback')

    #physical_drawback_mutations
    total_new_mutations = roll_dice(character_race['physical_drawback_roll_str'])
    if (total_new_mutations > 0):
        character_mutations = append_table_mutations(rulebook, character_mutations, total_new_mutations, 'physical_drawback')

    #any_mutations
    total_new_mutations = roll_dice(character_race['random_any_roll_str'])
    if (total_new_mutations > 0):        
        character_mutations = append_table_mutations(rulebook, character_mutations, total_new_mutations, 'any')

    #special_animal_mutations
    total_new_mutations = roll_dice(character_race['special_animal_roll_str'])
    if (total_new_mutations > 0):
        character_mutations = append_random_special_mutations(character_mutations, total_new_mutations, rulebook['specialAnimalMutationRolls'], rulebook)

    #special_insect_mutations
    total_new_mutations = roll_dice(character_race['special_insect_roll_str'])
    if (total_new_mutations > 0):
        character_mutations = append_random_special_mutations(character_mutations, total_new_mutations, rulebook['specialInsectMutationRolls'], rulebook)

    return character_mutations


def append_table_mutations(rulebook, character_mutations, total_new_mutations, mutation_table):
        mutation_count = 0

        while mutation_count < total_new_mutations:
            new_mutation = None
            match mutation_table:
                case 'mental':
                    table = rulebook['mentalMutationRolls']
                    d100_roll = random.randint(1, 100)
                    mutation_row = list(filter(lambda roll_row: d100_roll == roll_row['fields']['roll'], table))[0]
                    new_mutation_pk = mutation_row['fields']['advanced_result']
                    mutation = get_mutation_by_pk(rulebook, new_mutation_pk)

                case 'physical':
                    table = rulebook['physicalMutationRolls']
                    d100_roll = random.randint(1, 100)
                    mutation_row = list(filter(lambda roll_row: d100_roll == roll_row['fields']['roll'], table))[0]
                    new_mutation_pk = mutation_row['fields']['advanced_result']
                    mutation = get_mutation_by_pk(rulebook, new_mutation_pk)

                case 'plant':
                    table = rulebook['plantMutationRolls']
                    d100_roll = random.randint(1, 100)
                    mutation_row = list(filter(lambda roll_row: d100_roll == roll_row['fields']['roll'], table))[0]
                    new_mutation_pk = mutation_row['fields']['advanced_result']
                    mutation = get_mutation_by_pk(rulebook, new_mutation_pk)

                case 'human_animal':
                    table = random.choice([rulebook['mentalMutationRolls'], rulebook['physicalMutationRolls']])
                    d100_roll = random.randint(1, 100)
                    mutation_row = list(filter(lambda roll_row: d100_roll == roll_row['fields']['roll'], table))[0]
                    new_mutation_pk = mutation_row['fields']['advanced_result']
                    mutation = get_mutation_by_pk(rulebook, new_mutation_pk)

                case 'any_beneficial':
                    while True:
                        table = random.choice([rulebook['mentalMutationRolls'], rulebook['physicalMutationRolls'], rulebook['plantMutationRolls']])
                        d100_roll = random.randint(1, 100)
                        mutation_row = list(filter(lambda roll_row: d100_roll == roll_row['fields']['roll'], table))[0]
                        new_mutation_pk = mutation_row['fields']['advanced_result']
                        mutation = get_mutation_by_pk(rulebook, new_mutation_pk)
                        if mutation['fields']['effect_type'] == 'benefit':
                            break

                case 'mental_drawback':
                    table = rulebook['mentalMutationRolls']
                    while True:
                        d100_roll = random.randint(1, 100)
                        mutation_row = list(filter(lambda roll_row: d100_roll == roll_row['fields']['roll'], table))[0]
                        new_mutation_pk = mutation_row['fields']['advanced_result']
                        mutation = get_mutation_by_pk(rulebook, new_mutation_pk)
                        if mutation['fields']['effect_type'] == 'drawback':
                            break

                case 'physical_drawback':
                    table = rulebook['physicalMutationRolls']
                    while True:
                        d100_roll = random.randint(1, 100)
                        mutation_row = list(filter(lambda roll_row: d100_roll == roll_row['fields']['roll'], table))[0]
                        new_mutation_pk = mutation_row['fields']['advanced_result']
                        mutation = get_mutation_by_pk(rulebook, new_mutation_pk)
                        if mutation['fields']['effect_type'] == 'drawback':
                            break

                case 'any':
                    table = random.choice([rulebook['mentalMutationRolls'], rulebook['physicalMutationRolls'], rulebook['plantMutationRolls']])
                    d100_roll = random.randint(1, 100)
                    mutation_row = list(filter(lambda roll_row: d100_roll == roll_row['fields']['roll'], table))[0]
                    new_mutation_pk = mutation_row['fields']['advanced_result']
                    mutation = get_mutation_by_pk(rulebook, new_mutation_pk)

            mutation_name = get_full_mutation_name(mutation)
            if mutation_name not in character_mutations and mutation['fields']['pc_eligible'] == True:
                character_mutations.append(mutation_name)
                mutation_count += 1


        return character_mutations


def append_random_special_mutations(character_mutations, total_new_mutations, mutation_list, rulebook):
        mutation_count = 0
        while mutation_count < total_new_mutations:
            random_mutation_pk = random.choice(mutation_list)['fields']['mutation']
            random_mutation = get_mutation_by_pk(rulebook, random_mutation_pk)
            mutation_name = get_full_mutation_name(random_mutation)
            if mutation_name not in character_mutations and random_mutation['fields']['pc_eligible'] == True:
                character_mutations.append(mutation_name)
                mutation_count += 1

        return character_mutations


def get_full_mutation_name(mutation):
    return f"{mutation['fields']['name']} ({mutation['fields']['type']}, {mutation['fields']['effect_type']}, {mutation['fields']['page_number']})"


def roll_dice(roll_str):
    if 'd' in roll_str.lower():
        total = 0
        num_dice, num_sides = roll_str.split('d')
        num_dice = int(num_dice)
        num_sides = int(num_sides)

        for _ in range(0, num_dice):
            total += random.randint(1,num_sides)
        
        return total
    else:
        return int(roll_str)
    

def get_rulebook(json_file_path):
    try:
        with open(json_file_path, 'r') as f:
            data = json.load(f)
            return data[0]
    except FileNotFoundError:
        raise


def get_mod_by_attr_value(attribute_table, mod_name, value):
    value_row = list(filter(lambda row : row['fields']['value'] == value, attribute_table))[0]
    return value_row['fields'][mod_name]


def get_hit_points(race, constitution_value):
    fixed_hp_races = ['synthetic android', 'basic android']
    if race['name'].lower() in fixed_hp_races:
        return 50
    else:
        sides = race['hit_dice_sides']
        return roll_dice(f'{constitution_value}d{sides}')
    

def get_splat_sheet_string(characters, player_name='', for_html=False):
    splat_sheet_contents = 'MUTANT FUTURE CHARACTER SPLAT'
    if player_name != '':
        splat_sheet_contents += f' FOR PLAYER {player_name.upper()}'
    splat_sheet_contents += '\n\n'

    chararacter_number = 1
    for character in characters:
        splat_sheet_contents += f'---------------start record {chararacter_number:02d} of {len(characters):02d}---------------\n'
        splat_sheet_contents += f'{character.alignment} {character.race["name"].replace(" (Advanced)","")}'

        for background in character.backgrounds:
            splat_sheet_contents += f' {background["name"]}'
        splat_sheet_contents += f'\n\n'

        splat_sheet_contents += f'Race: {character.race["name"]} ({character.race["page_number"]})\n\n'

        splat_sheet_contents += f'Backgrounds:\n'
        for background in character.backgrounds:
            splat_sheet_contents += f'--{background["name"]}: 1\n'
            
        splat_sheet_contents += f'\n'
        splat_sheet_contents += f'Alignment: {character.alignment}\n'

        splat_sheet_contents += '\n'
        splat_sheet_contents += f'Strength: {character.strength}\n'
        splat_sheet_contents += f'--Strength Mod: {character.strength_mod}\n'
        splat_sheet_contents += f'--Damage Mod: {character.damage_mod}\n'
        splat_sheet_contents += '\n'
        splat_sheet_contents += f'Dexterity: {character.dexterity}\n'
        splat_sheet_contents += f'-- AC Mod: {character.ac_mod}\n'
        splat_sheet_contents += f'-- Missile Mod: {character.missile_mod}\n'
        splat_sheet_contents += f'-- Init Mod: {character.init_mod}\n'
        splat_sheet_contents += '\n'
        splat_sheet_contents += f'Constitution: {character.constitution}\n'
        splat_sheet_contents += f'--Poison Save Mod: {character.poison_death_mod}\n'
        splat_sheet_contents += f'--Radiation Save Mod: {character.radiation_mod}\n'
        splat_sheet_contents += '\n'
        splat_sheet_contents += f'Intelligence: {character.intelligence}\n'
        splat_sheet_contents += f'--Technology Mod: {character.technology_mod}\n'
        splat_sheet_contents += '\n'
        splat_sheet_contents += f'Willpower: {character.willpower}\n'
        splat_sheet_contents += '\n'
        splat_sheet_contents += f'Charisma: {character.charisma}\n'
        splat_sheet_contents += f'--Reaction Mod: {character.reaction_mod}\n'
        splat_sheet_contents += f'--Retainers: {character.retainers}\n'
        splat_sheet_contents += f'--Retainer Morale: {character.retainer_morale}\n'
        splat_sheet_contents += '\n'
        splat_sheet_contents += f'Hit Points: {character.hit_points}\n'
        splat_sheet_contents += '\n'

        if len(character.mutations) > 0:
            splat_sheet_contents += f'Mutations:\n'
            for mutation in character.mutations:
                splat_sheet_contents += f'--{mutation}\n'
        else:
            splat_sheet_contents += f'Mutations: None\n'

        splat_sheet_contents += '\n'
        splat_sheet_contents += f'Feat: {character.feats["name"]} ({character.feats["page_number"]})\n'
        splat_sheet_contents += f'\n'
        splat_sheet_contents += f'Gold: {character.gold}\n'
        splat_sheet_contents += f'\n'
        splat_sheet_contents += f'Saving Throws\n'
        splat_sheet_contents += f'--Energy Save: {character.energy_save}\n'
        splat_sheet_contents += f'--Poison/Death Save: {character.poison_death_save}\n'
        splat_sheet_contents += f'--Stun Save: {character.stun_save}\n'
        splat_sheet_contents += f'--Radiation Save: {character.radiation_save}\n'
        splat_sheet_contents += f'\n'
        splat_sheet_contents += f'----------------end record {chararacter_number:02d} of {len(characters):02d}----------------\n'
        splat_sheet_contents += f'\n'
        chararacter_number += 1

    if for_html:
        splat_sheet_contents = splat_sheet_contents.replace('\n','<br>')

    return splat_sheet_contents
        

def create_characters_file(characters, player_name):
    with open(f'splat_sheets/characters_splat_{player_name}_{datetime.now():%Y-%m-%d_%H-%m-%d}.txt', 'w') as text_file:
        text_file_contents = get_splat_sheet_string(characters)
        text_file.write(text_file_contents)


if __name__ == '__main__':
    main()