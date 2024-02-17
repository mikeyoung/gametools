import json
from django.http import JsonResponse
from django.shortcuts import render
from django.urls import reverse
from django.contrib.auth.decorators import login_required
import os
from gametools.settings import BASE_DIR
from . import models
from django.core import serializers
from django.forms.models import model_to_dict

def index(request):
    return render(request, 'mutantfuture/index.html')

@login_required
def create_json(request):
    try: 
        rulebook = {
            'rulebook': {
                'races': json.loads(serializers.serialize('json', models.Race.objects.all())),
                'mutations': json.loads(serializers.serialize('json', models.Mutation.objects.all())),
                'feats': json.loads(serializers.serialize('json', models.Feat.objects.all())),
                'backgrounds': json.loads(serializers.serialize('json', models.Background.objects.all())),
                'physicalMutationRolls': json.loads(serializers.serialize('json', models.PhysicalMutationRoll.objects.all())),
                'mentalMutationRolls': json.loads(serializers.serialize('json', models.MentalMutationRoll.objects.all())),
                'plantMutationRolls': json.loads(serializers.serialize('json', models.PlantMutationRoll.objects.all())),
                'strengthModSets': json.loads(serializers.serialize('json', models.StrengthModSet.objects.all())),
                'dexterityModSets': json.loads(serializers.serialize('json', models.DexterityModSet.objects.all())),
                'constitutionModSets': json.loads(serializers.serialize('json', models.ConstitutionModSet.objects.all())),
                'intelligenceModSets': json.loads(serializers.serialize('json', models.IntelligenceModSet.objects.all())),
                'charismaModSets': json.loads(serializers.serialize('json', models.CharismaModSet.objects.all())),
                'specialInsectMutationRolls': json.loads(serializers.serialize('json', models.SpecialInsectMutationRoll.objects.all())),
                'specialAnimalMutationRolls': json.loads(serializers.serialize('json', models.SpecialAnimalMutationRoll.objects.all())),
                'poisonClassRolls': json.loads(serializers.serialize('json', models.PoisonClassRoll.objects.all())),
            },
        }
        
        file_path = os.path.join(BASE_DIR, 'mutantfuture/static/mutantfuture/json/rulebook.json')

        with open(file_path, 'w') as file:
            json.dump(list(rulebook.values()), file)

        return JsonResponse({'success': True}, status=201)
    
    except:
        raise