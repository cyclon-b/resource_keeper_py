from . import views
from django.urls import re_path, path
urlpatterns = [
    path('auth/register', views.register, name='register'),
    path('auth/login', views.login, name='login'),
    path('auth/logout', views.logout, name='logout'),
    path('discipline/<int:id>/', views.competency_matrix, name='discipline')
]
