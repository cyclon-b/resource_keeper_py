from django.contrib.auth.models import User
from django.db import models


# Create your models here.
class Discipline(models.Model):
    name = models.CharField(max_length=512, unique=False)
    slug = models.CharField(max_length=255, unique=True)
    description = models.TextField()
    users = models.ManyToManyField(User, related_name='disciplines')
    main_index = models.Index(fields=['name', 'slug'])

    class Meta:
        ordering = ['name']
        verbose_name = 'Дисциплина'
        verbose_name_plural = 'Дисциплины'

    def __str__(self):
        return self.name


class Track(models.Model):
    name = models.CharField(max_length=255, unique=False)
    slug = models.CharField(max_length=255, unique=True)
    discipline = models.ForeignKey(Discipline, related_name='tracks', on_delete=models.CASCADE)
    users = models.ManyToManyField(User, related_name='tracks_users')
    main_index = models.Index(fields=['name', 'slug'])

    class Meta:
        ordering = ['name']
        verbose_name = 'Трек развития'
        verbose_name_plural = 'Треки развития'

    def __str__(self):
        return self.name


class Section(models.Model):
    name = models.CharField(max_length=512, unique=False)
    slug = models.CharField(max_length=255, unique=True)
    description = models.TextField()
    discipline = models.ForeignKey(Discipline, related_name='sections', on_delete=models.CASCADE)
    main_index = models.Index(fields=['name', 'slug'])

    class Meta:
        ordering = ['name']
        verbose_name = 'Раздел'
        verbose_name_plural = 'Разделы'

    def __str__(self):
        return self.name


class Skill(models.Model):
    name = models.CharField(max_length=512)
    slug = models.CharField(max_length=255, unique=True)
    discipline = models.ForeignKey(Discipline, related_name='skills_discipline', on_delete=models.CASCADE)
    track = models.ForeignKey(Track, related_name='skills_tracks', on_delete=models.CASCADE)
    section = models.ForeignKey(Section, related_name='skills_sections', on_delete=models.CASCADE)

    class Meta:
        ordering = ['name']
        verbose_name = 'Навык'
        verbose_name_plural = 'Навык'

    def __str__(self):
        return self.name


class Grade(models.Model):
    name = models.CharField(max_length=512, unique=False)
    slug = models.CharField(max_length=255, unique=True)
    discipline = models.ForeignKey(Discipline, related_name='grades_disciplines', on_delete=models.CASCADE)
    track = models.ForeignKey(Track, related_name='grades_tracks', on_delete=models.CASCADE)
    users = models.ManyToManyField(User, related_name='grades_users')

    class Meta:
        ordering = ['name']
        verbose_name = 'Грейд'
        verbose_name_plural = 'Грейды'

    def __str__(self):
        return self.name


class SkillDescription(models.Model):
    description = models.TextField()
    skill = models.ForeignKey(Skill, related_name='skills_descriptions', on_delete=models.CASCADE)
    grade = models.ForeignKey(Grade, related_name='skills_grades', on_delete=models.CASCADE)

    class Meta:
        ordering = ['description']
        verbose_name = 'Описание навыка'
        verbose_name_plural = 'Описания навыков'

    def __str__(self):
        return self.skill.name
