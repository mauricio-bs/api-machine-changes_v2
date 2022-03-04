import prisma from '../../../../prisma/prisma'
import request from 'supertest'

import { app } from '../../../../app'

describe('Create user', () => {
  it('should create a user successfully', async () => {
    const response = await request(app)
      .post('/users')
      .send({
        name: 'test user',
        id8: 12345678,
        password: 'test123',
        isActive: true,
        email: 'test.user@thyssenkrupp.com',
        birthDate: new Date(2000, 4, 10),
        role: 1,
        rotation: 1
      })

    expect(response.statusCode).toBe(201)
  })

  it('should fail to create a user with a duplicated 8ID', async () => {
    const response = await request(app).post('/users').send({
      name: 'test user',
      id8: 87654321,
      password: 'test123',
      isActive: true,
      role: 1,
      rotation: 1
    })

    expect(response.statusCode).toBe(400)
  })

  it('should fail to create a user with a duplicated email', async () => {
    const response = await request(app).post('/users').send({
      name: 'test user',
      id8: 123789456,
      password: 'test123',
      isActive: true,
      email: 'test.user@thyssenkrupp.com',
      role: 1,
      rotation: 1
    })

    expect(response.statusCode).toBe(400)
  })

  it('should fail to create a user without a rotation', async () => {
    const response = await request(app).post('/users').send({
      name: 'test user',
      id8: 123789456,
      password: 'test123',
      isActive: true,
      email: 'test.user@thyssenkrupp.com',
      role: 1
    })

    expect(response.statusCode).toBe(400)
  })

  it('should fail to create a user without a role', async () => {
    const response = await request(app).post('/users').send({
      name: 'test user',
      id8: 123789456,
      password: 'test123',
      isActive: true,
      email: 'test.user@thyssenkrupp.com',
      rotation: 1
    })

    expect(response.statusCode).toBe(400)
  })
})
