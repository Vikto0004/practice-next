import Hero from '@/components/Hero/Hero';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Hero />
      <Image
        src="/unnamed.png"
        alt="Опис зображення"
        width={500}
        height={300}
      />
    </>
  );
}
