# Generated by Django 3.2.9 on 2021-11-04 20:52

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Cakes',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('cake_image', models.CharField(max_length=200)),
                ('recipe_ingrediants', models.CharField(max_length=300)),
                ('recipe_instructions', models.CharField(max_length=300)),
                ('time', models.CharField(max_length=50)),
                ('skill_level', models.CharField(max_length=50)),
            ],
        ),
    ]
