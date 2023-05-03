import Caixa from "@/components/basicos/Caixa"
import Circulo from "@/components/basicos/Circulo"
import Primeiro from "@/components/basicos/Primeiro"
import Sidebar from "@/components/sidebar/sidebar"

export default function Home() {
  return (
    <div>
      <Sidebar />
      <Primeiro />
      <div className="flex gap-5 p-7">
        <Caixa>
          #1
        </Caixa>
        <Caixa>
          #2
        </Caixa>
        <Caixa>
          #3
        </Caixa>
      </div>
      
      <h1>Hello Word!</h1>
    </div>
  )
}