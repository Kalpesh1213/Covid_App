import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import "./ContainerSummary.css";
var temp;
function ContainerSummary() {
  const [vaccineData, setVaccineData] = useState([]);
  const [siteData, setSiteData] = useState([]);
  const [registrationData, setRegistrationData] = useState([]);
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState();
  const [dists, setDists] = useState([]);
  const [detailsOnStamp, setDetailsOnStamp] = useState([]);
  const [aefiData, setAefiData] = useState([]);
  const [regReportData, setRegReportData] = useState([]);
  const [vaccByAge, setVaccByAge] = useState([]);
  var dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      // var data = await axios.get(
      //   "https://api.cowin.gov.in/api/v1/reports/v2/getPublicReports?state_id=&district_id=&date=2021-07-24"
      // );

      // var result = await data;

      var res = await Promise.all([
        fetch(
          "https://api.cowin.gov.in/api/v1/reports/v2/getPublicReports?state_id=&district_id=&date=2021-07-24"
        ),
        fetch("https://dashboard.cowin.gov.in/assets/json/csvjson.json"),
        fetch(
          "https://api.cowin.gov.in/api/v1/reports/v2/getVacPublicReports?state_id=&district_id=&date=2021-07-24"
        ),
      ]);
      var result = await res[0].json();
      var dists = await res[1].json();
      var vaccinationDetailsOf30Days = await res[2].json();
      //   console.log(vaccinationDetailsOf30Days.last30DaysAgeWiseVaccination);
      setDetailsOnStamp(vaccinationDetailsOf30Days.last30DaysVaccination);
      //   last30DaysVaccination;
      dispatch({
        type: "LAST_30DAYS_VACCINE_DATA",
        payload: vaccinationDetailsOf30Days.last30DaysVaccination,
      });
      //   console.log(vaccinationDetailsOf30Days);

      setDetailsOnStamp(
        vaccinationDetailsOf30Days.last30DaysAgeWiseVaccination
      );
      dispatch({
        type: "LAST_30DAYS_AGEWISE_VACCINE_DATA",
        payload: vaccinationDetailsOf30Days.last30DaysAgeWiseVaccination,
      });

      setRegReportData(vaccinationDetailsOf30Days.regReportData);
      dispatch({
        type: "REG_REPORT_DATA",
        payload: vaccinationDetailsOf30Days.regReportData,
      });

      setDists(dists);
      dispatch({ type: "SET_DIST", payload: dists });
      // console.log(dists);
      // console.log(result);
      setDetailsOnStamp(result.timeWiseTodayRegReport);
      dispatch({
        type: "SET_DETAILS_ON_STAMP",
        payload: result.timeWiseTodayRegReport,
      });

      setVaccineData(result.topBlock.vaccination);
      dispatch({
        type: "SET_VACCINATED_DATA",
        payload: result.topBlock.vaccination,
      });
      setSiteData(result.topBlock.sites);
      dispatch({ type: "SET_SITEDATA_DATA", payload: result.topBlock.sites });
      setRegistrationData(result.topBlock.registration);
      dispatch({
        type: "SET_REGISTRATION_DATA",
        payload: result.topBlock.registration,
      });
      console.log(result.getBeneficiariesGroupBy);
      setStates(result.getBeneficiariesGroupBy);
      dispatch({
        type: "SET_STATES_DATA",
        payload: result.getBeneficiariesGroupBy,
      });

      setAefiData(result.getBeneficiariesGroupBy);
      dispatch({
        type: "SET_AEFI_DATA",
        payload: result.last30DaysAefi,
      });
      setVaccByAge(result.vaccinationByAge);
      dispatch({
        type: "VACCINATION_BY_AGE",
        payload: result.vaccinationByAge,
      });
    }
    fetchData();
  }, []);

  const HandleSelectState = (e) => {
    // console.log(e.target.value);
    var stateSelected = states.filter(
      (item) => item.state_name === e.target.value
    );
    // console.log(stateSelected[0].state_id);
    setSelectedState(stateSelected[0].state_id);
    dispatch({
      type: "SET_SELECTED_STATE",
      payload: stateSelected[0].state_id,
    });
    states.map((item) => {
      if (item.title === e.target.value) {
        // console.log(item);
        setVaccineData(item);
        dispatch({ type: "SET_VACCINATED_DATA", payload: item });
      }
    });
  };

  var dataFromStore = useSelector((state) => state);
  //   console.log(dataFromStore.vacine30Days.last30DaysVaccination);
  //   console.log(dataFromStore);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(e.target.name);
  };

  return (
    <div className='ContainerSummary'>
      <div className='select_container'>
        <div>
          <button style={{ border: "none" }}>India</button>
        </div>
        <div>
          <select onChange={(e) => HandleSelectState(e)}>
            <option>Select State</option>

            {states
              .sort((a, b) => a.title.localeCompare(b.title))
              .map((item) => {
                return <option>{item.title}</option>;
              })}
          </select>

          <select>
            <option>Select District</option>
            {dists.map((item) => {
              if (item.state_id == selectedState) {
                return <option>{item.district_name}</option>;
              }
            })}
          </select>
        </div>
      </div>
      <div className='Container'>
        <div className='Container_one'>
          <div className='Wrapper'>
            <p>Total Vaccination Doses</p>

            <h3>{vaccineData.total}</h3>
          </div>

          <div className='Dose_Container'>
            <div>
              <p>Dose 1</p>
              <p>
                {vaccineData.tot_dose_1
                  ? vaccineData.tot_dose_1
                  : vaccineData.partial_vaccinated}
              </p>
            </div>

            <div>
              <p>Dose 2</p>
              <p>
                {vaccineData.tot_dose_2
                  ? vaccineData.tot_dose_2
                  : vaccineData.totally_vaccinated}
              </p>
            </div>
          </div>
        </div>

        {/* container two */}
        <div className='Container_one'>
          <div className='Wrapper'>
            <p>Sites Conducting Vaccination</p>
            <h3>{siteData.total}</h3>
          </div>
          <div className='Dose_Container'>
            <div>
              <p>Government</p>
              <p>{siteData.govt}</p>
            </div>

            <div>
              <p>Private</p>
              <p>{siteData.pvt}</p>
            </div>
          </div>
        </div>
        {/* Container three */}
        <div className='Container_one'>
          <div className='Wrapper'>
            <p>Total Registrations</p>
            <h3>{registrationData.total}</h3>
          </div>

          <div className='Dose_Container'>
            <div>
              <p>Age 18-44</p>
              <p>{registrationData.cit_18_45}</p>
            </div>

            <div>
              <p>Age 45+</p>
              <p>{registrationData.cit_45_above}</p>
            </div>
          </div>
        </div>
      </div>
      <div className='btn'>
        {["By Doses", "By Age"].map((item) => (
          <button
            style={{ border: "none" }}
            onClick={() =>
              dispatch({ type: "SELECTED_BUTTON", payload: item })
            }>
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ContainerSummary;
