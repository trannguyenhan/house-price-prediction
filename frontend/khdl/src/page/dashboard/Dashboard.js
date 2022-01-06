import React, {useEffect,useState} from "react";
import { Link } from "react-router-dom";
import GoogleChart from "../../chart/GoogleChart";
import AreaChart from "../../chart/AreaChart";
import BedRoomNumberChart from "../../chart/BedRoomNumberChart";
import CarParkChart from "../../chart/CarParkChart";
import FloorNumberChart1 from "../../chart/FloorNumberChart1";
import DinningRoomChart from "../../chart/DinningRoomChart";
import CityChart from "../../chart/CityChart";
import styles from "./dashboard.module.css";
import { getDataDashboard } from "../../api/api";
import DistrictChart from "../../chart/DistrictChart";
import KitchenRoomChart from "../../chart/KitchenChart";
import TerraceChart from "../../chart/TerraceChart";
import TypeRoomChart from "../../chart/TypeChart";
import HeaderPage from "../../component/HeaderPage";
import FooterPage from "../../component/FooterPage";

export default function Dashboard() {
  const [data, setData] = useState([]);
   
  useEffect(() => {
    getDataDashboard()
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {});
  }, []);
  return (
    <div>
      <HeaderPage />
      <h1 className={styles.h1}>Dashboard</h1>
      <div>
      </div>
      <div className={styles.Main} >
        <div>
          <AreaChart data={data}/>
        </div>
        <div>
          <BedRoomNumberChart data={data} />
        </div>
        <div>
          <FloorNumberChart1 data={data} />
        </div>
        <div>
          <CarParkChart data={data} />
        </div>
        <div>
          <CityChart data={data} />
        </div>
        <div>
          <DinningRoomChart data={data} />
        </div>
        <div>
          <DistrictChart data={data} />
        </div>
        <div>
          <KitchenRoomChart data={data} />
        </div>
        <div>
          <TerraceChart data={data} />
        </div>
        <div>
          <TypeRoomChart data={data} />
        </div>
      </div>
      <FooterPage data={data} />
    </div>
  );
}
