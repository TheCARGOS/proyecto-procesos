import GenericLayout from 'layouts/GenericLayout'
import React from 'react'

const Index = () => {
  return (<GenericLayout>
    <>
      <header className="border-2 border-slate-500 flex justify-center items-center font-bold text-3xl text-slate-500">HEADER</header>
      <nav className="border-2 border-slate-500 flex justify-center items-center font-bold text-3xl text-slate-500">NAV</nav>
      <section className="border-2 border-slate-500 flex justify-center items-center font-bold text-3xl text-slate-500">CONTENT</section>
      <footer className="border-2 border-slate-500 flex justify-center items-center font-bold text-3xl text-slate-500">FOOTER</footer>
      <aside className="border-2 border-slate-500 flex justify-center items-center font-bold text-3xl text-slate-500">ASIDE</aside>
      <article className="border-2 border-slate-500 flex justify-center items-center font-bold text-3xl text-slate-500">ARTICLE</article>
    </>
  </GenericLayout>)
}

export default Index
