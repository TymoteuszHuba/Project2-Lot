const nav = document.querySelector('.nav');
const navBtn = document.querySelector('.burger-btn');
const navItems = document.querySelectorAll('.nav__item')

// funkcja strzałkowa
const handleNav = () => 
{
    // odwołujemy się do klasy przycisku nawigacji .burger-btn przypisanej do zmiennej nav
    // classList - umożliwia operowanie na klasach nawigacji 
    // toggle - tzw przełącznik
    // funkcja sprawdza czy nasza nawigacja (nav) posiada klasę (classList) nav--active-nav, jeśli ma to ją usunie, jeśli nie to ją doda
    nav.classList.toggle('nav--active-nav')

    // navItems są przechowywane w tablicy dlatego najlepej użyć pętli forEach
    // Zasada działania - dla każdego pojedynczego (forEach) linku, który jest przechowywany w item, nadajemy nasłuchiwanie addEventListener, będziemy nasłuchiwać każdy nasz link na click i w momencie kiedy klik zostanie wyłapany usuwamy klasę nav--active-nav
    navItems.forEach(item =>
    {
        item.addEventListener('click', () => 
        {
            nav.classList.remove('nav--active-nav')
        })
    })

    // wywołanie funkcji obejmującej animację 
    navItemsAnimation();
}


const navItemsAnimation = () => 
{
    let delayTime = 0;

    navItems.forEach(item => 
    {
        item.classList.toggle('nav-items-animation')
        
        
        // dla każdego linku (item) jest dodawany styl oraz animationDelay wynoszący .0s
        item.style.animationDelay = '.' + delayTime + 's';
        delayTime++; 
        
        // item.addEventListener('click', deleteAnimation());
        
    })

    // dla każdego (forEach) elementu (item) z navItems ustawiamy nasłuchiwanie (addEventListener) na click i uruchamiamy funkcję deleteAnimation
    // navItems.forEach(item => 
    // {
    //     item.addEventListener('click', deleteAnimation);
    // })

    // Zagnieżdżona funkcja usuwająca/resetująca animację (nav-items-animation) tak aby działała przy każdym kliknięciu 
    // dla każdego elementu z navItems 

    navItems.forEach(item => 
    {
        // ustawiamy nasłuchiwanie .addEventListener na kliknięcie, jeśli nastąpi wywołujemy zawartosć ()
        item.addEventListener('click', () => 
        {
            // 
            navItems.forEach(item => 
            {
                item.classList.remove('nav-items-animation');
            })
        })
    })
}

// funkcja resetująca animację aby działała przy każdym kliknięciu
// dla każdego (forEach) elementu (item) z navItems 
// const deleteAnimation = () =>
// {
//     navItems.forEach(item => 
//     {
//         item.classList.remove('nav-items-animation');
//     })
// }

// wywołanie funkcji za pomocą kliknięcia w przycisk
// na przycisk nawigacji navBtn nadajemy nasłuchiwanie .addEventListener i nasłuchujemy click, w momencie kiedy klikniemy, będziemy chcieli wywołać naszą funkcję handleNav
navBtn.addEventListener('click', handleNav)
