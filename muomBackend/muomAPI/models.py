from django.db import models
category_ms = (
        ('drama', 'Drama'),
        ('horror', 'Horror'),
        ('scifi', 'Sci-Fi'),
        ('action', 'Action'),
        ('epic', 'Horror'),
        ('investigative', 'Investigative'),
        ('romance', 'Romance'),
        ('thriller', 'Thriller'),
        ('comedy', 'Comedy'),
        ('animation', 'Animation'),
    )

phone_category = (
    ('storage', 'Storage Devices'),
    ('cables', 'Cables'),
    ('chargers', 'Chargers'),
    ('earphones', 'Earphones'),
)

Laptop_categories = (
    ('storage', 'Storage'),
    ('chargers', 'Chargers'),
    ('keyboard', 'Keyboard'),
    ('mouse', 'Mouse'),
    ('laptop_screens', 'Laptop Screens'),
)

other_electronics = (
    ('extensions', 'Extensions'),
    ('bulbs', 'Bulbs'),
    ('subwoofers', 'Sub Woofers'),
    ('bulb_holders', 'Bulb Holders'),
    ('bed_switch', 'Bed Switch'),
)


class SingleMovies(models.Model):
    name = models.CharField(max_length=35, null=False)
    description = models.CharField(max_length=250, null=False)
    image = models.ImageField(upload_to=None, null=True)
    image_url = models.URLField(null=True)
    category = models.CharField(max_length=25, choices=category_ms, default='action')


class Series(models.Model):
    name = models.CharField(max_length=35, null=False)
    description = models.CharField(max_length=250, null=False)
    image = models.ImageField(upload_to=None, null=True)
    image_url = models.URLField(null=True)
    category = models.CharField(max_length=25, choices=category_ms, default='action')


class PhoneAssesories(models.Model):
    name = models.CharField(max_length=35, null=False)
    description = models.CharField(max_length=250, null=False)
    image = models.ImageField(upload_to=None, null=True)
    image_url = models.URLField(null=True)
    category = models.CharField(max_length=35, choices=phone_category, default='cables')
    stock = models.IntegerField(null=False)


class LaptopAssesories(models.Model):
    name = models.CharField(max_length=35)
    description = models.CharField(max_length=250)
    image = models.ImageField(upload_to=None, null=False)
    image_url = models.URLField(null=True)
    category = models.CharField(max_length=35, choices=Laptop_categories, default='storage')
    stock = models.IntegerField()


class OtherElectronics(models.Model):
    name = models.CharField(max_length=35, null=False)
    description = models.CharField(max_length=250, null=False)
    image = models.ImageField(upload_to=None, null=True)
    image_url = models.URLField(null=True)
    category = models.CharField(max_length=35, choices=other_electronics, default='bulb')
    stock = models.IntegerField(null=False)
