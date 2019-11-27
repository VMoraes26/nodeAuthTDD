const { User } = require('../../src/app/models')

describe('', () => {
  it('should receive JTW token when authenticated with valid creadentials', async () => {
    const user = await User.create({
      name: 'Moraes',
      email: 'moraes@gmail.com',
      password_hash: '123123',
    })

    expect(user.email).toBe('moraes@gmail.com')
  })
})
