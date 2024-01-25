from django.urls import path
from django.views.generic import RedirectView

from auth import views

urlpatterns = [
    path('', RedirectView.as_view(url='login')),
    path('register/', views.register, name='register'),
    path('login/', views.login, name='login'),
    path('signin/', views.sign_in, name='signin')
]
