# Generated by Django 5.0.1 on 2024-01-21 01:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mutantfuture', '0020_race_special_animal_str'),
    ]

    operations = [
        migrations.AddField(
            model_name='race',
            name='special_insect_str',
            field=models.CharField(default=0, max_length=12),
        ),
    ]
