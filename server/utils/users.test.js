const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Kris',
      room: 'Node'
    },{
      id: '2',
      name: 'Amber',
      room: 'Family'
    },{
      id: '3',
      name: 'Aiden',
      room: 'Family'
    }]
  });

  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: '123',
      name: 'Kris',
      room: 'Node'
    };
    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });
  it('should remove a user', () => {
    var userId = '3';
    var user = users.removeUser(userId);

    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });
  it('should not remove user', () => {
    var userId = '99';
    var user = users.removeUser(userId);

    expect(user).toNotExist;
    expect(users.users.length).toBe(3);
  });
  it('should find user', () => {
    var userId = '2'
    var user = users.getUser(userId);
    expect(user.id).toBe(userId);
  });
  it('should not find user', () => {
    var userId = '99'
    var user = users.getUser(userId);
    expect(user).toNotExist();
  });
  it('should return names from room: Family', () => {
    var userList = users.getUserList('Family');
    expect(userList).toEqual(['Amber', 'Aiden']);
  });
  it('should return names from room: Node', () => {
    var userList = users.getUserList('Node');
    expect(userList).toEqual(['Kris']);
  });
});