//Faça um componente que faça um retângulo da largura da tela do computador
//Por 200px

//crie uma variavel com LET no js que contenha o valor "Meu Componente" 

//crie uma div no componente que dentro dela mostre um paragrafo <p> contendo a variável.


function MeuComponente() {
  let MeuComp = "Meu Componente"
  return (

    <>
     <div className="retangulo"><p>{MeuComp}</p></div>
    </>
   
  ) //JSX - Javascript XML
}
export default MeuComponente