from django.db import models
import os 
import datetime
# Create your models here.

def picture(request,file):
  
    curtime=datetime.datetime.now().strftime("%Y%m%d:%H%M%S")
    filenewname=curtime+file
    return os.path.join('picc/',filenewname)



class Team(models.Model):
    name= models.CharField(max_length=20,default=None,verbose_name='Enter the Teame  Name',null=False,unique=True,primary_key=True)

    logo=models.ImageField(upload_to=picture,blank=True,default=None,null=False)
    amount=models.IntegerField(null=False,default=None)

    def __str__(self):
        return self.name

class Players(models.Model):
    TYPE_CHOICES=(('under 19','under 19'),('open','open'))
    num=models.IntegerField(primary_key=True,blank=False,null=False,verbose_name="enter the player number")
    name= models.CharField(max_length=40,default=None,verbose_name='Enter the player  Name',null=False,blank=False)

    picture=models.ImageField(default=None,upload_to=picture,null=False,blank=True,verbose_name="Players Picture")
    type=models.CharField(choices=TYPE_CHOICES,max_length=10,default=None)
    def __str__(self):
        return str(self.num) 
    
class soldout(models.Model):
    team=models.ForeignKey(Team,on_delete=models.CASCADE,verbose_name="Enter the team name ")
    players=models.ForeignKey(Players,on_delete=models.CASCADE,verbose_name="Select thae player")
    amount=models.IntegerField(null=False,blank=False,verbose_name="Enter the amount of player for sold")
    class Meta:
        unique_together=('team','players')