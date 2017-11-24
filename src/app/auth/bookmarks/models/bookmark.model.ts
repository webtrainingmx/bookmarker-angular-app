import { User } from './user.model';
import { Tag } from './tag.model';

export class Bookmark {
  id: number;
  user_id: number;
  title: string;
  description: string;
  url: string;
  created: string;
  modified: string;
  user?: User;
  tags?: Array<Tag>;
}
