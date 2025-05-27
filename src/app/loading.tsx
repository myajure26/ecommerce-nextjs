import Image from 'next/image';
import loader from '@/assets/images/loader.gif';

const LoadingPage = () => {
  return (
    <div className="loader">
      <Image src={loader} alt="loading..." height={150} width={150} />
    </div>
  )
}
 
export default LoadingPage;