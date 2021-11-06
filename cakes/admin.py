from django.contrib import admin

from cakes.apps import CakesConfig
from cakes.models import CakeCategories, Cakes

# Register your models here.
admin.site.register(Cakes)
admin.site.register(CakeCategories)
