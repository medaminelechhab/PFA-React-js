import MicrosoftLogo from "../../assets/SVG/2.svg"
import ProjectCard from "../Composent-final/ProjectCard"

export default function FindJob() {




    return <div className="pt-16 py-8 bg-gray-100   ">
        <div className="bg-blue-300 text-6xl   py-5 font-serif1 text-white  px-48 ">Find a job</div>
        <div className="   flex">

            <div className=" pt-10  max-w-60 ml-48  " >
                <div className="text-2xl font-bold">Filtrer par catégorie</div>
                <div className="text-blue-700  text-[16px] pt-4 font-bold">Toutes Les catégories</div>

                <div className=" space-y-2 px-8  pt-1 font-extralight text-ms" >
                    <div> > Tailleur de pierre</div>
                    <div> > Maçon</div>
                    <div> > Gébs</div>
                    <div> > Menuisier</div>
                    <div> > Plombier</div>
                    <div> > Électricien</div>
                    <div> > Peintre</div>
                    <div> > Couvreur</div>


                </div>

                <div className="">

                    <div className=" pt-8 text-xl font-bold">Trouvez le freelance idéal</div>
                    <div className=" text-justify pt-2 font-sans">Postez votre projet gratuitement pour être mis en relation avec les nombreux freelances disponibles.</div>

                    <button className="bg-green-600 px-4 py-3 text-white rounded-full mt-4 text-lg ">Trouve un freelance</button>


                </div>

            </div>
            <div className="       ml-14 mr-48">
                <div className="flex w-72  mt-2  px-4 py-2 rounded-full border-2 bg-white border-gray-300 shadow-sm items-center font-semibold mr-8">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 192.904 192.904"
                        width="18px"
                        className="fill-black mr-2"
                    >
                        <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
                    </svg>
                    <input
                        type="text"
                        placeholder="Rechercher un project ..."
                        className="w-64    text-gray-400   text-sm"
                    />
                </div>
                <div className="mt-3 overflow-y-auto max-h-[2000px]    custom-scrollbar">
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>




                </div>



            </div>
        </div>




    </div>

}