import { CompletOrderForm } from './components/CompleteOrderForm'
import { CompleteOrderContainer } from './styles'
import { SelectedCoffees } from './components/SelectedCoffees'

export const CompleteOrderPage = () => {
  return (
    <div>
      <CompleteOrderContainer className='container'>
        <CompletOrderForm/>
        <SelectedCoffees/>
      </CompleteOrderContainer>
    </div>
  )
}
