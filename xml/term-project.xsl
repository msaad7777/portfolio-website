<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version ="1.0"
    xmlns:xsl = "http://www.w3.org/1999/XSL/Transform">
    <xsl:template match ="/">
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Mohammed Saad Portfolio Website</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css" integrity="sha256-46qynGAkLSFpVbEBog43gvNhfrOj+BmwXdxFgVK/Kvc=" crossorigin="anonymous" />  
        
        <!-- Update these with your own fonts -->
        <link href="https://fonts.googleapis.com/css?family=Source+Code+Pro:400,900|Source+Sans+Pro:300,900&display=swap" rel="stylesheet">
        
        <link rel="stylesheet" href="css/styles.css">

    </head>
    <body>
        <header>
            <div class="logo">
                <img src="img/saad.png" alt="">
            </div>
            <button class="nav-toggle" aria-label="toggle navigation">
                <span class="hamburger"></span>
            </button>
            <nav class="nav">
                <ul class="nav__list">
                    <li class="nav__item"><a href="#home" class="nav__link">Home</a></li>
                    <li class="nav__item"><a href="#services" class="nav__link">My Services</a></li>
                    <li class="nav__item"><a href="#about" class="nav__link">About me</a></li>
                    <li class="nav__item"><a href="#work" class="nav__link">My Work</a></li>
                </ul>
            </nav>
        </header>
        
        <!-- Introduction -->
        <section class="intro" id="home">
            <h1 class="section__title section__title--intro">
                Hi, I am <strong>Mohammed Saad</strong>
            </h1>
            <p class="section__subtitle section__subtitle--intro">Data Nerd | Blogger | Freelancer </p>
            <img src="img/SAAD2.jpg" alt="a picture of saad enjoying beach" class="intro__img">
        </section>
        
        
        <!-- My services -->
        <section class="my-services" id="services">
            <h2 class="section__title section__title--services">What I do</h2>
            <div class="services">
                <div class="service">
                    <h3>Database Migration</h3>
                    <p>As a Database Engineer, I create and manage databases, and help clients in database migration.</p>
                </div> <!-- / service -->
                
                <div class="service">
                    <h3>Data Engineering</h3>
                    <p>As a data engineer I design and build systems that collect and transform the data used to inform business decisions.</p>
                </div> <!-- / service -->
                
                <div class="service">
                    <h3>Data Analysis</h3>
                    <p>As a Data Analyst, I gather and analyze data to find patterns and get important insights to assist in problem solving and making educated data-driven business decisions.</p>
                </div> <!-- / service -->
            </div> <!-- / services -->
            
            <a href="#work" class="btn">My Work</a>
        </section>
        
        
        <!-- About me -->
        <section class="about-me" id="about">
           <h2 class="section__title section__title--about">Who I am</h2>
           <p class="section__subtitle section__subtitle--about">Data Analytics Engineer & ETL developer based out of Toronto</p>
           
           <div class="about-me__body">
               <p>Experienced engineering professional who is open-minded, gritty, and detail-oriented, with significant practical and educational experience in engineering analysis, interpreting and analyzing data, building push & pull ingestion pipelines and visualization pipelines to update and deploy a model, cloud computing, and building machine learning models to drive successful business solutions.</p>
               <p>Over six years of career experience working collaboratively in cross-functional teams as a data engineer and as a mechanical engineer. Currently specializing in Cloud & DevOps technologies through project implementation based on real-world scenarios, with a focus on technologies and services from AWS, Microsoft Azure, Google Cloud, and Oracle Cloud, with the goal of assisting companies in their migration and modernization journeys from on-premises to Cloud.</p>
           </div>
           
           <img src="img/SAAD1.jpeg" alt="Saad Enjoying the Beach" class="about-me__img">
        </section>
        <!-- My Work -->
        <section class="my-work" id="work">
            <h2 class="section__title section__title--work">My work</h2>
            <p class="section__subtitle section__subtitle--work">A selection of my range of work</p>
            
            <div class="portfolio">
                <!-- Portfolio item 01 -->
                <a href="portfolio-item.html" class="portfolio__item">
                    <img src="img/portfolio-01.jpg" alt="" class="portfolio__img">
                </a>
                
                <!-- Portfolio item 02 -->
                <a href="portfolio-item2.html" class="portfolio__item">
                    <img src="img/portfolio-02.jpg" alt="" class="portfolio__img">
                </a>
                
                <!-- Portfolio item 03 -->
                <a href="portfolio-item.html" class="portfolio__item">
                    <img src="img/portfolio-03.jpg" alt="" class="portfolio__img">
                </a>
                
                <!-- Portfolio item 04 -->
                <a href="portfolio-item.html" class="portfolio__item">
                    <img src="img/portfolio-04.jpg" alt="" class="portfolio__img">
                </a>
                
                <!-- Portfolio item 05 -->
                <a href="portfolio-item.html" class="portfolio__item">
                    <img src="img/portfolio-05.jpg" alt="" class="portfolio__img">
                </a>
                
                <!-- Portfolio item 06 -->
                <a href="portfolio-item.html" class="portfolio__item">
                    <img src="img/portfolio-06.jpg" alt="" class="portfolio__img">
                </a>
                
                <!-- Portfolio item 07
                <a href="portfolio-item.html" class="portfolio__item">
                    <img src="img/portfolio-07.jpg" alt="" class="portfolio__img">
                </a>
                
                Portfolio item 08 -->
                <!-- <a href="#" class="portfolio__item">
                    <img src="img/portfolio-08.jpg" alt="" class="portfolio__img">
                </a>
                
                Portfolio item 09 -->
                <!-- <a href="#" class="portfolio__item">
                    <img src="img/portfolio-09.jpg" alt="" class="portfolio__img">
                </a>
                
                Portfolio item 0 0-->
                <!-- <a href="#" class="portfolio__item">
                    <img src="img/portfolio-10.jpg" alt="" class="portfolio__img">
                </a> -->
            </div>
        </section>
        
        
        <!-- Footer -->
        <footer class="footer">
            
            <a href="contact-form.html" class="footer__link">Contact Me</a>
            <ul class="social-list">
                <li class="social-list__item">
                    <a class="social-list__link" href="https://medium.com/@msaad_86696">
                        <i class="fab fa-medium"></i>
                    </a>
                </li>
                <li class="social-list__item">
                    <a class="social-list__link" href="https://www.linkedin.com/in/badruddin-saad">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                </li>
                <li class="social-list__item">
                    <a class="social-list__link" href="https://twitter.com/Mohamme43073045?t=V2VGq-qo8elg7fkb4AwiSA&s=09">
                        <i class="fab fa-twitter"></i>
                    </a>
                </li>
                <li class="social-list__item">
                    <a class="social-list__link" href="https://github.com/msaad7777">
                        <i class="fab fa-github"></i>
                    </a>
                </li>
                <li class="social-list__item">
                    <a class="social-list__link" href="https://www.credly.com/users/mohammed-saad.402d23cb/badges">
                        <i class="fas fa-graduation-cap"></i>                
                    </a>
                </li>
            </ul>
        </footer>
        <script src="js/index.js"></script>
    </body>
