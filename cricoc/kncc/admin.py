from django.contrib import admin
from .models import *
# Register your models here.
class playershow(admin.ModelAdmin):
    list_display=('num','name','type')

class soldoutshow(admin.ModelAdmin):
    list_display=('team','players','amount')
admin.site.register(Players,playershow)
admin.site.register(Team)
admin.site.register(soldout,soldoutshow)