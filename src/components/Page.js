import React from 'react';
import './../styles/Page.css';
import Sary from "./../assets/leva1.jpg";

const Page = () => {
    return (
        <div>
            <div>
                <div className="gauche">
                <br/><br/>
                    <p> 
                        <img src={Sary} alt=" Voiture" width="200" height="200"  id="image"/>
                    </p>
                    <p className="info">
                        <h3>VALISOA15</h3>
                    </p>
                    <br></br><br></br>
                    <p> 
                    <label id="formation"> Valisoa Christianot Rakotonirainy</label><br/><br/>
                    <label id="adresse">Adresse :Tsarahonenana Andraisoro</label><br/><br/>
                    <label id="mail">Email     : lecourageuxleva@gmail.com</label><br/><br/>
                    <label id="Ct">Contact :034 04 637 21</label><br/><br/>
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                    <label id="ft">Copyright 2021</label><br/><br/>


                    </p>
                </div>
            </div>

            <div className="io">
                
                 <br/><br/>
                <p className="id1">
                 <p className="forms">
                     <br></br>
                     <p className="form1">
                 <label className="titre1">FORMATIONS  </label><br/><br/>
                 <label className="contenu">2015: Brevet d'Etude du Premier Cycle</label><br/>
                 <label className="contenu">2018: Baccalaureat de l'enseignement  série D</label><br/>
                 <label className="contenu">2021: 3eme Année en Informatique de gestion ,génie Logiciel et Intelligence Artificielle</label><br/>
                    </p>
                 </p>

                 <p className="forms">
                     <br></br>
                     <p className="form1">
                 <label className="titre1">COMPETENCES  </label><br/><br/>
                 <label className="contenu">* Comptabilité Générale </label><br/>
                 <label className="contenu">* Excellent en informatique bureautique : Word ,Excel, Power point  </label><br/>
                 <label className="contenu">* Connaissance des langages de programmation : Java,Pascal,Html,css,php </label><br/>
                 <label className="contenu">* Technologie en informatique :Framework React ,Flutter</label><br/>
                      </p>
                 </p>

                <p className="forms">
                    <br></br>
                     <p className="form1">   
                        <label className="titre1">EXPERIENCES PROFESSIONNEL </label><br/><br/>
                        <label className="contenu">* Réalisaton d'un site web :Guide de Voyage dans la grande Ile (en Groupe)</label><br></br>
                        <label className="contenu">* Réalisaton application web :Gestion Transport </label><br></br>
                    </p>
                </p>

                 <p className="forms">
                     <p className="form1">
                    <label className="titre1">LANGUES</label><br/><br/>
                        <table border ="1" width="500px" >
                            <tr className="contenu">Malagasy :<td>Langue maternelle</td></tr>
                            <tr className="contenu">Français :<td>Excellent</td></tr>
                            <tr className="contenu">Anglais :<td>Moyen</td></tr>
                            <tr className="contenu">Allemand :<td>Notion</td></tr>


                        </table>
                    </p>
                 </p>

                 <p className="formss">
                    
                     <p className="form1">
                     <label className="titre1">LOISIRS</label><br/>
                     <label className="contenu"> Football ,Basketball </label>
                 
                     </p>
                     </p>
                 </p>
            </div>

            
  
        
        </div>


    );
};

export default Page;
