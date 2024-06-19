import React from 'react';
import { Link } from 'react-router-dom';
const fullText = "Bonjour, site e-commerce. L'objectif principale de cette mission Bonjour, Nous sommes à la recherche d'un développeur qualifié pour effectuer une modification spécifique sur notre site e-commerce. L'objectif principale de cette mission est de remplacer un mot par un autre";
const truncatedText = fullText.split(' ').slice(0, 27).join(' ') + '...';

const ProjectCard = () => {
    return (
        <Link to={"/Find_Job/Detaille"} >
            <div className="mb-4  bg-white shadow-lg   rounded-2xl  p-6" id="project-420451" data-controller="project-preview" data-project-preview-url-value="/projects/420451-changement-de-nom-sur-un-flux-de-donnees-site-e-commerce-prestashop/project_preview" data-action="mouseleave->project-preview#showSummary">
                <div className="flex ">
                    <div className="hidden lg:block mr-4">
                        <div className="bg-gray-100 rounded-lg p-4">
                            <img width="30" height="30" className="" src="data:image/svg+xml,%3Csvg%20clip-rule%3D%22evenodd%22%20fill-rule%3D%22evenodd%22%20stroke-linejoin%3D%22round%22%20stroke-miterlimit%3D%221.41421%22%20viewBox%3D%220%200%2055%2055%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22m401.99%20796c-1.105%200-2.002.896-2.002%202.001%200%201.104.897%201.999%202.002%201.999s2.002-.895%202.002-1.999c0-1.105-.897-2.001-2.002-2.001m-13.014%200c-1.105%200-2.002.896-2.002%202.001%200%201.104.897%201.999%202.002%201.999%201.106%200%202.002-.895%202.002-1.999%200-1.105-.896-2.001-2.002-2.001m14.139-8h-1.994l1.576-12.598%202.133-.255zm-4.012%200h-2.074l.521-11.98%203.099-.372zm-4.078%200h-2.088l-.517-11.365%203.116-.373zm-6.181%200-1.537-10.752%203.12-.374.504%2011.126zm-4.09%200-2.539-10.142%203.103-.372%201.504%2010.514zm27.215-19.242c-.133-.535-.677-.863-1.213-.728l-4.004%201c-.39.098-.684.418-.746.815l-.507%203.208-24.65%202.955c-.019.002-.035.015-.054.019-.024.004-.045-.003-.069.003-.056.015-.099.049-.15.072-.056.024-.11.043-.16.076-.072.048-.127.109-.184.173-.027.031-.064.048-.088.083-.006.007-.006.017-.009.026-.055.084-.086.178-.114.273-.01.036-.031.066-.037.101-.021.132-.021.27.014.409l3.004%2012%201%204c.008.029.025.052.035.079.016.048.037.092.06.137.034.065.075.125.122.181.03.035.059.069.093.099.06.053.125.094.195.131.036.02.068.043.107.058.113.045.233.072.358.072h21.022c.553%200%201-.447%201-.999%200-.553-.447-1.001-1-1.001h-20.24l-.5-2h18.738c.123%200%20.242-.022.352-.064.044-.017.08-.048.121-.071.061-.033.126-.062.178-.107.039-.034.066-.08.1-.12.042-.05.089-.094.122-.152.029-.051.039-.113.059-.171.019-.052.046-.101.056-.159l.004-.021v-.002-.008l2.897-18.315%203.36-.839c.536-.134.862-.677.728-1.213%22%20fill%3D%22%236c6c6c%22%20fill-rule%3D%22nonzero%22%20transform%3D%22matrix%281.71219%200%200%201.71219%20-650.501%20-1314.86%29%22%2F%3E%3C%2Fsvg%3E" alt="project icon" />
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="mb-0">
                            <h3 className="mb-0 inline-block text-xl">
                                <a className="no-underline text-blue-800 font-semibold " href="/projects/420451-changement-de-nom-sur-un-flux-de-donnees-site-e-commerce-prestashop">
                                    Changement de nom sur un flux de données site e-commerce (prestashop)
                                </a>
                            </h3>
                        </div>
                        <div className="  mr-4 "></div>
                        <p className="text-neutral-600 font-medium mb-2 text-[13px] mt-1 flex flex-wrap">
                            <span className=" flex items-center">
                                <svg className="svg-inline--fa fa-circle fa-w-16 p-[1.5px] m-0.5 text-2xs text-green" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                                    <path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path>
                                </svg>
                                &nbsp;Ouvert
                            </span>

                            <span className="px-1.5">·</span>
                            <span className="whitespace-nowrap" data-controller="tooltip" title="" data-bs-original-title="Budget indicatif">Moins de 500 €</span>
                            <span className="px-1.5">·</span>
                            <span className="whitespace-nowrap" data-controller="tooltip" title="" data-bs-original-title="Nombre d'offres">10 offres</span>
                            <span className="px-1.5">·</span>
                            <span className="">87 vues</span>
                            <span className="px-1.5">·</span>
                            <span className="whitespace-nowrap">5 interactions</span>
                        </p>
                        <div className="mt-2  text-black " data-project-preview-target="summary">
                            {truncatedText}
                        </div>
                        <div className="mt-2 break-words hidden " data-project-preview-target="preview"></div>
                        <div className="mt-2 font-bold text-[14px]">
                            <a className="text-neutral-600  no-underline" href="/projects/c/web/sc/developpement-specifique">Développement spécifique</a>
                            <span className="px-1.5">·</span>
                            <a className="text-neutral-600  no-underline" href="/projects/c/e-commerce/sc/site-e-commerce">Site E-commerce</a>
                            <span className="px-1.5">·</span>
                            <a className="text-neutral-600  no-underline" href="/projects/c/e-commerce/sc/prestashop">Prestashop</a>
                            <span className="px-1.5">·</span>
                            <a className="text-neutral-600  no-underline" href="/projects/c/web/sc/experience-utilisateur">Experience utilisateur</a>
                            <span className="px-1.5">·</span>
                            <a className="text-neutral-600  no-underline" href="/projects/c/systemes-d-entreprise/sc/test-recette-qualification">Test, recette, qualification</a>
                        </div>
                        <div className="md:flex items-center justify-between mt-2">
                            <div className="text-muted text-ms">
                                <span>Il y a  1 heure</span>
                                <span> par <span controller="tooltip" >Client #245030</span>

                                </span>
                            </div>
                            <div className="mt-3 md:mt-0"></div>
                        </div>
                    </div>
                </div>
            </div>
        </Link >


    );
}

export default ProjectCard;