import { EnrollmentInterface } from 'interfaces/enrollment';
import { OrganizationInterface } from 'interfaces/organization';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CourseInterface {
  id?: string;
  name: string;
  description?: string;
  organization_id?: string;
  creator_id?: string;
  created_at?: any;
  updated_at?: any;
  enrollment?: EnrollmentInterface[];
  organization?: OrganizationInterface;
  user?: UserInterface;
  _count?: {
    enrollment?: number;
  };
}

export interface CourseGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  organization_id?: string;
  creator_id?: string;
}
