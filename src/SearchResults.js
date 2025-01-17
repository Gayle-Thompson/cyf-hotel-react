import React, { useState } from "react";
// import moment from "moment";
import HighlightCustomerDetails from "./HighlightCustomerDetails";
import CustomerProfile from "./CustomerProfile";

function SearchResults(props) {
  const [customerID, setCustomerID] = useState(null);

  console.log(props.bookingResults);
console.log(customerID);
  function handleShowProfile(id) {
    setCustomerID(id);
  }
  // function searchResultList() {
  //   const resultInOrder = babyNames.sort((a, b) => a.name.localeCompare(b.name));
  // }

  return (
    <div>
      <table className="table table-responsive">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room id</th>
            <th scope="col">Check-in Date</th>
            <th scope="col">Check-out Date</th>
            <th scope="col">Total Num of Nights</th>
            <th scope="col">Customer Profile</th>
          </tr>
        </thead>
        <tbody>
          {props.bookingResults.map((result) => (
            <HighlightCustomerDetails
              key={result.id}
              result={result}
              handleShowProfile={handleShowProfile}
            />
          ))}
        </tbody>
      </table>
      {customerID && <CustomerProfile id={customerID} />}
    </div>
  );
}

export default SearchResults;
