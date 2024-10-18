interface IWarningStore {
  booleanFlag: boolean
  changeBooleanFlagToTrue: () => void
  changeBooleanFlagToFalse: () => void
}

export default IWarningStore