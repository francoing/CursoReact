import { useEffect, useMemo, useState } from 'react';

export const useForm = ( initialForm = {} ,formValidations = {}) => {
  
    const [ formState, setFormState ] = useState( initialForm );
    const [formValidation, setformValidations] = useState({ });
    
    const isFormValid = useMemo (()=>{

        for (const formValue of Object.keys(formValidation)) {
            if (formValidation[formValue] !== null) {
                return false
            }
        }
        return true
    },[formValidation])

    useEffect(() => {
        crateValidators()
         
    },[formState])

    useEffect(() => {
        setFormState(initialForm) 
    },[initialForm])

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    const crateValidators =()=>{
        const formCheckedValues = {}
        for (const formField of Object.keys(formValidations) ) {
            const [fn,errorMessage ] = formValidations[formField]

            formCheckedValues[`${formField}Valid`] = fn(formState [formField]) ? null:errorMessage
            
        }

        setformValidations(formCheckedValues)

    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        ...formValidation,
        isFormValid
    }
}