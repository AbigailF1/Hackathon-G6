# Generated by Django 5.0.3 on 2024-04-13 13:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Feed', '0001_initial'),
        ('Tag', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='feed',
            name='tag_list',
        ),
        migrations.AddField(
            model_name='feed',
            name='tags',
            field=models.ManyToManyField(blank=True, to='Tag.tag'),
        ),
    ]
