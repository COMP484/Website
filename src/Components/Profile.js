/* Ian Work on Profile */
import React, { Component } from 'react';
import './Profile.css';


// Can Create Entire Profile Page
function Profile() {
    return (
        // Controls the Centering of the Page
        <div id="central">

            {/* Intro to the Page */}
            <header>
                <h1>Profile Page</h1>
            </header>

            {/* Contains the main content of the page */}
            <main>

                {/* About Each of Us Contained in Section */}
                <section id="profile-desc" class="left">
                    <h2 class="header-bold">About Me</h2>

                    {/* Alex's Profile */}
                    <article>
                        <h3>My Name Is Aleksandra Trifonova</h3>
                        {/* Image Goes Here */}
                        <img alt="Alt Text: Photo Goes Here"></img>
                        <p>I am currently a student at <i> California State University, Northridge. </i>
                            <br></br>
                            <br></br>
                            <b>Major: Computer Science</b>

                            <br></br>
                            <p>My Field of interests include: Flight navigation systems for aerospace, and aircraft.
                            My interests include embedded applications, microprocessors, navigation systems and working
                            with satellite images to help aircraft navigate better.</p>
                        </p>
                    </article>

                    {/* Ian's Profile */}
                    <article>
                        <h3>My Name Is Ian Iskra</h3>
                        {/* Image Goes Here */}
                        <img alt="Alt Text: Photo Goes Here"></img>
                        <p>I am currently a student at <i> California State University, Northridge.</i>
                            <br></br>
                            <br></br>
                            <b>Major: Computer Science</b>

                            <br></br>
                            <p>My interests include: Algorithm analysis, cybersecurity, the outdoors, and meeting new people. I also have
                                an interest in building web applications and want to find the ideal career where all my
                                technical interests merge.
                            </p>
                        </p>
                    </article>

                    {/* Haemin's Profile */}
                    <article>
                        <h3>My Name Is Haemin Lee</h3>
                        {/* Image Goes Here */}
                        <img alt="Alt Text: Photo Goes Here"></img>
                        <p>I am currently a student at <i> California State University, Northridge. </i>
                            <br></br>
                            <br></br>
                            <b>Major: Computer Science</b>

                            <br></br>
                            <p>My interests include: Front End Web Engineering, well-cooked chicken and video editing.</p>
                        </p>
                    </article>

                    {/* Angie's Profile */}
                    <article>
                        <h3>My Name Is Angie Flores</h3>
                        {/* Image Goes Here */}
                        <img alt="Alt Text: Photo Goes Here"></img>
                        <p>I am currently a student at <i> California State University, Northridge. </i>
                            <br></br>
                            <br></br>
                            <b>Major: Computer Science</b>

                            <br></br>
                            <p>My interests include: game development, film animation, Front End Web Engineering. I also <b>LOVE</b> thai tea boba.</p>
                        </p>
                    </article>

                    {/* Alexis's Profile */}
                    <article>
                        <h3>My Name Is Alexis Siguenza</h3>
                        {/* Image Goes Here */}
                        <img alt="Alt Text: Photo Goes Here"></img>
                        <p>I am currently a student at <i> California State University, Northridge. </i>
                            <br></br>
                            <br></br>
                            <b>Major: Computer Science</b>

                            <br></br>
                            <p>My interests include: The Society of Women Engineer's Club at CSUN. I like game development, UI/UX development,
                            and boba ice team.</p>
                        </p>
                    </article>
                </section>

                {/* Contains Pertinent News */}
                <h2 class="right">profile New</h2>
                <aside id="news" class="right">
                    <h3 class="header-bold">After coding this Project</h3>
                    <p>This is the <q>breaking news</q> for today.</p>
                    <h2>Haemin Lee</h2>
                    <p>
                        It was good project to get practice about react.js most hard part was learning react in fast
                        -paced. Specially it was end of semester, and many project and exam was coming at same time.
                        I had hard time managing time. However, it was good chance to learn about react and use in
                        real project.
                    </p>
                    <h2>Ian Iskra</h2>
                    <p></p>
                    <h2>Angelica G Flores</h2>
                    <p></p>
                    <h2>Aleks Trifonova</h2>
                    <p>
                        While coding this project I learned that game developement is not just limited to frameworks 
                        but can be made in pure html and javascript as shown by our comparison with snake and the other two games. 
                        Despite the frameworks making it easier to develop the games and add extra fun things, developing them
                        in pure html and javascript works just as well. This project was a great opportunity to use github and version 
                        control and manage many different moving parts in order to complete the project a timely manner. 
                    </p>
                    <h2>Alexis Siguenza</h2>
                    <p>
                        Throughout this project, I gained a lot of valuable experience 
                    </p>
                    

                </aside>

            </main>
        </div> // End Contain
    );
}
export default Profile