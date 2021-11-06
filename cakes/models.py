from django.db import models

# Create your models here.

# This is my cakes model


class Cakes(models.Model):
    name = models.CharField(max_length=50)
    cake_image = models.CharField(max_length=200)
    recipe_ingrediants = models.CharField(max_length=300)
    recipe_instructions = models.CharField(max_length=300)
    time = models.TimeField(max_length=50)
    cake_Categories = models.ManyToManyField(
        'CakeCategories', related_name='cakes')
    skill_level = models.CharField(max_length=50)

#    const cake = {
#    name: 'Chocolate Cake'
#     cake_image: 'http://'
#     recipe_ingrediants: 'Some ingrediants',
#     recipe_instructions: 'Some instructions',
#     time: '30mins',
#     skill_level: [easy, medium, hard] 'medium',
#    }


# This is my cake categories model
class CakeCategories(models.Model):
    name = models.CharField(max_length=50)
