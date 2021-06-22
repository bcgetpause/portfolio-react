import tas from "../../ressources/tas.jpg"
import dgac from "../../ressources/DGAC_DSNA.svg.png"
import airbus from "../../ressources/airbus.jpg"
import orange from "../../ressources/Orange.jpg"
import thales from "../../ressources/thales.jpg"
import ausy from "../../ressources/ausy.png"

export const LST_EXPERIENCES = [
    {
        date: "05/2020-Aujourd'hui",
        client: "Ausy",
        poste: "Ingénieur d'étude et développement",
        logo: ausy,
        resume: "Développement d’un outil Web de gestion de projets et de compétence en interne",
        descriptif: 
        <ul>
            <li>- Gestion d'une équipe de 4 personnes</li>
            <li>- Création de l'environnement Docker pour tout héberger</li>
            <li>- Création de la partie serveur</li>
            <li>- Création de la partie IHM Web</li>
        </ul>,
        environnement: "Java 11, Spring boot, Angular 11, Eclipse, STS, GIT, Maven, JIRA, WeKan, Docker"
    },
    {
        date: "07/2020-02/2021",
        client: "Orange",
        poste: "Ingénieur d'étude et développement",
        logo: orange,
        resume: "Refonte de l’ancienne IHM d'une application en Wicket vers Angular",
        descriptif: 
        <ul>
            <li>- Refonte et amélioration de la partie IHM à partir du visuel existant et d'échanges avec le client</li>
            <li>- Création des services REST associés à la nouvelle IHM</li>
        </ul>,
        environnement: "Java 8, Eclipse, STS, GIT, JIRA"
    },
    {
        date: "02/2020-05/2020",
        client: "Airbus",
        poste: "Ingénieur d'étude et développement",
        logo: airbus,
        resume: "Support sur un projet de simulation",
        descriptif: "",
        environnement: "Java 6, Eclipse, GIT, JIRA"
    },
    {
        date: "10/2017-01/2020",
        client: "Thales Landing System",
        poste: "Ingénieur d'étude et développement",
        logo: thales,
        resume: "Analyse, conception, développement et rédaction de spécification sur un projet de gestion du traffique aérien",
        descriptif: 
        <ul>
            <li>- Gestion d'une équipe de 6 personnes</li>
            <li>- Rédaction et relecture d'exigences et de tests fonctionnels</li>
            <li>- Analyse, conception et développement d'évolution</li>
            <li>- Analyse et correction de d'anomalies</li>
        </ul>,
        environnement: "Java 8, Eclipse, GIT, Clearquest, Gradle, Maven, NetBeans, Java FX, JIRA"
    },
    {
        date: "07/2015-10/2017",
        client: "Airbus",
        poste: "Responsable technique / Ingénieur d'étude et développement sur des projets embarqués",
        logo: airbus,
        resume: "Analyse, chiffrage, developpement et qualification d'outils",
        descriptif: 
        <ul>
            <li>- Analyse et chiffrage de corrections et d'évolution</li>
            <li>- Ecriture et passage de tests fonctionnels</li>
            <li>- Mise en place d'un process de gestion de configuration</li>
        </ul>,
        environnement: "XSL, XML, Java 6, Ant, Eclipse, SVN, Mantis; GIT"
    },
    {
        date: "05/2014-06/2015",
        client: "Orange",
        poste: "Ingénieur d'étude et développement",
        logo: orange,
        resume: "Refonte de l'outil permettant la gestion des animations du catalogue de vidéo à la demande",
        descriptif: 
        <ul>
            <li>- Développement front-end</li>
            <li>- Développement back-end</li>
        </ul>,
        environnement: "Windows 7, Eclipse, MySQL, GIT, SmartGWT, Java 2EE, JBoss 6, Hibernate 4"
    },
    {
        date: "02/2014-05/2014",
        client: "Airbus",
        poste: "Ingénieur d'étude et développement",
        logo: airbus,
        resume: "Participation sur un projet permettant de gérer des filtres de vol",
        descriptif: "Développement d'évolutions et correction d'anomalies",
        environnement: "Windows 7, Eclipse, Java, SVN, Mantis"
    },
    {
        date: "09/2013-01/2014",
        client: "Airbus Military",
        poste: "Ingénieur d'étude et développement",
        logo: airbus,
        resume: "Reprise d'une application de maintenance de l'A400M",
        descriptif: 
        <ul>
            <li>- Analyse, conception et chiffrage d"évolutions</li>
            <li>- Développement</li>
            <li>- Mise en place et éxécution des plans de tests</li>
        </ul>,
        environnement: "Windows XP, Delphi 7"
    },
    {
        date: "09/2010-01/2013",
        client: "DTI/DGAC",
        poste: "Ingénieur d'étude et développement",
        logo: dgac,
        resume: <ul>
                    <li> - Développement sur une application de supervision et de maintenance</li>
                    <li> - Développement sur une application de GMAO</li>
                </ul>,
        descriptif: 
        <ul>
            <li>- Analyse et Développement d'évolutions</li>
            <li>- Analyse et correction d'anomalies</li>
            <li>- Rédaction et déroulement des tests</li>
        </ul>,
        environnement: "Windows XP/7, Windev 17, Firebird"
    },
    {
        date: "09/2008-08/2010",
        client: "Thales Alenia Space",
        poste: "Analyste programmeur",
        logo: tas,
        resume: "Au sein du département banc de tests des charges utiles, recherche et mise en place d'une supervision des équipements du service.",
        descriptif:
            <ul>
                <li>- Recherche et mise en place d'une application de supervision du parc de machines linux et  des bancs de tests administrés par le service 
                     (50 postes et instruments) sur différents sites nationaux et internationaux.
                </li> 
                <ul>
                    <li>* Définition des besoins client</li>
                    <li>* Etude comparative des logiciels existants</li>
                    <li>* Déploiement de la solution retenue</li>
                    <li>* Développement de plugins additionnels en Perl</li>
                    <li>* Rédaction de documents tels que spécifications et manuels d'installation</li>
                </ul>
                 <li>- En parallèle, développement d'une application autonome reprenant les mêmes fonctionnalités de 
                     supervision (séquenceur et IHM) pour superviser des machines et bancs de tests partant en export
                </li>
            </ul>, 
        environnement: "Windows XP, Red Hat5, Java, Perl"
    },
]