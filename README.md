1: STRUCTURE-SETUP:

Australia-Zoo/
--Public/
    --Images/
        -animalImages.jpg (and more)
--src/
    --assets/
        -logo or icons
    --components/
        --Navigation/
            --NavLink/
                -index.jsx
            --NavItem/
                -index.jsx
        --PageTitle/
            -index.jsx
        --Header/
            -index.jsx
            -header.module.css
        --Footer/
            -index.jsx
            -footer.module.css
        --Sidebar/
            -index.jsx
            -sidebar.module.css
        --AnimalCard/
            -index.jsx
            -animalCard.module.css
        --PopUp/
            -index.jsx
            -popUp.module.css
    --data/
        -animals.js
        -headerLinks.js
    --Pages/
        --Home/
            -index.jsx
        --Mammals/
            -index.jsx
        --Birds/
            -index.jsx
        --Reptiles/
            -index.jsx
        --Layout/
            -index.jsx
    -App.css
    -App.jsx
    -Main.jsx


2: SET UP REACT ROUTER DOM:
    Routes for:
        / (Home)
        /Mammals
        /Birds
        /Reptiles
        


3: SHARED LAYOUT FOR ALL PAGES:
    Including:
        *Header
        *Outlet
        *Footer



4: DATA SETUP:
    -animals.js/
        * One array of animal objects
    -headerLinks.js
        * List of navigation names




5: COMPONENTS:
    -- Navigation/
        -- NavBar/ Map over headerLinks.js
        -- NavItem/ Create links using react router(active when route matches)
    -- Header/ Use NavBar and NavItem
    -- Sidebar/ Animal list, function when animal is clicked. (AnimalCard) Display pagetitle and intro when animal is clicked again.
    -- PageTitle/ Display page title and intro text when no animal is clicked.
    -- AnimalCard/ Short description on animal, Read more button to display full description (PopUp)
    -- Popup/ Show full description on selected animal, Close button.
    -- Footer/ Some content