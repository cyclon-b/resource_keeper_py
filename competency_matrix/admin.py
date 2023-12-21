from django.contrib import admin

from competency_matrix.models import Discipline, Section, Skill, Grade, SkillDescription


# Register your models here.
@admin.register(Discipline)
class ModelNameAdmin(admin.ModelAdmin):
    pass


@admin.register(Section)
class ModelNameAdmin(admin.ModelAdmin):
    pass


@admin.register(Skill)
class ModelNameAdmin(admin.ModelAdmin):
    pass


@admin.register(Grade)
class ModelNameAdmin(admin.ModelAdmin):
    pass


@admin.register(SkillDescription)
class ModelNameAdmin(admin.ModelAdmin):
    pass
