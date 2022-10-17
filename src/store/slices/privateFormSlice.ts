import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { robberyCase } from "../../types/case";
import { officer } from "../../types/officer";

// слайс для форм редактирования
const privateFormSlice = createSlice({
    name: 'privateForms',
    initialState: {
        robberyData: {} as robberyCase,
        officerData: {} as officer,
    },
    reducers: {
        setCaseStatus(state, action: PayloadAction<string>) {
            state.robberyData.status = action.payload;
        },
        setCaseType(state, action: PayloadAction<string>) {
            state.robberyData.type = action.payload;
        },
        setCaseName(state, action: PayloadAction<string>) {
            state.robberyData.ownerFullName = action.payload;
        },
        setCaseColor(state, action: PayloadAction<string>) {
            state.robberyData.color = action.payload;
        },
        setCaseDate(state, action: PayloadAction<string>) {
            state.robberyData.date = action.payload;
        },
        setCaseOfficer(state, action: PayloadAction<string>) {
            state.robberyData.officer = action.payload;
        },
        setCaseDescription(state, action: PayloadAction<string>) {
            state.robberyData.description = action.payload;
        },
        setCaseResolution(state, action: PayloadAction<string>) {
            state.robberyData.resolution = action.payload;
        },
        setCaseLicense(state, action: PayloadAction<string>) {
            state.robberyData.licenseNumber = action.payload;
        },
        setOfficerEmail(state, action: PayloadAction<string>) {
            state.officerData.email = action.payload;
        },
        setOfficerPassword(state, action: PayloadAction<string>) {
            state.officerData.password = action.payload;
        },
        setOfficerFirstName(state, action: PayloadAction<string>) {
            state.officerData.firstName = action.payload;
        },
        setOfficerLastName(state, action: PayloadAction<string>) {
            state.officerData.lastName = action.payload;
        },
        setOfficerApproved(state, action: PayloadAction<string>) {
            action.payload === 'Да'?
            state.officerData.approved = true
            :
            state.officerData.approved = false;
        },
        clearForm(state) {
            state.officerData = {} as officer;
            state.robberyData = {} as robberyCase;
        }
    }
});

export default privateFormSlice.reducer;
export const {
    setCaseStatus,
    setCaseType,
    setCaseName,
    setCaseColor,
    setCaseDate,
    setCaseOfficer,
    setCaseDescription,
    setCaseLicense,
    setCaseResolution,
    setOfficerPassword,
    setOfficerFirstName,
    setOfficerLastName,
    setOfficerApproved,
    setOfficerEmail,
    clearForm } = privateFormSlice.actions;