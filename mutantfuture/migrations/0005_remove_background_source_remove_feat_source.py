# Generated by Django 5.0.1 on 2024-01-18 05:27

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('mutantfuture', '0004_background_source_feat_source_alter_mutation_source_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='background',
            name='source',
        ),
        migrations.RemoveField(
            model_name='feat',
            name='source',
        ),
    ]
