/* SELECTORS */

export const getAllTrips = ({trips}) => trips;

export const getFilteredTrips = ({trips, filters},) => {
  let output = trips;

  // filter by search phrase
  if(filters.searchPhrase){
    const pattern = new RegExp(filters.searchPhrase, 'i');
    output = output.filter(trip => pattern.test(trip.name));
  }

  // TODO - filter by duration

  output = output.filter(trip => trip.days >= filters.duration.from && trip.days <= filters.duration.to);


  // TODO - filter by tags
  let filteredByTags = [];
  let isOK;



  for (let trip of output){
    //console.log('start',trip.name,  output);
    for (let tag of filters.tags) {
      // //console.log('tags', tag);
      if (!trip.tags.includes(tag)){
        isOK = false;
        // //console.log(trip.name, isOK);
        break;
      }
      else {
        isOK = true;
        // //console.log(trip.name,isOK);
        continue;
      }
    }
    if (isOK == false) {
      //console.log('hi');
      if(filteredByTags.includes(trip)){
        filteredByTags.splice(filteredByTags.indexOf(trip), 1);
        //console.log('Deleted Trip');
        continue;
      }
    }
    else {
      filteredByTags.push(trip);
      continue;
    }
    output = filteredByTags;
    // //console.log('output', output);

  }




  // TODO - sort by cost descending (most expensive goes first)

  let changedPrices = JSON.parse(JSON.stringify(output));

  let sorted = [changedPrices[0]];

  // console.log('max', Math.max(...sorted));

  for (let trip of changedPrices) {
    trip.cost = trip.cost.replace('$', '');
    // console.log(trip.cost);
    trip.cost = trip.cost.replace(',', '');
    // console.log(trip.cost);
    trip.cost = parseInt(trip.cost);
  }


  for (let i = 1; i < changedPrices.length; i++) {
    sorted = changedPrices.sort(function (a, b){
      return b.cost - a.cost;
    });

  }

  // console.log('Sorted', sorted);

  output = sorted;

  return output;
};

export const getTripById = ({trips}, tripId) => {

  const filtered = trips.filter(trip => trip.id == tripId);
  // TODO - filter trips by tripId

  //console.log('filtering trips by tripId:', tripId, filtered);
  return filtered.length ? filtered[0] : {error: true};
};

export const getTripsForCountry = ({trips}, countryCode) => {

  const filtered = trips.filter(trip => trip.country.code == countryCode);
  // TODO - filter trips by countryCode

  //console.log('filtering trips by countryCode:', countryCode, filtered);
  return filtered.length ? filtered : [{error: true}];
};

/* ACTIONS */

/*
// action name creator
const reducerName = 'trips';
const createActionName = name => `app/${reducerName}/${name}`;

// action types


// action creators


// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
 */
