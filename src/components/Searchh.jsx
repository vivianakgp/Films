import React from 'react';
import  '../assets/styles/components/Searchh.scss';
// const Searchh = () => (
//         <section className="main">
//         <h2 className="main__title">¿Qué quieres ver hoy?</h2>
//         <input type="text" className="input" placeholder="Buscar..."/>
//     </section>
// );
// export default Searchh;
const MainTitleText = '¿Que quieres ver hoy?';
const MainInputPlaceholder = 'Buscar...';

export default () => (
    <section className='main'>
        <h2 className="main__title">{MainTitleText}</h2>
        <input type="text" className='input' placeholder={MainInputPlaceholder} />
    </section>
);

