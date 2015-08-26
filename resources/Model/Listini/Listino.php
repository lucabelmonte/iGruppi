<?php

/**
 * This is the Factory to manage the LISTINO
 * 
 * @author gullo
 */
class Model_Listini_Listino extends Model_AF_AbstractCoR
{
    /**
     * set OrdineFactory as factory class
     * @return void
     */
    public function __construct() {
        $this->factoryClass = new Model_AF_ListinoFactory();
    }

    /**
     * Return VALIDITA part of Group
     * For PUB get data from Master, others from MyGROUP
     * @return Model_Builder_Parts_Validita
     */
    public function getValidita()
    {
        if($this->isPubblico()) {
            return $this->getMasterGroup()->getValidita();
        } else {
            return $this->getMyGroup()->getValidita();
        }
    }
    
    /**
     * Return VISIBILE part of Group
     * For PUB get data from Master, others from MyGROUP
     * @return Model_Builder_Parts_FlagSN
     */
    public function getVisibile()
    {
        if($this->isPubblico()) {
            return $this->getMasterGroup()->getVisibile();
        } else {
            return $this->getMyGroup()->getVisibile();
        }
    }
    
/*  **************************************************************************
 *  PERMISSION
 */    
    
    public function canManageListino()
    {
        return $this->isReferenteProduttore();
    }
    
    public function canManageCondivisione()
    {
        return $this->isOwner();
    }
    
    public function canEditName()
    {
        return $this->isOwner();   
    }
    
    public function canSetValidita()
    {
        return $this->isOwner();   
    }
    
    public function canUpdatePrezzi()
    {
        return $this->isOwner();
    }
    
    public function canSetDataListino()
    {
        return $this->isOwner();   
    }
    
    
/*  **************************************************************************
 *  MISC
 *****************************************************************************/    

    private function isReferenteProduttore()
    {
        return Zend_Registry::get("permsProduttori")->is_Referente($this->getIdProduttore());
    }
    
    private function isOwner()
    {
        return ($this->getMyIdGroup() == $this->getMasterGroup()->getIdGroup());
    }
    
    
}
