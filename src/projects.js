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
        featuredImageAlt: 'React-my portfolio'

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
            Create a visually engaging and innovative
            user interface for a dynamic movie web applicatio
            by crafting graphic elements, assets, & visual treatments 
            that adapt & flow depending on the device the application 
            will be viewed on.
            </p>
        </div>
        <div>
            <h5>Photoshop Mock-up</h5>
            <p> Hundreds of folders, thousands of layers... I created mockups of 48 different movie cards including hover states,
            as well as mockups for every single page – both mobile and desktop!</p>
            <p>Each page is well styled, with a usable user interface that follows basic design best practices:  
                Text content is readable 
                Elements are in alignment 
                Good spacing between elements
                Application navigation that is easy to use and allows the user to navigate to all the main pages of the application.</p>
        <img src="" alt=""/>
        </div>
        <div>
            <h5>High Fidelity Prototype</h5>
            <p> Then imported the Photoshop file into Adobe XD to make 
                some interactive magic! With a few animations and transitions I
                created a 
                fully functional prototype of the entire website.</p>
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
            <p>For the development part we worked as a Team. Project was divided by roles,
                    which overlapped whenever more assistance was needed for any specific tasks.</p>
            <p>We had extra time to add some extra features to webpage to </p>
            
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
    return [tab1, tab2, tab3];
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
        <p>
            We want to understand the business owner, the industry, and—most importantly—users before we start designing. At the outset of the project, we invested the time necessary to fully comprehend the problems that needed to be fixed and how we might do so more effectively than the competition. 

            Competitive analysis
            <ul>
                <li>https://mdmedicalclinic.com/north-vancouver/</li>
                <li>https://mdmedicalclinic.com/north-vancouver/</li>
                <li>https://davihillhair.com/</li>
            </ul>

        </p>
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
        <p>see the pdf</p>
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
            <li>Ensuring the colour contrasts and text sizes meet AA accessibility standards.</li>
            <li>t for anyone with low vision or color deficiencies</li>
        </ul>
    </>);

    const tab2 = (<>
        
    </>)

    const tab3 = (<>
        <p>
            It was a quick project that took three weeks to complete from content generation to wireframing, UI design, development, and styling (alongside other projects that were due).
            As a Team, we contribute to the project planning and evenly divided the design tasks because we were in agreement on the majority of decisions. We were able to keep track of the individual tasks and maintain a consistent pace with the project flow thanks to the utilisation of a Asana board.
            This ensured that no team member lagged behind, allowing us to fulfil deadlines and deliver a final website that pleased both our client and team.
            My skills to work with a team and design and creating a website from scratch were both enhanced by this project. The key to this entire process was communication, along with maintaining organisation with our ideas and material due to the numerous, pressing deadlines and frequent status meetings.
        </p>
    </>)
    return [tab1, tab2, tab3];
}
