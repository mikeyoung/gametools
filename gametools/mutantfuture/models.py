from django.db import models

class Race(models.Model):
    name = models.CharField(max_length=50)
    hit_dice_sides = models.IntegerField()
    page_number = models.CharField(max_length=10)

    source = models.CharField(max_length=12, default = 'base', choices = [
        ('base', 'Base'),
        ('advanced', 'Advanced'),
    ])


    def __str__(self):
        return f'{self.name} ({self.page_number})'
    
class Mutation(models.Model):
    name = models.CharField(max_length=100)
    page_number = models.CharField(max_length=10)

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
