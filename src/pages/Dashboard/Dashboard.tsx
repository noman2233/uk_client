import React from "react";
import styles from "./Dashbaord.module.css";
import Sidebar from "./Sidebar/Sidebar";
// import AccountDetails from "./AccountDetails/AccountDetails";
import AddressSection from "./AddressCard/AddressCard";
import OrdersCard from "./OrdersCard/OrdersCard";
import UserInfo from "./UserInfo/UserInfo";
import Downloads from "./Downloads/Downloads";
import Wishlist from "./Wishlist/Wishlist";
const Dashboard: React.FC = () => {
  return (
    <div className={styles.pageWrapper}>
      <Sidebar />
      {/* <AccountDetails /> */}
      {/* <AddressSection /> */}
      <OrdersCard />
      {/* <UserInfo /> */}
      {/* <Downloads /> */}
      {/* <Wishlist /> */}
    </div>
  );
};

export default Dashboard;
