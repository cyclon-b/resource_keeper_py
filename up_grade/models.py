from django.contrib.auth.models import User
from django.db import models

from competency_matrix.models import Discipline


class Track(models.Model):
    name = models.CharField(max_length=255, unique=False)
    slug = models.CharField(max_length=255, unique=True)
    discipline = models.ForeignKey(Discipline, related_name='tracks', on_delete=models.CASCADE)
    users = models.ManyToManyField(User, related_name='tracks_users', blank=True)
    main_index = models.Index(fields=['name', 'slug'])

    class Meta:
        ordering = ['name']
        verbose_name = 'Трек развития'
        verbose_name_plural = 'Треки развития'

    def __str__(self):
        return self.name
