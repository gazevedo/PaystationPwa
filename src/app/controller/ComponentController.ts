export class ComponentController{ 
    showCommandButton(show:boolean){    
        if(show){
            document.getElementById('div_buttons').style.display = "inline";
        }
        else{
            document.getElementById('div_buttons').style.display = "none";
        }
    }

    showCommandButtonCancel(show:boolean){    
        if(show){
            document.getElementById('buttonCancel').style.display = "inline";
        }
        else{
            document.getElementById('buttonCancel').style.display = "none";
        }
    }

    showCommandButtonConfirm(show:boolean){    
        if(show){
            document.getElementById('buttonConfirm').style.display = "inline";
        }
        else{
            document.getElementById('buttonConfirm').style.display = "none";
        }
    }
}