# Generated by Django 5.0.1 on 2024-01-21 00:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mutantfuture', '0015_alter_charismamodset_value_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='race',
            name='mental_mutations_roll_str',
            field=models.CharField(max_length=12, null=True),
        ),
        migrations.AddField(
            model_name='race',
            name='physical_mutations_roll_str',
            field=models.CharField(max_length=12, null=True),
        ),
        migrations.AddField(
            model_name='race',
            name='plant_mutations_roll_str',
            field=models.CharField(max_length=12, null=True),
        ),
    ]
