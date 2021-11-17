from rest_framework import response
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
        # request.data['owner'] = request.user.id
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

    def get_cake_by_id(self, id):
        try:
            return Cakes.objects.get(id=id)
        except Cakes.DoesNotExist:
            raise NotFound(detail="Cake does not exist")

    # get individual cake
    def get(self, _request, id):
        # request data from models to get an individual cake
        cake = self.get_cake_by_id(id)
        # convert data to python readable format (json) via the serializer
        serialized_cakes = CakeSerializer(cake)
        # returns cake data and matching status code
        return response.Response(serialized_cakes.data, status=status.HTTP_200_OK)

    # delete cake
    def delete(self, request, id):
        cake = self.get_cake_by_id(id)
        cake.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

   # update cake
    def put(self, request, id):
        cakes = self.get_cake_by_id(id)
        updated_cake = CakeSerializer(cakes, data=request.data)
        if updated_cake.is_valid():
            updated_cake.save()
            return response.Response(
                updated_cake.data, status=status.HTTP_202_ACCEPTED
            )
        return response.Response(
            updated_cake.errors, status=status.HTTP_400_BAD_REQUEST
        )

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
