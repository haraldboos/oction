# Generated by Django 4.1.13 on 2024-06-13 09:33

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("kncc", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="team",
            name="name",
            field=models.CharField(
                default=None,
                max_length=40,
                primary_key=True,
                serialize=False,
                unique=True,
                verbose_name="Enter the Teame  Name",
            ),
        ),
    ]
