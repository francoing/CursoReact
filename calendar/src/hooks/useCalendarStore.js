import { useDispatch, useSelector } from "react-redux"
import { onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent } from "../store/calendar/calendarSlice"

export const useCalendarStore = () => {

    const dispatch = useDispatch()
    const {events,activeEvent} = useSelector(state =>state.calendar)
    const setActiveEvent = (caledarEvent)=>{
      dispatch(onSetActiveEvent(caledarEvent))
    }

    const startSavingEvent = async(caledarEvent) =>{

      if (caledarEvent._id) {
        dispatch(onUpdateEvent({...caledarEvent}))
        
      }else{
        dispatch(onAddNewEvent({...caledarEvent,_id:new Date().getTime()}))
      }

    }

    const startDeletingEvent =()=>{
      dispatch(onDeleteEvent())
    }

  return {

    events,
    activeEvent,
    hasEventSelected : !!activeEvent,
    setActiveEvent,
    startSavingEvent,
    startDeletingEvent
  }
}

