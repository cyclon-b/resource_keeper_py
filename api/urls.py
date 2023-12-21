from . import views
from django.urls import re_path, path
urlpatterns = [
    re_path('register', views.register, name='register'),
    re_path('login', views.login, name='login'),
    re_path('logout', views.logout, name='logout'),
    path('discipline/<int:id>/', views.competency_matrix, name='discipline')
]
