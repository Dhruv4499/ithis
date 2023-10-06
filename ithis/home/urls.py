from django.urls import path
from home import views

urlpatterns = [
    path('', views.index, name='home'),
    path('treatment/', views.treatment, name='treatment'),
    path('package/', views.package, name='package'),
    path('contact/', views.contact, name='contact'),
    path('search-result/', views.search_result, name='search-result'),

    # Register or Login Credentials
    path('login/', views.login, name='login'),
    path('register/', views.register, name='register'),

]
