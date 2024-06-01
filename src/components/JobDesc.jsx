import React, { useState } from 'react';
import star from '../icons/star.png';
import userpr from '../icons/userpr.jpg';
import location from '../icons/location.png';
import message from '../icons/message.png';
import order from '../icons/order.png'
import cam from '../icons/cam.png'

function JobDesc() {
  const [evaluation, setEvaluation] = useState(5);
  const [ordersCompleted, setOrdersCompleted] = useState(30);
  const [name, setName] = useState('Mehdi B');
  const [country, setCountry] = useState('Morocco');
  const [languages, setLanguages] = useState(['Frensh', 'Arabic', 'English']);
  const [description, setDescription] = useState("As a Software FullStack developer with 5+ professional experience (mainly Java/JEE Angular/React), i can ensure high quality web Development/bug fixing/etc. I can work with language like Java, JavaScript and Typescript . I can work with frameworks like Spring, Hibernate, Angular and React and so on. Always ready to learn new things.");
  const [isExpanded, setIsExpanded] = useState(false);
  const skills = ['J2EE','Scrum development','Web development', 'Spring Boot', 'Hibernate'];
  const [gig, setGig] = useState("Je suis un ingénieur logiciel hautement professionnel avec plus de 4 ans d'expérience dans le développement et la conception d'applications de niveau entreprise. Je propose des services complets, notamment le développement d'applications d'entreprise, la création d'API REST avec Spring Boot et les technologies associées telles que Spring JPA, Hibernate, Angular, Thymeleaf et Swagger. Je suis également compétent dans la sécurité avec Spring Boot, couvrant les méthodes Basic, JWT et OAuth2, ainsi que dans la connexion à diverses bases de données telles qu'Oracle, Postgres, MySQL et SQL Server. Je propose un développement full-stack, couvrant à la fois le front-end et le back-end, ainsi qu'un support pour les systèmes existants et une expertise en méthodologies Agile et cycles de tests. De plus, je suis spécialisé dans la conception et le développement d'architectures de microservices. N'hésitez pas à me contacter pour discuter de vos besoins avant de passer commande.");
  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const [isExpandedd, setIsExpandedd] = useState(false);

  const toggleReadMoree = () => {
    setIsExpandedd(!isExpandedd);
  };
  return (
    <div className="ml-14 max-w-[700px] font-semibold font-ma mt-16">
      <h1 className="text-3xl">
        I will create rest API, website in java, spring boot, angular as full stack developer
      </h1>
      <div className="flex mt-5">
        <img src={star} alt="" className="size-5 mr-1" />
        <h1 className="mr-1">{evaluation}.0</h1>
        <h1 className="text-gray-500">({ordersCompleted})</h1>
      </div>
      <div className="flex mt-6">
        <img src={userpr} className="border rounded-full size-32 mr-4" />
        <div>
          <h1 className="text-2xl font-semibold">{name}</h1>
          <div className="flex">
            <img src={location} alt="" className="size-3.5 mt-0.5  mr-2" />
            <h1 className="text-gray-700 text-sm">{country}</h1>
            <img src={message} alt="" className="size-3.5 mt-0.5 ml-2" />
            <p className='ml-2 text-sm'>
            I Speak: {languages.map((langue, index) => (
              <span className='text-gray-700 text-' key={index}>{langue}{index < languages.length - 1 ? ', ' : ''}</span>
            ))}
          </p>
          <img src={order} alt='' className='size-3.5 mt-0.5 ml-2 mr-2'/>
          <h1 className='text-sm text-gray-700'>{ordersCompleted} orders completed</h1>
          </div>
          <div className='flex'>
          <div className='border rounded-md w-28 cursor-pointer h-9 mt-2 text-gray-700 text-base flex items-center justify-center mr-4 hover:bg-gray-200'>Contact me</div>
          <div className='border rounded-md w-48 cursor-pointer h-9 mt-2 text-gray-700 text-base flex items-center justify-center hover:bg-gray-200'><img className='size-5 mr-2' src={cam}/>Book a consultation</div>
          </div>
        </div>
      </div>
      <div className="mt-8">
      <h1 className='text-base font-normal'>
        {isExpanded ? description : `${description.substring(0, 240)}...`}
      </h1>
      <button onClick={toggleReadMore} className="text-black mt-1 font-bold border-b border-black">
        {isExpanded ? 'Read Less' : 'Read More'}
      </button>
    </div>
    <div className='flex mt-8'>
      {skills.map((skill, index)=> (
        <p className='mr-4 border rounded-full font-normal text-black text-base bg-gray-200 py-1 px-2' key={index}>{skill}</p>
      ))}
      </div>
      <div className='mt-14'>
        <span className='text-lg font-bold'>About this Gig</span>
        <p className='mt-6 text-base font-normal'>
          {isExpandedd ? gig : `${gig.substring(0, 360)}...`}
          </p>
          <button onClick={toggleReadMoree} className="text-black mt-1 font-bold border-b border-black">
        {isExpandedd ? 'Read Less' : 'Read More'}
        </button>
      </div>
    </div>
  );
}

export default JobDesc;
