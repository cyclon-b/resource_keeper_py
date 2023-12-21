from django.contrib.auth.models import User
from rest_framework import serializers

from competency_matrix.models import Discipline, Grade, Section, Skill, SkillDescription
from up_grade.models import Track


# Auth
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'


# Auth end

# Competency matrix
class DisciplineSerializer(serializers.ModelSerializer):
    class Meta:
        model = Discipline
        fields = '__all__'


class TrackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Track
        fields = '__all__'


class GradeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Grade
        fields = '__all__'


class SectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Section
        fields = '__all__'


class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = '__all__'


class SkillDescriptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = SkillDescription
        fields = '__all__'


class SkillsDescriptionsListSerializer(serializers.ListSerializer):
    child = serializers.ListSerializer(child=SkillDescriptionSerializer())
