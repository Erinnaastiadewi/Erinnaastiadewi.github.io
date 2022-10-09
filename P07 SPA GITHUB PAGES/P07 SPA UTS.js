$(document).ready(function(){
    $(".menu").click(function(){
        let id = $(this).prop('id');
        let split = id.split('_');
        let id_opt = split[1];
        
        $(".menu").removeClass('slide');
        $("#ea_"+id_opt).addClass('slide');
        
        $(".spamenu_").slideUp();
        
        $("#jj_1").slideUp();
        $("#jj_2").slideUp();
        $("#jj_3").slideUp();
        $("#jj_4").slideUp();
        $("#jj_"+id_opt).slideToggle();
    });
});