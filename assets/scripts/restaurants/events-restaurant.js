'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const ui = require('./ui-restaurant')
const api = require('./api-restaurant')

const onAddRestaurant = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.addRestaurant(data)
    .then(ui.addRestaurantSuccess)
    // I believe this is what creates the auto advance
    // .then(() => { signInNoEvent(data) })
    .catch(ui.addRestaurantFailure)
}

const onUpdateRestaurant = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.updateRestaurant(data)
    .then(ui.udpateRestaurantSuccess)
    // I believe this is what creates the auto advance
    // .then(() => { signInNoEvent(data) })
    .catch(ui.udpateRestaurantFailure)
}

const onDeleteRestaurant = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.deleteRestaurant(data)
    .then(ui.deleteRestaurantSuccess)
    .catch(ui.deleteRestaurantFailure)
}

const onShowRestaurants = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.showRestaurants(data)
    .then(ui.showRestaurantsSuccess)
    .catch(ui.showRestaurantsFailure)
}

const addHandlers = () => {
  $('body').on('submit', '.add-restaurant', onAddRestaurant)
  $('body').on('submit', '.update-restaurant', onUpdateRestaurant)
  $('body').on('submit', '.delete-restaurant', onDeleteRestaurant)
  $('body').on('submit', '.show-restaurants', onShowRestaurants)
}

module.exports = {
  addHandlers
}
