import  { useState } from 'react'

export const useForm = (initialForm = {}) => {
  
    const [Form, setForm] = useState(initialForm)
    const onInputChangue = (event) =>{
        const {name, value} = event.target
        setForm({
            ...Form,
            [name]: value
        })
    }
    const onResetForm = () =>{
        setForm(
            initialForm
        )
    }
    return {
    Form,
    onInputChangue, 
    onResetForm
    }
}
