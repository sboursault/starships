# Generated by Django 4.1 on 2022-08-27 19:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('starships', '0003_alter_starship_max_passengers_alter_starship_size'),
    ]

    operations = [
        migrations.AlterField(
            model_name='starship',
            name='max_passengers',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='starship',
            name='size',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]
