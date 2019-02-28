
const PopulateCarsInMap = (radius, position, data) => {
    
  const lat       = position.latitude;
  const long      = position.longitude;
  const _radius   = Math.pow(radius, 2);

  return data.filter((item, id) => {
      const { latitude, longitude } = item.coordinates;
      let _x = Math.pow(( lat - latitude ), 2);
      let _y = Math.pow(( long - longitude ), 2);
      if (( _x + _y ) <= _radius) {
          // item.uid = id;
          // item.distance = _x + _y;                                
          // item.distance = Math.sqrt( item.distance );             
          // item.distance = item.distance * (60 * 1852 );           
          // item.distance = item.distance.toFixed(4);              
          return true;
      }
  })
}

export default PopulateCarsInMap;