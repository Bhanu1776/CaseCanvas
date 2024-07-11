import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import TrackedLink from '@/components/TrackedLink';
import { buttonVariants } from '@/components/ui/button';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { ArrowRight } from 'lucide-react';

const Navbar = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const isAdmin = user?.email === process.env.ADMIN_EMAIL;

  return (
    <nav className="sticky inset-x-0 top-0 z-[100] h-14 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <TrackedLink
            href="/"
            eventCategory="Home"
            eventAction="Click"
            eventLabel="Clicking on the logo redirects to the homepage."
            className="z-40 flex font-semibold"
          >
            case<span className="text-rose-600">Canvas</span>
          </TrackedLink>

          <div className="flex h-full items-center space-x-4">
            {user ? (
              <>
                <TrackedLink
                  href="/api/auth/logout"
                  eventCategory="Auth"
                  eventAction="Logout"
                  eventLabel="Sign out"
                  className={buttonVariants({
                    size: 'sm',
                    variant: 'ghost',
                  })}
                >
                  Sign out
                </TrackedLink>
                {isAdmin ? (
                  <TrackedLink
                    href="/dashboard"
                    eventCategory="Navigation"
                    eventAction="Click"
                    eventLabel="Dashboard"
                    className={buttonVariants({
                      size: 'sm',
                      variant: 'ghost',
                    })}
                  >
                    Dashboard ✨
                  </TrackedLink>
                ) : null}
                <TrackedLink
                  href="/configure/upload"
                  eventCategory="Product"
                  eventAction="Click"
                  eventLabel="Create case from Header"
                  className={buttonVariants({
                    size: 'sm',
                    className: 'hidden items-center gap-1 sm:flex',
                  })}
                >
                  Create case
                  <ArrowRight className="ml-1.5 h-5 w-5" />
                </TrackedLink>
              </>
            ) : (
              <>
                <TrackedLink
                  href="/api/auth/register"
                  eventCategory="Auth"
                  eventAction="Register"
                  eventLabel="Sign up"
                  className={buttonVariants({
                    size: 'sm',
                    variant: 'ghost',
                  })}
                >
                  Sign up
                </TrackedLink>

                <TrackedLink
                  href="/api/auth/login"
                  eventCategory="Auth"
                  eventAction="Login"
                  eventLabel="Login"
                  className={buttonVariants({
                    size: 'sm',
                    variant: 'ghost',
                  })}
                >
                  Login
                </TrackedLink>

                <div className="hidden h-8 w-px bg-zinc-200 sm:block" />

                <TrackedLink
                  href="/configure/upload"
                  eventCategory="Product"
                  eventAction="Click"
                  eventLabel="Create case from Header"
                  className={buttonVariants({
                    size: 'sm',
                    className: 'hidden items-center gap-1 sm:flex',
                  })}
                >
                  Create case
                  <ArrowRight className="ml-1.5 h-5 w-5" />
                </TrackedLink>
              </>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
