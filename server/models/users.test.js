const { getById, getByEmail, add, deleteById } = require('./users.js')

let userId, userEmail;
const mockUser = {
  name: 'John Doe',
  username: 'JD',
  email: 'jd@example.com',
  password: 'password',
}

it('should add a new user',() => {
  return add(mockUser)
  .then(data => {
    userId = data.id;
    userEmail = data.email;
    expect(data).toEqual(expect.objectContaining({ name: 'John Doe' }))
  })
})

it('should get a user by ID',() => {
  return getById(userId)
  .then(data => expect(data).toEqual(
    expect.objectContaining({ name: 'John Doe' })))
})

// it('should get a user by email',() => {
//   return getByEmail(userEmail)
//   .then(data => console.log(data, 'DATAAAA'))
// })

it('should delete a user', () => {
  return deleteById(userId)
  .then(data => expect(data).toBe(1));
})

