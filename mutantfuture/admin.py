from django.contrib import admin

from mutantfuture import models

# Register your models here.
admin.site.register(models.Race)
admin.site.register(models.Mutation)
admin.site.register(models.Background)
admin.site.register(models.Feat)
admin.site.register(models.PhysicalMutationRoll)
admin.site.register(models.MentalMutationRoll)
admin.site.register(models.PlantMutationRoll)
admin.site.register(models.CharismaModSet)
admin.site.register(models.ConstitutionModSet)
admin.site.register(models.DexterityModSet)
admin.site.register(models.IntelligenceModSet)
admin.site.register(models.StrengthModSet)
admin.site.register(models.SpecialInsectMutationRoll)
admin.site.register(models.SpecialAnimalMutationRoll)
admin.site.register(models.PoisonClassRoll)