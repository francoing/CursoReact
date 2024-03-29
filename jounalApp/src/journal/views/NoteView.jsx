import { DeleteOutline, SaveOutlined, UploadFileOutlined } from "@mui/icons-material"
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material"
import { ImageGalery } from "../components/ImageGalery"
import { useDispatch, useSelector } from "react-redux"
import { useForm } from "../../hooks/useForm";
import { useEffect, useMemo, useRef } from "react";
import { setActiveNote ,startDeletingNote,startSaveNote, startUploadingFiles} from "../../store/journal";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";


export const NoteView = () => {

    const dispatch = useDispatch()

    const {active:note,messageSaved,isSaving} = useSelector(state =>state.journal)
    const {body,title,date,onInputChange,formState} = useForm(note)
    const dateString = useMemo(()=>{
        const newDate = new Date(date)
        return newDate.toUTCString()
    },[date])

    useEffect(() => {
        
        dispatch(setActiveNote(formState))
       
    },[formState]) 

    useEffect(() => {
        if (messageSaved.length > 0) {   
            Swal.fire('Nota Actualizada',messageSaved,'success')
        }
    },[messageSaved])

    const onSaveNote = () => {
      dispatch(startSaveNote())
    }
    
    const onFileInputChange  = ({target}) => {

        if(target.files === 0) return

        console.log('subiendo archivos');
        dispatch(startUploadingFiles(target.files))
    }

    const fileInputRef = useRef()

    const onDelete = () =>{
        dispatch(startDeletingNote())
    }
    

  return (
   
    <Grid 
        container 
        direction='row' 
        justifyContent='space-between' 
        alignItems='center' 
        sx={{mb:1}}
        className="animate__animated animate__fadeIn animate__faster"
    >
        <Grid item>
            <Typography fontSize={39} fontWeight='light'>{dateString}</Typography>
        </Grid>

        <Grid item> 

            <input 
                type="file"
                multiple
                onChange={onFileInputChange} 
                style={{display:'none'}}
                ref={fileInputRef}
            />

            <IconButton 
                color="primary" 
                disabled ={isSaving}
                onClick={() =>{fileInputRef.current.click()}}
            >
                <UploadFileOutlined/>
            </IconButton>       
            <Button 
                onClick={onSaveNote}
                disabled={isSaving}
                color="primary" 
                sx={{padding:2}}>
               <SaveOutlined sx={{fontSize:30,mr:1}}/>
                    Guardar
            </Button>
        </Grid>

        <Grid container>
            <TextField
                type="text"
                variant="filled"
                fullWidth
                placeholder="Ingrese titulo"
                label="Titulo"
                sx={{border:'none',mb:1}}
                name="title"
                value={title}
                onChange={onInputChange}
            />
            <TextField
                type="text"
                variant="filled"
                fullWidth
                multiline
                placeholder="¿Que sucedio hoy?"
                minRows={5}
                name="body"
                value={body}
                onChange={onInputChange}
            />
        </Grid>

        <Grid container justifyContent='end'>
            <Button
                onClick={onDelete}
                sx={{mt:2}}
                color="error"
            
            >
                <DeleteOutline/>
                Borrar
            </Button>
        </Grid>

        <ImageGalery images = {note.imageUrls}/>
    </Grid>

  )
}


