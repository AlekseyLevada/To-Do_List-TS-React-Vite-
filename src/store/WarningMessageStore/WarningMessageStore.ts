import { create } from "zustand";
import IWarningStore from "./types/IWarningStore";

export const WarningMessageStore = create<IWarningStore>((set, get) => ({
  booleanFlag: false,

  changeBooleanFlagToTrue: () => {
    let { booleanFlag } = get()
    set({
      booleanFlag: booleanFlag = !booleanFlag
    })
  },

  changeBooleanFlagToFalse: () => {
    let { booleanFlag } = get()
    set({
      booleanFlag: booleanFlag = !booleanFlag
    })
  }
}))
