from django.db import models
from django.db.models.base import Model



#Specifying province winner choice for chorpleth
province_options = (
    
    ('1','1'),
    ('2','2'),
    ('1.5','1.5'),
    ('2.5','2.5'),
    ('4','4'),
    ('0','0'))

#Specifying province choice
location_options = (
    ('Zambia','Zambia'),
    ('Lusaka','Lusaka'),
    ('Copperbelt','Copperbelt'),
    ('Luapula','Luapula'),
    ('Central','Central'),
    ('Eastern','Eastern'),
    ('Southern','Southern'),
    ('Northern','Northern'),
    ('Western','Western'),
    ('North-Western','North-Western'),
    ('Muchinga','Muchinga')
    )

#Specifying province  code choice
code_options = (
    ('ZM','ZM'),
    ('LS','LS'),
    ('CO','CO'),
    ('LP','LP'),
    ('CE','CE'),
    ('EA','EA'),
    ('SO','SO'),
    ('NO','NO'),
    ('WE','WE'),
    ('NW','NW'),
    ('MU','MU')
    )
 
   
    
# Create your models here.
class Eleven(models.Model):
    year = models.CharField(max_length=5,blank=True)
    Provincename = models.CharField(max_length=20,choices=location_options,blank=True)
    provinceCode = models.CharField(max_length=4,choices=code_options,blank=True)
    candidate1vote = models.CharField(max_length=30,blank=True)
    candidate2vote = models.CharField(max_length=30,blank=True)
    provincewinner = models.CharField(max_length=20,choices=province_options,blank=True)
    reported = models.CharField(max_length=10,blank=True)

    def __str__(self):
        return self.Provincename

class Sixteen(models.Model):
    year = models.CharField(max_length=5,blank=True)
    Provincename = models.CharField(max_length=20,choices=location_options,blank=True)
    provinceCode = models.CharField(max_length=4,choices=code_options,blank=True)
    candidate1vote = models.CharField(max_length=30,blank=True)
    candidate2vote = models.CharField(max_length=30,blank=True)
    provincewinner = models.CharField(max_length=20,choices=province_options,blank=True)
    reported = models.CharField(max_length=10,blank=True)

    def __str__(self):
        return self.Provincename

class TwentyOne(models.Model):
    year = models.CharField(max_length=5,blank=True)
    Provincename = models.CharField(max_length=20,choices=location_options,blank=True)
    provinceCode = models.CharField(max_length=4,choices=code_options,blank=True)
    candidate1vote = models.CharField(max_length=30,blank=True)
    candidate2vote = models.CharField(max_length=30,blank=True)
    provincewinner = models.CharField(max_length=20,choices=province_options,blank=True)
    reported = models.CharField(max_length=10,blank=True)

    def __str__(self):
        return self.Provincename

class ProgressBar(models.Model):
    year = models.CharField(max_length=5)
    cadidate1votes = models.CharField(max_length=15,blank=True)
    cadidate2votes = models.CharField(max_length=15,blank=True)
    candidate1 = models.CharField(max_length=7)
    candidate2 = models.CharField(max_length=7)
    
    def __str__(self):
        return self.year

