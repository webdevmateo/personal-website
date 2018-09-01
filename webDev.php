<!DOCTYPE html>
<html>
  <head>
    <?php include "includes/head.php";?>
    <title>Matthew Price Smith | Web Development</title>
  </head>
  <body>
    <div class="wrapper">
      <?php include "includes/header.php" ?>
      <main>
        <section class="mainNavPanel">
          <?php include "includes/nav.php";?>
        </section>
        <section class="content">
          <h2>Web Development</h2>
          <p>I became interested in web development in 2004, when I created a portfolio website as part of a class assignment in my doctoral program.  At that time, I had no knowledge of coding whatsoever.  In fact, I utilized Dreamweaver's graphical user interface to complete the project without writing a single line of code.</p>
          <p>However, by the time the class was over, I had become thoroughly interested in the process of web development.  The following year, I volunteered to create the website for the department's annual graduate student symposium, and the year after that I became webmaster for the Department of Spanish and Portuguese. During the three years that I served in this capacity, I taught myself the basics of HTML, CSS, a server-side language called CFML, or ColdFusion, and the database language SQL.</p>
          <p>In 2016, over ten years after creating my first portfolio website, I decided to return to web development with the goal of becoming a freelancer.  To reach this objective, I began by completing Udacity's <em>Intro to Programming</em> Nanodegree, an online, self-paced program, with mentorship included.  Here I again learned about HTML and CSS, in addition to the Python programming language, as well as concepts such as functions, variables, loops, classes and objects.</p>
          <p>After completing the Nanodegree, I enrolled in another online course, <em>The Complete Web Developer Course 2.0</em>, in order to continue my learning.  As a result, I now have certifications in HTML, CSS, JavaScript, jQuery, PHP and MySQL, as well as working knowledge of Bootstrap and WordPress.  On a related note, I recently became the webmaster for my daughter's preschool, which is run with WordPress.</p>
          <p>More important than the knowledge and certifications that I have acquired, however, is the evolution of my approach to web development as a discipline.  I now realize that programming and web development are primarily problem-solving fields, and, happily, I have become a much more proficient problem-solver.  I enjoy building things and learning as I go.  As I move forward with various projects, such as the construction of a learning management system for my classes, including Android and iOS app versions, I know that I will encounter challenges.  Nevertheless, I am confident in my ability to overcome any potential obstacles through the use of a methodical problem-solving approach, coupled with patience and determination.</p>
          <section id="projects" class="projects">
            <h4 class="midPageHeader">Web Development Projects</h4>
            <div class="projectInfo">
              <div class="LinkBox">
                <a class="projectLink" href="projects/bbcClone/" target="_blank">BBC Clone</a>
              </div>
              <p class="projectDesc">This was my first significant project utilizing CSS to create a website design and layout.</p>
            </div>
            <div class="projectInfo">
              <div class="LinkBox">
                <a class="projectLink" href="projects/reactionTester/" target="_blank">Reaction Tester</a>
              </div>
              <p class="projectDesc">A fun game to test your reactions. As I built it I began to refine my ability to create JavaScript functions.</p>
            </div>
            <div class="projectInfo">
              <div class="LinkBox">
                <a class="projectLink" href="projects/codePlayer/" target="_blank">Code Player</a>
              </div>
              <p class="projectDesc">Here I continued my foray into the world of JavaScript, leveraging the powerful jQuery library to build an online code testing app.</p>
            </div>
            <div class="projectInfo">
              <div class="LinkBox">
                <a class="projectLink" href="projects/appLandingPage/" target="_blank">App Landing Page</a>
              </div>
              <p class="projectDesc">As a way of familiarizing myself with Twitter's Bootstrap, I created a sample landing page for a future app.</p>
            </div>
            <div class="projectInfo">
              <div class="LinkBox">
                <a class="projectLink" href="projects/weatherApp/" target="_blank">Weather App</a>
              </div>
              <p class="projectDesc">This weather app that I built represents a deep dive into the world of PHP.  It was also my first experience incorporating data from another website, in this case using OpenWeatherMap's API.</p>
            </div>
            <div class="projectInfo">
              <div class="LinkBox">
                <a class="projectLink" href="projects/secretDiary/" target="_blank">Secret Diary</a>
              </div>
              <p class="projectDesc">I built this online diary app using PHP and MySQL.  Significant features include a login system and the ability to update a database in an asynchronous manner, using AJAX.</p>
            </div>
          </section>
        </section>
        <section class="subNavPanel">
          <h4 class="subNavHeader">Related</h4>
          <nav class="subNav">
            <h5 class="subNavSubHeader">Courses</h5>
            <ul class="related">
              <li class="relatedLi"><a class="subNavLink" href="https://www.udacity.com/course/intro-to-programming-nanodegree--nd000" target="_blank">Udacity-Intro to Programming Nanodegree</a></li>
              <li class="relatedLi"><a class="subNavLink" href="https://www.udemy.com/the-complete-web-developer-course-2/" target="_blank">Udemy-The Complete Web Developer Course 2.0</a></li>
            </ul>
            <h5 class="subNavSubHeader">Degrees & Certifications</h5>
            <ul class="related">
              <li class="relatedLi"><a class="subNavLink" href="files/ipnd.pdf" target="_blank">Intro to Programming Nanodegree</a></li>
              <li class="relatedLi"> <a class="subNavLink" href="https://www.the-cca.org/about/" target="_blank">The Cambridge Certification Authority</a></li>
              <li class="relatedLi"><a class="subNavLink" href="files/html.pdf" target="_blank">HTML Certification</a></li>
              <li class="relatedLi"><a class="subNavLink" href="files/css.pdf" target="_blank">CSS Certification</a></li>
              <li class="relatedLi"><a class="subNavLink" href="files/javascript.pdf" target="_blank">JavaScript Certification</a></li>
              <li class="relatedLi"><a class="subNavLink" href="files/jquery.pdf" target="_blank">jQuery Certification</a></li>
              <li class="relatedLi"><a class="subNavLink" href="files/php.pdf" target="_blank">PHP Certification</a></li>
              <li class="relatedLi"><a class="subNavLink" href="files/mysql.pdf" target="_blank">MySQL Certification</a></li>
            </ul>
          </nav>
        </section>
      </main>
      <footer>
        <?php include "includes/footer.php" ?>
      </footer>
    </div>
  <!--End wrapper div-->
  <script src="js/script.js"></script>
  </body>
</html>