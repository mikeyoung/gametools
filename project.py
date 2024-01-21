from mutantfuture.characters import CharacterBase
import random
import json
from config import RULEBOOK_PATH


def main():
    rulebook = get_rulebook(RULEBOOK_PATH)
    character = CharacterBase()
    character.strength = roll_dice('3d6')
    character.strength_mod = get_mod_by_attr_value(rulebook['strengthModSets'], 'str_mod', character.strength)
    character.dexterity = roll_dice('3d6')
    character.constitution = roll_dice('3d6')
    character.intelligence = roll_dice('3d6')
    character.willpower = roll_dice('3d6')
    character.charisma = roll_dice('3d6')
    character.race = random.choice(rulebook['races'])['fields']
    character.mutations = get_character_mutations(rulebook, character.race)
    character.feats = random.choice(rulebook['feats'])['fields']
    character.backgrounds = random.choice(rulebook['backgrounds'])['fields']
    
    print(f'Strength: {character.strength}')
    print(f'Strength Mod: {character.strength_mod}')
    print(f'Dexterity: {character.dexterity}')
    print(f'Constitution: {character.constitution}')
    print(f'Intelligence: {character.intelligence}')
    print(f'Willpower: {character.willpower}')
    print(f'Charisma: {character.charisma}')
    print(f"Race: {character.race['name']}")
    print(f'Mutations: {character.mutations}')
    print(f"Feat: {character.feats['name']} ({character.feats['page_number']})")
    print(f"Background: {character.backgrounds['name']}")


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
    mod_value = value_row['fields'][mod_name]
    if mod_value > 0:
        return f'+{str(mod_value)}' 
    else:
        return str(mod_value)


if __name__ == '__main__':
    main()