# Generated by Django 5.0.1 on 2024-01-21 02:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mutantfuture', '0024_race_physical_drawback_roll_str'),
    ]

    operations = [
        migrations.AddField(
            model_name='race',
            name='random_any_roll_str',
            field=models.CharField(default=0, max_length=12),
        ),
    ]