</html>
    </xsl:template>
    </xsl:stylesheet>


<gloomaps scheme="1.0">
  <link>https://www.gloomaps.com/plckHij4hG</link>
  <pubdate>12/14/2022</pubdate>
  <section>
    <box>
      <text>Portfolio Website</text>
      <member>
        <box>
          <text>Home</text>
          <member>
            <box>
              <text>Contact Me</text>
              <member/>
            </box>
          </member>
        </box>
        <box>
          <text>My services</text>
          <member/>
        </box>
        <box>
          <text>About Me</text>
          <member/>
        </box>
        <box>
          <text>My Work</text>
          <member>
            <box>
              <text>Front-End Developer</text>
              <member>
                <box>
                  <text>Home</text>
                  <member/>
                </box>
                <box>
                  <text>Cafe Menu</text>
                  <member>
                    <box>
                      <text>Home</text>
                      <member/>
                    </box>
                    <box>
                      <text>Contact Me</text>
                      <member/>
                    </box>
                  </member>
                </box>
                <box>
                  <text>Survey Form</text>
                  <member>
                    <box>
                      <text>Home</text>
                      <member/>
                    </box>
                    <box>
                      <text>Contact Me</text>
                      <member/>
                    </box>
                  </member>
                </box>
                <box>
                  <text>Quiz</text>
                  <member>
                    <box>
                      <text>Home</text>
                      <member/>
                    </box>
                    <box>
                      <text>Contact Me</text>
                      <member/>
                    </box>
                  </member>
                </box>
              </member>
            </box>
          </member>
        </box>
      </member>
    </box>
  </section>
</gloomaps>
