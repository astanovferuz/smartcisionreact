import React from "react";
import { motion } from "framer-motion";

function About()    {
    const pageTransition = {
        in: {
            opacity: 1,
            x: 0
        },
        out: {
            opacity: 0,
            x: "-5%"
        }
    }
    return(
        <motion.div exit="out" animate="in" initial="out" variants={pageTransition}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h4 className="mt-4 mx-5">About Us</h4>
                        <p className="font-small mx-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Laoreet sit amet cursus sit amet dictum sit amet justo. Elementum eu facilisis sed odio morbi quis commodo. Porta non pulvinar neque laoreet suspendisse. Fermentum dui faucibus in ornare quam viverra orci. Ut etiam sit amet nisl. Tellus in metus vulputate eu scelerisque felis. Elit sed vulputate mi sit amet mauris commodo. Arcu dui vivamus arcu felis bibendum. Viverra suspendisse potenti nullam ac tortor vitae purus faucibus. Ut sem nulla pharetra diam sit amet nisl. Fames ac turpis egestas maecenas pharetra convallis posuere. Turpis egestas integer eget aliquet. Posuere morbi leo urna molestie at elementum.</p>
                        <h4 className="mt-4 mx-5">Our Mission</h4>
                        <p className="font-small mx-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Laoreet sit amet cursus sit amet dictum sit amet justo. Elementum eu facilisis sed odio morbi quis commodo. Porta non pulvinar neque laoreet suspendisse. Fermentum dui faucibus in ornare quam viverra orci. Ut etiam sit amet nisl. Tellus in metus vulputate eu scelerisque felis. Elit sed vulputate mi sit amet mauris commodo. Arcu dui vivamus arcu felis bibendum. Viverra suspendisse potenti nullam ac tortor vitae purus faucibus. Ut sem nulla pharetra diam sit amet nisl. Fames ac turpis egestas maecenas pharetra convallis posuere. Turpis egestas integer eget aliquet. Posuere morbi leo urna molestie at elementum.</p>
                        <h4 className="mt-4 mx-5">Our Core Values</h4>
                        <p className="font-small mx-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Laoreet sit amet cursus sit amet dictum sit amet justo. Elementum eu facilisis sed odio morbi quis commodo. Porta non pulvinar neque laoreet suspendisse. Fermentum dui faucibus in ornare quam viverra orci. Ut etiam sit amet nisl. Tellus in metus vulputate eu scelerisque felis. Elit sed vulputate mi sit amet mauris commodo. Arcu dui vivamus arcu felis bibendum. Viverra suspendisse potenti nullam ac tortor vitae purus faucibus. Ut sem nulla pharetra diam sit amet nisl. Fames ac turpis egestas maecenas pharetra convallis posuere. Turpis egestas integer eget aliquet. Posuere morbi leo urna molestie at elementum.</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default About;