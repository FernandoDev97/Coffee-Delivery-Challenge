import React from 'react'
import { CompletOrderForm } from './components/CompleteOrderForm'
import { CompleteOrderContainer } from './styles'

export const CompleteOrderPage = () => {
  return (
    <div>
      <CompleteOrderContainer className='container'>
        <CompletOrderForm/>
      </CompleteOrderContainer>
    </div>
  )
}
