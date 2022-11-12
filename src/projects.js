import PreviewImage from "./components/PreviewImage";

export const projects = [
    {
        id: 'beauty',
        title: 'Beauty Aesthetics Medical',
        tools: ['WordPress', 'PHP', 'SASS', 'UI/UX'],
        featuredImage: '/media/project/wordpres.png',
        featuredImageAlt: 'wordpress-medical clinic',
        projectDetails: {
            title: 'Beauty Aesthetics Medical',
            description: 'Wordpress Custom Website Design and development for a local medical clinic.',
            featuredImage: '/media/project/wordpress-single.png',
            featuredImageAlt: 'Beauty Aesthetics Medical',
            links: [
                {text: 'Live', link: 'https://beautyaesthetics.bcitwebdeveloper.ca/'},
                {text: 'Github', link: 'https://github.com/htpwebdesign/beauty-aesthetics'},
            ],
            overview: {
                tools: ['WordPress', 'SASS', 'JavaScript', 'PHP', 'GitHub', 'Photoshop Illustrator', 'Adobe XD', 'Asana'],
                description: "The new website for the Beauty Aesthetics clinic should have a warm and welcoming appearance. It should be unique among the websites of other clinics while still acting professionally. First-time visitors should be impressed by the website so they will remember both it and the company it represents. The website will list the company's services, location, and make it simple for customers to make booking with the aim of reflecting the particular personality of the elite medical company.",
                responsiveness: 'Desktop and Mobile',
                roles: ['Content and Development Planner', 'UI Designer', 'Front-End Developer'],
                duration: '3 weeks',
            },
            tabs: getBeauityTabs()
        }
    },
    {
        id: 'my-portfolio',
        title: 'My Portfolio',
        tools: ['Adobe XD', 'Adobe Photoshop', 'HTML5', 'CSS3/Sass', 'React'],
        featuredImage: '/media/project/portfolio-home.png',
        featuredImageAlt: 'React-my portfolio',
        projectDetails: {
            title: 'My Portfolio',
            description: 'Built with React and lots of love! This website is a showcase of my recent projects as a Front End web developer and UI/UX Designer.',
            featuredImage: '/media/project/portfoloi-single.png',
            featuredImageAlt: 'My Portfolio',
            links: [
                {text: 'Live', link: 'https://reyhantaze.com'},
                {text: 'Github', link: 'https://github.com/fonepiece/personal-website'},
            ],
            overview: {
                tools: ['HTML', 'CSS', 'React', 'jQuery', 'Bootstrap', 'Photoshop', 'Illustrator', 'Adobe XD'],
                description: "This project was intended to be a display of all the things I've worked on in recent years. I made an effort to keep the user interface (UI) as straightforward as I could, combining it with the web technologies I think work best for a non-reactive website which is a place that shows who I am - my work attitude, style and personality and my design / development skills.",
                responsiveness: 'Desktop and Mobile',
                roles: ['Content and Development Planner', 'UI Designer', 'Front-End Developer'],
                duration: '2 weeks',
            },
            tabs: getPortfolioTabs()
        }
    },
    {
        id: 'movie',
        title: 'Movie Database',
        tools: ['Adobe XD', 'Adobe Photoshop', 'HTML5', 'CSS3/Sass', 'React'],
        featuredImage: '/media/project/movie-home.png',
        featuredImageAlt: 'Movie Database',
        projectDetails: {
            title: 'Movie Database App',
            description: 'A movie database built in React.js using themoviedb.org API.',
            featuredImage: '/media/project/movie-single.png',
            featuredImageAlt: 'Movie Database',
            links: [
                {text: 'Live', link: 'https://reyhantaze.com/movie'},
                {text: 'Github', link: 'https://github.com/fonepiece/movie-db'},
            ],
            overview: {
                tools: ['HTML', 'CSS', 'Photoshop', 'Adobe XD', 'React', 'jQuery', 'Bootstrap'],
                description: 'An end-to-end project from concept ideation to interaction and prototyping. First on Photoshop high fidelity mockup created on Photoshop and then exported to Adobe XD adding animations with React that uses real time data from The Movie Database TMDb APIAs, as team of 2 movie data base website is built.',
                responsiveness: 'Desktop and Mobile',
                roles: ['UI/UX Designer', 'Front End Web Developer'],
                duration: '2 weeks',
            },
            tabs: getMovieTabs()
        }
    },
    {
        id: 'country',
        title: 'Visit Turkey',
        tools: ['HTML5', 'CSS', 'JavaScript'],
        featuredImage: '/media/project/turky-home.png',
        featuredImageAlt: 'html css javascrip project',
        projectDetails: {
            title: 'County Web Page',
            description: 'This is an example of creating Animated HTML5 Website for desktop and a separate lightweight mobile website.',
            featuredImage: '/media/project/turkey-single.png',
            featuredImageAlt: 'County Web Page',
            links: [
                {text: 'Live', link: 'https://reyhantaze.com/country'},
            ],
            overview: {
                tools: ['HTML', 'CSS', 'Javascript'],
                // description: 'On the first screen, the player enters the name. When the player clicks the start button, the second screen will be displayed. The second screen shows the instructions. By clicking the buttons(easy-hard), the player selects the level. On the 3rd screen, we have a total of 8 cards for the easy level and 16 cards for the hard level on the game board. All cards will be faced down initially. There are two identical images for each pair. There will be also a display area for name, score, and timer.',
                responsiveness: 'Desktop and Mobile',
                roles: ['UI/UX Designer', 'Front End Web Developer'],
                duration: '1 week',
            },
            tabs: getCountryTabs()
        }

    },
    {
        id: 'matching-game',
        title: 'Matching Game',
        tools: ['HTML5', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap'],
        featuredImage: '/media/project/cardgame-home.png',
        featuredImageAlt: 'Matching card Game',
        projectDetails: {
            title: 'Card Game',
            description: 'This is an example of using jQuery and vanilla Javascript to manipulate the DOM and CSS properties.',
            featuredImage: '/media/project/cardgame-single.png',
            featuredImageAlt: 'Card Game',
            links: [
                {text: 'Live', link: 'https://reyhantaze.com/card-game'},
            ],
            overview: {
                tools: ['HTML', 'CSS', 'Javascript', 'jQuery', 'Bootstrap'],
                description: 'On the first screen, the player enters the name. When the player clicks the start button, the second screen will be displayed. The second screen shows the instructions. By clicking the buttons(easy-hard), the player selects the level. On the 3rd screen, we have a total of 8 cards for the easy level and 16 cards for the hard level on the game board. All cards will be faced down initially. There are two identical images for each pair. There will be also a display area for name, score, and timer.',
                responsiveness: 'Desktop and Mobile',
                roles: ['UI/UX Designer', 'Front End Web Developer'],
                duration: '1 week',
            },
        }
    },
    {
        id: 'cupcake',
        title: 'Toronto Cupcake UX Case Study',
        tools: ['UX Research', 'UI Design'],
        featuredImage: '/media/project/ux-home.png',
        featuredImageAlt: 'Ux Research Brief docuement'
    },
]

/*
 *  MOVIE
 */
function getMovieTabs() {
    const tab1 = (<>
        <div>
            <h5>Planning</h5>
            <p>
            The mobile-first approach is used and followed by desktop versions with the following requirements in mind:<br/>
            Creating a visually engaging and innovative
            user interface for a dynamic movie web application
            by crafting graphic elements, assets, & visual treatments 
            that adapt & flow depending on the device the application 
            will be the goal.
            </p>
        </div>

        <h5>Wireframing</h5>
        <p>Created a mobile and desktop portfolio website wireframe</p>
        <PreviewImage
            message='Click to open it in Adobe XD'
            src='/media/project/details/movie-wireframe.png'
            link='https://xd.adobe.com/view/ba61e065-bd09-4902-b029-28d93eb64042-ef32/grid'
        />

        <div>
            <h5>Photoshop Mock-up</h5>
            <p> Lots of folders and layers... I created mockups of 48 different movie cards including hover states,
            as well as mockups for every single page – both mobile and desktop!</p>
            <p>Each page is well styled, with a usable user interface that follows basic design best practices:  
                Text content is readable 
                Elements are in alignment 
                Good spacing between elements
                Application navigation that is easy to use and allows the user to navigate to all the main pages of the application.
                </p>
            <img
                src='/media/project/details/movie-photoshop.png'
            />
        </div>
        <div>
            <h5>High Fidelity Prototype</h5>
            <p> Then I imported the Photoshop file into Adobe XD to make 
                some interaction. With a few animations and transitions I
                created a 
                fully functional prototype of the entire website.</p>
            <PreviewImage
                message='Click to open it in Adobe XD'
                src='/media/project/details/movie-prototype.png'
                link='https://xd.adobe.com/view/7e055db2-d240-41f4-b60f-6c8c17c9a077-2b56/grid'
            />
        </div>
        <div>
            <h5>Accecibility</h5>
            <ul>
                <li>Structured and organized with headers so users to easily navigate your webpages</li>
                <li>Assigned alt tags for images for users with limited or impaired vision</li>
                <li>Used descriptive titles for links</li>
                <li>Used colors that provide maximum contrast for anyone with low vision or color deficiencies</li>
            </ul>
        </div>
    </>);

    const tab2 = (<>
        <div>
            <div>
                <h5>Team</h5>
                <p>Reyhan Taze, Yegor Nino</p>
            </div>
            <p>
                For the development part we worked as a team. Based on my designs, we created the initial site layout without 
                any react logic. After completing it, we started adding the required features one by one. 
            </p>
            <p>
                First task was integrating with the movie DB APIs. I checked their documentation to understand how to get the
                information we need. Then, I added React functionalities using react hooks to make calls to those APIs, get the
                response and render the UI
            </p>
            <p>
                Next task was implementing the favorites feature so that users can save the movies they like to their favorites list.
                Since this project was front-end only, I stored the favorites in browser's local storage so that I can show them to
                the user even after they close and re-open the website. 
            </p>
            <p>
                Initial requirements was just showing 12 movies, but I decided to add pagination so that I can show many more movies to
                offer a better selection and user experience.
            </p>
            <p>
                This work was a full-fledged front-end web project which involves functionalities in most sites. I learned how to use local
                storage, how to make API calls to backend systems, how to work with pagination, how react routing works in a single-page-application.
            </p>
        </div>
    </>)

    const tab3 = (<>
        <p>
            This was my first major React project. The most challenging was to add the favourite feature 
            as we had to keep track of state across different pages.
            Styling the movie card was also quite challenging to make sure all content was
            responsive and fitting within the card.
            I learnt how to work in a development team, how to use GitHub
            successfully for version control and collaboration, and how to collaborate with my 
            teammates to address technical problems while working on a team of three for this project. 
            The biggest takeaway is learning how to retrieve data using the REST API, use it, and manipulate
            it so that it may be shown in ways that enhance user experience.
        </p>
    </>)
    return {design: tab1, dev: tab2, learnings: tab3};
}


/*
 *  BEAUITY
 */

function getBeauityTabs() {
    const tab1 = (<>
        <h5>Project Management</h5>
        <p>
            Our team used Asana as a project management tool for this particular project since it is free for a small team like ours and fairly easy to learn. Using it will allow us to easily see what kind of tasks we have on hand, assign specific tasks to members of our team, easily assess the deadlines, and assign the priority to tasks. 
            Every member will assume every role through the duration of the project as needed. We will equally split the workload on design, development, content of the website, and the documentation required for the project. 
        </p>

        <h5>UX Research</h5>
        <div>
            We want to understand the business owner, the industry, and—most importantly—users before we start designing. At the outset of the project, we invested the time necessary to fully comprehend the problems that needed to be fixed and how we might do so more effectively than the competition. 

            Competitive analysis
            <ul>
                <li>https://mdmedicalclinic.com/north-vancouver/</li>
                <li>https://mdmedicalclinic.com/north-vancouver/</li>
                <li>https://davihillhair.com/</li>
            </ul>

        </div>
        <h5>Target Audience</h5>
        <p>
            The website will target both men and women who wish to revitalise their skin and are between the ages of 18 and 50. Our intended audience members are looking for reasonably priced cosmetic procedures performed by qualified medical professionals.
        </p>
        <h5>Requirements</h5>
        <ul>
            <li>While maintaining professionalism, the design ought to be warm and welcoming. It should wow the new visitors and leave a lasting impression of both the website and the company endeavour it supports.</li>
            <li>A welcome greeting, a succinct business statement, services, contact details, and a map on the homepage.</li>
            <li>Services page will  list each service and provide a link to its own page. Skin Resurfacing, Micro Needling, HydraFacial, Laser Hair Removal, and Skin Resurfacing are the services that clinic is currently providing.</li>
            <li>Each staff member will have their name, title, a brief bio, and a picture displayed on a staff page. The clinic currently employs an office manager, three cosmetic nurses, and two dermatologists.</li>
            <li>About page that will outline the clinic’s philosophy to health and its history. </li>
            <li>Resource page that will utilize blog functionality of the website and provide patients with useful resources. </li>
            <li>Contact page with Address, Map, Phone Number, Fax Number, Email Address, Hours. Basic contact information should also be on every page of the website. </li>
            <li>Include an online booking functionality for customers to book appointments with a specific doctor. </li>
        </ul>
        <h5>Content Plan / Information Architecture</h5>
        <p><a href="/media/project/details/wordpress-DevelopmentPlan.pdf">see the pdf</a></p>
        <h5>SiteMap</h5>
        <img src="/media/project/details/wordpress-sitemap.png"/>

        <h5>Wireframing</h5>
        <p>Created a mobile and desktop portfolio website wireframe</p>
        <PreviewImage
            message='Click to open it in Adobe XD'
            src='/media/project/details/wordpress-mockup.png'
            link='https://xd.adobe.com/view/57775995-62e5-4b85-972d-d5c08fe86117-0224/grid'
        />

        <h5>UI design</h5>
        <p>Style guide</p>
        <PreviewImage
            message='Click to zoom in'
            src='/media/project/details/wordpress-styleguide.png'
        />

        <h5>Prototyping</h5>
        <p>I created these mockups for my portfolio in Adobe XD:</p>
 
        <h5>Accessibility</h5>
        <ul>
            <li>Structured and organized with headers so users to easily navigate your webpages</li>
            <li>Assigned alt tags for images for users with limited or impaired vision</li>
            <li>Used descriptive titles for links</li>
            <li>Ensuring the colour contrasts and text sizes meet AA accessibility standards for anyone with low vision or color deficiencies</li>
        </ul>
    </>);

    const tab2 = (<>
        <p>
            During development plan, we decided which plugins, taxanomies, and custom fields we need. After that, we started with an empty theme, and made all the necessary php changes based on our development plan.
            We split the website sections in our team, and I took the footer section. I created a navigation menu and a social menu using the wordpress admin panel and made changes in php to register them. Then, I
            designed the footer and used the menus I defined through the admin panel in the php code.
        </p>
    </>)

    const tab3 = (<>
        <p>
            It was a quick project that took three weeks to complete from content generation to wireframing, UI design, development, and styling (alongside other projects that were due).
            As a Team, we contribute to the project planning and evenly divided the design tasks because we were in agreement on the majority of decisions. We were able to keep track of the individual tasks and maintain a consistent pace with the project flow thanks to the utilisation of a Asana board.
            This ensured that no team member lagged behind, allowing us to fulfil deadlines and deliver a final website that pleased both our client and team.
            My skills to work with a team and design and creating a website from scratch were both enhanced by this project. The key to this entire process was communication, along with maintaining organisation with our ideas and material due to the numerous, pressing deadlines and frequent status meetings.
        </p>
    </>)
    return {design: tab1, dev: tab2, learnings: tab3};
}

/**
 * COUNTRY
 */

 function getCountryTabs() {

    const tab2 = (<>
        <h5>Project Description</h5>
        <p>Created a multi-page website about Turkey.</p>
        
        <h5>Content</h5>
        <p>Used text, video and image content that falls under creative commons licenses.</p>
 
        <h5>HTML</h5>
        <p>The website contains all the following (as a minimum)</p>
        <ul>
            <li>Three HTML webpages about your location</li>
            <li>HTML table</li>
            <li>HTML audio or video element</li>
            <li>Blockquote element</li>
            <li>Custom font</li>
            <li>Site navigation with links to every page and reused on all pages</li>
            <li>The meta tag for an SEO description</li>
            <li>HTML webpage giving credit to the creators of content with links to their websites.</li>
        </ul>

        <h5>CSS</h5>
        <p>
            Created custom styles using an external stylesheet that applies to all of the webpages. 
            The website is responsive and  the CSS has been written mobile-first
            CSS Grid and CSS Flexbox used at least once for styling.
        </p>
    </>)

    const tab3 = (<>
        <p>
            The figcaption element can only be the first or last child of a figure element, currently you have it as a grandchild in index.html.
            In cuisine.html, I have written in all capital letters for the cuisine names. I learned to avoid doing this in the HTML and instead do this in the CSS otherwise some screen readers will think it is an acronym and read each letter instead of the word.
        </p>
    </>)
    return {dev: tab2, learnings: tab3};
}


/*
 *  PORTFOLIO
 */

function getPortfolioTabs() {
    const tab1 = (<>
        <h5>UX Research</h5>
        <ul>
            <li>Are there a thousand other portfolios exactly like this one?</li>
            <li>Does the work in my portfolio accurately reflect who I am as a person? If not, is there a subtle way to include that into the layout of the portfolio?</li>
            <li>Are any portfolio design decisions interfering with the presentation of the work?</li>
            <li>Do people remember my portfolio?</li>
        </ul>
        <p>
            After answering these questions, I designed the UI with the intention of keeping it simple and easy to use. Thoughtful navigation and make calls-to-actions easy to spot and engage with was another intention. With the attention to detail put into every design, I ensure that website is not only looks beautiful, but it converts.
            I want my portfolio simple elegant and reflects my colourful personality who loves colours so I don't be afraid to use it.
        </p>

        <h5>Content Plan / Information Architecture</h5>
        <p><a href="/media/project/details/portfolio-ContentPlan.pdf">see the pdf</a></p>
        <h5>SiteMap</h5>
        <img src="/media/project/details/portfolio-sitemap.png"/>

        <h5>Wireframing</h5>
        <p>I Created a mobile and desktop portfolio website wireframe</p>
        <PreviewImage
            message='Click to open it in Adobe XD'
            src='/media/project/details/portfolio-wireframe.png'
            link='https://xd.adobe.com/view/15a65a82-f2b8-4c4d-b3b6-f9626337a2e0-40f5/grid'
        />

        <h5>UI Design</h5>
        <p>Styleguide</p>
        <PreviewImage
            message='Click to zoom in'
            src='/media/project/details/portfolio-styleguide.png'
        />

        <h5>Prototyping</h5>
        <p>I created these mockups for my portfolio in Adobe XD</p>

        <h5>Accessibility</h5>
        <ul>
            <li>Structured and organized with headers so users to easily navigate your webpages</li>
            <li>Assigned alt tags for images for users with limited or impaired vision</li>
            <li>Used descriptive titles for links</li>
            <li>Used colors that provide maximum contrast for anyone with low vision or color deficiencies</li>
            <li>Used sound effects to use more senses to navigate website.</li>
            <li>Allows user to switch for night time and  day time.</li>
        </ul>
    </>);

    const tab2 = (<>
        <p>
            For this project, I considered using a single HTML page or a react application. After going through all the pros and cons, I decided to implement it using React.
            First of all, it allowed me to write modular code as I split everything into components and reused them in multiple places. With the help of react router, I defined
            my page layout with header, footer, and content, and used it in different pages. This enabled me to have a consistent layout between pages and eliminated the chance of
            pages getting out of sync due to updating some pages later and forgeting others.
        </p>

        <p>
            To make it more engaging, I added sounds to some parts to provide user feedback on button clicks. The main navigation on the site was between the home page and the project
            details page which user is navigated to when they click on a project from the home page to learn all the design/development process about it. To make it easier to go back
            to home page after checking the project details, I added a back button in the header and changed the header to sticky-header so that users can have easy navigation. To make
            things easier, I also added scroll-to-top button on the right-bottom, which only shows when you scroll down 300px so that it is not shown unnecessarily while you're still
            close to the top of the page.
        </p>

        
    </>)

    const tab3 = (<>
        <p>
            While working on this project, there were tons of things I wanted to do. But, I did not have enough time. So, from the start I listed down the features I want ordered on
            priority, and started adding them one-by-one. After getting close to the due date, I had to leave some of the features lower in my todo list unimplemented. One of them was
            adding Dark theme. This project taught me time management and how to prioritize my work to deliver everything necessary on time instead of dragging the deadlines for adding
            couple of more unimportant features.
        </p>
    </>)
    return {design: tab1, dev: tab2, learnings: tab3};
}