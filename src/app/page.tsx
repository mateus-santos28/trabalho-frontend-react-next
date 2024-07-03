import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="flex flex-row justify-center bg-sky-700 text-white py-6 text-sm min-w-full">
        <div className="px-6">Blog</div>
        <div className="px-6">Sobre</div>
        <div className="px-6">Descrição</div>
      </div>
      <figure className="md:flex justify-center bg-sky-700 min-w-full pb-4">
        <img className="w-24 h-24 md:w-48 md:h-auto rounded-full p-4" src="/perfil.jpg" alt="" width="384" height="512"></img>
        <div className="pt-6 md:p-4 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-2xl font-medium text-white">
             Mateus Ribeiro dos Santos
            </p>
          </blockquote>
          <blockquote>
            <p className="text-sm font-medium text-white py-1">
            Nascido em 28 de março de 1998, atualmente com 26 anos, morador de Blumenau/SC
            </p>
            <p className="text-sm font-medium text-white py-1">
            onde atua como desenvolvedor de software a 8 anos pela Ambevtech. 
            </p>
            <p className="text-sm font-medium text-white py-1">
            Mateus iniciou sua carreira como desenvolvedor Cobol mas hoje trabalha com .net no principal
            </p>
            <p className="text-sm font-medium text-white py-1">
            sistema de gestão de armazem da Ambev/SA.
            </p>
          </blockquote>
        </div>
      </figure>
      <div className="flex min-h-screen flex-col items-center min-w-full">
        <div className="pl-8">
          <div className="leading-10 font-bold text-2xl py-8">Últimas do Blog</div>
          <div className="font-bold text-xl pb-8 text-sky-600">5 dicas para sua carreira profissional</div>
          <div className="italic text-wrap">Confira algumas dicas que podem ajudar a alavancar a sua carreira como</div>
          <div className="pb-8 italic text-wrap">desenvolvedor front-end</div>
          <div className="font-bold text-xl pb-8">5 dicas para sua carreira profissional</div>
          <div className="italic text-wrap">Confira algumas dicas que podem ajudar a alavancar a sua carreira como</div>
          <div className="pb-8 italic text-wrap">desenvolvedor front-end</div>
          <div className="font-bold text-xl pb-8">5 dicas para sua carreira profissional</div>
          <div className="italic text-wrap">Confira algumas dicas que podem ajudar a alavancar a sua carreira como</div>
          <div className="pb-8 italic text-wrap">desenvolvedor front-end</div>  
          <div className="text-sky-600 font-bold">Ver tudo</div>    
        </div>
      </div>
    </main>
    )
}