import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
//datatag
export class DataInfoService {

    constructor() { }

    getDataInfo = [

        {
            title: "PrepaProfs",
            desc: "plateforme d'enseignement à distance",
            img: "https://www.gpgcheckout.com/uploads/logosite/logo_PrepaProfs_63d0453340a90.png"
        },
        {
            title: "AirySat",
            desc: "vente matériel électronique et abonnement tv",
            img: "https://www.gpgcheckout.com/uploads/logosite/logo_AirySat_6385f6967aefe.png"
        },
        {
            title: "bambinosit",
            desc: "La premiére plateforme de babysitting en Tunisie ; Bambinosit met en relation les parents avec les professionnels de l'enfance",
            img: "https://www.gpgcheckout.com/uploads/logosite/logo_bambinosit_637b814e79fd5.png"
        },
        {
            title: "Bessis",
            desc: "Vente en ligne pour des vêtement du sport",
            img: "https://www.gpgcheckout.com/uploads/logosite/logo_Bessis_62f3a7e56db69.png"
        },
        {
            title: "La valeur absolue",
            desc: "Plateforme éducative en ligne",
            img: "https://www.gpgcheckout.com/uploads/logosite/logo_la%20valeur%20absolue_6306bf9f7fade.png"
        },
        {
            title: "WATCHNOW",
            desc: "Plateforme de streaming VOD",
            img: "https://www.gpgcheckout.com/uploads/logosite/WatchNowLogo.png"
        },
        {
            title: "STORE KBQL",
            desc: "site de formation à distance et de vente des normes",
            img: "https://www.gpgcheckout.com/uploads/logosite/logo_STORE%20KBQL_627594aa5cec7.bmp"
        },
        {
            title: "Yassir Express",
            desc: "faites-vous livrer tout ce dont vous avez besoin avec l'application YASSIR Express !Plats, épicerie, viande, fruits u0026 légumes, cosmétique et plein d'autres magasins sont disponibles sur votre application. En quelques clics et sans avoir à vous déplacer, faîtes votre choix, commandez et recevez votre livraison en quelques instants.",
            img: "https://www.gpgcheckout.com/uploads/logosite/logo_Yassir%20Express_61dc21d72303f.png"
        },
        {
            title: "Ramsha",
            desc: "Ramsha.net est une plateforme de paiement en ligne qui vous permet de réaliser :rn-la Recharge de votre ligne téléphonique mobile vers tous les opérateurs en Tunisie par codes de recharger n-Payer votre abonnement IPTV sans se préoccuper des problèmes de sécurité et de confidentialité.",
            img: "https://www.gpgcheckout.com/uploads/logosite/logo_Ramsha_620a636c45b5b.png"
        },
        {
            title: "Tadris.TN",
            desc: "Site éducatif",
            img: "https://www.gpgcheckout.com/uploads/logosite/logo_Tadris.TN_61b35e614bbd3.png"
        },
        {
            title: "Loughat.tn",
            desc: "Formation et Préparation à la Certification en Langues étrangères.",
            img: "https://www.gpgcheckout.com/uploads/logosite/logo_Loughat.tn_6203abe0d7f71.jpeg"
        },
        {
            title: "www.musoundio.com",
            desc: "vente en ligne des samples musicaux.",
            img: "https://www.gpgcheckout.com/uploads/logosite/logo_www.musoundio.com_61e5645dd6bca.jpeg"
        },
        {
            title: "Click Digital Design",
            desc: "la construction et la conception technique de modules architecturaux 3D disponibles en téléchargement.",
            img: "https://www.gpgcheckout.com/uploads/logosite/logo_Click%20Digital%20Design_61c60e3f83c81.jpeg"
        },
        {
            title: "Questway Company",
            desc: "Un site de vente de formation en ligne , ebook , conferences en ligne , Consultation/Coaching en ligne",
            img: "https://www.gpgcheckout.com/uploads/logosite/logo_Questway%20Company_61a7a3b37aa64.png"
        },
        {
            title: "Dar Souad",
            desc: "Site de réservation et payement en ligne",
            img: "https://www.gpgcheckout.com/uploads/logosite/logo_Dar%20Souad_6176c7fb16461.png"
        },
        {
            title: "Houda saied",
            desc: "Ce site nous permet de faire des consultation en ligne (à distance) avec nos patients.",
            img: "https://www.gpgcheckout.com/uploads/logosite/logo_Houda%20saied_6154462ee26ef.jpeg"
        },
        {
            title: "WATCHNOW",
            desc: "Plateforme de streaming VOD",
            img: "WATCHNOW"
        },

    ]

    getDataAcceuil = [
      
        {
            id : 1 ,
            Image : "https://www.gpgcheckout.com/images/icon1.png",
            title : "SILUTION E-COMMERCE",
            desc : "GpgCheckout est une solution de paiement électrique destinée à tout marchand"
        },
        {
            id : 2,
            Image : "https://www.gpgcheckout.com/images/icon2.png",
            title : "SÉCURTÉ ET GARANTIT",
            desc : "GPG garantit un environnement de paiement conforme aux réglementations VISA et MasterCard"
        },
        {
            id : 3 ,
            Image : "https://www.gpgcheckout.com/images/icon4.png",
            title : "Kit de paiemen",
            desc : "GpgCheckout est une solution de paiement électronique gratuite et très simple à manipuler"
        },
        {
            id : 4,
            Image : "https://www.gpgcheckout.com/images/icon5.png",
            title : "CYBERACHETEURS",
            desc : "GPG permet anx consommateurs d'avoir un espace spécifique pour pouvoir suivre tout les transaction"
        }
    ]

    getDataAcceuilSous = [
        {
            title : 'A PROPOS DE NOUS',
            desc : 'Global Payement Gateway est le premier prestataire de services paiements certifié PCI DSS de Visa et MasterCard en Afrique et au Moyen orient.' 
        },
        {
            title : 'NEWS',
            desc : "Venez découvrir nos nouveaux partenaires et bénéficiez d'une panoplie de produit et de service" 
        }
    ] 


    

}
