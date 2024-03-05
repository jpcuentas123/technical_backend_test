function degreesToRadians(degrees: number): number {
  return degrees * (Math.PI / 180)
}

function calculateDistance(
  initialLocation: {
    latitude
    longitude
  },
  finalLocation: {
    latitude
    longitude
  }
): number {
  if (initialLocation.latitude > 90 || finalLocation.latitude > 90) {
    throw new Error('Latitude is incorrect')
  }

  if (initialLocation.longitude > 180 || finalLocation.latitude > 180) {
    throw new Error('Longitude is incorrect')
  }

  const earthRadiusKm = 6371 // Earth ratio in kil

  const dLat = degreesToRadians(
    finalLocation.latitude - initialLocation.latitude
  )
  const dLon = degreesToRadians(
    finalLocation.longitude - initialLocation.longitude
  )

  const lat1Rad = degreesToRadians(initialLocation.latitude)
  const lat2Rad = degreesToRadians(finalLocation.latitude)

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) *
      Math.sin(dLon / 2) *
      Math.cos(lat1Rad) *
      Math.cos(lat2Rad)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))

  return earthRadiusKm * c
}

export default calculateDistance
