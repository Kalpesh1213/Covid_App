import { createStore } from "redux";
let initialState = {
  vaccineData: [],
  siteData: [],
  registrationData: [],
  states: [],
  selectedState: [],
  dists: [],
  detailsOnStamp: [],
  vacine30Days: [],
  ageWiseVaccination: [],
  aefiData: [],
  regReportData: [],
  vaccByAge: [],
  buttonClicked: "By Doses",
};
const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_DIST": {
      return { ...state, dists: action.payload };
    }
    case "SET_VACCINATED_DATA": {
      return { ...state, vaccineData: action.payload };
    }
    case "SET_SITEDATA_DATA": {
      return { ...state, siteData: action.payload };
    }
    case "SET_REGISTRATION_DATA": {
      return { ...state, registrationData: action.payload };
    }
    case "SET_STATES_DATA": {
      return { ...state, states: action.payload };
    }
    case "SET_SELECTED_STATE": {
      return { ...state, selectedState: action.payload };
    }
    case "SET_DETAILS_ON_STAMP": {
      return { ...state, detailsOnStamp: action.payload };
    }
    case "LAST_30DAYS_VACCINE_DATA": {
      return { ...state, vacine30Days: action.payload };
    }
    case "LAST_30DAYS_AGEWISE_VACCINE_DATA": {
      return { ...state, ageWiseVaccination: action.payload };
    }
    case "SET_AEFI_DATA": {
      return { ...state, aefiData: action.payload };
    }
    case "REG_REPORT_DATA": {
      return { ...state, regReportData: action.payload };
    }
    case "VACCINATION_BY_AGE": {
      return { ...state, vaccByAge: action.payload };
    }
    case "SELECTED_BUTTON": {
      return { ...state, buttonClicked: action.payload };
    }

    default: {
      return { ...state };
    }
  }
};
export const globalStore = createStore(mainReducer);
