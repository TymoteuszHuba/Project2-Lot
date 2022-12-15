// przypisanie do zmiennych pobranych wartosci klas 
// document - przeszukuje caly dokument
// querySelector - wskazujemy okreslona klase (selektor zapytania), pobiera nam jeden element
// querySelectorAll - pobiera wszystkie elementy o danej nazwie klasy
const nav = document.querySelector('.nav');
const navBtn = document.querySelector('.burger-btn');
const navItems = document.querySelectorAll('.nav__item');
// pobieranie linii nawigjaci
const navBtnBars = document.querySelector('.burger-btn__bars');



// funkcja strzałkowa
const handleNav = () => 
{
    // odwołujemy się do klasy przycisku nawigacji .burger-btn przypisanej do zmiennej nav
    // classList - umożliwia operowanie na klasach nawigacji 
    // toggle - tzw przełącznik sprawdzajacy czy klasa active jest dodana
    // funkcja sprawdza czy nasza nawigacja (nav) posiada klasę (classList) nav--active-nav, jeśli ma to ją usunie, jeśli nie to ją doda
    nav.classList.toggle('nav--active-nav')


    // usuwamy po kliknieciu w nawigacje klase ustawiajaca czarny kolor przyciskow nawigacji
    navBtnBars.classList.remove('black-bars-color');


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

// funkcja odpowiedzialna za wywolanie animacji przycisków nawigacji
const navItemsAnimation = () => 
{
    let delayTime = 0;

    navItems.forEach(item => 
    {
        item.classList.toggle('nav-items-animation')
        
        // opóźnienie animacji animation-delay zapisane w javascript
        // dla każdego linku (item) jest dodawany styl oraz animationDelay wynoszący .0s
        item.style.animationDelay = '.' + delayTime + 's';
        // ++ zwieksza o jeden, jako ze to jest petla to zwieksza nam opoznienie kazdego kolejnego linku (przycisku) w menu nawigacji
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

// ------------------------- przechowywanie roku w stopce -------------------------------
// pobranie zawartosci z stopki dot roku 
const footerYear = document.querySelector('.footer__year')
// nowa funkcja strzałkowa odpowiedzialna za zczytywanie oraz wyswietlanie aktualmnego roku na stronie www
handleCurrentYear = () => 
{
    // tworzymy zmienna year dla ktorej tworzymy nowy obiekt new Date a nastepnie metode getfullyear i wywolujemy ja poprzez dodanie otwartych nawiasow
    const year = (new Date).getFullYear();
    // do zmiennej footerYear dodajemy zmienna year przechowujaca date za pomnoca innerText
    footerYear.innerText = year;
}
// wywolanie funkcji odpowiedzialnej za rok
handleCurrentYear();

// -------------------------- zmiana koloru menu bars ----------------------------------
// pobranie klasy section przypisanej do kazdej sekcji
const allSections = document.querySelectorAll('.section')
// nowa funkcja strzałkowa odpowiedzialna za sprawdzanie gdzie znajdujemy sie w oknie przegladarki
const handleObserver = () => 
{
    // tworzymy zmienna ktora bedzie przechowywala jak daleko przewiniemy okno przegladarki na osi Y
    const currentSection = window.scrollY;

    // przechodzimy przez kazda sekcje z wykorzystaniem petli forEach i wykonujemy kod w nawiasach
    allSections.forEach(section => 
        {
            // instrukcja warunkowa if sorawdzajaca czy sekcja zawiera (contains) klase o nazwie white-section oraz czy gorna krawedz sekcji jest mniejsza lub rowna naszej sekcji + 60 px 
            // offsetTop to gorna krawedz sekcji 

            if (section.classList.contains('white-section') && section.offsetTop <= currentSection + 60)
            {
                navBtnBars.classList.add('black-bars-color');
            }
            // jeśli sekcja section nie posiada klasy white-section ale zrownala sie z oknem przegladarki 
            else if (!section.classList.contains('white-section') && section.offsetTop <= currentSection + 60)
            {
                navBtnBars.classList.remove('black-bars-color');
            }
        })
}

// na okno przegladarki window nadajemy nasluchiwanie addEventListener, kotre nasluchuje przewijania scroll i uruchamia funkcje handleObserver
window.addEventListener('scroll', handleObserver);

// wywołanie funkcji za pomocą kliknięcia w przycisk
// na przycisk nawigacji navBtn nadajemy nasłuchiwanie .addEventListener i nasłuchujemy click, w momencie kiedy klikniemy, będziemy chcieli wywołać naszą funkcję handleNav
navBtn.addEventListener('click', handleNav);

