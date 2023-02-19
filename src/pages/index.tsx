import { useState, useEffect } from 'react';
import MainContentList from 'components/MainContentList/MainContentList'
import MainNav from 'components/MainNav/MainNav'
import SimpleModal from 'components/SimpleModal/SimpleModal'
import GenericLayout from 'layouts/GenericLayout'
import { deleteItemFromListById, IProduct, LIST_PRODUCTOS } from '../../helpers/index';

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState( false )
  const [listProducts, setListProducts] = useState<IProduct[]>( [] )
  const [selectedProduct, setSelectedProduct] = useState( {} as { name: "", price: 0, status: false, description: "", id: 0 } )

  const handleIsModalOpen = ( _isOpen: boolean ) => { setIsModalOpen( _isOpen ) }

  useEffect(() => {
    setListProducts( LIST_PRODUCTOS )
  }, [])

  const handleDeleteProduct = (id: number) => setListProducts( deleteItemFromListById(listProducts, id ) )

  return (<GenericLayout>
    <>
      <header className="border-2 border-slate-500 flex justify-center items-center font-bold text-3xl text-slate-500">HEADER</header>
      
      <MainNav />

      <MainContentList
        listProducts={ listProducts }
        handleIsMainModalOpen={ handleIsModalOpen }
        setSelectedProduct={ setSelectedProduct }
      />
      
      {/* <footer className="border-2 border-slate-500 flex justify-center items-center font-bold text-3xl text-slate-500">FOOTER</footer> */}
      {/* <aside className="border-2 border-slate-500 flex justify-center items-center font-bold text-3xl text-slate-500">ASIDE</aside> */}
      {/* <article className="border-2 border-slate-500 flex justify-center items-center font-bold text-3xl text-slate-500">ARTICLE</article> */}
    
    { isModalOpen && <SimpleModal selectedProduct={ selectedProduct } handleDeleteProduct={handleDeleteProduct} handleIsMainModalOpen={ handleIsModalOpen } /> }
    </>
  </GenericLayout>)
}

export default Index
