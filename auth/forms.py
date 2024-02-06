from django import forms
from django.forms import EmailInput, PasswordInput


class RegistrationForm(forms.Form):
    email = forms.EmailField(required=True, widget=EmailInput(
        attrs={'class': 'form-control', 'id': 'emailInput', 'placeholder': 'Email'}))
    password = forms.CharField(
        widget=PasswordInput(
            attrs={'class': 'form-control', 'id': 'passwordInput', 'placeholder': 'Пароль', 'x-model': 'password'}),
        required=True, )
    repeat_password = forms.CharField(widget=PasswordInput(
        attrs={'class': 'form-control', 'id': 'repeatPassword', 'placeholder': 'Повторите пароль',
               'x-model': 'repeatPassword'}),
        required=True,
    )

    def clean(self):
        cleaned_data = super(RegistrationForm, self).clean()
        password = cleaned_data.get('password')
        repeat_password = cleaned_data.get('repeat_password')
        if password != repeat_password:
            raise forms.ValidationError('Пароли не совпадают')


class LoginForm(forms.Form):
    email = forms.EmailField(required=True, widget=EmailInput(
        attrs={'class': 'form-control', 'id': 'emailInput', 'placeholder': 'Email'}))
    password = forms.CharField(required=True, widget=PasswordInput(
        attrs={'class': 'form-control', 'id': 'passwordInput', 'placeholder': 'Пароль', 'x-model': 'password'}))
