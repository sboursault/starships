from django.shortcuts import render


def starships(request):
    return render(request, 'starships/starship_list.html', {'title': 'TITLE', 'text': 'TEXT'})

