from django.contrib import admin

from up_grade.models import Track


# Register your models here.
@admin.register(Track)
class ModelNameAdmin(admin.ModelAdmin):
    pass
