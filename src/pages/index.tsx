import { useState } from 'react';
import MainContentList from 'components/MainContentList/MainContentList'
import MainNav from 'components/MainNav/MainNav'
import SimpleModal from 'components/SimpleModal/SimpleModal'
import GenericLayout from 'layouts/GenericLayout'

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState( true )

  const handleIsModalOpen = ( _isOpen: boolean ) => { setIsModalOpen( _isOpen ) }

  return (<GenericLayout>
    <>
      <header className="border-2 border-slate-500 flex justify-center items-center font-bold text-3xl text-slate-500">HEADER</header>
      
      <MainNav />

      <MainContentList
        handleIsMainModalOpen={ handleIsModalOpen }
      />
      
      {/* <footer className="border-2 border-slate-500 flex justify-center items-center font-bold text-3xl text-slate-500">FOOTER</footer> */}
      {/* <aside className="border-2 border-slate-500 flex justify-center items-center font-bold text-3xl text-slate-500">ASIDE</aside> */}
      {/* <article className="border-2 border-slate-500 flex justify-center items-center font-bold text-3xl text-slate-500">ARTICLE</article> */}
    
    { isModalOpen && <SimpleModal handleIsMainModalOpen={ handleIsModalOpen } /> }
    </>
  </GenericLayout>)
}

export default Index
