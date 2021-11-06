from rest_framework import serializers
from rest_framework.serializers import Serializer
from rest_framework.views import APIView
# to get a response
from rest_framework.response import Response
# to get a status back
from rest_framework import status
from rest_framework.exceptions import NotFound

from .models import CakeCategories, Cakes
from .serializers import CakeSerializer

# Create your views here.
# CRUD Operations


class CakeListView(APIView):
 # create a cake
    def post(self, request):
        # request data from models to create a new cake
        request.data['owner'] = request.user.id
        # convert data to python readable format (json) via the serializer
        cake_to_add = CakeSerializer(data=request.data)
        if cake_to_add.is_valid():
            cake_to_add.save()
            # returns cake data and matching status code
            return Response(cake_to_add.data, status=status.HTTP_201_CREATED)
        return Response(cake_to_add.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

    # get all cakes
    def get(self, _request):
        # request data from models to get all cakes
        cakes = Cakes.objects.all()
        # convert data to python readable format (json) via the serializer
        serialized_cakes = CakeSerializer(cakes, many=True)
        # returns cake data and matching status code
        return Response(serialized_cakes.data, status=status.HTTP_200_OK)


class CakeSingleView(APIView):

    # get individual cake
    def get(self, _request, pk):
        # request data from models to get an individual cake
        cakes = self.get_cake(pk=pk)
        # convert data to python readable format (json) via the serializer
        serialized_cakes = CakeSerializer(cakes)
        # returns cake data and matching status code
        return Response(serialized_cakes.data, status=status.HTTP_200_OK)

    # delete cake
    def delete(self, _request, pk):
        cake_to_delete = self.get_cake(pk=pk)
        cake_to_delete.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

   # update cake
    def put(self, request, pk):
        cake_to_edit = self.get_cake(pk=pk)
        updated_cake = CakeSerializer(cake_to_edit, data=request.data)
        if updated_cake.is_valid():
            updated_cake.save()
            return Response(updated_cake.data, status=status.HTTP_202_ACCEPTED)
        return Response(updated_cake.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

    # def get(self, _request, pk):
    #     try:
    #         return Cakes.objects.get(pk=pk)
    #     except Cakes.DoesNotExist:
    #         raise NotFound(detail="Can't find that cake")

    # # get all cakes for cake_catergories
    # def get(self, pk):
    #     # request data from models to get all cakes for cake category
    #     CakeCategories = CakeCategories.objects.all()
    #     # convert data to python readble (json) via the serializer
    #     serialized_cakes = CategoriesSerializer(CakeCategories)
    #     # returns cake data and matching status code
    #     return Response(serialized_cakes.data)
