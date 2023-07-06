const mapping: Record<string, string> = {
  courses: 'course',
  enrollments: 'enrollment',
  organizations: 'organization',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
