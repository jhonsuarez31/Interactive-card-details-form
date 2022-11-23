import React from 'react'

export const check = (Form) => {
  
    let errors={};
    let regExpNumber = /[A-z]/g;
    
    if(!Form.username.trim()){
      errors.name = 'El campo nombre es requerido'
    }
    if(!Form.numberCard.trim() )
      errors.number = 'El campo number es requerido'
      else if(regExpNumber.test(Form.numberCard))
           errors.number = 'Solo numeros'
      else{
        Form.numberCard=Form.numberCard.replace(/\s/g, '').replace(/([0-9]{4})/g, '$1 ').trim()
      }
  
      if(!Form.cardMM.trim() )
         errors.cardMM ='El campo Exp Date es requerido'
      else if(Form.cardMM <=12 || Form.cardMM <=1){
       
         console.log('Error --') 
        }else{
          errors.cardMM = 'Campo fuera del rango'
          console.log('Holi')
         }   
       return errors
  }


