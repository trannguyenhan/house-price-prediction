import axios from 'axios';

export async function getDataDashboard() {
    return new Promise(async resolve => {
        const headers = {
            "Content-Type": "text/plain;charset=utf-8",
          };
      await axios('http://127.0.0.1:5000/get-data', headers)
        .then(response => {
            //alert(JSON.stringify(response));
          return resolve({
            success: true,
            data: response.data,
            error: null,
          });
        })
        .catch(error => {
          //alert(error);
          return resolve({
            success: false,
            data: null,
            error: error.response,
          });
        });
    });
}


export async function predict(data) {
  return new Promise(async resolve => {
   let str = `?area=${data.area}&floor_number=${data.floor}&bedroom_number=${data.bedroom}&is_dinning_room=${data.dinnging_room}&is_kitchen=${data.kitchen}&is_terrace=${data.terrace}&is_car_park=${data.car_park}&type=${data.type}&direction=${data.direction}&street_in_front_of_house=${data.street_width}&width=${data.width}&city=${data.city}&district=${data.district}&option=${data.
    algorithm}`;
      const headers = {
          "Content-Type": "text/plain;charset=utf-8",
        };
    await axios('http://127.0.0.1:5000/predict'+str, headers)
      .then(response => {
          //alert(JSON.stringify(response));
        return resolve({
          success: true,
          data: response.data,
          error: null,
        });
      })
      .catch(error => {
        //alert(error);
        return resolve({
          success: false,
          data: null,
          error: error.response,
        });
      });
  });
}
