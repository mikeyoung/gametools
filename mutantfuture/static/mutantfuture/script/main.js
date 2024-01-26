// class CharacterBase:
//     def __init__(self):
//         pass
    
//     @classmethod
//     def format_mod(cls, mod_value):
//         if mod_value > 0:
//             return f'+{str(mod_value)}' 
//         else:
//             return str(mod_value)
        

//     # Race        
//     @property
//     def race(self):
//         """Race"""
//         return self._race

//     @race.setter
//     def race(self, value):
//         self._race = value

//     # Alignment
//     @property
//     def alignment(self):
//         """Alignment"""
//         return self._alignment

//     @alignment.setter
//     def alignment(self, value):
//         self._alignment = value

//     # Hit Points
//     @property
//     def hit_points(self):
//         """Hit Points"""
//         return self._hit_points

//     @hit_points.setter
//     def hit_points(self, value):
//         self._hit_points = value

//     #Armor Class
//     @property
//     def armor_class(self):
//         """Armor Class"""
//         return self._armor_class

//     @armor_class.setter
//     def armor_class(self, value):
//         self._armor_class = value

//     #Strength
//     @property
//     def strength(self):
//         """Strength"""
//         return self._strength
    
//     @strength.setter
//     def strength(self, value):
//         self._strength = value
    
//     @property
//     def strength_mod(self):
//         """Strength Modifier"""
//         return CharacterBase.format_mod(self._strength_mod)
    
//     @strength_mod.setter
//     def strength_mod(self, value):
//         self._strength_mod = value

//     @property
//     def damage_mod(self):
//         """Damage Modifier"""
//         return CharacterBase.format_mod(self._damage_mod)
    
//     @damage_mod.setter
//     def damage_mod(self, value):
//         self._damage_mod = value

//     #Dexterity
//     @property
//     def dexterity(self):
//         """Dexterity"""
//         return self._dexterity

//     @dexterity.setter
//     def dexterity(self, value):
//         self._dexterity = value

//     @property
//     def ac_mod(self):
//         """Armor Class Modifier"""
//         return CharacterBase.format_mod(self._ac_mod)
    
//     @ac_mod.setter
//     def ac_mod(self, value):
//         self._ac_mod = value

//     @property
//     def missile_mod(self):
//         """Missile Attack Modifier"""
//         return CharacterBase.format_mod(self._missle_mod)
    
//     @missile_mod.setter
//     def missile_mod(self, value):
//         self._missle_mod = value

//     @property
//     def init_mod(self):
//         return CharacterBase.format_mod(self._init_mod)
    
//     @init_mod.setter
//     def init_mod(self, value):
//         self._init_mod = value
        

//     #Constitution
//     @property
//     def constitution(self):
//         """Constitution"""
//         return self._constitution

//     @constitution.setter
//     def constitution(self, value):
//         self._constitution = value

//     @property
//     def poison_death_mod(self):
//         """Poison Save Modifier"""
//         return CharacterBase.format_mod(self._poison_death_mod)
    
//     @poison_death_mod.setter
//     def poison_death_mod(self, value):
//         self._poison_death_mod = value

//     @property
//     def radiation_mod(self):
//         """Radiation Save Modifier"""
//         return CharacterBase.format_mod(self._radiation_mod)
    
//     @radiation_mod.setter
//     def radiation_mod(self, value):
//         self._radiation_mod = value


//     #Intelligence
//     @property
//     def intelligence(self):
//         """Intelligence"""
//         return self._intelligence

//     @intelligence.setter
//     def intelligence(self, value):
//         self._intelligence = value

//     @property
//     def technology_mod(self):
//         """Technology Modifier"""
//         return f'{CharacterBase.format_mod(self._technology_mod)}%'

//     @technology_mod.setter
//     def technology_mod(self, value):
//         self._technology_mod = value

//     #Willpower
//     @property
//     def willpower(self):
//         """Willpower"""
//         return self._willpower

