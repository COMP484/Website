/* Ian Work on Profile */
import React, { Component } from 'react'
import './Profile.css';


// Can Create Entire Profile Page
function Profile(){
    return (
        <div id="container">
            <header>
                <h1>Hello Barkataki</h1>
            </header>

            {/* Contains the main content of the page */}
            <main>

                <section class="left">
                    <h2 class="bold">H2 Tag About Me</h2>
                    <article>
                        <h3>H3 Tag My Name Is Aleksandra Trifonova</h3>
                        <img alt="Alt Text: Photo Goes Here"></img>
                        <p>This is my description. I love loud music.</p>
                    </article>
                    
                    <article>
                        <h3>H3 Tag My Name Is Ian Iskra</h3>
                        <img alt="Alt Text: Photo Goes Here"></img>
                        <p>This is my description. I love loud music.</p>
                    </article>

                    <article>
                        <h3>H3 Tag My Name Is Haemin Lee</h3>
                        <img alt="Alt Text: Photo Goes Here"></img>
                        <p>This is my description. I love loud music.</p>
                    </article>

                    <article>
                        <h3>H3 Tag My Name Is Angie Flores</h3>
                        <img alt="Alt Text: Photo Goes Here"></img>
                        <p>This is my description. I love loud music.</p>
                    </article>
                    
                    <article>
                        <h3>H3 Tag My Name Is Jaxidae</h3>
                        <img alt="Alt Text: Photo Goes Here"></img>
                        <p>This is my description. I love loud music.</p>
                    </article>
                </section>

                {/* The News */}
                <aside class="right">

                    <h3 class="bold">The News Section is Fake</h3>
                    <p>This is the breaking <q>news</q> for today.</p>

                    <p>The World Revolves Around Ian Iskra. Nothing can stop me! HA HA HA.
                    The World Revolves Around Ian Iskra. Nothing can stop me! HA HA HA.
                    The World Revolves Around Ian Iskra. Nothing can stop me! HA HA HA.
                    The World Revolves Around Ian Iskra. Nothing can stop me! HA HA HA.
                    The World Revolves Around Ian Iskra. Nothing can stop me! HA HA HA.
                    The World Revolves Around Ian Iskra. Nothing can stop me! HA HA HA.
                    The World Revolves Around Ian Iskra. Nothing can stop me! HA HA HA.
                    The World Revolves Around Ian Iskra. Nothing can stop me! HA HA HA.
                    The World Revolves Around Ian Iskra. Nothing can stop me! HA HA HA.
                    The World Revolves Around Ian Iskra. Nothing can stop me! HA HA HA.
                    The World Revolves Around Ian Iskra. Nothing can stop me! HA HA HA.</p>

                    <p>The World Continues to Revolve Around Ian Iskra. Nothing can stop me! HA HA HA.</p>
                </aside>
            </main>

        </div>
    );
}

export default Profile
