from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from django.shortcuts import render, redirect

from auth.forms import RegistrationForm, LoginForm


def register(request):
    form = RegistrationForm(request.POST)
    if form.is_valid():
        user = User.objects.create_user(email=form.cleaned_data['email'], password=form.cleaned_data['password'],
                                        username=form.cleaned_data['email'])
        if user:
            return redirect('/dashboard')
    return render(request, 'pages/auth/register.html', {'register_form': form})


def login(request):
    form = LoginForm(request.POST)
    if form.is_valid():
        username = form.cleaned_data['email']
        password = form.cleaned_data['password']
        user = authenticate(username=username, password=password)
        if user is not None:
            return redirect('/dashboard')
    return render(request, 'pages/auth/login.html', {'login_form': form})
