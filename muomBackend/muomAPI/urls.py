from django.urls import path
from . import views
from rest_framework.urlpatterns import format_suffix_patterns
from django.contrib import admin


urlpatterns = [
    path('admin/', admin.site.urls),
    path('series/', views.series_movie_list),
    path('movies/', views.single_movie_list),
    path('phone/', views.phone_accessories_list),
    path('laptop/', views.laptop_accessories_list),
    path('other/', views.other_accessories_list),
]
