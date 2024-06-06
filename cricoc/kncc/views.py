from django.shortcuts import render
from .models import *
from .serilaizer import *
# Create your views here.
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status


class Player_show(APIView):
    def get(self,request):
        print("getting player")
        pnum=request.GET.get('pnum')
        if not pnum:
            return Response({"error":"player number not given"},status=status.HTTP_404_NOT_FOUND)
        try:
            player = Players.objects.get(num=pnum)
            print(player)
            serilaizer=Player_Serilazer(player)
            return Response(serilaizer.data,status=status.HTTP_200_OK)
        except  player.DoesNotExist:
            return Response({"error":"player number not given"},status=status.HTTP_404_NOT_FOUND)
       
class Sold_out(APIView):
    def get(self,request):
        details= soldout.objects.all()
        soldout_serilizer=GetdashBoard(details,many=True)
        if soldout_serilizer.data:
            print(soldout_serilizer.data)
            return Response(soldout_serilizer.data,status=status.HTTP_200_OK)
        return Response({"error":"no sold out"},status=status.HTTP_404_NOT_FOUND)
