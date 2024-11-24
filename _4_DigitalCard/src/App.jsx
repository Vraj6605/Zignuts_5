import Card from "./Components/Card";

function App() {

  const profiles = [
    {
      name: "Laura Smith",
      passion: "Frontend Developer",
      about: `I am a frontend developer with a particular interest in making 
      things simple and automating daily tasks. I try to keep up with 
      security and best practices, and am always looking for new things to learn.`,
      interests: `Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. 
      Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.`,
      img:"https://imgv3.fotor.com/images/blog-richtext-image/female-professional-corporate-headshots.png"
    },
    {
      name: "John Doe",
      passion: "Backend Developer",
      about: `I specialize in building robust server-side systems and enjoy 
      optimizing databases for performance. I am passionate about designing scalable 
      and maintainable software solutions.`,
      interests: `Tech enthusiast. Problem solver. Open-source contributor. 
      Avid gamer. Movie buff. Coffee lover. Adventure seeker.`,
      img:"https://r2.erweima.ai/imgcompressed/img/compressed_a629a7869316bddfdd12ad9bd8683db7.webp"
    },
    {
      name: "Emily Johnson",
      passion: "UI/UX Designer",
      about: `I am a creative UI/UX designer focused on creating intuitive 
      and user-friendly designs. I aim to bridge the gap between aesthetics and functionality.`,
      interests: `Artist. Nature lover. Bookworm. Design geek. Travel enthusiast. 
      Foodie. Fitness advocate. Podcast listener.`,
      img:"https://i1.rgstatic.net/ii/profile.image/11431281183132443-1692717101366_Q512/Emily-Johnson-131.jpg"
    },
    {
      name: "Vraj Makwana",
      passion: "Full Stack Developer",
      about: `I am a full-stack developer passionate about building seamless 
      applications that deliver value to users. I enjoy working with both frontend 
      and backend technologies.`,
      interests: `Code wizard. Lifelong learner. Crypto enthusiast. Music lover. 
      Fitness geek. Blogger. Photography hobbyist.`,
      img:"https://techcloudltd.com/wp-content/uploads/2024/06/Clothing-and-styling-for-professional-headshot-1024x692.webp"
    }
  ];
  

  return (
    <div className="flex flex-wrap justify-evenly">
      {profiles.map((e) => 
        <Card img={e.img} name={e.name} passion={e.passion} about={e.about} intrest={e.interests}/>
      )}
    </div>
  );
}

export default App;
