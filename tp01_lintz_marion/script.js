
$(document).ready(function () {

    $("#myForm").submit(function (event) {
        let mdp = $("#mdp").val();
        let conf = $("#mdp_conf").val();


        if(mdp !== conf){
            $("#helperConf").text("Le mot de passe et sa confirmation ne sont pas identiques");
            event.preventDefault();
        }
    });

});