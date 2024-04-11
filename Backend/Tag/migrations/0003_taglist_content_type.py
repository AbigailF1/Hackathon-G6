# Generated by Django 5.0.3 on 2024-04-08 19:39

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Tag', '0002_remove_taglist_content_type'),
        ('contenttypes', '0002_remove_content_type_name'),
    ]

    operations = [
        migrations.AddField(
            model_name='taglist',
            name='content_type',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='contenttypes.contenttype'),
        ),
    ]