import calculateDistance from './calculateDistance'

describe('calculate distance in kilometers between 2 locations', () => {
  it('it should return distance in kilometers', () => {
    const result = calculateDistance(
      {
        latitude: 90,
        longitude: 180,
      },
      {
        latitude: 87,
        longitude: 180,
      }
    )

    expect(result).toBe(333.5847799336762)
  })
})
