from django.shortcuts import render,redirect,HttpResponse
from home.models import *
from django.contrib.auth.models import User, auth


# Create your views here.

def index(request):
    return render(request, 'home/index.html')

def treatment(request):
    return render(request, 'home/treatment.html')

def package(request):
    return render(request, 'home/package.html')

def contact(request):
    return render(request, 'home/contact.html')

def search_result(request):
    return render(request, 'home/search-result.html')

def login(request):
    if request.method == "POST":
        username = request.POST.get["username"]
        password = request.POST.get["password"]

def register(request):
    # if request.method == "POST":
        # fname = request.POST['fname']
        # lname = request.POST['lname']
        # email = request.POST['email']
        # username = request.POST['username']
        # password = request.POST['password']
        # fname = request.POST.get['fname']

        # user = User.objects.create_user(first_name=fname,last_name=lname,email=email,username=username,password=password)
        # user = User.objects.create_user(email=email,username=username,password=password)
        # user.save();
        # print(email,username,password)
        # print('user created')
        # return redirect('/')
    return render(request, 'home/index.html')