import React from 'react';
import Header from '../components/Header';
import Searchh from '../components/Searchh';
import Footer from '../components/Footer';
import Categories from '../components/Categories'
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import useInitialState from '../hooks/useInitialState';
import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initialState';

const App = () => {
    // AQUI USAR FUNCIONES O LOGICA QUE NECESITARE DENTRO DE MI COMPONENTE
    const initialState = useInitialState(API);
    return initialState.length === 0 ? <h1>Loading...</h1> : (
        <div className="App">
            <Header />
            <Searchh />
            {initialState.mylist.lenght > 0 &&
                <Categories title="Mi lista">
                    <Carousel>
                        {initialState.mylist.map(item =>
                            <CarouselItem key={item.id}{...item}/>
                        )}
                    </Carousel>
                </Categories>
            }
            <Categories title="Tendencias">
                <Carousel>
                    {initialState.trends.map(item => <CarouselItem key={item.id}{...item}/> )}
                </Carousel>
            </Categories>

            <Categories title="Originales">
                <Carousel>
                    {initialState.originals.map(item => <CarouselItem key={item.id}{...item}/>)}
                </Carousel>
            </Categories>
            <Footer />
        </div>
    );
    
};
export default App;


    //return (
    //     <div className="App">
    //         <Header />
    //         <Searchh />
    //         {videos.mylist.lenght > 0 &&
    //             <Categories title="Mi lista">
    //                 <Carousel>
    //                     <CarouselItem />
    //                 </Carousel>
    //             </Categories>
    //         }
    //         <Categories title="Tendencias">
    //             <Carousel>
    //                 {videos.trends.map(item => 
    //                 <CarouselItem key={item.id}{...item}/> 
    //                 )}
    //             </Carousel>
    //         </Categories>

    //         <Categories title="Originales">
    //             <Carousel>
    //                 <CarouselItem/>
    //             </Carousel>
    //         </Categories>
    //         <Footer />
    //     </div>
    // );