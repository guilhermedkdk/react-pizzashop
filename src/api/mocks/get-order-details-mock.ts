import { http, HttpResponse } from 'msw'

import {
  GetOrderDetailsParams,
  GetOrderDetailsResponse,
} from '../get-order-details'

export const getOrderDetailsMock = http.get<
  GetOrderDetailsParams,
  never,
  GetOrderDetailsResponse
>('/orders/:orderId', ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    customer: {
      name: 'John Doe',
      email: 'johndoe@example.com',
      phone: '1234567890',
    },
    status: 'pending',
    createdAt: new Date().toISOString(),
    totalInCents: 6000,
    orderItems: [
      {
        id: 'order-item-1',
        priceInCents: 1000,
        product: { name: 'Pizza 1' },
        quantity: 1,
      },
      {
        id: 'order-item-2',
        priceInCents: 2500,
        product: { name: 'Pizza 2' },
        quantity: 2,
      },
    ],
  })
})
