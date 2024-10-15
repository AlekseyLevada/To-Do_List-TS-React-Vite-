import { create } from "zustand";
import IWarningStore from "./types/IWarningStore";

export const WarningMessageStore = create<IWarningStore>((set, get) => ({
  warningMessage: false,

  changeWarningMessageFlag: () => {
    let { warningMessage } = get()
    set({
      warningMessage: warningMessage = !warningMessage
    })
  }
}))