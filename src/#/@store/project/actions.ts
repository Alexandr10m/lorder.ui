import { createAction } from 'redux-actions';
import { createApiAction } from 'redux-actions-api';

export const selectProject = createAction('CURRENT_PROJECT/SELECT');

export const fetchProjectRolesAct = createApiAction('CURRENT_PROJECT/FETCH_ROLES', projectId => ({
  request: {
    url: `/projects/${projectId}/roles`,
  },
}));

export const createProjectRoleAct = createApiAction(
  'CURRENT_PROJECT/ADD_ROLE',
  (projectId: number, data: { roleId: string; allowedMoveIds?: number[]; name?: string }) => ({
    form: 'CreateProjectRoleForm',
    request: {
      data: {
        allowedMoveIds: [],
        ...data,
      },
      method: 'POST',
      url: `/projects/${projectId}/roles`,
    },
  })
);

export const editProjectRoleAct = createApiAction(
  'CURRENT_PROJECT/EDIT_ROLE',
  (projectId: number, roleId: number, data: { isPublic: boolean }) => ({
    form: 'CreateProjectRoleForm',
    request: {
      data,
      method: 'PATCH',
      url: `/projects/${projectId}/roles/${roleId}`,
    },
  })
);

export const deleteProjectRoleAct = createApiAction(
  'CURRENT_PROJECT/DELETE_ROLE',
  (projectId: number, roleId: string) => ({
    request: {
      method: 'DELETE',
      url: `/projects/${projectId}/roles/${roleId}`,
    },
  })
);
