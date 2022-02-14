from django.contrib import admin
from .models import LaptopAssesories, OtherElectronics, PhoneAssesories, Series, SingleMovies

# Register your models here.
admin.site.register(LaptopAssesories)
admin.site.register(OtherElectronics)
admin.site.register(PhoneAssesories)
admin.site.register(Series)
admin.site.register(SingleMovies)
