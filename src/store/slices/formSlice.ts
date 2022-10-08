import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { auth, signup, report } from "../../types/forms";

const formSlice = createSlice({
    name: 'form',
    initialState: {
        report: {} as report,
        auth: {} as auth,
        singup: {} as signup,
    },
    reducers: {
        setReportLicense(state, action: PayloadAction<string>) {
            state.report.licenseNumber = action.payload;
        },
        setReportName(state, action: PayloadAction<string>) {
            state.report.ownerFullName = action.payload;
        },
        setReportType(state, action: PayloadAction<string>) {
            state.report.type = action.payload;
        },
        setReportColor(state, action: PayloadAction<string>) {
            state.report.color = action.payload;
        },
        setReportDate(state, action: PayloadAction<string>) {
            state.report.date = action.payload;
        },
        setReportInfo(state, action: PayloadAction<string>) {
            state.report.description = action.payload;
        },
        setOfficer(state, action: PayloadAction<string>) {
            state.report.officer = action.payload;
        },
        setReportClientID(state, action: PayloadAction<string>) {
            state.report.clientId = action.payload;
        },
        setAuthEmail(state, action: PayloadAction<string>) {
            state.auth.email = action.payload;
        },
        setAuthPassword(state, action: PayloadAction<string>) {
            state.auth.password = action.payload;
        },
        setSignUpEmail(state, action: PayloadAction<string>) {
            state.singup.email = action.payload;
        },
        setSignUpFirstName(state, action: PayloadAction<string>) {
            state.singup.firstName = action.payload;
        },
        setSignUpLastName(state, action: PayloadAction<string>) {
            state.singup.lastName = action.payload;
        },
        setSignUpPassword(state, action: PayloadAction<string>) {
            state.singup.password = action.payload;
        },
        setSignUpClientId(state, action: PayloadAction<string>) {
            state.singup.clientId = action.payload;
        },
        clearForm(state) {
            state.auth = {} as auth;
            state.report = {} as report;
            state.singup = {} as signup;
        }
    }
});

export default formSlice.reducer;
export const {
    setReportLicense,
    setReportName,
    setReportType,
    setReportColor,
    setReportDate,
    setReportInfo,
    setAuthEmail,
    setAuthPassword,
    setSignUpEmail,
    setSignUpFirstName,
    setSignUpLastName,
    setSignUpPassword,
    setSignUpClientId,
    clearForm,
    setOfficer,
    setReportClientID,
} = formSlice.actions;