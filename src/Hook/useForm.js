import  { useState } from 'react'

export const useForm = (initialForm , validateForm) => {
  
    const [Form, setForm] = useState(initialForm)
    const [Error, setError] = useState({})
    const [loading, setLoading] = useState (false)
   
    
    const onInputChangue = (event) =>{
        const {name, value} = event.target
        setForm({
            ...Form,
            [name]: value
        })
        
    }
    const onBlur = (event) =>{
        onInputChangue(event)
        setError(validateForm(Form))
    }
    const onSubmit= (event)=>{
        
    }
    const onResetForm = (input) =>{
                for (const key in initialForm) {
            if (Object.hasOwnProperty.call(initialForm, key)) {
                if( input === key){
                    setForm({
                        ...Form,
                        [key]:initialForm[key]
                       })
                }
                              
            }
        }
    }
    return {
    ...Form,    
    Form,
    Error,
    loading,
    onInputChangue, 
    onResetForm,
    onSubmit,
    onBlur    
    }
}
