import CrossIcon from "./components/icons/CrossIcon";
import MoonIcon from "./components/icons/MoonIcon";

const App = () => {
  return(
    <div className="min-h-screen bg-gray-200 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain">
      <header className="container mx-auto px-4 pt-8">
        <div className="flex justify-between">
          <h1 className="uppercase text-white text-2xl font-semibold tracking-[0.3em]">Todo</h1>
          <button>
            <MoonIcon className="fill-yellow-400"/>
          </button>
        </div>
        <form className="mt-8 overflow-hidden rounded-md bg-white py-4 flex items-center gap-4 px-4">
          <span className="rounded-full border-2 inline-block h-5 w-5"></span>
          <input className="w-full text-gray-400 outline-none" type="text" placeholder="Create a new todo..."/>
        </form>
      </header>

      <main className="container mx-auto mt-8 px-4">
        <div className="rounded-md bg-white [&>article]:p-4">
          <article className="flex gap-4 border-b border-b-gray-300">
            <button className="inline-block h-5 w-5 flex-none rounded-full border-2"></button>
            <p className="grow text-gray-500">Complete Online JavaScript curse in bluuweb</p>
            <button className="flex-none">
              <CrossIcon/>
            </button>
          </article>
          <article className="flex gap-4 border-b border-b-gray-300">
            <button className="inline-block h-5 w-5 flex-none rounded-full border-2"></button>
            <p className="grow text-gray-500">Complete Online JavaScript curse in bluuweb</p>
            <button className="flex-none">
              <CrossIcon/>
            </button>
          </article>
          <article className="flex gap-4 border-b border-b-gray-300">
            <button className="inline-block h-5 w-5 flex-none rounded-full border-2"></button>
            <p className="grow text-gray-500">Complete Online JavaScript curse in bluuweb</p>
            <button className="flex-none">
              <CrossIcon/>
            </button>
          </article>
          <article className="flex gap-4 border-b border-b-gray-300">
            <button className="inline-block h-5 w-5 flex-none rounded-full border-2"></button>
            <p className="grow text-gray-500">Complete Online JavaScript curse in bluuweb</p>
            <button className="flex-none">
              <CrossIcon/>
            </button>
          </article>
          

          <section className="flex justify-between py-4 px-4">
            <span className="text-gray-500">5 item left</span>
            <button>Clear Completed</button>
          </section>
        </div>
      </main>
      <section className="container mx-auto px-4 mt-8">
        <div className="bg-white p-4 rounded-md flex justify-center gap-4">
            <button className="text-blue-600">All</button>
            <button className="hover:text-blue-600">Active</button>
            <button className="hover:text-blue-600">Completed</button>
        </div>
      </section>
      <p className="text-center mt-8">Drag and drop to reorder list</p>
        
    </div>  
)};



export default App;