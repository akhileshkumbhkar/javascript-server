import {diamond,equilateral} from "./patterns";
import {hasPermission , ValidateUser} from "./utils";
import {permissions,users} from "./constants";
 
equilateral(10);
diamond(10);
hasPermission('getUsers', 'head-trainer', 'delete');
ValidateUser(users);
