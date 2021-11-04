from django.shortcuts import render
from django.shortcuts import HttpResponse

from .models import Cakes

# Create your views here.


def index(request):
    # get what we need from the database
    list = Cakes.objects.all
# create a context for our object
    context = {"cakes": list}

# render based on the index .html template
    return render(request, "cakes/index.html", context)
