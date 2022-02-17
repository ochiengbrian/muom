from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from .models import SingleMovies, Series, PhoneAssesories, LaptopAssesories, OtherElectronics
from .serializers import LaptopSerializers, OtherSerializers, PhoneSerializers, MoviesSerializers, SeriesSerializers


@csrf_exempt
def laptop_accessories_list(request):
    """
     list data of laptop accessories.
    """
    if request.method == 'GET':
        laptop_accessories = LaptopAssesories.objects.all()
        serializer = LaptopSerializers(laptop_accessories, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = LaptopSerializers(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.data, status=400)


@csrf_exempt
def single_movie_list(request):
    """
     list data of single movies
    """
    if request.method == 'GET':
        single_movies = SingleMovies.objects.all()
        serializer = LaptopSerializers(single_movies, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = MoviesSerializers(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.data, status=400)


@csrf_exempt
def series_movie_list(request):
    """
     list data of series.
    """
    if request.method == 'GET':
        series_list = Series.objects.all()
        serializer = LaptopSerializers(series_list, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = SeriesSerializers(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.data, status=400)


@csrf_exempt
def phone_accessories_list(request):
    """
     list data of phone accessories.
    """
    if request.method == 'GET':
        phone_accessories = PhoneAssesories.objects.all()
        serializer = PhoneSerializers(phone_accessories, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = PhoneSerializers(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.data, status=400)


@csrf_exempt
def other_accessories_list(request):
    """
     list data of laptop accessories.
    """
    if request.method == 'GET':
        other_accessories = OtherElectronics.objects.all()
        serializer = OtherElectronics(other_accessories, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = OtherSerializers(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.data, status=400)
