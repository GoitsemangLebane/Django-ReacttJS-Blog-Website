from django.urls import path
from users.api import SignupAPI, LoginAPI, UserAPI
from knox import views as knox_views

urlpatterns = [
    path('users/signup', SignupAPI, name='api-users-signup'),
    path('users/login', LoginAPI.as_view(), name='knox_login'),
    path('users/whoami', UserAPI.as_view(), name='api-who-am-i'),
    path('users/logout', knox_views.LogoutView.as_view(), name='knox_logout'),
    path('users/logoutall', knox_views.LogoutAllView.as_view(), name='knox_logout'),
]