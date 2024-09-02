import Head from 'next/head';
import styles from '../styles/Projects.module.css';

//Components
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import ProjectCard from "../components/ProjectCard.js"

//Images
import RaspberryPi from "../images/projectIMGs/raspberryPi.jpg";
import ESP32 from "../images/projectIMGs/esp32.jpg";
import paint from "../images/projectIMGs/painting.jpg";
import radishes from "../images/projectIMGs/radishes.jpg";
import insulation from "../images/projectIMGs/insulation.jpg";
import roof from "../images/projectIMGs/structure.png";

export default function Projects() {

    return(
        <>
            <Head>
                <title>Agroponics UBC || Projects</title>
                <meta charSet='utf-8'/>
                <meta name='viewport' content='width=device-width, initial-scale=1'/>
                <link rel="icon" href="https://ubcagroponics.com/favicon.ico"/>
            </Head>
            <Navbar />
            <main>
                <div className={styles.projectLanding}>
                    <div>
                        <h1>Check Out Our Projects</h1>
                        <h2>See what each of our subteams are doing</h2>
                    </div>
                </div>
                
                <div className={styles.blurb}>
                    <p>
                        Here are a few of the projects we're currently working on. We're constantly working on new things and will be adding more projects so feel free to come back later :)
                    </p>
                </div>

                <section className={styles.subteams}>
                    <div className={styles.automation}>
                        <h2>AUTOMATION</h2>
                        <div>
                            <ProjectCard cardTitle="Raspberry Pi Network Setup" title="Raspberry Pi Network Setup – Enhancing Connectivity and Control for Our Hydroponic Systems" img={RaspberryPi}
                                text="We are excited to announce the successful setup of our Raspberry Pi, now connected to the UBC secure network and our home assistant domain. This configuration is a cornerstone of the Agroponics UBC project, playing a pivotal role in ensuring seamless communication and control across our hydroponic systems.
                                    The Raspberry Pi serves as the central hub for our smart hydroponic setup, acting as the broker for the MQTT system. This setup allows us to efficiently manage data from various sensors, enabling real-time monitoring and automation through the Home Assistant platform. The ability to connect the Raspberry Pi to both the UBC network and our custom domain significantly enhances our capacity to manage the system remotely, offering a robust solution for continuous, unattended operation.
                                    Moreover, this network configuration is critical for scalability. As we expand our hydroponic systems and integrate more sensors, the need for a reliable and secure communication backbone becomes even more important. The successful network setup ensures that we can scale our operations while maintaining control and oversight, ultimately supporting the project’s long-term goals of creating a sustainable, high-yield hydroponic farming system.
                                    This milestone is a testament to the hard work and expertise of our team. Their efforts have laid a solid foundation for the continued success and expansion of the Agroponics UBC project."
                            />
                            <ProjectCard cardTitle="ESP32 Sensor Integration" title="Successful Integration of Sensors with ESP32 – A Key Step Towards a Smart Hydroponic System" img={ESP32}
                                text="We’ve made significant strides in the Agroponics UBC project with the successful integration of multiple sensors using the ESP32 microcontroller. This achievement is not just a technical milestone—it’s a crucial component of our overall goal to develop a fully automated, smart hydroponic system.
                                    The integration of sensors, including the pH, temperature, and flow rate sensors, is foundational for real-time monitoring and control of the hydroponic environment. Accurate sensor data is essential for maintaining optimal growing conditions, such as pH levels and water temperature, which directly impact plant health and yield. By transmitting this data via MQTT to our Home Assistant platform, we can automate responses to environmental changes, ensuring that the system operates efficiently and sustainably without constant manual intervention.
                                    This development brings us closer to realizing a truly intelligent hydroponic system, capable of adjusting to environmental variables in real-time. The success of this integration underlines the importance of precise data collection and management in modern agriculture, helping us create a more sustainable and resource-efficient farming model. Kudos to the team for their dedication and technical expertise in achieving this critical milestone!"
                            />
                        </div>                        
                    </div>
                    <div className={styles.plants}>
                        <h2>PLANTS</h2>
                        <div>
                            <ProjectCard cardTitle="Radishes" title="Exploring Tuber Growth in Hydroponics – Radish Study Underway" img={radishes}
                            text="The Plants team at Agroponics UBC is diving deeper into the science of hydroponics with an exciting experiment on tuber growth. Recently, we successfully grew radishes using a deep water culture hydroponic system, aiming to understand how these root vegetables thrive in a soilless environment. After harvesting, we froze the radishes to preserve their nutritional integrity for further analysis.
                                Next, our team will utilize advanced lab equipment, including UV-Vis spectrophotometry and HPLC, to assess the nutritional content of the radishes. This analysis will help us determine how different growing conditions impact the nutrient profile of tuber plants in hydroponic systems. The results of this study will not only enhance our understanding of hydroponic farming but also guide future experiments to optimize the growth and nutritional value of crops.
                                This experiment marks an important step in our mission to develop sustainable, efficient, and nutritionally rich farming practices through hydroponics. Stay tuned for more updates as we delve into the data and share our findings!"
                            />
                        </div>
                    </div>
                    <div className={styles.structure}>
                        <h2>STRUCTURE</h2>
                        <div>
                            <ProjectCard cardTitle="Painting The Trailer" title="Giving Our Trailer a Fresh New Look" img={paint}
                                text="We recently gave our trailer a much-needed makeover! After noticing that it was starting to rust and the paint was chipping away, we decided it was time for a change. But this wasn’t just about protection—it was also a celebration. We had just secured the trailer, and what better way to mark the occasion than by giving it a fresh coat of paint?
                                    The new paint job not only shields the trailer from further deterioration but also reflects our excitement and pride in this key part of our project. And this is just the beginning! We’re already planning to add some creative murals to the trailer in the near future, turning it into a vibrant representation of the Agroponics UBC spirit. Stay tuned to see how we’ll transform this trailer into something truly special!"
                            />
                            <ProjectCard cardTitle="Insulation" title="Enhancing the Trailer’s Efficiency with XPS Insulation" img={insulation}
                                text="At Agroponics UBC, ensuring that our hydroponic systems operate efficiently year-round is crucial. One of our latest projects focused on insulating our trailer to maintain a stable temperature, especially during the cold winter months. Our goal was to keep the interior temperature above 15 degrees Celsius with the help of our heating system.
                                    To achieve this, we calculated the necessary R-value, which measures the insulation's resistance to heat flow. After considering several materials—including fiberglass, wool, and spray foam—we ultimately chose foam XPS (extruded polystyrene) boards. XPS stood out for its excellent resistance to mold, which is essential in a damp environment like a hydroponic system. Additionally, XPS is easy to install, making it a practical choice for our team.
                                    This insulation upgrade not only ensures that our plants thrive during winter but also enhances the overall energy efficiency of our trailer. By maintaining a consistent temperature, we can reduce energy consumption, support plant growth, and continue our commitment to sustainable farming practices.
                                    This project is another step forward in our mission to create a robust, sustainable environment for our hydroponic systems, setting the stage for more innovative developments in the future."
                            />
                            <ProjectCard cardTitle="Roof Redesign" title=" Roof - Redesigning the Trailer's Roof for Long-Term Sustainability" img={roof}
                                text="At Agroponics UBC, we’re not just growing plants; we’re cultivating innovative solutions. As part of our ongoing efforts to optimize the trailer housing our hydroponic systems, we’ve undertaken a critical project: redesigning the trailer’s roof, which as of now is rusting and has begun to leak. This isn’t just about keeping the rain out—it’s about ensuring long-term durability, safety, and future-proofing our setup for new technologies.
                                    In our redesign, we carefully considered various factors. First, waterproofing was a top priority, ensuring that our systems remain protected from the elements. To prevent rust and extend the life, we’re exploring the use of corrosion-resistant materials and protective coatings. Additionally, we’ve kept future upgrades in mind, ensuring that the new roof can support the installation of solar panels, enabling us to harness renewable energy down the line.
                                    Safety is always at the forefront of our projects, so we’re taking extra precautions during construction to protect our team members. We’ve meticulously planned the roof’s dimensions and structural integrity to ensure it can withstand various loads and environmental conditions, all while providing a stable platform for ongoing and future innovations.
                                    Our design is shown in the image above.
                                    This redesign is more than just a technical upgrade—it’s a step toward a more sustainable, resilient future for our hydroponic systems and our mission to advance sustainable agriculture. Stay tuned as we continue to build and renovate the trailer!"
                            />
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    );

};