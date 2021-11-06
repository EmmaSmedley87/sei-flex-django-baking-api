from rest_framework.views import APIView
# to get a response
from rest_framework.response import Response
# to get a status back
from rest_framework import status

from .models import Cakes
from .serializers import CakeSerializer

# Create your views here.
# CRUD Operations


class CakeListView(APIView):
 # create a cake
    def post(self, request):
        # request data from models to create a new cake
        request.data['owner'] = request.user.id
        # convert data to pyton readble (json) via the serializer
        cake_to_add = CakeSerializer(data=request.data)
        if cake_to_add.is_valid():
            cake_to_add.save()
            # returns cake data and matching status code
            return Response(cake_to_add.data, status=status.HTTP_201_CREATED)
        return Response(cake_to_add.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

    # update cake
    # delete cake
    # get individual cake
    # get all cakes
    # get all cakes for cake_catergories
