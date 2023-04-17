import './App.css'

function App() {

  return (
    <div className="App">
      <h1 className='text-3xl font-bold '>Bitute</h1>
      <p>Bitute te ayuda a elegir el almuerzo para tu dia a dia</p>
      <p className='text-xl'>¿Qué almorzamos hoy?</p>

      <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <img className="w-24 h-24 md:w-48 md:h-auto md:rounded rounded-full mx-auto" src="https://picsum.photos/200/" alt="" width="384" height="512" />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <h3 className='text-xl'>Arroz con pollo</h3>
            <p className="text-lg font-medium">
              “Se cuenta que el Arroz con pollo nació como una reinterpretación, una muestra de la capacidad de adaptación que caracteriza a los peruanos.”
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">
              Staff
            </div>
            <div className="text-slate-700 dark:text-slate-500">
              Peru.info
            </div>
          </figcaption>
        </div>
      </figure>
    </div>
  )
}

export default App
