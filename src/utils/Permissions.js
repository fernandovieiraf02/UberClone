import { PermissionsAndroid } from 'react-native';


export const requestGeolocationPermission = () => (
  PermissionsAndroid.checkPermission(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)
  .then( granted => {
    if (granted) {
      return new Promise((resolve, reject) => {
        resolve(granted);
      })
    }
    else return (
      PermissionsAndroid.request( 
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Driverfy permissão de geolocalização',
          message: 'Driverfy precisa acessar sua geolocalização para ' +
            'oferecer um melhor serviço',
          buttonNeutral: 'Mais tarde',
          buttonNegative: 'Cancelar',
          buttonPositive: 'Permitir'
        }
      )
    );
  })
  .catch( err => new Promisse( (resolve, reject) => reject(err)))
);