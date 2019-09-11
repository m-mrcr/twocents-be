class YelpToLocationSerializer {
  locationSerializer(business) {
    let location = {
      name: business.name,
      image: business.image_url,
      url: business.url,
      phone: business.display_phone,
      rating: business.rating,
      reviewCount: business.review_count,
      categories: this.serializeCategories(business.categories),
      coordinates: this.serializeCoordinates(business.coordinates),
      location: this.serializeLocation(business.location),
      hours: this.serializeHours(business.hours),
      price: business.price,
      yelpId: business.id
    }
    return location
  }

  truncatedLocationSerializer(yelp) {
    return yelp.businesses.map(business => {
      let location = {
        name: business.name,
        image: business.image_url,
        url: business.url,
        phone: business.display_phone,
        rating: business.rating,
        reviewCount: business.review_count,
        categories: this.serializeCategories(business.categories),
        coordinates: this.serializeCoordinates(business.coordinates),
        location: this.serializeLocation(business.location),
        price: business.price,
        yelpId: business.id
      }
      return location
    })
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