//     @willpower.setter
//     def willpower(self, value):
//         self._willpower = value

//     #Charisma
//     @property
//     def charisma(self):
//         """Charisma"""
//         return self._charisma

//     @charisma.setter
//     def charisma(self, value):
//         self._charisma = value

//     @property
//     def reaction_mod(self):
//         """Reaction Modifier"""
//         return CharacterBase.format_mod(self._reaction_mod)
    
//     @reaction_mod.setter
//     def reaction_mod(self, value):
//         self._reaction_mod = value

//     @property
//     def retainers(self):
//         """Max Retainers"""
//         return self._retainers    

//     @retainers.setter
//     def retainers(self, value):
//         self._retainers = value

//     @property
//     def retainer_morale(self):
//         """Retainer Morale"""
//         return self._retainer_morale    

//     @retainer_morale.setter
//     def retainer_morale(self, value):
//         self._retainer_morale = value


//     #Saving Throws
//     @property
//     def energy_save(self):
//         """Energy Saving Throw"""
//         return self._energy_save
    
//     @energy_save.setter
//     def energy_save(self, value):
//         self._energy_save = value

//     @property
//     def poison_death_save(self):
//         """Poison & Death Saving Throw"""
//         return self._poison_death_save
    
//     @poison_death_save.setter
//     def poison_death_save(self, value):
//         self._poison_death_save = value

//     @property
//     def stun_save(self):
//         """Stun Saving Throw"""
//         return self._stun_save
    
//     @stun_save.setter
//     def stun_save(self, value):
//         self._stun_save = value

//     @property
//     def radiation_save(self):
//         """Radiation Saving Throw"""
//         return self._radiation_save

//     @radiation_save.setter
//     def radiation_save(self, value):
//         self._radiation_save = value

//     @property
//     def thac0(self):
//         """THAC0"""
//         return self._thac0
    
//     @thac0.setter
//     def thac0(self, value):
//         self._thac0 = value

//     @property
//     def gold(self):
//         """Gold"""
//         return self._gold
    
//     @gold.setter
//     def gold(self, value):
//         self._gold = value
    
//     @property
//     def mutations(self):
//         """Mutations List"""
//         return self._mutations
    
//     @mutations.setter
//     def mutations(self, value):
//         self._mutations = value
    
//     @property
//     def feats(self):
//         """Feats List"""
//         return self._feats
    
//     @feats.setter
//     def feats(self, value):
//         self._feats = value
    
//     @property
//     def backgrounds(self):
//         """Backgrounds List"""
//         return self._backgrounds
    
//     @backgrounds.setter
//     def backgrounds(self, value):
//         self._backgrounds = value

































// from mutantfuture.characters import CharacterBase
// import random
// import json
// from config import RULEBOOK_PATH, ALIGNMENTS, SPLAT_COUNT
// from datetime import datetime
// import sys


// def main():
//     player_name = None

//     while True:
//         while True:
//             player_name = input('Provide player name or [ENTER] to quit: ').strip()
//             if player_name == '':
//                 print('Goodbye.\n')
//                 sys.exit(0)

//             if len(player_name) > 12:
//                 print('Max 12 characters for player name please.\n')
//                 continue
                
//             if not player_name.isalnum():
//                 print('Alphanumeric characters only please.\n')
//                 continue

//             break

//         characters = []

//         for _ in range(0, SPLAT_COUNT):
//             new_character = get_random_character()
//             characters.append(new_character)

//         create_characters_file(characters, player_name)


// def get_random_character():
//     rulebook = get_rulebook(RULEBOOK_PATH)
//     character = CharacterBase()

//     #strength
//     character.strength = roll_dice('3d6')
//     character.strength_mod = get_mod_by_attr_value(rulebook['strengthModSets'], 'str_mod', character.strength)
//     character.damage_mod = get_mod_by_attr_value(rulebook['strengthModSets'], 'dmg_mod', character.strength)

