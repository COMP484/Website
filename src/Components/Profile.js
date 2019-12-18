/* Ian Work on Profile */
import React, { Component } from 'react';
import './Profile.css';


// Can Create Entire Profile Page
function Profile(){
    return (
        // Controls the Centering of the Page
        <div id="container">

            {/* Intro to the Page */}
            <header>
                <h1>Profile Page</h1>
            </header>

            {/* Contains the main content of the page */}
            <main>

                {/* About Each of Us Contained in Section */}
                <section class="left">
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
                <aside class="right">
                    <h3 class="header-bold">The News Section</h3>
                    <p>This is the <q>breaking news</q> for today.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus turpis massa tincidunt dui ut ornare lectus sit. 
                        Elit pellentesque habitant morbi tristique senectus. Morbi tristique senectus et netus et malesuada. Gravida dictum fusce ut placerat. Et egestas quis ipsum suspendisse ultrices. 
                        Ac turpis egestas maecenas pharetra convallis posuere morbi leo. Elementum sagittis vitae et leo duis ut diam quam. Velit ut tortor pretium viverra suspendisse. Vulputate odio ut 
                        enim blandit volutpat maecenas volutpat blandit aliquam. Lectus magna fringilla urna porttitor rhoncus dolor purus non. Gravida quis blandit turpis cursus in hac habitasse platea 
                        dictumst. Justo donec enim diam vulputate ut. Velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum. Vulputate eu scelerisque felis imperdiet proin fermentum leo. 
                        Elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl. Pellentesque habitant morbi tristique senectus. Sodales ut etiam sit amet. Suspendisse interdum consectetur 
                        libero id faucibus. Aliquet lectus proin nibh nisl condimentum id venenatis a.</p>
                    <p>Nisl rhoncus mattis rhoncus urna. In fermentum posuere urna nec tincidunt praesent semper feugiat. Sapien faucibus et molestie ac feugiat sed lectus. Posuere lorem ipsum dolor sit 
                        amet consectetur. Convallis tellus id interdum velit laoreet id donec. Vitae turpis massa sed elementum tempus. Molestie nunc non blandit massa enim nec. Massa vitae tortor condimentum 
                        lacinia. In ornare quam viverra orci sagittis. Vitae congue mauris rhoncus aenean. Feugiat scelerisque varius morbi enim.</p>
                    <p>Sed velit dignissim sodales ut eu. Fermentum dui faucibus in ornare quam. Odio euismod lacinia at quis risus. Posuere ac ut consequat semper viverra nam libero justo laoreet. Netus 
                        et malesuada fames ac turpis egestas maecenas. Lorem mollis aliquam ut porttitor leo a diam. Accumsan sit amet nulla facilisi morbi tempus iaculis urna. Vestibulum lorem sed risus 
                        ultricies tristique. Purus in massa tempor nec feugiat nisl. Donec enim diam vulputate ut pharetra sit amet aliquam. Pellentesque nec nam aliquam sem. Amet justo donec enim diam 
                        vulputate ut. Volutpat lacus laoreet non curabitur gravida arcu. Laoreet sit amet cursus sit. Orci sagittis eu volutpat odio facilisis mauris sit amet massa.</p>
                </aside>
            </main>
        </div> // End Contain
    );
}
export default Profile