import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./predict.module.css";
import FooterPage from "../../component/FooterPage";
import HeaderPage from "../../component/HeaderPage";
import { predict } from "../../api/api";

const city = [
  {
    label: "Hà Nội",
    value: 1,
  },
  {
    label: "Hồ Chí Minh",
    value: 0,
  },
  {
    label: "Không xác định",
    value: 2,
  },
];

const district = [
  {
    label: "Nội thành",
    value: 1,
  },
  {
    label: "Ngoại thành",
    value: 0,
  },
  {
    label: "Không xác định",
    value: 2,
  },
];

const terrace = [
  {
    label: "Nhà mặt tiền",
    value: 1,
  },
  {
    label: "Nhà trong hẻm",
    value: 0,
  },
  {
    label: "Không xác định",
    value: 2,
  },
];

const algorithm = [{
  label: "MLP",
  value: 0,
},
{
  label: "XGBoots",
  value: 1,
},];

const tfdata = [
  {
    label: "Không",
    value: 0,
  },
  {
    label: "Có",
    value: 1,
  },
  {
    label: "Không xác định",
    value: 2,
  },
];

const direction = [
  {
    label: "Không xác định",
    value: "None",
  },
  {
    label: "Đông",
    value: "Đông",
  },
  {
    label: "Tây",
    value: "Tây",
  },
  {
    label: "Nam",
    value: "Nam",
  },
  {
    label: "Bắc",
    value: "Bắc",
  },
  {
    label: "Đông Bắc",
    value: "Đông Bắc",
  },
  {
    label: "Đông Nam",
    value: "Đông Nam",
  },
  {
    label: "Tây Bắc",
    value: "Tây Bắc",
  },
  {
    label: "Tây Nam",
    value: "Tây Nam",
  },
];

export default function Predict() {
  var dataTemplate = {
    city: 2,
    district: 2,
    direction: 2,
    type: 2,
    aera: null,
    width: null,
    floor: null,
    bedroom: null,
    street_width: null,
    kitchen: 2,
    dinnging_room: 2,
    car_park: 2,
    terrace: 2,
    algorithm: 0,
  };

  const [data, setData] = useState(dataTemplate);
  const [cost, setCost] = useState(0);

  const changeCity = (event) => {
    setData({ ...data, city: event.target.value });
  };

  const changeDistrict = (event) => {
    setData({ ...data, district: event.target.value });
  };

  const changeDirection = (event) => {
    setData({ ...data, direction: event.target.value });
  };

  const changeType = (event) => {
    setData({ ...data, type: event.target.value });
  };

  const changeKitchen = (event) => {
    setData({ ...data, kitchen: event.target.value });
  };

  const changeDinngingRoom = (event) => {
    setData({ ...data, dinnging_room: event.target.value });
  };

  const changeCarPark = (event) => {
    setData({ ...data, car_park: event.target.value });
  };

  const changeTerrace = (event) => {
    setData({ ...data, terrace: event.target.value });
  };

  const changeAlgorithm = (event) => {
    setData({ ...data, algorithm: event.target.value });
  };
  
  const submitPress = (event) => {
    //alert(JSON.stringify(data));
    predict(data).then(res => setCost(res.data.price));
    event.preventDefault();
  };

  return (
    <div>
      <HeaderPage />
      <h1 className={styles.h1}>Dự đoán giá nhà</h1>
      <div className={styles.main}>
        <form onSubmit={submitPress}>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Thành phố</label>
            <div className="col-sm-10">
              <select
                onChange={changeCity}
                value={data.city}
                className="form-select"
              >
                {city.map((option) => (
                  <option value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Khu vực</label>
            <div className="col-sm-10">
              <select
                onChange={changeDistrict}
                value={data.district}
                className="form-select"
              >
                {district.map((option) => (
                  <option value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Hướng</label>
            <div className="col-sm-10">
              <select
                onChange={changeDirection}
                value={data.direction}
                className="form-select"
              >
                {direction.map((option) => (
                  <option value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Loại nhà</label>
            <div className="col-sm-10">
              <select
                onChange={changeType}
                value={data.type}
                className="form-select"
              >
                {terrace.map((option) => (
                  <option value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Diện tích</label>
            <div className="col-sm-10">
              <input
                type="number"
                step="0.01"
                placeholder={0}
                className="form-control"
                value={data.area}
                onInput={(e) => setData({ ...data, area: e.target.value })}
              />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Chiều rộng</label>
            <div className="col-sm-10">
              <input
                type="number"
                step="0.01"
                placeholder={0}
                className="form-control"
                value={data.width}
                onInput={(e) => setData({ ...data, width: e.target.value })}
              />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-2 col-form-label">
              Chiều rộng lòng đường
            </label>
            <div className="col-sm-10">
              <input
                type="number"
                step="0.01"
                placeholder={0}
                className="form-control"
                value={data.street_width}
                onInput={(e) =>
                  setData({ ...data, street_width: e.target.value })
                }
              />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Số tầng</label>
            <div className="col-sm-10">
              <input
                type="number"
                placeholder={0}
                value={data.floor}
                className="form-control"
                onInput={(e) => setData({ ...data, floor: e.target.value })}
              />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Só phòng ngủ</label>
            <div className="col-sm-10">
              <input
                type="number"
                placeholder={0}
                value={data.bedroom}
                className="form-control"
                onInput={(e) => setData({ ...data, bedroom: e.target.value })}
              />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Phòng ăn</label>
            <div className="col-sm-10">
              <select
                onChange={changeDinngingRoom}
                value={data.dinnging_room}
                className="form-select"
              >
                {tfdata.map((option) => (
                  <option value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Nhà bếp</label>
            <div className="col-sm-10">
              <select
                onChange={changeKitchen}
                value={data.kitchen}
                className="form-select"
              >
                {tfdata.map((option) => (
                  <option value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Bãi đỗ xe</label>
            <div className="col-sm-10">
              <select
                onChange={changeCarPark}
                value={data.car_park}
                className="form-select"
              >
                {tfdata.map((option) => (
                  <option value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Sân thượng</label>
            <div className="col-sm-10">
              <select
                onChange={changeTerrace}
                value={data.terrace}
                className="form-select"
              >
                {tfdata.map((option) => (
                  <option value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Thuật toán</label>
            <div className="col-sm-10">
              <select
                onChange={changeAlgorithm}
                value={data.algorithm}
                className="form-select"
              >
                {algorithm.map((option) => (
                  <option value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
          </div>
          <br />
          <br />

          <div class="row justify-content-center">
            <input
              type="submit"
              className="btn btn-primary btn-lg btn-block"
              value="Dự đoán"
            />
          </div>
        </form>

        <div className={styles.div_p_cost}>
          <h3>Giá dự đoán: <span className={styles.p_cost}>{cost}</span> tỷ đồng</h3>
        </div>
      </div>

      <FooterPage />
    </div>
  );
}
