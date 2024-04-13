from django.contrib import admin
from django.contrib.auth.hashers import make_password
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib import admin
from .models import User,Profile,Skill,Education, Experience, Project   

admin.site.site_header = 'Academate'
admin.site.site_title = 'Academate'
admin.site.index_title = 'Welcome to Academate'

class CustomUserAdmin(BaseUserAdmin):
    list_display = ['username', 'email', 'is_recruiter', 'is_student', 'is_superuser','is_banned', 'is_verified']
    list_filter = ['is_recruiter', 'is_student', 'is_superuser', 'is_banned', 'is_verified']
    search_fields = ['username', 'email']
    actions = ['ban_user', 'unban_user']

    def ban_user(self, request, queryset):
        queryset.update(is_banned=True)
    
    ban_user.short_description = "Ban selected User/Users"

    def unban_user(self, request, queryset):
        queryset.update(is_banned=False)
    
    unban_user.short_description = "UnBan selected User/Users"

    def has_change_permission(self, request, obj=None):
        if obj and obj.is_superuser:
            return False 
        return super().has_change_permission(request, obj)

    def has_delete_permission(self, request, obj=None):
        if obj and obj.is_superuser:
            return False 
        return super().has_delete_permission(request, obj)

admin.site.register(User, CustomUserAdmin)
admin.site.register(Profile)
admin.site.register(Skill)
admin.site.register(Education)
admin.site.register(Experience)
admin.site.register(Project)


