from django.contrib import admin

from mutantfuture.models import Race, Mutation, Background, Feat, PhysicalMutationRoll, MentalMutationRoll, PlantMutationRoll

# Register your models here.
admin.site.register(Race)
admin.site.register(Mutation)
admin.site.register(Background)
admin.site.register(Feat)
admin.site.register(PhysicalMutationRoll)
admin.site.register(MentalMutationRoll)
admin.site.register(PlantMutationRoll)