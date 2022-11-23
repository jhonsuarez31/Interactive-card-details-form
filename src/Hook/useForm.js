import  { useState } from 'react'

export const useForm = (initialForm) => {
  
    const [Form, setForm] = useState(initialForm)
   
    
    const onInputChangue = (event) =>{
        const {name, value} = event.target
        setForm({
            ...Form,
            [name]: value
        })

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
    onInputChangue, 
    onResetForm,
    onSubmit,
        
    }
}
