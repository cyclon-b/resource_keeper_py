from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from django.shortcuts import render, redirect

from auth.forms import RegistrationForm


def register(request):
    form = RegistrationForm(request.POST)
    if form.is_valid():
        user = User.objects.create_user(email=form.cleaned_data['email'], password=form.cleaned_data['password'],
                                        username=form.cleaned_data['email'])
        if user:
            return redirect('/dashboard')
    return render(request, 'pages/auth/register.html', {'register_form': form})


def login(request):
    return render(request, 'pages/auth/login.html')


def sign_in(request):
    email = request.POST.get('email')
    password = request.POST.get('password')
    user = authenticate(username=email, password=password)
    if user is not None:
        return redirect('/dashboard')
    else:
        error_message = f'Не удалось войти'
        return redirect('/auth/login')
