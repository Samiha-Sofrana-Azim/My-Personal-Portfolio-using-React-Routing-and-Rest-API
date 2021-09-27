import './style.css'


const About = () => {
    return (
        <div className="about">
        <h1>Bio</h1>
        <p className="me"> I am Samiha Sofrana Azim,a passionate learner and  want to pursue my career as a Full Stack Developer in IT industry. </p>
        <h2 className="info">Personal Information</h2>
 
 <li>  Father's Name: Late Dr. Md. Anwarul Azim</li>
 <li>  Mother's Name: Dr. Shahnaz Begum</li>
 <li>  Permanent Address: House no-480/2,Doric Novelty Homes,Block-C,Khilgaon,Dhaka</li>
    <li>Blood Group:B+</li>
    <li>Nationality:Bangladeshi</li>


  <div> 
 <button class="button"><a href="https://drive.google.com/file/d/1763QS_CB1xzMvNo3Nz8r8MOLzD15dStI/view?usp=sharing"
    download> VIEW CV</a></button>   
    </div>

<div class="flex-container">
<div class= "div1">
    Educational Background
    <table>
        <tr>
          <th>Degree</th>
          <th>Passing Year</th>
          <th>Institution</th>
          <th>Concentration</th>
          <th>Result</th>
        </tr>
        <tr>
          <td>Secondary School Certificate</td>
          <td>2014</td>
          <td>Noakhali Govt. Girls High School</td>
          <td>Science</td>
          <td>GPA 5.00 out of 5.00</td>
        </tr>
        <tr>
            <td>Higher Secondary Certificate</td>
            <td>2016</td>
            <td>ideal School And College</td>
            <td>Science</td>
            <td>GPA 5.00 out of 5.00</td>
        </tr>
        <tr>
            <td>Bachelor Of Science</td>
            <td>2021</td>
            <td>BRAC University</td>
            <td>Computer Science And Engineering</td>
            <td>CGPA 3.52 out of 4.00</td>
        </tr>
        </table>
</div>
</div>
</div>
       
    );
}


export default About;