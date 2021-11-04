from os import name
from django.db import models
from django.db.models.fields.files import ImageField

# Create your models here.

# This is my cakes model


class Cakes(models.Model):
    name = models.CharField(max_length=50)
    cake_image = models.CharField(max_length=200)
    recipe_ingrediants = models.CharField(max_length=300)
    recipe_instructions = models.CharField(max_length=300)
    time = models.CharField(max_length=50)
    skill_level = models.CharField(max_length=50)


# This is my cake categories model
