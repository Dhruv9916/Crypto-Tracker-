import React, { useEffect, useState } from "react";
import Header from "../Components/Common/Header";
import TabsComponent from "../Components/DashBoard/Tabs";
import axios from "axios";

function DashboardPage() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((response) => {
        console.log("response", response);
        setCoins(response.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  return (
    <div>
      <Header />
      <TabsComponent coins={coins} />
    </div>
  );
}

export default DashboardPage;
