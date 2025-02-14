'use client';
import React from 'react'

const Dsmnru = () => {

  const speech = new SpeechSynthesisUtterance();

  const voiceResponse = (e) => {
    if(window.speechSynthesis.speaking){
      window.speechSynthesis.cancel();
      return;
    }
    console.log(e.target.innerText);
    
    speech.text = e.target.innerText;
    window.speechSynthesis.speak(speech);
  }

  

  return (
    <>
      {/* hero - start */}
      <div className="pb-6 sm:pb-8 lg:pb-12 px-16 cursor-pointer"> 
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <section className="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row ">
            {/* content - start */}
            <div className="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12 xl:py-24" onClick={voiceResponse}>
              <h1 className="mb-8 text-4xl font-bold text-black sm:text-5xl md:mb-12 md:text-6xl">
                DSMNRU CLUBS AND COMMITTEES
              </h1>
              <p className="text-gray-700 text-justify">
                At DSMNRU, we nurture well-rounded individuals who excel both academically and in their personal pursuits. Our campus vibrates with energy from a diverse array of student-led clubs and committees, each offering unique opportunities to grow and explore. From professional development in fields like consulting and finance to creative expression through theatre and music, there’s a space for every passion and interest to flourish. Our clubs span a wide spectrum, covering areas such as entrepreneurship, sustainability, public policy, while the committees form the backbone of campus life shaping the DSMNRU experience and offering valuable leadership opportunities.
              </p>
              <h1 className="mb-3 mt-4 text-4xl font-bold text-black sm:text-4xl md:mb-2 md:text-2xl">Clubs and Committees are given below:</h1>
              <ol className="list-decimal list-inside space-y-3 text-gray-700">
                <li>BOOK CLUBS</li>
                <li>CULTURAL COMMITTEE</li>
                <li>DEBATE CLUB / QUIZ CLUB</li>
                <li>TECH CLUB</li>
                <li>SCIENCE & TECHNOLOGY CLUB</li>
                <li>SPORTS CELL</li>
                <li> ENTREPRENEURSHIP DEVELOPMENT CELL</li>
                <li>ALUMNI RELATIONS CELL</li>
                <li>PLACEMENT CELL</li>
              </ol>
            </div>
            {/* content - end */}
            {/* image - start */}
            <div className="h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-auto xl:w-5/12 select-none">
              <img
                src="/dsmnru2.jpg"
                loading="lazy"
                alt="Photo by Fakurian Design"
                className="h-full w-full object-cover object-center"
              />
            </div>
            {/* image - end */}
          </section>
          <section className="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
            {/* content - start */}
            <div onClick={voiceResponse}>
              <h1 className="mb-8 pt-16 text-4xl font-bold text-black sm:text-5xl md:mb-12 md:text-6xl">
                BOOK CLUBS
              </h1>
              <p className="mb-8 leading-relaxed text-gray-700 md:mb-12 lg:w-5/5 xl:text-lg">
                A book club is like a friendly gathering where people who love to read come together to talk about books. It's a group of friends or acquaintances who decide to read the same book or follow a list of agreed-upon books. This shared reading experience allows everyone in the club to explore the same story or ideas at the same time. Book clubs can be casual, with friends meeting whenever it suits them, or more organized, having regular meetings at a set place. The chosen books might have a common theme, genre, or author, providing a focus for discussions. Members join the club ready to share their thoughts, questions and insights about the book they've all been reading. These clubs offer a social space for book lovers to connect, discuss and discover new books together. They provide a chance for individuals to broaden their reading interests and find books they might not have picked up on their own. Book clubs can be motivating, encouraging members to keep up with their reading habit. Whether meeting in person or online, book clubs create a feeling of community centered around the joy of reading. They give people a chance to have interesting conversations, learn from each other and enjoy the shared experience of exploring different books. In simple terms, book clubs are a fun way for people to share their love of reading and enjoy discovering new stories together.
              </p>
            </div>
            {/* content - end */}
          </section>
          <section className="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
            {/* content - start */}
            <div onClick={voiceResponse}>
              <h1 className="mb-8 text-4xl font-bold text-black sm:text-5xl md:mb-12 md:text-6xl">
                CULTURAL COMMITTEE
              </h1>
              <p className="mb-8 leading-relaxed text-gray-700 md:mb-12 lg:w-5/5 xl:text-lg">
                The Cultural Committee holds a significant role in our university, responsible for organizing and promoting a variety of cultural events both within and outside the campus. The committee serves as a platform to unearth the hidden talents of our diverse student body, especially in performing arts. Throughout the academic year, the committee meticulously plans and schedules a range of cultural events, fostering an environment that encourages active student participation. These events not only showcase the rich cultural diversity within our university but also provide a stage for students to express themselves through various artistic forms such as music, dance, drama and more. The Cultural Committee's efforts contribute to creating a vibrant and inclusive cultural atmosphere, enhancing the overall university experience. Through its initiatives, the committee aims to celebrate and appreciate the cultural richness of our student community, fostering a sense of unity and camaraderie among the students while promoting the arts as an integral part of university life.
              </p>
            </div>
            {/* content - end */}
          </section>
          <section className="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
            {/* content - start */}
            <div onClick={voiceResponse}>
              <h1 className="mb-8 text-4xl font-bold text-black sm:text-5xl md:mb-12 md:text-6xl">
                DEBATE CLUB / QUIZ CLUB
              </h1>
              <p className="mb-8 leading-relaxed text-gray-700 md:mb-12 lg:w-5/5 xl:text-lg">
                Debate clubs are fantastic places where students become thinking superheroes. They help students learn to think really carefully about ideas, just like detectives solving mysteries. In debate clubs, students practice looking at information from different sides, finding mistakes in thinking and building strong arguments. It's like becoming a wizard with words, using them to make powerful points. Now, let's talk about quiz clubs – they're like brain adventures! These clubs make learning super fun by organizing quizzes on cool topics. It's a bit like a game night where students get to discover how much they know and learn new things. Quiz clubs create a friendly competition where everyone can share what they know, making everyone feel like a winner! The best part is that both debate and quiz clubs are all about talking and sharing. They're like big chats with friends, where students can express their thoughts and understand different points of view. Being in these clubs is like stepping into a world of thinking and discovering, turning students into thinking champions. It's not just about winning; it's about exploring, learning and having a great time along the way!
              </p>
            </div>
            {/* content - end */}
          </section>
          <section className="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
            {/* content - start */}
            <div onClick={voiceResponse}>
              <h1 className="mb-8 text-4xl font-bold text-black sm:text-5xl md:mb-12 md:text-6xl">
                TECH CLUB
              </h1>
              <p className="mb-8 leading-relaxed text-gray-700 md:mb-12 lg:w-5/5 xl:text-lg">
                The TECH CLUB is an exciting space for students to explore the wonders of technology, design and engineering. It's like a fun playground where students not only enjoy themselves but also grow personally and become leaders in the world of technology. The main goal of the TECH CLUB is to keep students updated on the latest tech developments happening every day. It's like having a backstage pass to the coolest tech shows, where students get to see, touch and understand the magic behind the gadgets we use in our daily lives. In the TECH CLUB, students become tech-savvy superheroes, ready to take on any tech challenge. It's not just about learning; it's about unleashing creativity and exploring the incredible possibilities that technology offers. Think of the TECH CLUB as a place where curiosity meets innovation. It's a space where every student can turn their ideas into reality and embark on an exciting journey into the ever-evolving world of technology. So, buckle up and get ready for an adventure in the TECH CLUB – where tech dreams come to life!
              </p>
            </div>
            {/* content - end */}
          </section>
          <section className="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
            {/* content - start */}
            <div onClick={voiceResponse}>
              <h1 className="mb-8 text-4xl font-bold text-black sm:text-5xl md:mb-12 md:text-6xl">
                SCIENCE & TECHNOLOGY CLUB
              </h1>
              <p className="mb-8 leading-relaxed text-gray-700 md:mb-12 lg:w-5/5 xl:text-lg">
                The Science and Technology Club, a dynamic collaboration between the Faculty of Science & Technology and the Faculty of Computer & Information Technology, serves as a vibrant platform for students eager to dive into the realms of innovation and discovery. With a guiding philosophy that "everything is theoretically impossible until it is done," the club welcomes bright and imaginative minds ready to make a positive impact on the world. At the Science and Technology Club, we nurture an environment that encourages aspiring engineers to thrive, emphasizing three key principles: IMAGINATION, INVENTION and INSPIRATION. Our mission is to go beyond theoretical knowledge, actively engaging students in national and international conferences, seminars and workshops. This exposure provides them with the technical insights necessary for self-directed learning, preparing them for the challenges of the future. The club distinguishes itself by offering comprehensive training in research methodology, research journals and research paper writing. Students not only gain theoretical knowledge but are also encouraged to participate in hands-on projects and event planning, fostering creativity and practical exploration. Through these activities, they develop a holistic understanding of their field and the skills needed to make a meaningful impact. The Science and Technology Club is more than just an academic space; it is a community that values personal and professional development. Members have access to mentorship, valuable advice and a supportive network of like-minded individuals. Together, we aim to propel the growth and passion of our students, guiding them towards successful futures in the ever-evolving fields of science and technology. Join us on this exciting journey of exploration, innovation and collaboration as we work together to shape a brighter tomorrow.
              </p>
            </div>
            {/* content - end */}
          </section>
          <section className="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
            {/* content - start */}
            <div onClick={voiceResponse}>
              <h1 className="mb-8 text-4xl font-bold text-black sm:text-5xl md:mb-12 md:text-6xl">
                SPORTS CELL
              </h1>
              <p className="mb-8 leading-relaxed text-gray-700 md:mb-12 lg:w-5/5 xl:text-lg">
                The Sports Cell is here to help students stay fit and strong by encouraging them to participate in both physical and mental exercises. The main aim is to promote a healthy lifestyle and teach important life skills like teamwork, leadership and problem-solving through sports. The Sports Cell wants students to not only be physically active but also develop a sportsmanship attitude, which means playing fair, respecting opponents and enjoying the game. By getting involved in sports, students can learn important lessons that go beyond the playground and apply these principles in their daily lives. The cell wants to create an environment where students not only focus on academics but also enjoy playing sports, contributing to their overall growth and well-being. Through various sports activities, the Sports Cell hopes to instill a sense of discipline, teamwork and leadership, making students not just physically fit but also mentally strong and resilient. It's all about having fun, staying active and learning important skills that will benefit students in their studies and beyond.
              </p>
            </div>
            {/* content - end */}
          </section>
          <section className="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
            {/* content - start */}
            <div onClick={voiceResponse}>
              <h1 className="mb-8 text-4xl font-bold text-black sm:text-5xl md:mb-12 md:text-6xl">
                ENTREPRENEURSHIP DEVELOPMENT CELL
              </h1>
              <p className="mb-8 leading-relaxed text-gray-700 md:mb-12 lg:w-5/5 xl:text-lg">
                The Entrepreneurship Development Cell has been set up to encourage students to become entrepreneurs. Its main goal is to teach students about entrepreneurship and help them develop advanced skills like creative thinking and innovation. The cell wants to inspire students to take initiatives and be successful in a challenging world. Instead of just seeking jobs, the cell aims to empower students to create job opportunities. It wants to create a culture of entrepreneurship among young people, giving them the skills and confidence needed for the future. The cell is also responsible for helping students access government and non-government support and schemes. It wants to make sure students know about the resources available to them for their entrepreneurial projects. Through various programs, the Entrepreneurship Development Cell wants to create an environment that supports students in exploring their entrepreneurial potential. The goal is to encourage innovation, self-reliance and proactive problem-solving among students. In the end, the cell hopes to contribute to a generation of students who are not just looking for jobs but are also leaders in the ever-changing business world.
              </p>
            </div>
            {/* content - end */}
          </section>
          <section className="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
            {/* content - start */}
            <div onClick={voiceResponse}>
              <h1 className="mb-8 text-4xl font-bold text-black sm:text-5xl md:mb-12 md:text-6xl">
                ALUMNI RELATIONS CELL
              </h1>
              <p className="mb-8 leading-relaxed text-gray-700 md:mb-12 lg:w-5/5 xl:text-lg">
                The Alumni Cell serves as a vital link between the faculty/department and its former students. Its primary responsibility is to nurture and uphold strong connections with alumni by organizing various interaction programs and events. These initiatives aim to facilitate meaningful engagement between the current students, faculty and the esteemed alumni of the university. By fostering a sense of community and companionship, the Alumni Cell contributes to the overall development and success of the university. Through these interactions, current students can benefit from the experiences and insights of alumni, gaining valuable guidance for their academic and professional journeys. The cell also works towards creating a platform where alumni can stay connected with the faculty/department, share their accomplishments and contribute to the growth and development of the university. In essence, the Alumni Cell plays an essential role in building a vibrant and supportive network that bridges the past and present, creating a collaborative environment for the entire university community.
              </p>
            </div>
            {/* content - end */}
          </section>
          <section className="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
            {/* content - start */}
            <div onClick={voiceResponse}>
              <h1 className="mb-8 text-4xl font-bold text-black sm:text-5xl md:mb-12 md:text-6xl">
                PLACEMENT CELL
              </h1>
              <p className="mb-8 leading-relaxed text-gray-700 md:mb-12 lg:w-5/5 xl:text-lg">
                The Placement Cell is a crucial link between our students and potential employers. Its main job is to help arrange meetings between our students and industry representatives, ensuring a smooth process for internships and job placements. The cell strives to bridge the gap between what the industry needs and what our university produces. It actively organizes various activities and events to equip students with the necessary skills for successful job placement after their academics. Through Institute-Industry interactions, the Placement Cell ensures that our students have ample opportunities to connect with employers. In simple terms, the cell acts as a facilitator, bringing together students and industry professionals and preparing students for the recruitment process. Its goal is to enhance the employability of our students by providing valuable support and creating a platform for meaningful connections with potential employers.
              </p>
            </div>
            {/* content - end */}
          </section>
        </div>
      </div>
      {/* hero - end */}
    </>
  )
}

export default Dsmnru;