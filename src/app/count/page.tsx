'use client'
import { useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';

const CountPage = () => {
  const count = useSelector((state: RootState) => state.counter.value);

  return (
    <div className="relative gap-5 flex flex-col text-black items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">Current Count</h1>
      <p className="text-xl">{count}</p>
    </div>
  );
}

export default CountPage;
