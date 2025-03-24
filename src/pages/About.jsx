// create my about page
import profileImage from "../assets/profile.png";


function About(){
return (
<div className="about">
   <h1> Zawadi Brown</h1>
   <img
    src={profileImage}
   alt="Profile Image"></img>
   <h4>Professional:</h4>
   <p> As an aspiring full-stack developer with a background in Allied Health, I bring a unique perspective to problem-solving, attention to detail, and user-centered design. My experience in healthcare has honed my ability to assess complex systems, identify inefficiencies, and implement solutions—skills that directly translate into developing intuitive and functional web applications. </p>

<p> In my role as an Early Intervention Specialist, I analyzed body mechanics and human motion to prevent injuries, much like how I will assess user interactions and optimize applications for seamless experiences. My ability to document workforce interactions and tailor data reporting to client specifications contributes to how I plan to structure databases, manage back-end functionality, and ensure user needs are met through data-driven solutions.  
</p>
<p>
As a Clinical Specialist and Licensed Athletic Trainer, I refined my ability to communicate complex information to diverse audiences, whether educating patients, collaborating with physicians, or guiding athletes through rehabilitation. This adaptability translates into my ability to collaborate effectively with cross-functional teams, understand user requirements, and develop applications that prioritize usability and accessibility.</p>

<p>By combining my analytical mindset, technical expertise, and commitment to creating efficient and user-friendly solutions, I am eager to leverage my skills in a full-time web development role, where I can contribute to building applications that enhance user experiences and drive innovation. </p>
   <h4>Personal:</h4>
   <p>
   I am a dedicated coach and youth sports advocate, actively involved in developing and managing athletic programs. As a volunteer with a community flag football league, I oversee scheduling, officiating, scorekeeping, and coaching while also managing the league’s website, electronic scoring system, and announcements. In addition, I  serve as the team administrator and assitant coach of an all-girls travel flag football team for athletes ages 10 through high school. We focus on skill development, leadership, and personal growth through sports. I also manage the team’s social media presence and video content. Beyond football, I lead a summer speed development clinic, introducing young athletes to the fundamentals of track and field.
   </p>
</div>
);
}

export default About; 