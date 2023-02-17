import { LIST_PRODUCTOS } from "helpers"
import { IProduct } from '../../helpers/index';

interface IMainContentListProps {
  handleIsMainModalOpen: ( val: boolean ) => void
}

const MainContentList = ( mainContentListProps: IMainContentListProps ) => {
  const { handleIsMainModalOpen } = mainContentListProps
  
  return (<section className="border-2 px-16 py-8 border-slate-500 flex flex-col text-slate-500">
    <h2 className="font-bold text-5xl leading-loose">Lista de Productos</h2>

    <table className='text-left'>
    <tbody>
      

        <tr>
          <th>Nombre de Producto</th>
          <th>Precio</th>
          <th>Estado</th>
          <th>Descripción</th>
          <th>Edición</th>
        </tr>


       { LIST_PRODUCTOS.map((_product: IProduct, idx: number) => (<tr key={ idx } className={`border mb-4 ${ !_product.status ? "bg-red-200" : "" }`}>
          <td>{ _product.name }</td>
          <td>S/.{ _product.price.toFixed(2) }</td>
          <td>{ _product.status ? "Activo" : "No Activo" }</td>
          <td>{ _product.description }</td>
          <td>
            <div>
              <button className="border border-slate-600 p-2 px-5 rounded-xl mx-1">Editar</button>
              <button className="border border-slate-600 p-2 px-5 rounded-xl mx-1"
                onClick={ () => handleIsMainModalOpen( true ) }
              >Eliminar</button>
            </div>
          </td>
        </tr>)) }
      </tbody>
    </table>    
  </section>)
}

export default MainContentList
