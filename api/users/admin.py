from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from users.models import NewUser
from django.forms import TextInput, Textarea

# Register your models here.

# @admin.register(NewUser)
# class UserAdmin(admin.ModelAdmin):
#     list_display = ("id", "username", "email", "is_staff")

class UserAdminConfig(UserAdmin):
    search_fields = ("email", "username")
    list_filter = ("email", "username", "is_staff")
    ordering = ("id",)
    list_display = ("username", "id", "email", "is_staff", "created_at")
    fieldsets = (
        (None, {"fields": ("email", "username", "password")}), 
        ("Permissions", {"fields": ("is_superuser", "is_staff", "is_active")}), 
        ("Personal", {"fields": ("about",)}) 
    )
    formfield_overrides = {
        NewUser.about: {"widget": Textarea(attrs={"rows": 10, "cols": 40})}
    }
    
    # for adding screen
    add_fieldsets = (
        (None, {
            "classes": ("wide",),
            "fields": ("email", "username", "password1", "password2", "is_superuser", "is_staff", "is_active")
        }),
    )

admin.site.register(NewUser, UserAdminConfig)