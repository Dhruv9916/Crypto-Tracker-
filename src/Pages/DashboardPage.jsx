import React, { useEffect, useState } from "react";
import Header from "../Components/Common/Header";
import TabsComponent from "../Components/DashBoard/Tabs";
import axios from "axios";
import Search from "../Components/DashBoard/Search";



function DashboardPage() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  const onSearchChange = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };

  var filteredCoins = coins.filter(
    (item) =>
      item.name.toLowerCase().includes(search) ||
      item.symbol.toLowerCase().includes(search)
  );

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
      <Search search={search} onSearchChange={onSearchChange}></Search>
      <TabsComponent coins={filteredCoins} />
     
    </div>
  );
}

export default DashboardPage;
