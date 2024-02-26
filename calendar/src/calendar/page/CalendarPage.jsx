import { Calendar } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { CalendarEvent, Navbar,CaledarModal, FabAddNew, FabAddDelete } from "../"
import { localizer ,getMessagesES} from '../../helpers'
import { useState } from 'react'
import { useUiStore,useCalendarStore } from '../../hooks'


export const CalendarPage = () => {

  const eventStyleGetter = (event,start,end,isSelected) => {

    const style = {
      backgroundColor : '#347CF7',
      borderRadius : '0px',
      opacity:0.8,
      color:'white'
    }

    return{
      style
    }
  }

  const onDoubleClick = (event) => {
    openDateModal()
  }

  const onSelect = (event) => {
    // console.log({click : event});
    setActiveEvent(event)
  }
  
  const onViewChanged = (event) =>{
   localStorage.setItem('lastView',event)
   setLastView(event)
  }

  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'week');
  const { openDateModal } = useUiStore()
  const {events,setActiveEvent} = useCalendarStore()

  return (

    <>
       <Navbar/>

       <Calendar
        culture='es'
        localizer={localizer}
        events={events}
        defaultView={lastView}
        startAccessor="start"
        endAccessor="end"
        style={{ height:'calc(100vh - 80px)' }}
        messages={getMessagesES()}
        eventPropGetter={eventStyleGetter}
        components={{
          event:CalendarEvent
        }}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelect}
        onView={onViewChanged}

    />

    <CaledarModal/>
    <FabAddNew/>
    <FabAddDelete/>

    </>
  )
}

