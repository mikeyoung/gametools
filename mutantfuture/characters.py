class CharacterBase:
    def __init__(self):
        pass
    
    @classmethod
    def format_mod(cls, mod_value):
        if mod_value > 0:
            return f'+{str(mod_value)}' 
        else:
            return str(mod_value)
        

    # Race        
    @property
    def race(self):
        """Race"""
        return self._race

    @race.setter
    def race(self, value):
        self._race = value

    # Alignment
    @property
    def alignment(self):
        """Alignment"""
        return self._alignment

    @alignment.setter
    def alignment(self, value):
        self._alignment = value

    # Hit Points
    @property
    def hit_points(self):
        """Hit Points"""
        return self._hit_points

    @hit_points.setter
    def hit_points(self, value):
        self._hit_points = value

    #Armor Class
    @property
    def armor_class(self):
        """Armor Class"""
        return self._armor_class

    @armor_class.setter
    def armor_class(self, value):
        self._armor_class = value

    #Strength
    @property
    def strength(self):
        """Strength"""
        return self._strength
    
    @strength.setter
    def strength(self, value):
        self._strength = value
    
    @property
    def strength_mod(self):
        """Strength Modifier"""
        return CharacterBase.format_mod(self._strength_mod)
    
    @strength_mod.setter
    def strength_mod(self, value):
        self._strength_mod = value

    @property
    def damage_mod(self):
        """Damage Modifier"""
        return CharacterBase.format_mod(self._damage_mod)
    
    @damage_mod.setter
    def damage_mod(self, value):
        self._damage_mod = value

    #Dexterity
    @property
    def dexterity(self):
        """Dexterity"""
        return self._dexterity

    @dexterity.setter
    def dexterity(self, value):
        self._dexterity = value

    @property
    def ac_mod(self):
        """Armor Class Modifier"""
        return CharacterBase.format_mod(self._ac_mod)
    
    @ac_mod.setter
    def ac_mod(self, value):
        self._ac_mod = value

    @property
    def missile_mod(self):
        """Missile Attack Modifier"""
        return CharacterBase.format_mod(self._missle_mod)
    
    @missile_mod.setter
    def missile_mod(self, value):
        self._missle_mod = value

    @property
    def init_mod(self):
        return CharacterBase.format_mod(self._init_mod)
    
    @init_mod.setter
    def init_mod(self, value):
        self._init_mod = value
        

    #Constitution
    @property
    def constitution(self):
        """Constitution"""
        return self._constitution

    @constitution.setter
    def constitution(self, value):
        self._constitution = value

    @property
    def poison_death_mod(self):
        """Poison Save Modifier"""
        return CharacterBase.format_mod(self._poison_death_mod)
    
    @poison_death_mod.setter
    def poison_death_mod(self, value):
        self._poison_death_mod = value

    @property
    def radiation_mod(self):
        """Radiation Save Modifier"""
        return CharacterBase.format_mod(self._radiation_mod)
    
    @radiation_mod.setter
    def radiation_mod(self, value):
        self._radiation_mod = value


    #Intelligence
    @property
    def intelligence(self):
        """Intelligence"""
        return self._intelligence

    @intelligence.setter
    def intelligence(self, value):
        self._intelligence = value

    @property
    def technology_mod(self):
        """Technology Modifier"""
        return f'{CharacterBase.format_mod(self._technology_mod)}%'

    @technology_mod.setter
    def technology_mod(self, value):
        self._technology_mod = value

    #Willpower
    @property
    def willpower(self):
        """Willpower"""
        return self._willpower

    @willpower.setter
    def willpower(self, value):
        self._willpower = value

    #Charisma
    @property
    def charisma(self):
        """Charisma"""
        return self._charisma

    @charisma.setter
    def charisma(self, value):
        self._charisma = value

    @property
    def reaction_mod(self):
        """Reaction Modifier"""
        return CharacterBase.format_mod(self._reaction_mod)
    
    @reaction_mod.setter
    def reaction_mod(self, value):
        self._reaction_mod = value

    @property
    def retainers(self):
        """Max Retainers"""
        return self._retainers    

    @retainers.setter
    def retainers(self, value):
        self._retainers = value

    @property
    def retainer_morale(self):
        """Retainer Morale"""
        return self._retainer_morale    

    @retainer_morale.setter
    def retainer_morale(self, value):
        self._retainer_morale = value


    #Saving Throws
    @property
    def energy_save(self):
        """Energy Saving Throw"""
        return self._energy_save

    @property
    def poison_death_save(self):
        """Poison & Death Saving Throw"""
        return self._poison_death_save

    @property
    def stun_save(self):
        """Stun Saving Throw"""
        return self._stun_save

    @property
    def radiation_save(self):
        """Radiation Saving Throw"""
        return self._radiation_save

    @property
    def thac0(self):
        """THAC0"""
        return self._thac0
    
    @property
    def gold(self):
        """Gold"""
        return self._gold
    
    @gold.setter
    def gold(self, value):
        self._gold = value
    
    @property
    def mutations(self):
        """Mutations List"""
        return self._mutations
    
    @mutations.setter
    def mutations(self, value):
        self._mutations = value
    
    @property
    def feats(self):
        """Feats List"""
        return self._feats
    
    @feats.setter
    def feats(self, value):
        self._feats = value
    
    @property
    def backgrounds(self):
        """Backgrounds List"""
        return self._backgrounds
    
    @backgrounds.setter
    def backgrounds(self, value):
        self._backgrounds = value