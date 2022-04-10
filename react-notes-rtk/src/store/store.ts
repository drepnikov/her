import { useContext, createContext, Dispatch } from "react";
import { initialState } from "src/store/reducer";
import { ActionReturnType } from "src/store/actions";

interface IAppState {
  state: typeof initialState;
  dispatch: Dispatch<ActionReturnType>;
}

const AppState = createContext<IAppState>({
  state: initialState,
  dispatch: () => {},
});

const useAppContext = () => {
  return useContext(AppState);
};

export { AppState, useAppContext };
