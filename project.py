from mutantfuture.characters import CharacterBase
import random
import json
from config import RULEBOOK_PATH, ALIGNMENTS


def main():
    characters = []

    for _ in range(0,4):
        new_character = get_random_character()
        print_character_stats(new_character)
        characters.append(new_character)

    print(characters)


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

    #misc
    character.alignment = random.choice(ALIGNMENTS)
    character.race = random.choice(rulebook['races'])['fields']
    character.mutations = get_character_mutations(rulebook, character.race)
    character.feats = random.choice(rulebook['feats'])['fields']
    character.backgrounds = random.choice(rulebook['backgrounds'])['fields']
    character.thac0 = 19
    character.gold = 10 * roll_dice('3d8')
    character.hit_points = get_hit_points(character.race, character.constitution)
    
    return character


def print_character_stats(character):
    print(f'Strength: {character.strength}')
    print(f'--Strength Mod: {character.strength_mod}')
    print(f'--Damage Mod: {character.damage_mod}')
    print()

    print(f'Dexterity: {character.dexterity}')
    print(f'-- AC Mod: {character.ac_mod}')
    print(f'-- Missile Mod: {character.missile_mod}')
    print(f'-- Init Mod: {character.init_mod}')
    print()

    print(f'Constitution: {character.constitution}')
    print(f'--Poison Save Mod: {character.poison_death_mod}')
    print(f'--Poison Save Mod: {character.radiation_mod}')
    print()

    print(f'Intelligence: {character.intelligence}')
    print(f'--Technology Mod: {character.technology_mod}')
    print()

    print(f'Willpower: {character.willpower}')
    print()

    print(f'Charisma: {character.charisma}')
    print(f'--Reaction Mod: {character.reaction_mod}')
    print(f'--Retainers: {character.retainers}')
    print(f'--Retainer Morale: {character.retainer_morale}')
    print()

    print(f'Alignment: {character.alignment}')
    print(f"Race: {character.race['name']}")
    print(f'Mutations: {character.mutations}')
    print(f"Feat: {character.feats['name']} ({character.feats['page_number']})")
    print(f"Background: {character.backgrounds['name']}")
    print(f'Gold: {character.gold}')
    print(f'Hit Points: {character.hit_points}')
    print(f'THAC0: {character.thac0}')
    print(f'Energy Save: {character.energy_save}')
    print(f'Poison/Death Save: {character.poison_death_save}')
    print(f'Stun Save: {character.stun_save}')
    print(f'Radiation Save: {character.radiation_save}')


def get_mutation_by_pk(rulebook, mutation_id):
    all_mutations = rulebook['mutations']
    return list(filter(lambda mutation: mutation['pk'] == mutation_id, all_mutations))[0]

