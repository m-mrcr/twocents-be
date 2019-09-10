class YelpToLocationSerializer {

  locationSerializer(yelp) {
    let location = {
      name: yelp.name,
      image: yelp.image_url,
      url: yelp.url,
      phone: yelp.display_phone,
      rating: yelp.rating,
      reviewCount: yelp.review_count,
      categories: this.serializeCategories(yelp.categories),
      coordinates: this.serializeCoordinates(yelp.coordinates),
      location: this.serializeLocation(yelp.location),
      hours: this.serializeHours(yelp.hours),
      price: yelp.price,
      yelpId: yelp.id
    }
    return location
  }

  truncatedLocationSerializer(yelp) {
    // console.log(yelp)
    let location = {
      name: yelp.name,
      image: yelp.image_url,
      url: yelp.url,
      phone: yelp.display_phone,
      rating: yelp.rating,
      reviewCount: yelp.review_count,
      categories: this.serializeCategories(yelp.categories),
      coordinates: this.serializeCoordinates(yelp.coordinates),
      location: this.serializeLocation(yelp.location),
      price: yelp.price,
      yelpId: yelp.id,
    }
    return location
  }

  serializeCategories(yelpCategories) {
    var result = []
    yelpCategories.forEach(category => {
      result.push(category.title)
    })
    return result
  }

  serializeCoordinates(yelpCoordinates) {
    return Object.values(yelpCoordinates)
  }

  serializeLocation(yelpLocation) {
    return yelpLocation.display_address
  }

  serializeHours(yelpHours) {
    return yelpHours[0].open.map(day => {
      return `${day.start}-${day.end}`
    })
  }

};

module.exports = YelpToLocationSerializer
