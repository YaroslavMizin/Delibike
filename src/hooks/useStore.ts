import { useSelector, useDispatch, TypedUseSelectorHook } from "react-redux";
import { RootState, typedDispatch } from "../store/store";

export const useTypedDispatch = () => useDispatch<typedDispatch>();
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;