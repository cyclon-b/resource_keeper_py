from django.shortcuts import render



def register(request):
    return render(request, 'pages/auth/register.html')
def login(request):
    return render(request, 'pages/auth/login.html')

def sign_in(request):
    pass