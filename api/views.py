from django.contrib.auth.models import User
from django.shortcuts import render, get_object_or_404
from rest_framework import status
from rest_framework.authtoken.models import Token
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from api.serializers import UserSerializer, DisciplineSerializer, SkillSerializer, SkillDescriptionSerializer, \
    SkillsDescriptionsListSerializer, GradeSerializer
from competency_matrix.models import Discipline, Skill, SkillDescription, Grade


# Auth


@api_view(['POST'])
def register(request):
    if request.method == 'POST':
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            user = User.objects.get(username=request.data['username'])
            user.set_password(request.data['password'])
            user.save()
            token = Token.objects.create(user=user)
            return Response({'token': token.key, 'user': serializer.data})
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def login(request):
    user = get_object_or_404(User, username=request.data['username'])
    if not user.check_password(request.data['password']):
        return Response("missing user", status=status.HTTP_404_NOT_FOUND)
    token, created = Token.objects.get_or_create(user=user)
    serializer = UserSerializer(user)
    return Response({'token': token.key, 'user': serializer.data})


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def logout(request):
    try:
        request.user.auth_token.delete()

        return Response(status=status.HTTP_200_OK)
    except Exception:
        return Response({'message': 'Пользователь не авторизован'}, status=status.HTTP_400_BAD_REQUEST)


# Auth end


# Competency matrix
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def competency_matrix(request, id):
    discipline = get_object_or_404(Discipline, id=id)
    skills = Skill.objects.filter(discipline_id=id)
    skills_descriptions = []
    for skill in skills:
        skills_descriptions.append(SkillDescription.objects.filter(skill_id=skill.id))
    grades = Grade.objects.filter(discipline_id=id)
    discipline_serializer = DisciplineSerializer(discipline)
    skills_serializer = SkillSerializer(skills, many=True)
    skills_descriptions_serializer = SkillsDescriptionsListSerializer(skills_descriptions)
    grades_serializer = GradeSerializer(grades, many=True)

    return Response({'discipline': discipline_serializer.data, 'skills': skills_serializer.data,
                     'skills_descriptions': skills_descriptions_serializer.data, 'grades': grades_serializer.data},
                    status=status.HTTP_200_OK)
