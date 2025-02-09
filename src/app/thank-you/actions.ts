'use server';

import { db } from '@/db';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

export const getPaymentStatus = async ({ orderId }: { orderId: string }) => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user?.id || !user.email) {
    throw new Error('You need to be logged in to view this page.');
  }

  const order = await db.order.findFirst({
    where: { id: orderId, userId: user.id },
    //* Include means "SQL Joins" in the prisma syntax
    // We joined all the below four tables with the order table
    include: {
      billingAddress: true,
      configuration: true,
      shippingAddress: true,
      user: true,
    },
  });

  if (!order) throw new Error('This order does not exist.');

  if (order.isPaid) {
    console.log('🚀 ~ getPaymentStatus ~ order:', order);
    return order;
  } else {
    return false;
  }
};
