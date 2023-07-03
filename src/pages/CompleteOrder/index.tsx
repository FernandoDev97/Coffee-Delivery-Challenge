import { CompletOrderForm } from './components/CompleteOrderForm'
import { CompleteOrderContainer } from './styles'
import { SelectedCoffees } from './components/SelectedCoffees'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, FormProvider } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'

enum PaymentMethods {
  credit = "credit",
  debit = "debit",
  money = "money",
}

const confirmOrderFormValidationSchema = zod.object({
  cep: zod.string().min(1, "Informe o CEP"),
  street: zod.string().min(1, "Informe o Rua"),
  number: zod.string().min(1, "Informe o Número"),
  complement: zod.string(),
  district: zod.string().min(1, "Informe o Bairro"),
  city: zod.string().min(1, "Informe a Cidade"),
  uf: zod.string().min(1, "Informe a UF"),
  paymentMethod: zod.nativeEnum(PaymentMethods, {
    errorMap: () => {
      return { message: "Informe o método de pagamento" };
    },
  }),
});

export type OrderData = zod.infer<typeof confirmOrderFormValidationSchema>
type ConfirmOrderFormData = OrderData

export const CompleteOrderPage = () => {
  const confirmOrderForm = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(confirmOrderFormValidationSchema)
  })

  const { cleanCart } = useCart()

  const { handleSubmit } = confirmOrderForm

  const navigate = useNavigate();

  const handleConfirmOrder = (data: ConfirmOrderFormData) => {
    navigate('/orderconfirmedpage', {
      state: data
    })
    cleanCart()
  }

  return (
    <FormProvider {...confirmOrderForm}>
      <CompleteOrderContainer className='container' onSubmit={handleSubmit(handleConfirmOrder)}>
        <CompletOrderForm />
        <SelectedCoffees />
      </CompleteOrderContainer>
    </FormProvider>

  )
}
