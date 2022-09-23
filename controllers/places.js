const router = require('express').Router()

//get the route that will eventually show the list of places
router.get('/', (req, res) => {
	let places = [{
  name: 'H-Thai-ML',
  city: 'Seattle',
  state: 'WA',
  cuisines: 'Thai, Pan-Asian',
  pic: '/images/badegg.jpg'
}, {
  name: 'Coding Cat Cafe',
  city: 'Phoenix',
  state: 'AZ',
  cuisines: 'Coffee, Bakery',
  pic: '/images/niceface.jpg'
}];

    res.render('places/index', { places })
});

router.get('/default', (req, res) => {
  res.render('places/default')
})

router.get('/home', (req, res) => {
  res.render('places/home')
})

router.get('/new', (req, res) => {
  res.render('places/new')
})

module.exports = router;