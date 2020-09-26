import { Group } from '../group/group.model';
import { User } from '../user/user.model';

export class RpgEvent{
    public date: Date;
    public rpg: string;
    public users: User[];
    public group: Group;
}