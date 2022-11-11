export const projects = [
    {
        id: 'beauty',
        title: 'Beauty Aesthetics Medical',
        tools: ['WordPress', 'PHP', 'SASS', 'UI/UX'],
        featuredImage: '/media/project/wordpres.png',
        featuredImageAlt: 'wordpress-medical clinic',
        projectDetails: {

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
                responsiveness: 'Desktop and mobile',
                roles: ['UI/UX Designer', 'Front End Web Developer']
            },
            tabs: getMovieTabs()
        }
    },
    {
        id: 'country',
        title: 'Visit Turkey',
        tools: ['HTML5', 'CSS', 'JavaScript'],
        featuredImage: '/media/project/turky-home.png',
        featuredImageAlt: 'html css javascrip project'

    },
    {
        id: 'matching-game',
        title: 'Matching Game',
        tools: ['HTML5', 'CSS', 'JavaScript'],
        featuredImage: '/media/project/cardgame-home.png',
        featuredImageAlt: 'Matching card Game'
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
 *  XXXX
 */