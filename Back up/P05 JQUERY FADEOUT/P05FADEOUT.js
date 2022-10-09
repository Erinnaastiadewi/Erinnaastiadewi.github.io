$(document).ready(function(){
    $('.data').click(function(){
        let isi = $(this).text();
        let tid = $(this).prop('id');
        let rid = tid.split('_');
        let id_ea = rid[1];
        let nama = $('#nama_'+id_ea).text();

        if(isi=='Delete'){
            let konfirmasi = confirm(`Sudah yakin di hapus ${nama}?`);
            if(!konfirmasi) return;

            $('#ea_'+id_ea).fadeOut();
        }else{
            alert("Anda mengklik kolom yang berisi : " + $(this).html() + "!");
        }
    })
})