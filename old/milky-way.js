const canvas = document.getElementById('webgl-output')
const planetsData = [
  {
    planet: 'Mercury',
    radius: 5,
  },
  {
    planet: 'Venus',
    radius: 6,
  },
  {
    planet: 'Earth',
    radius: 7,
  },
  {
    planet: 'Mars',
    radius: 8,
  },
  {
    planet: 'Jupiter',
    radius: 14,
  },
  {
    planet: 'Saturn',
    radius: 18,
  },
  {
    planet: 'Uranus',
    radius: 24,
  },
  {
    planet: 'Neptun',
    radius: 28,
  },
]

const init = () => {
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    1000,
  )
  const renderer = new THREE.WebGLRenderer({
    canvas,
  })

  renderer.setClearColor(new THREE.Color(0x000000))
  renderer.setSize(window.innerWidth, window.innerHeight)

  const sunGeometry = new THREE.SphereGeometry(4, 24, 24)
  const sunMaterial = new THREE.MeshBasicMaterial({
    color: 0xf7ad1b,
  })

  const sun = new THREE.Mesh(sunGeometry, sunMaterial)
  sun.position.x = 0
  sun.position.y = 0
  sun.position.z = 0
  scene.add(sun)

  const mercuryGeometry = new THREE.SphereGeometry(0.2, 40, 40)
  const mercuryMaterial = new THREE.MeshBasicMaterial({
    color: 0xf5f5f5,
  })

  const mercury = new THREE.Mesh(mercuryGeometry, mercuryMaterial)
  mercury.position.x = 5
  mercury.position.y = 0
  mercury.position.z = 0
  scene.add(mercury)

  const makeOrbits = (planets) => {
    console.log(planets)
    planets.forEach((planet) => {
      const orbitGeometry = new THREE.CircleGeometry(planet.radius, 80)
      const orbitEdges = new THREE.EdgesGeometry(orbitGeometry)
      const orbit = new THREE.LineSegments(
        orbitEdges,
        new THREE.LineBasicMaterial({ color: 0x323232 }),
      )

      orbit.rotation.x = -0.54 * Math.PI
      orbit.rotation.y = -0.02 * Math.PI
      orbit.position.x = 0
      orbit.position.y = -0.3
      orbit.position.z = 0
      scene.add(orbit)
    })
  }

  makeOrbits(planetsData)

  camera.position.x = -8
  camera.position.y = 12
  camera.position.z = 40

  camera.lookAt(scene.position)

  renderer.render(scene, camera)
}

init()