def get_character_mutations(rulebook, character_race):
    all_mutations = rulebook['mutations']
    character_mutations = []

    #mental mutations
    total_mental_mutations = roll_dice(character_race['mental_mutations_roll_str'])
    if (total_mental_mutations > 0):
        mental_mutations = []
        for mutation in all_mutations:
            if mutation['fields']['type'] == 'mental':
                mental_mutations.append(mutation)
        
        mutation_count = 0
        while mutation_count < total_mental_mutations:
            mutation_name = get_full_mutation_name(random.choice(mental_mutations))
            if mutation_name not in character_mutations:
                character_mutations.append(mutation_name)
                mutation_count += 1
    

    #physical mutations
    total_physical_mutations = roll_dice(character_race['physical_mutations_roll_str'])
    if (total_physical_mutations > 0):
        physical_mutations = []
        for mutation in all_mutations:
            if mutation['fields']['type'] == 'physical':
                physical_mutations.append(mutation)
        
        mutation_count = 0
        while mutation_count < total_physical_mutations:
            mutation_name = get_full_mutation_name(random.choice(physical_mutations))
            if mutation_name not in character_mutations:
                character_mutations.append(mutation_name)
                mutation_count += 1


    #plant_mutations
    total_plant_mutations = roll_dice(character_race['plant_mutations_roll_str'])
    if (total_plant_mutations > 0):
        plant_mutations = []
        for mutation in all_mutations:
            if mutation['fields']['type'] == 'plant':
                plant_mutations.append(mutation)
        
        mutation_count = 0
        while mutation_count < total_plant_mutations:
            mutation_name = get_full_mutation_name(random.choice(plant_mutations))
            if mutation_name not in character_mutations:
                character_mutations.append(mutation_name)
                mutation_count += 1


    #random_human_animal_mutations
    total_random_human_animal_mutations = roll_dice(character_race['random_human_animal_roll_str'])
    if (total_random_human_animal_mutations > 0):
        random_human_animal_mutations = []
        for mutation in all_mutations:
            if mutation['fields']['type'] == 'mental' or mutation['fields']['type'] == 'physical':
                random_human_animal_mutations.append(mutation)
        
        mutation_count = 0
        while mutation_count < total_random_human_animal_mutations:
            mutation_name = get_full_mutation_name(random.choice(random_human_animal_mutations))
            if mutation_name not in character_mutations:
                character_mutations.append(mutation_name)
                mutation_count += 1


    #random_beneficial_any_mutations
    total_random_beneficial_any_mutations = roll_dice(character_race['random_beneficial_any_roll_str'])
    if (total_random_beneficial_any_mutations > 0):
        random_beneficial_any_mutations = []
        for mutation in all_mutations:
            if mutation['fields']['effect_type'] == 'benefit':
                random_beneficial_any_mutations.append(mutation)
        
        mutation_count = 0
        while mutation_count < total_random_beneficial_any_mutations:
            mutation_name = get_full_mutation_name(random.choice(random_beneficial_any_mutations))
            if mutation_name not in character_mutations:
                character_mutations.append(mutation_name)
                mutation_count += 1


    #special_animal_mutations
    total_special_animal_mutations = roll_dice(character_race['special_animal_roll_str'])
    if (total_special_animal_mutations > 0):
        special_animal_mutations = rulebook['specialAnimalMutationRolls']
                
        mutation_count = 0
        while mutation_count < total_special_animal_mutations:
            random_mutation_pk = random.choice(special_animal_mutations)['fields']['mutation']
            random_mutation = get_mutation_by_pk(rulebook, random_mutation_pk)
            mutation_name = get_full_mutation_name(random_mutation)
            if mutation_name not in character_mutations:
                character_mutations.append(mutation_name)
                mutation_count += 1


    #special_insect_mutations
    total_special_insect_mutations = roll_dice(character_race['special_insect_roll_str'])
    if (total_special_insect_mutations > 0):
        special_insect_mutations = rulebook['specialInsectMutationRolls']

        mutation_count = 0
        while mutation_count < total_special_insect_mutations:
            random_mutation_pk = random.choice(special_insect_mutations)['fields']['mutation']
            random_mutation = get_mutation_by_pk(rulebook, random_mutation_pk)
            mutation_name = get_full_mutation_name(random_mutation)
            if mutation_name not in character_mutations:
                character_mutations.append(mutation_name)
                mutation_count += 1


    #mental_drawback_mutations
    total_mental_drawback_mutations = roll_dice(character_race['mental_drawback_roll_str'])
    if (total_mental_drawback_mutations > 0):
        mental_drawback_mutations = []
        for mutation in all_mutations:
            if mutation['fields']['effect_type'] == 'drawback' and mutation['fields']['type'] == 'mental':
                mental_drawback_mutations.append(mutation)
        
        mutation_count = 0
        while mutation_count < total_mental_drawback_mutations:
            mutation_name = get_full_mutation_name(random.choice(mental_drawback_mutations))
            if mutation_name not in character_mutations:
                character_mutations.append(mutation_name)
                mutation_count += 1


    #physical_drawback_mutations
    total_physical_drawback_mutations = roll_dice(character_race['physical_drawback_roll_str'])
    if (total_physical_drawback_mutations > 0):
        physical_drawback_mutations = []
        for mutation in all_mutations:
            if mutation['fields']['effect_type'] == 'drawback' and mutation['fields']['type'] == 'physical':
                physical_drawback_mutations.append(mutation)
        
        mutation_count = 0
        while mutation_count < total_physical_drawback_mutations:
            mutation_name = get_full_mutation_name(random.choice(physical_drawback_mutations))
            if mutation_name not in character_mutations:
                character_mutations.append(mutation_name)
                mutation_count += 1


    #random_any_mutations
    total_random_any_mutations = roll_dice(character_race['random_any_roll_str'])
    if (total_random_any_mutations > 0):
        
        mutation_count = 0
        while mutation_count < total_random_any_mutations:
            mutation_name = get_full_mutation_name(random.choice(all_mutations))
            if mutation_name not in character_mutations:
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

        for _ in range(1, num_dice+1):
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

if __name__ == '__main__':
    main()