import CustomTable from "../components/CustomTable";
import Navbar from "../components/Navbar";
import {
  callsData,
  callsHeaders,
  emailData,
  emailHeaders,
  orderData,
  orderHeaders,
  userData,
  userHeaders,
} from "../data";
const Home = () => {
  return (
    <div className="w-full md:ml-[300px]">
      <Navbar links={[{ title: "Summary", path: "/" }]} />
      <div className="flex xl:flex-row flex-col gap-3 my-3 mx-3">
        <div className="xl:w-[45%] ">
          <CustomTable
            title="Users"
            headers={userHeaders}
            data={userData}
            limtedBy={5}
          />
        </div>
        <div className="xl:w-[55%]">
          <CustomTable
            title="Orders"
            headers={orderHeaders}
            data={orderData}
            limtedBy={5}
          />
        </div>
      </div>
      <div className="flex xl:flex-row flex-col gap-3 my-3 mx-3">
        <div className="xl:w-[60%]">
          <CustomTable
            title="Scheduled Calls"
            headers={callsHeaders}
            data={callsData}
            limtedBy={5}
          />
        </div>
        <div className="xl:w-[40%]">
          <CustomTable
            title="Emails"
            headers={emailHeaders}
            data={emailData}
            limtedBy={5}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
