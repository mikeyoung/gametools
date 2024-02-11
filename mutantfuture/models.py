from django.db import models
from tinymce.models import HTMLField

class Race(models.Model):
    name = models.CharField(max_length=50)
    hit_dice_sides = models.IntegerField()
    page_number = models.CharField(max_length=10)
    description = HTMLField(null = True)

    #mutation rolls
    mental_mutations_roll_str = models.CharField(max_length = 12, default = 0)
    physical_mutations_roll_str = models.CharField(max_length = 12, default = 0)
    plant_mutations_roll_str = models.CharField(max_length = 12, default = 0)
    random_human_animal_roll_str = models.CharField(max_length = 12, default = 0)
    random_beneficial_any_roll_str = models.CharField(max_length = 12, default = 0)
    special_animal_roll_str = models.CharField(max_length = 12, default = 0)
    special_insect_roll_str = models.CharField(max_length = 12, default = 0)
    mental_drawback_roll_str = models.CharField(max_length = 12, default = 0)
    physical_drawback_roll_str = models.CharField(max_length = 12, default = 0)
    random_any_roll_str = models.CharField(max_length = 12, default = 0)

    source = models.CharField(max_length=12, default = 'base', choices = [
        ('base', 'Base'),
        ('advanced', 'Advanced'),
    ])

    def __str__(self):
        return f'{self.name} hit_die:{self.hit_dice_sides} ({self.page_number})'


class Mutation(models.Model):
    name = models.CharField(max_length=100)
    page_number = models.CharField(max_length=10)
    description = HTMLField(null = True)

    type = models.CharField(max_length=12, choices = [
        ('plant','Plant'),
        ('physical','Physical'),
        ('mental','Mental')
    ])

    source = models.CharField(max_length=12, default = 'base', choices = [
        ('base', 'Base'),
        ('advanced', 'Advanced'),
    ])

    effect_type = models.CharField(max_length=12, default = 'benefit', choices = [
        ('benefit', 'Benefit'),
        ('drawback', 'Drawback'),
    ])

    pc_eligible = models.BooleanField(default = True)

    def __str__(self):
        return f'{self.name} [{self.type}, {self.source}, {self.effect_type}] ({self.page_number})'

    # @property
    # def likes(self):
    #     return Like.objects.filter(post = self)


class Background(models.Model):
    name = models.CharField(max_length = 50)
    roll = models.IntegerField(null = True)

    def __str__(self):
        return self.name


class Feat(models.Model):
    name = models.CharField(max_length = 50)
    page_number = models.CharField(max_length=10)
    description = HTMLField(null = True)

    def __str__(self):
        return f'{self.name} ({self.page_number})'


class PhysicalMutationRoll(models.Model):
    roll = models.IntegerField(null = True, unique = True)
    base_result = models.ForeignKey(Mutation, on_delete=models.CASCADE, related_name="base_physical_mutation_rolls", null=True)
    advanced_result = models.ForeignKey(Mutation, on_delete=models.CASCADE, related_name="advanced_physical_mutation_rolls", null=True)

    def __str__(self):
        return f'{self.roll} b:{self.base_result.name} / a:{self.advanced_result.name}'


class MentalMutationRoll(models.Model):
    roll = models.IntegerField(null = True, unique = True)
    base_result = models.ForeignKey(Mutation, on_delete=models.CASCADE, related_name="base_mental_mutation_rolls", null=True)
    advanced_result = models.ForeignKey(Mutation, on_delete=models.CASCADE, related_name="advanced_mental_mutation_rolls", null=True)

    def __str__(self):
        return f'{self.roll} b:{self.base_result.name} / a:{self.advanced_result.name}'


class PlantMutationRoll(models.Model):
    roll = models.IntegerField(null = True, unique = True)
    base_result = models.ForeignKey(Mutation, on_delete=models.CASCADE, related_name="base_plant_mutation_rolls", null=True)
    advanced_result = models.ForeignKey(Mutation, on_delete=models.CASCADE, related_name="advanced_plant_mutation_rolls", null=True)    

    def __str__(self):
        return f'{self.roll} b:{self.base_result.name} / a:{self.advanced_result.name}'


class StrengthModSet(models.Model):
    value = models.IntegerField(unique = True)
    str_mod = models.IntegerField()
    dmg_mod = models.IntegerField()

    def __str__(self):
        return f'{self.value}: str_mod:{self.str_mod} dmg_mod:{self.dmg_mod}'


class DexterityModSet(models.Model):
    value = models.IntegerField(unique = True)
    ac_mod = models.IntegerField()
    missile_mod = models.IntegerField()
    init_mod = models.IntegerField()

    def __str__(self):
        return f'{self.value}: ac_mod:{self.ac_mod} missile_mod:{self.missile_mod} init_mod:{self.init_mod}'


class ConstitutionModSet(models.Model):
    value = models.IntegerField(unique = True)
    poison_death_mod = models.IntegerField()
    radiation_mod = models.IntegerField()

    def __str__(self):
        return f'{self.value}: poison_death_mod:{self.poison_death_mod} radiation_mod:{self.radiation_mod}'


class IntelligenceModSet(models.Model):
    value = models.IntegerField(unique = True)
    tech_mod = models.IntegerField()

    def __str__(self):
        return f'{self.value}: tech_mod:{self.tech_mod}'


class CharismaModSet(models.Model):
    value = models.IntegerField(unique = True)
    reaction_mod = models.IntegerField()
    retainers = models.IntegerField()
    retainer_morale = models.IntegerField()

    def __str__(self):
        return f'{self.value}: reaction_mod:{self.reaction_mod} retainers:{self.retainers} retainer_morale:{self.retainer_morale}'


class SpecialInsectMutationRoll(models.Model):
    roll = models.IntegerField()
    mutation = models.ForeignKey(Mutation, on_delete=models.CASCADE, related_name="special_insect_mutation_rolls", null=True)


class SpecialAnimalMutationRoll(models.Model):
    roll = models.IntegerField()
    mutation = models.ForeignKey(Mutation, on_delete=models.CASCADE, related_name="special_plant_mutation_rolls", null=True)    