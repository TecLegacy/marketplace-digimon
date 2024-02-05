import MaxWrapper from '@/components/MaxWrapper';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <>
      <MaxWrapper>
        <div className=' py-20 mx-auto text-center flex flex-col items-center max-w-3xl'>
          <h1>Your digital market place</h1>
          <span className=' text-blue-600'>Digital Asset</span>
        </div>
        <Button>Click me</Button>
      </MaxWrapper>
    </>
  );
}
