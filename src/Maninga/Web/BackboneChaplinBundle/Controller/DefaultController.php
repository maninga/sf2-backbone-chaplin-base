<?php

// Part of the Dunglas' Symfony 2 / Chaplin.js tutorial
// http://dunglas.fr/2012/12/utiliser-chaplin-js-et-backbone-js-avec-symfony-2-installation-et-configuration/

namespace Maninga\Web\BackboneChaplinBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;

class DefaultController extends Controller
{
    /**
     * @Route("/")
     * @Template()
     */
    public function indexAction()
    {
        return array();
    }
}
