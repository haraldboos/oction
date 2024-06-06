from rest_framework import serializers
from .models import *

class Team_serilaizer(serializers.ModelSerializer):
    class Meta:
        model=Team
        fields='__all__'
class Player_Serilazer(serializers.ModelSerializer):
    class Meta:
        model=Players
        fields='__all__'
class Player_frin(serializers.ModelSerializer):
    class Meta:
        model=Players
        fields='__all__'
class GetdashBoard(serializers.ModelSerializer):
    players=Player_frin()
    team=Team_serilaizer()
    class Meta:
        model=soldout
        fields='__all__'


