import { useDispatch, useSelector } from "react-redux"
import { onCloseModal, onOpenDateModal } from "../store/ui/uiSlice"

export const useUiStore = () => {
  const {isDateModalOpen} = useSelector(state => state.ui)
  const dispatch = useDispatch()

  const openDateModal = () => {
    dispatch(onOpenDateModal())
  }

  const closeDateModal = () => {
    dispatch(onCloseModal())
  }

  const toggleDateModal = () => {
    (isDateModalOpen)
     ? openDateModal()
     : closeDateModal()
  }
  
  
  

  return {

    isDateModalOpen,
    openDateModal,
    closeDateModal,
    toggleDateModal,

  }


}