//     #dexterity
//     character.dexterity = roll_dice('3d6')
//     character.ac_mod = get_mod_by_attr_value(rulebook['dexterityModSets'], 'ac_mod', character.dexterity)
//     character.missile_mod = get_mod_by_attr_value(rulebook['dexterityModSets'], 'missile_mod', character.dexterity)
//     character.init_mod = get_mod_by_attr_value(rulebook['dexterityModSets'], 'init_mod', character.dexterity)

//     #constitution
//     character.constitution = roll_dice('3d6')
//     character.poison_death_mod = get_mod_by_attr_value(rulebook['constitutionModSets'], 'poison_death_mod', character.constitution)
//     character.radiation_mod = get_mod_by_attr_value(rulebook['constitutionModSets'], 'radiation_mod', character.constitution)

//     #intelligence
//     character.intelligence = roll_dice('3d6')
//     character.technology_mod = get_mod_by_attr_value(rulebook['intelligenceModSets'], 'tech_mod', character.intelligence)

//     #willpower
//     character.willpower = roll_dice('3d6')

//     #charisma
//     character.charisma = roll_dice('3d6')
//     character.reaction_mod = get_mod_by_attr_value(rulebook['charismaModSets'], 'reaction_mod', character.charisma)
//     character.retainers = get_mod_by_attr_value(rulebook['charismaModSets'], 'retainers', character.charisma)
//     character.retainer_morale = get_mod_by_attr_value(rulebook['charismaModSets'], 'retainer_morale', character.charisma)

//     #saves
//     character.energy_save = 15
//     character.poison_death_save = 12
//     character.stun_save = 14
//     character.radiation_save = 13

//     #alignment
//     character.alignment = get_random_alignment()

//     #race
//     character.race = get_random_race(rulebook)

//     #mutations
//     character.mutations = get_character_mutations(rulebook, character.race)

//     #feats
//     character.feats = random.choice(rulebook['feats'])['fields']

//     #backgrounds
//     character.backgrounds = random.choice(rulebook['backgrounds'])['fields']

//     #thac0
//     character.thac0 = 19

//     #gold
//     character.gold = 10 * roll_dice('3d8')

//     #hit points
//     character.hit_points = get_hit_points(character.race, character.constitution)
    
//     return character


// def get_random_alignment():
//     return random.choice(ALIGNMENTS)


// def get_random_race(rulebook):
//     #filter out base versions for now
//     filtered_races = list(filter(lambda race : '(base)' not in race['fields']['name'].lower(), rulebook['races']))
//     return random.choice(filtered_races)['fields']


// def get_mutation_by_pk(rulebook, mutation_id):
//     all_mutations = rulebook['mutations']
//     return list(filter(lambda mutation: mutation['pk'] == mutation_id, all_mutations))[0]


// def get_character_mutations(rulebook, character_race):
//     character_mutations = []

//     #mental mutations
//     total_new_mutations = roll_dice(character_race['mental_mutations_roll_str'])
//     if (total_new_mutations > 0):
//         character_mutations = append_table_mutations(rulebook, character_mutations, total_new_mutations, 'mental')

//     #physical mutations
//     total_new_mutations = roll_dice(character_race['physical_mutations_roll_str'])
//     if (total_new_mutations > 0):
//         character_mutations = append_table_mutations(rulebook, character_mutations, total_new_mutations, 'physical')

//     #plant_mutations
//     total_new_mutations = roll_dice(character_race['plant_mutations_roll_str'])
//     if (total_new_mutations > 0):        
//         character_mutations = append_table_mutations(rulebook, character_mutations, total_new_mutations, 'plant')

//     #human_animal_mutations
//     total_new_mutations = roll_dice(character_race['random_human_animal_roll_str'])
//     if (total_new_mutations > 0):        
//         character_mutations = append_table_mutations(rulebook, character_mutations, total_new_mutations, 'human_animal')

