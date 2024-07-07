import { buttonVariants } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { LoginLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs';
import Image from 'next/image';
import type { Dispatch, SetStateAction } from 'react';

const LoginModal = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <Dialog onOpenChange={setIsOpen} open={isOpen}>
      <DialogContent className="absolute z-[9999999]">
        <DialogHeader>
          <div className="relative mx-auto mb-2 size-40">
            <Image
              src="/panda-3.png"
              alt="panda image"
              className="object-contain"
              fill
              placeholder="blur"
              blurDataURL="/panda-3.png"
            />
          </div>
          <DialogTitle className="text-center text-3xl font-bold tracking-tight text-gray-900">
            Log in to continue
          </DialogTitle>
          <DialogDescription className="py-2 text-center text-base">
            <span className="font-medium text-zinc-900">
              Your configuration was saved!
            </span>{' '}
            Please login or create an account to complete your purchase.
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-2 gap-6 divide-x divide-gray-200">
          <LoginLink className={buttonVariants({ variant: 'outline' })}>
            Login
          </LoginLink>
          <RegisterLink className={buttonVariants({ variant: 'default' })}>
            Sign up
          </RegisterLink>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
