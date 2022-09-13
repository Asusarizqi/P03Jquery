
        $(document).ready(function(){
            $('.namanya').click(function(){
                let isi = $(this).text();

                let isi2 = prompt('Ubah dengan apa?', isi);
                if(!isi2) return;

                $(this).text(isi2);
            })

            $('.kota').click(function(){
                let city = $(this).text();

                let city2 = prompt('Ubah dengan apa?', city);
                if(!city2) return;

                $(this).text(city2);
            })

            $('.hapus').click(function(){
                let yakin = confirm('Yakin mau dihapus?');
                if(!yakin) return;
                
                let id = $(this).prop('id');

                let rid = id.split('__');
                let baris_ke = rid[1];

                $('#row__'+baris_ke).slideUp()
            })
        })