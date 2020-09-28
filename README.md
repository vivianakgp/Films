# platzi-video🎥
## 

## Introduction

> PlatziVideo contains the best videos compilation. Find your videos through the search engine and add them to your list of favorites, you can also find videos in PlatziVideo's list of trends and originals.
## Interface
> https://github.com/vivianakgp/platzi-video/blob/master/public/mobile-UI.png? raw=true
>https://github.com/vivianakgp/platzi-video/blob/master/public/wen-UI.png?raw=true
## Code Samples

>           
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
   




