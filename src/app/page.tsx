import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center flex-col md:flex-row px-4 w-full gap-20 max-w-[1200px] mx-auto">
      <div className="md:w-6/12 lg:w-6/12 gap-8 flex flex-col mt-24 md:mt-0 lg:mt-0">
        <h1 className="font-bold text-3xl md:text-6xl lg:text-6xl">
          Apoiar o brasileirinho nunca foi tão{" "}
          <span className="text-primary-500">fácil</span>.
        </h1>
        <h2 className="font-bold text-xl">
          Receba no pix sem taxas. <br />
          <span className="text-primary-500">100%</span> Grátis. Como o pix deve
          ser :)
        </h2>
        <div className="bg-white rounded-full shadow-lg shadow-primary-500 w-full h-14 flex items-center justify-between px-2 md:px-4">
          <h2 className="font-bold md:text-2xl lg:text-2xl">
            pixmeacoffe.com.br/
            <span className="text-primary-500">seunome</span>
          </h2>
          <Link href={"/login"}>
            <div className="rounded-full bg-primary-500 py-2 md:px-4 px-2 text-white">
              Criar minha página
            </div>
          </Link>
        </div>
      </div>
      <Image
        src="/img-3.svg"
        alt="Exemplo de uso"
        width={500}
        height={500}
        priority
      />
    </main>
  );
}
