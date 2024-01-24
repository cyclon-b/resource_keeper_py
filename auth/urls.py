from django.conf.urls.static import static
from django.urls import path
from django.views.generic import RedirectView

from auth import views
from resource_keeper_py import settings

urlpatterns = [
                  path('', RedirectView.as_view(url='login')),
                  path('login/', views.login, name='login')

              ] + static(settings.STATIC_URL)
