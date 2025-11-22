from rest_framework.permissions import BasePermission, SAFE_METHODS

class IsAdminUserOrReadOnly(BasePermission):
    # every can GET, but only admin user can do POST, PUT/PATCH and DELETE
    def has_permission(self, request, view):
        if request.method in SAFE_METHODS:
            return True
        return bool(request.user and (request.user.is_staff or request.user.is_superuser))