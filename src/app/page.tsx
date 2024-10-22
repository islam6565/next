
import Image from 'next/image';

export default function Home() {
  return (
    <div className='container '>
      <h1>Welcome to My Portfolio</h1>
      <img src="https://th.bing.com/th/id/OIP.uxK_adoIJCMmHEZoPPurFQHaKn?rs=1&pid=ImgDetMain" alt="Profile Picture" width={150} height={150} />
      <p>Hi, I'm [islam]. I'm a [boxer].</p>
    </div>
  );
}