//     #beneficial_any_mutations
//     total_new_mutations = roll_dice(character_race['random_beneficial_any_roll_str'])
//     if (total_new_mutations > 0):        
//         character_mutations = append_table_mutations(rulebook, character_mutations, total_new_mutations, 'any_beneficial')

//     #mental_drawback_mutations
//     total_new_mutations = roll_dice(character_race['mental_drawback_roll_str'])
//     if (total_new_mutations > 0):
//         character_mutations = append_table_mutations(rulebook, character_mutations, total_new_mutations, 'mental_drawback')

//     #physical_drawback_mutations
//     total_new_mutations = roll_dice(character_race['physical_drawback_roll_str'])
//     if (total_new_mutations > 0):
//         character_mutations = append_table_mutations(rulebook, character_mutations, total_new_mutations, 'physical_drawback')

//     #any_mutations
//     total_new_mutations = roll_dice(character_race['random_any_roll_str'])
//     if (total_new_mutations > 0):        
//         character_mutations = append_table_mutations(rulebook, character_mutations, total_new_mutations, 'any')

//     #special_animal_mutations
//     total_new_mutations = roll_dice(character_race['special_animal_roll_str'])
//     if (total_new_mutations > 0):
//         character_mutations = append_random_special_mutations(character_mutations, total_new_mutations, rulebook['specialAnimalMutationRolls'], rulebook)

//     #special_insect_mutations
//     total_new_mutations = roll_dice(character_race['special_insect_roll_str'])
//     if (total_new_mutations > 0):
//         character_mutations = append_random_special_mutations(character_mutations, total_new_mutations, rulebook['specialInsectMutationRolls'], rulebook)

//     return character_mutations


// def append_table_mutations(rulebook, character_mutations, total_new_mutations, mutation_table):
//         mutation_count = 0

//         while mutation_count < total_new_mutations:
//             new_mutation = None
//             match mutation_table:
//                 case 'mental':
//                     table = rulebook['mentalMutationRolls']
//                     d100_roll = random.randint(1, 100)
//                     mutation_row = list(filter(lambda roll_row: d100_roll == roll_row['fields']['roll'], table))[0]
//                     new_mutation_pk = mutation_row['fields']['advanced_result']
//                     mutation = get_mutation_by_pk(rulebook, new_mutation_pk)

//                 case 'physical':
//                     table = rulebook['physicalMutationRolls']
//                     d100_roll = random.randint(1, 100)
//                     mutation_row = list(filter(lambda roll_row: d100_roll == roll_row['fields']['roll'], table))[0]
//                     new_mutation_pk = mutation_row['fields']['advanced_result']
//                     mutation = get_mutation_by_pk(rulebook, new_mutation_pk)

//                 case 'plant':
//                     table = rulebook['plantMutationRolls']
//                     d100_roll = random.randint(1, 100)
//                     mutation_row = list(filter(lambda roll_row: d100_roll == roll_row['fields']['roll'], table))[0]
//                     new_mutation_pk = mutation_row['fields']['advanced_result']
//                     mutation = get_mutation_by_pk(rulebook, new_mutation_pk)

//                 case 'human_animal':
//                     table = random.choice([rulebook['mentalMutationRolls'], rulebook['physicalMutationRolls']])
//                     d100_roll = random.randint(1, 100)
//                     mutation_row = list(filter(lambda roll_row: d100_roll == roll_row['fields']['roll'], table))[0]
//                     new_mutation_pk = mutation_row['fields']['advanced_result']
//                     mutation = get_mutation_by_pk(rulebook, new_mutation_pk)

//                 case 'any_beneficial':
//                     while True:
//                         table = random.choice([rulebook['mentalMutationRolls'], rulebook['physicalMutationRolls'], rulebook['plantMutationRolls']])
//                         d100_roll = random.randint(1, 100)
//                         mutation_row = list(filter(lambda roll_row: d100_roll == roll_row['fields']['roll'], table))[0]
//                         new_mutation_pk = mutation_row['fields']['advanced_result']
//                         mutation = get_mutation_by_pk(rulebook, new_mutation_pk)
//                         if mutation['fields']['effect_type'] == 'benefit':
//                             break

