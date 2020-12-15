if (script_auto_random_post == 'on') {
            hasilgetlinkarp = '';
            nextgetarp();
    function nextgetarp() {
        var long_bungabdi_tampan = document.getElementsByTagName('a').length;
        var bungabdi_tampan = new Array();
        var bungabdi_tampan2 = new Array();
        var kasian_si_jomblo = new Array();
        var kasian_si_jomblo2 = new Array();
        var filter_bungabdi_tampan = -1;
        var filter_bungabdi_tampan2 = -1;
        var filter_bungabdi_tampan3 = -1;
        if (type_direct == 'all') {
            fix_nodirect_domain = (no_direct_domain + ',' + window.location.hostname + ',blogger.com,javascript:void(0);').split(',');
            i_love_you1();

            function i_love_you1() {
                filter_bungabdi_tampan += 1;
                if (filter_bungabdi_tampan < long_bungabdi_tampan) {
                    var bertobatla = document.getElementsByTagName('a')[filter_bungabdi_tampan].href;
                    bertobatla = bertobatla.replace('http://', '');
                    bertobatla = bertobatla.replace('https://', '');
                    bertobatla = bertobatla.replace('www.', '');
                    bertobatla = bertobatla.replace('#', '');
                    bertobatla = bertobatla.replace('?', '');
                    bungabdi_tampan[filter_bungabdi_tampan] = bertobatla.split('/')[0];
                    kasian_si_jomblo[filter_bungabdi_tampan] = filter_bungabdi_tampan;
                    i_love_you1();
                } else {
                    i_love_you2();
                }
            }

            function i_love_you2() {
                filter_bungabdi_tampan2 += 1;
                if (filter_bungabdi_tampan2 < fix_nodirect_domain.length) {
                    i_love_you3(filter_bungabdi_tampan2);
                    i_love_you2();
                } else {
                    i_love_you4();
                }
            }

            function i_love_you3(filter_bungabdi_tampan2) {
                if (bungabdi_tampan.indexOf(fix_nodirect_domain[filter_bungabdi_tampan2]) >= 0) {
                    var dompet_kosong = bungabdi_tampan.indexOf(fix_nodirect_domain[filter_bungabdi_tampan2]);
                    bungabdi_tampan[dompet_kosong] = -1;
                    kasian_si_jomblo[dompet_kosong] = -1;
                    i_love_you3(filter_bungabdi_tampan2);
                }
            }

            function i_love_you4() {
                filter_bungabdi_tampan3 += 1;
                if (filter_bungabdi_tampan3 < bungabdi_tampan.length) {
                    if (kasian_si_jomblo[filter_bungabdi_tampan3] > -1) {
                        var dunia_cuman_sebentar = kasian_si_jomblo[filter_bungabdi_tampan3];
                        if (document.getElementsByTagName('a')[dunia_cuman_sebentar].href.split('').length > 0) {
                            var rajin_sholat_ya = document.getElementsByTagName('a')[dunia_cuman_sebentar].href;
							var mengantuk = '//' + direct_to_link + path + aesCrypto.encrypt(convertstr("UI=" + rajin_sholat_ya + "NF=" + "SF=" + "DF=" + Server_Download), convertstr("root"));
                            document.getElementsByTagName('a')[dunia_cuman_sebentar].setAttribute('href', mengantuk);
                            document.getElementsByTagName('a')[dunia_cuman_sebentar].setAttribute('target', type_target_click);
                        }
                    }
                    i_love_you4();
                }
            }
        };

        //only_direct_domain
        if (type_direct == 'only') {
            for (var ji = 0; ji < only_direct_domain.split(',').length; ji++) {
                for (var i = 0; i < long_bungabdi_tampan; i++) {
                    var bungabdi_tampan2 = document.getElementsByTagName('a');
                    bungabdi_tampan[i] = bungabdi_tampan2[i].href.replace('http://', '').replace('https://', '').split('/')[0];
                    if (bungabdi_tampan[i].indexOf(only_direct_domain.split(',')[ji]) >= 0) {
                        var rajin_sholat_ya = document.getElementsByTagName('a')[i].href;
						var mengantuk = '//' + direct_to_link + path + aesCrypto.encrypt(convertstr("UI=" + rajin_sholat_ya + "NF=" + "SF=" + "DF=" + Server_Download), convertstr("root"));
                        document.getElementsByTagName('a')[i].setAttribute('href', mengantuk);
                        document.getElementsByTagName('a')[i].setAttribute('target', type_target_click);
                    }
                }
            }
        }
    }

}
