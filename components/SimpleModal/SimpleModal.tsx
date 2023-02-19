import { IProduct } from '../../helpers/index';
interface IMainSimpleModalProps {
  handleIsMainModalOpen: ( val: boolean ) => void,
  handleDeleteProduct: (idx: number) => any,
  selectedProduct: IProduct
}

const SimpleModal = ( mainSimpleModalProps: IMainSimpleModalProps ) => {
  const { handleIsMainModalOpen, handleDeleteProduct, selectedProduct } = mainSimpleModalProps

  const handleOnDelete = () => {
    handleIsMainModalOpen( false )
    handleDeleteProduct( selectedProduct.id )
  }

  return (<div className="bg-slate-700 bg-opacity-60 h-screen w-screen flex flex-col justify-center items-center absolute">
    <div className="flex bg-white p-8 rounded-2xl flex-col justify-center items-center">
      <p className="py-8">¿Está seguro de eliminar el producto [NOMBRE_PRODUCTO] </p>
    
      <div className="flex justify-center items-center">
        <button className="border border-slate-600 p-2 px-5 rounded-xl mx-1"
          onClick={ handleOnDelete }
        >Sí, eliminar</button>
        <button className="border border-slate-600 p-2 px-5 rounded-xl mx-1"
          onClick={ () => handleIsMainModalOpen( false ) }
        >Cancelar</button>
      </div>
    </div>
  </div>)
}

export default SimpleModal