//                 case 'mental_drawback':
//                     table = rulebook['mentalMutationRolls']
//                     while True:
//                         d100_roll = random.randint(1, 100)
//                         mutation_row = list(filter(lambda roll_row: d100_roll == roll_row['fields']['roll'], table))[0]
//                         new_mutation_pk = mutation_row['fields']['advanced_result']
//                         mutation = get_mutation_by_pk(rulebook, new_mutation_pk)
//                         if mutation['fields']['effect_type'] == 'drawback':
//                             break

//                 case 'physical_drawback':
//                     table = rulebook['physicalMutationRolls']
//                     while True:
//                         d100_roll = random.randint(1, 100)
//                         mutation_row = list(filter(lambda roll_row: d100_roll == roll_row['fields']['roll'], table))[0]
//                         new_mutation_pk = mutation_row['fields']['advanced_result']
//                         mutation = get_mutation_by_pk(rulebook, new_mutation_pk)
//                         if mutation['fields']['effect_type'] == 'drawback':
//                             break

//                 case 'any':
//                     table = random.choice([rulebook['mentalMutationRolls'], rulebook['physicalMutationRolls'], rulebook['plantMutationRolls']])
//                     d100_roll = random.randint(1, 100)
//                     mutation_row = list(filter(lambda roll_row: d100_roll == roll_row['fields']['roll'], table))[0]
//                     new_mutation_pk = mutation_row['fields']['advanced_result']
//                     mutation = get_mutation_by_pk(rulebook, new_mutation_pk)

//             mutation_name = get_full_mutation_name(mutation)
//             if mutation_name not in character_mutations:
//                 character_mutations.append(mutation_name)
//                 mutation_count += 1


//         return character_mutations


// def append_random_special_mutations(character_mutations, total_new_mutations, mutation_list, rulebook):
//         mutation_count = 0
//         while mutation_count < total_new_mutations:
//             random_mutation_pk = random.choice(mutation_list)['fields']['mutation']
//             random_mutation = get_mutation_by_pk(rulebook, random_mutation_pk)
//             mutation_name = get_full_mutation_name(random_mutation)
//             if mutation_name not in character_mutations:
//                 character_mutations.append(mutation_name)
//                 mutation_count += 1

//         return character_mutations


// def get_full_mutation_name(mutation):
//     return f"{mutation['fields']['name']} ({mutation['fields']['type']}, {mutation['fields']['effect_type']}, {mutation['fields']['page_number']})"


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
//     value_row = list(filter(lambda row : row['fields']['value'] == value, attribute_table))[0]
//     return value_row['fields'][mod_name]


// def get_hit_points(race, constitution_value):
//     fixed_hp_races = ['synthetic android', 'basic android']
//     if race['name'].lower() in fixed_hp_races:
//         return 50
//     else:
//         sides = race['hit_dice_sides']
//         return roll_dice(f'{constitution_value}d{sides}')
    

// def get_splat_sheet_string(characters, player_name='', for_html=False):
//     splat_sheet_contents = 'MUTANT FUTURE CHARACTER SPLAT'
//     if player_name != '':
//         splat_sheet_contents += f' FOR PLAYER {player_name.upper()}'
//     splat_sheet_contents += '\n\n'

//     chararacter_number = 1
//     for character in characters:
//         splat_sheet_contents += f'---------------start record {chararacter_number:02d} of {len(characters):02d}---------------\n'
//         splat_sheet_contents += f'{character.alignment} {character.race["name"].replace(" (Advanced)","")} {character.backgrounds["name"]}\n\n'
//         splat_sheet_contents += f'Race: {character.race["name"]} ({character.race["page_number"]})\n'
//         splat_sheet_contents += f'Background: {character.backgrounds["name"]}\n'
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