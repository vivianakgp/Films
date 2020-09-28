# platzi-video🎥
## 

## Introduction

> PlatziVideo contiene una recopilación de los mejores videos.Ecuentra tus videos a traves del buscador y añadelos a tu lista de favoritos, tambien puedes encontrar videos en lista de tendencias y originales de PlatziVideo.

## Code Samples

> <Searchh />
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
   




